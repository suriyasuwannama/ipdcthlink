/**
 * CTH IPD Link Portal Application Logic
 * โรงพยาบาลจอมทอง - ห้องยาผู้ป่วยใน
 */

// Key Storage
const STORAGE_KEY_LINKS = 'cth_ipd_portal_links_v1';
const STORAGE_KEY_CATEGORIES = 'cth_ipd_portal_categories_v1';
const STORAGE_KEY_ADMIN = 'cth_ipd_portal_admin_mode';

// Preset Lucide Icon SVG Definitions
const PRESET_ICONS = {
  Hospital: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 6v4"/><path d="M14 14h-4"/><path d="M14 18h-4"/><path d="M14 10h-4"/><path d="M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18Z"/><path d="M10 6h4"/><path d="M6 22h12"/></svg>`,
  Pill: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/></svg>`,
  FileText: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>`,
  ClipboardCheck: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/></svg>`,
  ShieldAlert: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>`,
  BookOpen: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
  AlertTriangle: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>`,
  Boxes: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l6 3.6a2 2 0 0 0 2.06 0l6-3.6a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71l-6-3.6a2 2 0 0 0-2.06 0z"/><path d="m12 22 7.5-4.5"/><path d="m12 22-7.5-4.5"/><path d="m12 13 7.5-4.5"/><path d="m12 13-7.5-4.5"/><path d="M7 4.5 12 1.5l5 3"/><path d="M21.03 5.92A2 2 0 0 0 22 7.63v3.24a2 2 0 0 1-.97 1.71l-6 3.6a2 2 0 0 1-2.06 0l-6-3.6a2 2 0 0 1-.97-1.71V7.63a2 2 0 0 1 .97-1.71l6-3.6a2 2 0 0 1 2.06 0z"/></svg>`,
  Archive: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="M10 12h4"/></svg>`,
  BarChart3: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><rect width="4" height="7" x="7" y="10" rx="1"/><rect width="4" height="12" x="15" y="5" rx="1"/></svg>`,
  HeartPulse: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/></svg>`,
  MessageSquare: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
  Globe: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
  Stethoscope: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .2.3"/><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/><circle cx="20" cy="10" r="2"/></svg>`,
  Syringe: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 2 4 4"/><path d="m17 7 3-3"/><path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"/><path d="m9 11 4 4"/><path d="m5 19-3 3"/><path d="m14 4 6 6"/></svg>`,
  Thermometer: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/></svg>`,
  User: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  Folder: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L8.6 3.3A2 2 0 0 0 6.9 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>`,
  Star: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  Link: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`
};

// Global App State
let appState = {
  categories: [],
  links: [],
  searchQuery: '',
  activeCategoryFilter: 'all', // 'all', 'pinned', or categoryId
  isAdminMode: false,
  editingLinkId: null,
  deletingLinkId: null,
  uploadedImageBase64: null
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  loadData();
  setupEventListeners();
  renderApp();
});

// Load Data from LocalStorage or Defaults
function loadData() {
  try {
    const savedCategories = localStorage.getItem(STORAGE_KEY_CATEGORIES);
    const savedLinks = localStorage.getItem(STORAGE_KEY_LINKS);
    const savedAdmin = localStorage.getItem(STORAGE_KEY_ADMIN);

    appState.categories = (savedCategories && savedCategories !== 'undefined') ? JSON.parse(savedCategories) : [...DEFAULT_CATEGORIES];
    appState.links = (savedLinks && savedLinks !== 'undefined') ? JSON.parse(savedLinks) : [...DEFAULT_LINKS];
    appState.isAdminMode = savedAdmin === 'true';
    
    // ตรวจสอบกรณีได้ค่าเป็นอาเรย์ว่าง ให้ดึงค่าเริ่มต้นกลับมา
    if (!appState.categories || appState.categories.length === 0) appState.categories = [...DEFAULT_CATEGORIES];
    if (!appState.links || appState.links.length === 0) appState.links = [...DEFAULT_LINKS];
  } catch (error) {
    console.error("Storage Error: ", error);
    // หากเกิด Error จาก Browser หรือข้อมูลเสีย ให้ใช้ค่า Default 
    appState.categories = [...DEFAULT_CATEGORIES];
    appState.links = [...DEFAULT_LINKS];
    appState.isAdminMode = false;
  }
}

