/**
 * Links Uteis - Modernized Main Script
 * Handles data fetching, state management, and DOM rendering.
 */

const App = {
  state: {
    menuData: [],
    sitesData: {},
    currentCategory: 'Pesquisa' // Default category
  },

  elements: {
    menu: document.getElementById('menu'),
    sitesGrid: document.getElementById('sites-grid'),
    sitesContainer: document.getElementById('sites')
  },

  /**
   * Initialize the application
   */
  async init() {
    try {
      await this.fetchData();

      // Determine initial category (first one from menu if available)
      if (this.state.menuData.length > 0) {
        // defined in menu.json or fallback
        const firstCat = this.state.menuData[0].category;
        this.state.currentCategory = firstCat;
      }

      this.renderMenu();
      this.renderSites();

    } catch (error) {
      console.error('Failed to initialize app:', error);
      this.elements.sitesGrid.innerHTML = `<div style="color:red; padding:20px;">Error loading data. Check console.</div>`;
    }
  },

  /**
   * Fetch menu and sites data in parallel
   */
  async fetchData() {
    const [menuRes, sitesRes] = await Promise.all([
      fetch('assets/json/menu.json'),
      fetch('assets/json/sites.json')
    ]);

    if (!menuRes.ok || !sitesRes.ok) {
      throw new Error('Network response was not ok');
    }

    this.state.menuData = await menuRes.json();
    this.state.sitesData = await sitesRes.json();
  },

  /**
   * Render the Sidebar Menu
   */
  renderMenu() {
    const { menuData, currentCategory } = this.state;

    // Clear existing
    this.elements.menu.innerHTML = '';

    menuData.forEach(item => {
      const btn = document.createElement('button');
      btn.className = `menu-item ${item.category === currentCategory ? 'active' : ''}`;
      btn.onclick = () => this.handleCategoryChange(item.category);

      // Icon
      const img = document.createElement('img');
      img.src = `assets/img/png/menu/${item.icon}`;
      img.alt = item.category;
      img.width = 24;
      img.height = 24;

      // Label
      const span = document.createElement('span');
      span.textContent = item.category;

      btn.appendChild(img);
      btn.appendChild(span);
      this.elements.menu.appendChild(btn);
    });
  },

  /**
   * Render the Sites Layout
   */
  renderSites() {
    const { sitesData, currentCategory } = this.state;
    const sites = sitesData[currentCategory] || [];

    // Clear existing
    this.elements.sitesGrid.innerHTML = '';

    // Scroll to top
    this.elements.sitesContainer.scrollTop = 0;

    if (sites.length === 0) {
      this.elements.sitesGrid.innerHTML = '<p style="color:var(--text-secondary); padding:20px;">Nenhum site encontrado nesta categoria.</p>';
      return;
    }

    const fragment = document.createDocumentFragment();

    sites.forEach(site => {
      const card = document.createElement('a');
      card.className = 'site-card';
      card.href = site.href;
      card.target = site.target || '_blank';
      card.rel = 'noopener noreferrer'; // Security best practice

      const img = document.createElement('img');
      img.src = `assets/img/png/sites/${site.img}`;
      img.alt = site.title;
      img.loading = 'lazy'; // Performance optimization

      // Fallback for missing images
      img.onerror = () => { img.src = 'assets/img/ico/link.png'; };

      const title = document.createElement('div');
      title.className = 'site-card-title';
      title.textContent = site.title.replace(/\n/g, ' '); // Remove newlines from legacy data

      const desc = document.createElement('div');
      desc.className = 'site-card-desc';
      desc.textContent = site.description || '';
      desc.title = site.description || ''; // Tooltip on hover

      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(desc);
      fragment.appendChild(card);
    });

    this.elements.sitesGrid.appendChild(fragment);
  },

  /**
   * Handle switching categories
   */
  handleCategoryChange(newCategory) {
    if (this.state.currentCategory === newCategory) return;

    this.state.currentCategory = newCategory;

    // Re-render menu to update active state
    // (Optimization: could just toggle class, but re-render is cheap here)
    this.renderMenu();

    // Re-render sites
    this.renderSites();
  }
};

// Start the app
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
