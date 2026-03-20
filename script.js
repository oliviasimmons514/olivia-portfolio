const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const toggleBtn = document.querySelector(".menu-toggle");
const nav = document.getElementById("site-nav");

if (toggleBtn && nav) {
  toggleBtn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggleBtn.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggleBtn.setAttribute("aria-expanded", "false");
    });
  });
}

const sections = document.querySelectorAll(".section-reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      }
    });
  },
  { threshold: 0.18 }
);

sections.forEach((section) => observer.observe(section));

const DB_NAME = "portfolioMediaDB";
const DB_VERSION = 1;
const STORE_NAME = "media";

const mediaInput = document.getElementById("mediaInput");
const uploadTrigger = document.getElementById("uploadTrigger");
const uploader = document.getElementById("uploader");
const mediaGrid = document.getElementById("mediaGrid");
const clearMediaButton = document.getElementById("clearMedia");

function openMediaDB() {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "id", autoIncrement: true });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function runDBAction(mode, action) {
  return openMediaDB().then(
    (db) =>
      new Promise((resolve, reject) => {
        const transaction = db.transaction(STORE_NAME, mode);
        const store = transaction.objectStore(STORE_NAME);
        action(store, resolve, reject);
        transaction.onerror = () => reject(transaction.error);
      })
  );
}

function getAllMedia() {
  return runDBAction("readonly", (store, resolve) => {
    const request = store.getAll();
    request.onsuccess = () => resolve(request.result || []);
  });
}

function addMediaItem(file) {
  return runDBAction("readwrite", (store, resolve) => {
    const request = store.add({
      fileName: file.name,
      mimeType: file.type,
      blob: file,
      createdAt: Date.now(),
    });
    request.onsuccess = () => resolve(request.result);
  });
}

function deleteMediaItem(id) {
  return runDBAction("readwrite", (store, resolve) => {
    const request = store.delete(id);
    request.onsuccess = () => resolve();
  });
}

function clearMediaItems() {
  return runDBAction("readwrite", (store, resolve) => {
    const request = store.clear();
    request.onsuccess = () => resolve();
  });
}

function renderMediaItems(items) {
  if (!mediaGrid) return;

  mediaGrid.innerHTML = "";

  if (!items.length) {
    mediaGrid.innerHTML = '<p class="media-empty">No files yet. Upload images or reel videos to populate your portfolio library.</p>';
    return;
  }

  const sorted = [...items].sort((a, b) => b.createdAt - a.createdAt);

  sorted.forEach((item) => {
    const card = document.createElement("article");
    card.className = "media-card";

    const previewUrl = URL.createObjectURL(item.blob);
    const isVideo = item.mimeType.startsWith("video/");
    const preview = isVideo ? document.createElement("video") : document.createElement("img");

    if (isVideo) {
      preview.src = previewUrl;
      preview.controls = true;
      preview.preload = "metadata";
    } else {
      preview.src = previewUrl;
      preview.alt = item.fileName;
      preview.loading = "lazy";
    }

    const meta = document.createElement("div");
    meta.className = "media-meta";

    const name = document.createElement("p");
    name.className = "media-name";
    name.textContent = item.fileName;

    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "media-delete";
    remove.textContent = "Delete";
    remove.addEventListener("click", async () => {
      await deleteMediaItem(item.id);
      await loadAndRenderMedia();
    });

    meta.append(name, remove);
    card.append(preview, meta);
    mediaGrid.append(card);
  });
}

async function loadAndRenderMedia() {
  try {
    const items = await getAllMedia();
    renderMediaItems(items);
  } catch (error) {
    if (mediaGrid) {
      mediaGrid.innerHTML = '<p class="media-empty">Unable to load media library in this browser.</p>';
    }
  }
}

async function handleFiles(fileList) {
  const files = [...fileList].filter(
    (file) => file.type.startsWith("image/") || file.type.startsWith("video/")
  );

  for (const file of files) {
    await addMediaItem(file);
  }

  await loadAndRenderMedia();
}

if (mediaInput && uploadTrigger && uploader && mediaGrid && clearMediaButton) {
  uploadTrigger.addEventListener("click", () => mediaInput.click());

  mediaInput.addEventListener("change", async (event) => {
    const { files } = event.target;
    if (!files || !files.length) return;
    await handleFiles(files);
    mediaInput.value = "";
  });

  ["dragenter", "dragover"].forEach((eventName) => {
    uploader.addEventListener(eventName, (event) => {
      event.preventDefault();
      uploader.classList.add("is-dragover");
    });
  });

  ["dragleave", "drop"].forEach((eventName) => {
    uploader.addEventListener(eventName, (event) => {
      event.preventDefault();
      uploader.classList.remove("is-dragover");
    });
  });

  uploader.addEventListener("drop", async (event) => {
    const files = event.dataTransfer?.files;
    if (!files || !files.length) return;
    await handleFiles(files);
  });

  clearMediaButton.addEventListener("click", async () => {
    await clearMediaItems();
    await loadAndRenderMedia();
  });

  loadAndRenderMedia();
}