// Save Data to LocalStorage
function saveData() {
  localStorage.setItem(STORAGE_KEY_CATEGORIES, JSON.stringify(appState.categories));
  localStorage.setItem(STORAGE_KEY_LINKS, JSON.stringify(appState.links));
  localStorage.setItem(STORAGE_KEY_ADMIN, appState.isAdminMode);
}

// Setup Main Event Listeners
function setupEventListeners() {
  // Search Input
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      appState.searchQuery = e.target.value.trim().toLowerCase();
      renderApp();
    });
  }

  // Clear Search
  const clearSearchBtn = document.getElementById('clear-search-btn');
  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      appState.searchQuery = '';
      renderApp();
    });
  }

  // Admin Mode Toggle
  const adminToggle = document.getElementById('admin-toggle-btn');
  if (adminToggle) {
    adminToggle.addEventListener('click', toggleAdminMode);
  }

  // Add Link Modal Triggers
  const addLinkBtn = document.getElementById('add-link-btn');
  if (addLinkBtn) {
    addLinkBtn.addEventListener('click', () => openLinkModal());
  }

  // Modal Close Buttons
  document.getElementById('link-modal-close')?.addEventListener('click', closeLinkModal);
  document.getElementById('link-modal-cancel')?.addEventListener('click', closeLinkModal);
  document.getElementById('delete-modal-close')?.addEventListener('click', closeDeleteModal);
  document.getElementById('delete-modal-cancel')?.addEventListener('click', closeDeleteModal);
  document.getElementById('delete-modal-confirm')?.addEventListener('click', confirmDeleteLink);

  // Link Modal Icon Type Switches
  const iconTypePreset = document.getElementById('icon-type-preset');
  const iconTypeUrl = document.getElementById('icon-type-url');
  const iconTypeFile = document.getElementById('icon-type-file');

  iconTypePreset?.addEventListener('change', updateIconInputVisibility);
  iconTypeUrl?.addEventListener('change', updateIconInputVisibility);
  iconTypeFile?.addEventListener('change', updateIconInputVisibility);

  // File upload input change
  const iconFileInput = document.getElementById('icon-file-input');
  iconFileInput?.addEventListener('change', handleFileUpload);

  // Link Form Submit
  const linkForm = document.getElementById('link-form');
  linkForm?.addEventListener('submit', handleSaveLink);

  // Import / Export JSON
  document.getElementById('export-json-btn')?.addEventListener('click', exportJSONBackup);
  document.getElementById('import-json-btn')?.addEventListener('click', () => {
    document.getElementById('import-file-input')?.click();
  });
  document.getElementById('import-file-input')?.addEventListener('change', importJSONBackup);

  // Reset Default Data
  document.getElementById('reset-default-btn')?.addEventListener('click', resetToDefaultData);
}

// Toggle Admin Edit Mode
function toggleAdminMode() {
  appState.isAdminMode = !appState.isAdminMode;
  saveData();
  showToast(appState.isAdminMode ? '⚙️ เปิดโหมดจัดการลิงก์ (Admin Mode)' : '🟢 กลับสู่โหมดใช้งานทั่วไป', 'info');
  renderApp();
}

// Render Entire UI
function renderApp() {
  renderAdminUI();
  renderCategoryFilterPills();
  renderLinkGrid();
}

// Update Header / Admin Bar UI
function renderAdminUI() {
  const adminToggleBtn = document.getElementById('admin-toggle-btn');
  const adminBadge = document.getElementById('admin-badge');
  const addLinkBtnHeader = document.getElementById('add-link-btn');

  if (adminToggleBtn && adminBadge) {
    if (appState.isAdminMode) {
      adminToggleBtn.classList.remove('bg-teal-700', 'hover:bg-teal-800');
      adminToggleBtn.classList.add('bg-amber-600', 'hover:bg-amber-700', 'ring-2', 'ring-amber-300');
      adminToggleBtn.innerHTML = `⚙️ ปิดโหมดแก้ไข`;
      adminBadge.classList.remove('hidden');
    } else {
      adminToggleBtn.classList.remove('bg-amber-600', 'hover:bg-amber-700', 'ring-2', 'ring-amber-300');
      adminToggleBtn.classList.add('bg-teal-700', 'hover:bg-teal-800');
      adminToggleBtn.innerHTML = `⚙️ โหมดจัดการลิงก์`;
      adminBadge.classList.add('hidden');
    }
  }

  if (addLinkBtnHeader) {
    if (appState.isAdminMode) {
      addLinkBtnHeader.classList.remove('hidden');
    } else {
      addLinkBtnHeader.classList.add('hidden');
    }
  }
}

