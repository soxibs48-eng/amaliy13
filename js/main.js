/**
 * Payload CMS Landing Page Interaction Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initEditorTabs();
  initApiTester();
  initFieldShowcase();
  initShowcaseFilter();
  initCliCopyButtons();
  initHeaderScrollEffect();
});

/* --------------------------------------------------------------------------
 * Mobile Menu Toggle
 * ----------------------------------------------------------------------- */
function initMobileMenu() {
  const toggleBtn = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('mobile-open');
    toggleBtn.setAttribute('aria-expanded', String(isOpen));
  });

  // Close when clicking nav links
  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('mobile-open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('mobile-open')) {
      navMenu.classList.remove('mobile-open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

/* --------------------------------------------------------------------------
 * Hero Code Editor Tab Switcher
 * ----------------------------------------------------------------------- */
function initEditorTabs() {
  const tabButtons = document.querySelectorAll('.editor-tabs .tab-btn');
  const tabPanes = document.querySelectorAll('.editor-body .tab-pane');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');

      tabButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      tabPanes.forEach(pane => pane.classList.remove('active'));

      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const targetPane = document.getElementById(targetId);
      if (targetPane) targetPane.classList.add('active');
    });
  });
}

/* --------------------------------------------------------------------------
 * Interactive Architecture API Tester
 * ----------------------------------------------------------------------- */
function initApiTester() {
  const apiButtons = document.querySelectorAll('.api-btn');
  const apiUrl = document.getElementById('activeApiUrl');
  const apiStatus = document.getElementById('activeApiStatus');
  const jsonViewer = document.getElementById('apiResponseViewer');

  if (!apiButtons.length || !apiUrl || !apiStatus || !jsonViewer) return;

  const responses = {
    posts: {
      url: 'https://api.yourdomain.com/api/posts?depth=2&limit=2',
      status: '200 OK (14ms)',
      data: {
        docs: [
          {
            id: '64ef819a2c',
            title: 'Scaling Modern Content with Payload & Next.js',
            slug: 'scaling-modern-content',
            author: { id: 'usr_9918', name: 'Alex Mercer', role: 'Lead Architect' },
            status: 'published',
            publishedAt: '2026-10-24T10:30:00.000Z',
            tags: ['Architecture', 'Headless', 'TypeScript']
          },
          {
            id: '64ef819b4f',
            title: 'Why Code-First Schemas Beat Point-and-Click GUIs',
            slug: 'code-first-schemas',
            author: { id: 'usr_7712', name: 'Elena Rostova', role: 'Staff Engineer' },
            status: 'published',
            publishedAt: '2026-10-25T16:15:00.000Z',
            tags: ['Engineering', 'DX']
          }
        ],
        totalDocs: 24,
        limit: 2,
        totalPages: 12,
        page: 1,
        pagingCounter: 1,
        hasPrevPage: false,
        hasNextPage: true
      }
    },
    users: {
      url: 'https://api.yourdomain.com/api/users?limit=2',
      status: '200 OK (8ms)',
      data: {
        docs: [
          {
            id: 'usr_9918',
            email: 'alex@payloadcms.com',
            name: 'Alex Mercer',
            roles: ['admin', 'editor'],
            createdAt: '2025-01-12T08:00:00.000Z'
          },
          {
            id: 'usr_7712',
            email: 'elena@payloadcms.com',
            name: 'Elena Rostova',
            roles: ['developer'],
            createdAt: '2025-03-19T14:20:00.000Z'
          }
        ],
        totalDocs: 8,
        limit: 2,
        totalPages: 4,
        page: 1
      }
    },
    local: {
      url: 'payload.find({ collection: "posts", where: { status: { equals: "published" } } })',
      status: 'In-Memory Query (< 1ms)',
      data: {
        docs: [
          {
            id: '64ef819a2c',
            title: 'Direct Node Process Execution',
            mode: 'Local API (Direct Database Access)',
            bypassesHTTP: true,
            latency: '0.42ms'
          }
        ],
        totalDocs: 1
      }
    }
  };

  apiButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      apiButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const endpoint = btn.getAttribute('data-endpoint');
      const item = responses[endpoint];

      if (item) {
        apiUrl.textContent = item.url;
        apiStatus.textContent = item.status;
        jsonViewer.innerHTML = `<code>${JSON.stringify(item.data, null, 2)}</code>`;
      }
    });
  });
}

/* --------------------------------------------------------------------------
 * Field Types Showcase Switcher
 * ----------------------------------------------------------------------- */