// Render Category Filter Pills
function renderCategoryFilterPills() {
  const container = document.getElementById('category-filter-container');
  if (!container) return;

  const totalLinks = appState.links.length;
  const pinnedLinks = appState.links.filter(l => l.isPinned).length;

  let html = `
    <button onclick="setCategoryFilter('all')" class="px-4 py-2 rounded-full font-medium text-sm transition-all shadow-sm ${appState.activeCategoryFilter === 'all' ? 'bg-teal-700 text-white shadow-md' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'}">
      ทั้งหมด (${totalLinks})
    </button>
    <button onclick="setCategoryFilter('pinned')" class="px-4 py-2 rounded-full font-medium text-sm transition-all shadow-sm flex items-center gap-1.5 ${appState.activeCategoryFilter === 'pinned' ? 'bg-amber-500 text-white shadow-md' : 'bg-white text-amber-700 hover:bg-amber-50 border border-amber-200'}">
      ⭐ ปักหมุด (${pinnedLinks})
    </button>
  `;

  appState.categories.forEach(cat => {
    const catLinkCount = appState.links.filter(l => l.categoryId === cat.id).length;
    const isActive = appState.activeCategoryFilter === cat.id;
    html += `
      <button onclick="setCategoryFilter('${cat.id}')" class="px-4 py-2 rounded-full font-medium text-sm transition-all shadow-sm ${isActive ? 'bg-teal-700 text-white shadow-md' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'}">
        ${cat.name} (${catLinkCount})
      </button>
    `;
  });

  container.innerHTML = html;
}

function setCategoryFilter(filterId) {
  appState.activeCategoryFilter = filterId;
  renderApp();
}

// Render Main Link Grid & Category Sections
function renderLinkGrid() {
  const container = document.getElementById('main-content-area');
  if (!container) return;

  // Filter links based on Search Query & Category Filter
  let filtered = appState.links.filter(link => {
    // Search match
    if (appState.searchQuery) {
      const q = appState.searchQuery;
      const titleMatch = link.title.toLowerCase().includes(q);
      const descMatch = (link.description || '').toLowerCase().includes(q);
      const badgeMatch = (link.badge || '').toLowerCase().includes(q);
      if (!titleMatch && !descMatch && !badgeMatch) return false;
    }

    // Category filter match
    if (appState.activeCategoryFilter === 'pinned') {
      return link.isPinned;
    } else if (appState.activeCategoryFilter !== 'all') {
      return link.categoryId === appState.activeCategoryFilter;
    }
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="bg-white rounded-2xl p-12 text-center shadow-sm border border-slate-200 my-8">
        <div class="w-20 h-20 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
          🔍
        </div>
        <h3 class="text-xl font-bold text-slate-700 mb-2">ไม่พบรายการลิงก์ที่ค้นหา</h3>
        <p class="text-slate-500 mb-6">ลองเปลี่ยนคำค้นหา หรือเลือกหมวดหมู่อื่น</p>
        <button onclick="clearSearchAndFilters()" class="px-5 py-2.5 bg-teal-700 hover:bg-teal-800 text-white rounded-xl font-medium transition-all shadow-sm">
          แสดงลิงก์ทั้งหมด
        </button>
      </div>
    `;
    return;
  }

  let html = '';

  // Case 1: If filtering by Pinned or specific category, render single grid
  if (appState.activeCategoryFilter !== 'all' || appState.searchQuery) {
    const filterTitle = appState.activeCategoryFilter === 'pinned' 
      ? '⭐ รายการที่ปักหมุดไว้ (Pinned Links)'
      : (appState.categories.find(c => c.id === appState.activeCategoryFilter)?.name || 'ผลการค้นหา');

    html += `
      <div class="mb-8">
        <div class="flex items-center justify-between mb-4 border-b border-slate-200 pb-3">
          <h2 class="text-xl font-bold text-slate-800 flex items-center gap-2">
            ${filterTitle}
            <span class="text-sm font-normal bg-teal-100 text-teal-800 px-2.5 py-0.5 rounded-full">${filtered.length} รายการ</span>
          </h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          ${filtered.map(link => renderLinkCardHTML(link)).join('')}
        </div>
      </div>
    `;
  } else {
    // Case 2: Render by Categories

    // Section 1: Pinned Links Header if any pinned
    const pinnedList = filtered.filter(l => l.isPinned);
    if (pinnedList.length > 0) {
      html += `
        <div class="mb-10 bg-amber-50/60 p-6 rounded-2xl border border-amber-200/70">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-lg font-bold text-amber-900 flex items-center gap-2">
              <span class="text-xl">⭐</span> รายการที่ปักหมุดใช้งานบ่อย (Pinned Links)
            </h2>
            <span class="text-xs font-semibold bg-amber-200 text-amber-900 px-2.5 py-1 rounded-full">${pinnedList.length} รายการ</span>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            ${pinnedList.map(link => renderLinkCardHTML(link)).join('')}
          </div>
        </div>
      `;
    }

    // Section 2: Group by Categories
    appState.categories.forEach(category => {
      const categoryLinks = filtered.filter(l => l.categoryId === category.id);
      if (categoryLinks.length === 0) return;

      const catIconSvg = PRESET_ICONS[category.icon] || PRESET_ICONS.Folder;

      html += `
        <div class="mb-10">
          <div class="flex items-center justify-between mb-4 border-b border-slate-200 pb-3">
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center p-2">
                ${catIconSvg}
              </div>
              <div>
                <h2 class="text-lg font-bold text-slate-800">${category.name}</h2>
                ${category.description ? `<p class="text-xs text-slate-500">${category.description}</p>` : ''}
              </div>
            </div>
            <span class="text-xs font-semibold bg-slate-200 text-slate-700 px-2.5 py-1 rounded-full">${categoryLinks.length} รายการ</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            ${categoryLinks.map(link => renderLinkCardHTML(link)).join('')}
          </div>
        </div>
      `;
    });
  }

  container.innerHTML = html;
}

// Generate Card HTML for a single link
function renderLinkCardHTML(link) {
  const accentClass = link.color ? `accent-${link.color}` : 'accent-teal';
  
  // Icon rendering logic (Preset SVG vs Custom URL vs Base64)
  let iconContentHTML = '';
  if (link.iconType === 'url' && link.iconValue) {
    iconContentHTML = `<img src="${escapeHTML(link.iconValue)}" alt="${escapeHTML(link.title)}" class="w-11 h-11 object-contain rounded" onerror="this.onerror=null; this.src='https://via.placeholder.com/64?text=Icon';" />`;
  } else if (link.iconType === 'file' && link.iconValue) {
    iconContentHTML = `<img src="${link.iconValue}" alt="${escapeHTML(link.title)}" class="w-11 h-11 object-contain rounded" />`;
  } else {
    // Preset
    const iconSvg = PRESET_ICONS[link.iconValue] || PRESET_ICONS.Pill;
    iconContentHTML = iconSvg;
  }

  return `
    <div class="bg-white rounded-2xl border border-slate-200 p-5 card-shadow card-hover ${accentClass} flex flex-col justify-between relative group ${appState.isAdminMode ? 'edit-mode-active' : ''}">
      
      <!-- Card Header: Badge & Quick Pin -->
      <div class="flex items-start justify-between gap-2 mb-3">
        <span class="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200 truncate max-w-[120px]">
          ${escapeHTML(link.badge || 'IPD')}
        </span>
        
        <div class="flex items-center gap-1">
          <button onclick="togglePinLink('${link.id}', event)" title="${link.isPinned ? 'ยกเลิกการปักหมุด' : 'ปักหมุดไว้ด้านบน'}" class="p-1.5 rounded-lg transition-colors ${link.isPinned ? 'text-amber-500 bg-amber-50 hover:bg-amber-100' : 'text-slate-300 hover:text-amber-400 hover:bg-slate-100'}">
            ★
          </button>

          ${appState.isAdminMode ? `
            <button onclick="openLinkModal('${link.id}', event)" title="แก้ไขลิงก์" class="p-1.5 rounded-lg text-slate-500 hover:text-teal-700 hover:bg-teal-50 transition-colors">
              ✏️
            </button>
            <button onclick="openDeleteModal('${link.id}', event)" title="ลบลิงก์" class="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors">
              🗑️
            </button>
          ` : ''}
        </div>
      </div>

      <!-- Main Clickable Area -->
      <a href="${escapeHTML(link.url)}" target="${link.target || '_blank'}" rel="noopener noreferrer" class="flex flex-col items-center text-center flex-1 my-2 group-hover:opacity-95">
        <!-- Big Icon Box -->
        <div class="big-icon-box icon-bg rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 shadow-sm">
          ${iconContentHTML}
        </div>

        <!-- Title -->
        <h3 class="font-bold text-slate-800 text-base leading-snug mb-1 line-clamp-2 group-hover:text-teal-700 transition-colors">
          ${escapeHTML(link.title)}
        </h3>

        <!-- Description -->
        ${link.description ? `
          <p class="text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed">
            ${escapeHTML(link.description)}
          </p>
        ` : ''}
      </a>

      <!-- Footer Open Link -->
      <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
        <span class="truncate max-w-[140px]" title="${escapeHTML(link.url)}">${cleanURLDisplay(link.url)}</span>
        <span class="text-teal-600 font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
          เปิดลิงก์ ➔
        </span>
      </div>
    </div>
  `;
}

// Toggle Pinned Status
function togglePinLink(linkId, event) {
  if (event) event.stopPropagation();
  const link = appState.links.find(l => l.id === linkId);
  if (link) {
    link.isPinned = !link.isPinned;
    saveData();
    showToast(link.isPinned ? `⭐ ปักหมุด "${link.title}" แล้ว` : `ยกเลิกการปักหมุด "${link.title}"`, 'success');
    renderApp();
  }
}

// Open Add / Edit Link Modal
function openLinkModal(linkId = null, event = null) {
  if (event) event.stopPropagation();
  appState.editingLinkId = linkId;
  appState.uploadedImageBase64 = null;

  const modal = document.getElementById('link-modal');
  const modalTitle = document.getElementById('link-modal-title');
  const categorySelect = document.getElementById('modal-link-category');
  const presetSelect = document.getElementById('modal-preset-select');

  // Populate category options
  if (categorySelect) {
    categorySelect.innerHTML = appState.categories.map(c => `<option value="${c.id}">${c.name}</option>`).join('');
  }

  // Populate preset icon options grid
  renderPresetIconPicker();

  if (linkId) {
    const link = appState.links.find(l => l.id === linkId);
    if (!link) return;

    modalTitle.textContent = '✏️ แก้ไขข้อมูลลิงก์';
    document.getElementById('modal-link-title').value = link.title || '';
    document.getElementById('modal-link-url').value = link.url || '';
    document.getElementById('modal-link-category').value = link.categoryId || appState.categories[0]?.id;
    document.getElementById('modal-link-badge').value = link.badge || '';
    document.getElementById('modal-link-description').value = link.description || '';
    document.getElementById('modal-link-color').value = link.color || 'teal';
    document.getElementById('modal-link-target').value = link.target || '_blank';
    document.getElementById('modal-link-pinned').checked = !!link.isPinned;

    // Set Icon type
    if (link.iconType === 'url') {
      document.getElementById('icon-type-url').checked = true;
      document.getElementById('modal-icon-url').value = link.iconValue || '';
    } else if (link.iconType === 'file') {
      document.getElementById('icon-type-file').checked = true;
      appState.uploadedImageBase64 = link.iconValue;
      showImagePreview(link.iconValue);
    } else {
      document.getElementById('icon-type-preset').checked = true;
      selectPresetIcon(link.iconValue || 'Pill');
    }
  } else {
    modalTitle.textContent = '➕ เพิ่มลิงก์ใหม่';
    document.getElementById('link-form').reset();
    document.getElementById('icon-type-preset').checked = true;
    selectPresetIcon('Pill');
    document.getElementById('modal-link-color').value = 'emerald';
  }

  updateIconInputVisibility();
  modal.classList.remove('hidden');
}

function closeLinkModal() {
  document.getElementById('link-modal')?.classList.add('hidden');
  appState.editingLinkId = null;
  appState.uploadedImageBase64 = null;
}

// Render Preset Icon Grid Picker in Modal
function renderPresetIconPicker() {
  const container = document.getElementById('preset-icon-grid');
  if (!container) return;

  let html = '';
  Object.keys(PRESET_ICONS).forEach(iconKey => {
    html += `
      <button type="button" onclick="selectPresetIcon('${iconKey}')" id="preset-btn-${iconKey}" class="preset-icon-item p-2 rounded-xl border border-slate-200 hover:border-teal-500 hover:bg-teal-50 flex items-center justify-center transition-all">
        <div class="w-6 h-6 text-slate-700">
          ${PRESET_ICONS[iconKey]}
        </div>
      </button>
    `;
  });
  container.innerHTML = html;
}

function selectPresetIcon(iconKey) {
  document.querySelectorAll('.preset-icon-item').forEach(el => {
    el.classList.remove('bg-teal-100', 'border-teal-600', 'ring-2', 'ring-teal-400');
  });
  const selectedBtn = document.getElementById(`preset-btn-${iconKey}`);
  if (selectedBtn) {
    selectedBtn.classList.add('bg-teal-100', 'border-teal-600', 'ring-2', 'ring-teal-400');
  }
  document.getElementById('modal-selected-preset').value = iconKey;
}

function updateIconInputVisibility() {
  const isPreset = document.getElementById('icon-type-preset')?.checked;
  const isUrl = document.getElementById('icon-type-url')?.checked;
  const isFile = document.getElementById('icon-type-file')?.checked;

  document.getElementById('icon-preset-wrapper')?.classList.toggle('hidden', !isPreset);
  document.getElementById('icon-url-wrapper')?.classList.toggle('hidden', !isUrl);
  document.getElementById('icon-file-wrapper')?.classList.toggle('hidden', !isFile);
}

function handleFileUpload(e) {
  const file = e.target.files[0];
  if (!file) return;

  if (!file.type.startsWith('image/')) {
    showToast('โปรดเลือกไฟล์รูปภาพเท่านั้น (PNG, JPG, SVG, WebP)', 'error');
    return;
  }

  const reader = new FileReader();
  reader.onload = (event) => {
    appState.uploadedImageBase64 = event.target.result;
    showImagePreview(event.target.result);
  };
  reader.readAsDataURL(file);
}

function showImagePreview(base64Src) {
  const preview = document.getElementById('file-preview-img');
  const previewBox = document.getElementById('file-preview-box');
  if (preview && previewBox) {
    preview.src = base64Src;
    previewBox.classList.remove('hidden');
  }
}

// Handle Form Submission for Adding / Editing Link
function handleSaveLink(e) {
  e.preventDefault();

  const title = document.getElementById('modal-link-title').value.trim();
  const url = document.getElementById('modal-link-url').value.trim();
  const categoryId = document.getElementById('modal-link-category').value;
  const badge = document.getElementById('modal-link-badge').value.trim();
  const description = document.getElementById('modal-link-description').value.trim();
  const color = document.getElementById('modal-link-color').value;
  const target = document.getElementById('modal-link-target').value;
  const isPinned = document.getElementById('modal-link-pinned').checked;

  if (!title || !url) {
    showToast('กรุณากรอกชื่อระบบและ URL ให้ครบถ้วน', 'error');
    return;
  }

  // Determine icon type & value
  let iconType = 'preset';
  let iconValue = 'Pill';

  if (document.getElementById('icon-type-url')?.checked) {
    iconType = 'url';
    iconValue = document.getElementById('modal-icon-url').value.trim() || 'https://via.placeholder.com/64';
  } else if (document.getElementById('icon-type-file')?.checked) {
    iconType = 'file';
    iconValue = appState.uploadedImageBase64 || 'https://via.placeholder.com/64';
  } else {
    iconType = 'preset';
    iconValue = document.getElementById('modal-selected-preset').value || 'Pill';
  }

  if (appState.editingLinkId) {
    // Edit existing
    const index = appState.links.findIndex(l => l.id === appState.editingLinkId);
    if (index !== -1) {
      appState.links[index] = {
        ...appState.links[index],
        title,
        url,
        categoryId,
        badge,
        description,
        color,
        target,
        isPinned,
        iconType,
        iconValue
      };
      showToast(`บันทึกการแก้ไข "${title}" เรียบร้อยแล้ว`, 'success');
    }
  } else {
    // Add new
    const newLink = {
      id: 'link-' + Date.now(),
      title,
      url,
      categoryId,
      badge: badge || 'IPD',
      description,
      color,
      target,
      isPinned,
      iconType,
      iconValue
    };
    appState.links.unshift(newLink);
    showToast(`เพิ่มลิงก์ใหม่ "${title}" เรียบร้อยแล้ว`, 'success');
  }

  saveData();
  closeLinkModal();
  renderApp();
}

// Delete Link Modal
function openDeleteModal(linkId, event) {
  if (event) event.stopPropagation();
  const link = appState.links.find(l => l.id === linkId);
  if (!link) return;

  appState.deletingLinkId = linkId;
  const modal = document.getElementById('delete-modal');
  const linkNameEl = document.getElementById('delete-link-name');

  if (linkNameEl) linkNameEl.textContent = link.title;
  modal?.classList.remove('hidden');
}

function closeDeleteModal() {
  document.getElementById('delete-modal')?.classList.add('hidden');
  appState.deletingLinkId = null;
}

function confirmDeleteLink() {
  if (!appState.deletingLinkId) return;
  const link = appState.links.find(l => l.id === appState.deletingLinkId);
  const title = link ? link.title : '';

  appState.links = appState.links.filter(l => l.id !== appState.deletingLinkId);
  saveData();
  closeDeleteModal();
  showToast(`ลบลิงก์ "${title}" เรียบร้อยแล้ว`, 'info');
  renderApp();
}

// Export Backup JSON
function exportJSONBackup() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({
    version: '1.0',
    exportDate: new Date().toISOString(),
    categories: appState.categories,
    links: appState.links
  }, null, 2));
  
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `cth-ipd-links-backup-${new Date().toISOString().slice(0,10)}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();

  showToast('ส่งออกไฟล์สำรองข้อมูล (JSON) สำเร็จ', 'success');
}

// Import Backup JSON
function importJSONBackup(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const parsed = JSON.parse(event.target.result);
      if (parsed.links && Array.isArray(parsed.links)) {
        appState.links = parsed.links;
        if (parsed.categories && Array.isArray(parsed.categories)) {
          appState.categories = parsed.categories;
        }
        saveData();
        showToast('นำเข้าข้อมูลลิงก์สำเร็จแล้ว!', 'success');
        renderApp();
      } else {
        showToast('รูปแบบไฟล์ JSON ไม่ถูกต้อง', 'error');
      }
    } catch (err) {
      showToast('ไม่สามารถอ่านไฟล์ JSON ได้', 'error');
    }
  };
  reader.readAsText(file);
}