function initFieldShowcase() {
  const pills = document.querySelectorAll('.field-pill');
  const codeSnippet = document.getElementById('fieldCodeSnippet');
  const adminMock = document.getElementById('fieldAdminMock');

  if (!pills.length || !codeSnippet || !adminMock) return;

  const fieldData = {
    blocks: {
      code: `{\n  name: 'layout',\n  type: 'blocks',\n  required: true,\n  blocks: [\n    HeroBlock,\n    CallToActionBlock,\n    ContentSliderBlock,\n    MediaGridBlock,\n  ],\n}`,
      mockHtml: `
        <div class="mock-field-group">
          <label class="mock-label">Layout Blocks <span class="required">*</span></label>
          <div class="mock-blocks-container">
            <div class="mock-block-item">
              <span class="mock-block-tag">01. Hero Section</span>
              <span class="mock-block-status">Configured</span>
            </div>
            <div class="mock-block-item">
              <span class="mock-block-tag">02. Media Gallery</span>
              <span class="mock-block-status">4 Items</span>
            </div>
            <button class="mock-add-block-btn">+ Add Block</button>
          </div>
        </div>
      `
    },
    relationship: {
      code: `{\n  name: 'author',\n  type: 'relationship',\n  relationTo: 'users',\n  required: true,\n  hasMany: false,\n  admin: {\n    position: 'sidebar',\n  },\n}`,
      mockHtml: `
        <div class="mock-field-group">
          <label class="mock-label">Author <span class="required">*</span></label>
          <div class="mock-block-item">
            <span class="mock-block-tag">&bull; Alex Mercer (Lead Architect)</span>
            <span class="mock-block-status">Linked</span>
          </div>
          <p style="font-size:0.75rem; color:#71717a; margin-top:4px;">Relational key linked to 'users' collection.</p>
        </div>
      `
    },
    richtext: {
      code: `{\n  name: 'bodyContent',\n  type: 'richText',\n  admin: {\n    elements: ['h2', 'h3', 'link', 'upload', 'blockquote'],\n    leaves: ['bold', 'italic', 'underline', 'code'],\n  },\n}`,
      mockHtml: `
        <div class="mock-field-group">
          <label class="mock-label">Article Body</label>
          <div style="border:1px solid #282828; border-radius:6px; padding:12px; background:#181818;">
            <div style="display:flex; gap:8px; border-bottom:1px solid #282828; padding-bottom:8px; margin-bottom:8px; font-size:0.8rem; color:#a1a1aa;">
              <span><b>B</b></span> <span><i>I</i></span> <span><u>U</u></span> <span>H2</span> <span>H3</span> <span>&ldquo;&rdquo;</span> <span>Link</span>
            </div>
            <p style="font-size:0.85rem; color:#e4e4e7;">Payload's rich text editor is built on Slate & Lexical with full AST output.</p>
          </div>
        </div>
      `
    },
    upload: {
      code: `{\n  name: 'featuredImage',\n  type: 'upload',\n  relationTo: 'media',\n  filterOptions: {\n    mimeType: { contains: 'image' },\n  },\n}`,
      mockHtml: `
        <div class="mock-field-group">
          <label class="mock-label">Featured Image</label>
          <div style="border:1px dashed #3f3f46; border-radius:6px; padding:20px; text-align:center; background:#141414;">
            <span style="font-size:0.85rem; color:#a1a1aa;">Drag & drop image or browse files</span>
            <div style="margin-top:6px; font-size:0.75rem; color:#25c2a0;">Auto-generates focal point & responsive thumbnails</div>
          </div>
        </div>
      `
    },
    array: {
      code: `{\n  name: 'faqList',\n  type: 'array',\n  fields: [\n    { name: 'question', type: 'text', required: true },\n    { name: 'answer', type: 'textarea', required: true },\n  ],\n}`,
      mockHtml: `
        <div class="mock-field-group">
          <label class="mock-label">Frequently Asked Questions</label>
          <div class="mock-blocks-container">
            <div class="mock-block-item">
              <span class="mock-block-tag">01. Can I use custom Express routes?</span>
              <span class="mock-block-status">Item</span>
            </div>
            <div class="mock-block-item">
              <span class="mock-block-tag">02. Is it 100% self-hostable?</span>
              <span class="mock-block-status">Item</span>
            </div>
            <button class="mock-add-block-btn">+ Add Row</button>
          </div>
        </div>
      `
    }
  };

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const fieldKey = pill.getAttribute('data-field');
      const data = fieldData[fieldKey];

      if (data) {
        codeSnippet.innerHTML = `<code>${data.code}</code>`;
        adminMock.innerHTML = data.mockHtml;
      }
    });
  });
}

/* --------------------------------------------------------------------------
 * Showcase Filter Buttons
 * ----------------------------------------------------------------------- */
function initShowcaseFilter() {
  const filterBtns = document.querySelectorAll('.showcase-filter-btn');
  const cards = document.querySelectorAll('.showcase-card');

  if (!filterBtns.length || !cards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
 * Copy to Clipboard Handlers
 * ----------------------------------------------------------------------- */
function initCliCopyButtons() {
  const heroBox = document.getElementById('copyCliHero');
  const ctaBox = document.getElementById('copyCliCta');
  const toast = document.getElementById('toastNotification');

  const copyCommand = (box, cmd) => {
    navigator.clipboard.writeText(cmd).then(() => {
      box.classList.add('copied');
      showToast('Command copied: ' + cmd);
      setTimeout(() => {
        box.classList.remove('copied');
      }, 2500);
    }).catch(() => {
      showToast('Copied: ' + cmd);
    });
  };

  if (heroBox) {
    heroBox.addEventListener('click', () => copyCommand(heroBox, 'npx create-payload-app@latest'));
    heroBox.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        copyCommand(heroBox, 'npx create-payload-app@latest');
      }
    });
  }

  if (ctaBox) {
    ctaBox.addEventListener('click', () => copyCommand(ctaBox, 'npx create-payload-app@latest'));
    ctaBox.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        copyCommand(ctaBox, 'npx create-payload-app@latest');
      }
    });
  }

  let toastTimer;
  function showToast(msg) {
    if (!toast) return;
    const msgEl = toast.querySelector('.toast-message');
    if (msgEl) msgEl.textContent = msg;

    toast.classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('visible');
    }, 2800);
  }
}

/* --------------------------------------------------------------------------
 * Header Scroll Polish
 * ----------------------------------------------------------------------- */
function initHeaderScrollEffect() {
  const header = document.getElementById('header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.style.borderColor = 'rgba(255, 255, 255, 0.12)';
      header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.7)';
    } else {
      header.style.borderColor = 'var(--border-subtle)';
      header.style.boxShadow = 'none';
    }
  }, { passive: true });
}