// Reset to Default Initial Data
function resetToDefaultData() {
  if (confirm('คุณต้องการรีเซ็ตข้อมูลลิงก์ทั้งหมดกลับเป็นค่าเริ่มต้นใช่หรือไม่?')) {
    appState.categories = [...DEFAULT_CATEGORIES];
    appState.links = [...DEFAULT_LINKS];
    saveData();
    showToast('คืนค่าข้อมูลลิงก์เริ่มต้นสำเร็จ', 'info');
    renderApp();
  }
}

// Toast Notifications Helper
function showToast(message, type = 'info') {
  const toastContainer = document.getElementById('toast-container');
  if (!toastContainer) return;

  const toast = document.createElement('div');
  const bgClass = type === 'success' ? 'bg-emerald-600' : type === 'error' ? 'bg-rose-600' : 'bg-slate-800';

  toast.className = `${bgClass} text-white px-5 py-3 rounded-xl shadow-lg flex items-center gap-3 text-sm font-medium transition-all transform translate-y-2 opacity-0 duration-300 mb-2`;
  toast.innerHTML = `
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);

  // Trigger animation
  setTimeout(() => {
    toast.classList.remove('translate-y-2', 'opacity-0');
  }, 10);

  // Auto remove after 3s
  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Helper Utilities
function clearSearchAndFilters() {
  appState.searchQuery = '';
  appState.activeCategoryFilter = 'all';
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = '';
  renderApp();
}

function cleanURLDisplay(url) {
  try {
    const u = new URL(url);
    return u.hostname + (u.pathname !== '/' ? u.pathname : '');
  } catch (e) {
    return url;
  }
}

function escapeHTML(str) {
  if (!str) return '';
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}
