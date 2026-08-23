/* ==========================================================================
   LA GROUP MEDIA - INTERACTIVE PRESENTATION ENGINE
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const slides = Array.from(document.querySelectorAll('.slide'));
  const totalSlides = slides.length;
  let currentSlideIndex = 0;

  const currentSlideNumEl = document.getElementById('currentSlideNum');
  const totalSlidesNumEl = document.getElementById('totalSlidesNum');
  const progressBarFillEl = document.getElementById('progressBarFill');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const navTabs = document.querySelectorAll('.nav-tab');

  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const fullscreenBtn = document.getElementById('fullscreenBtn');
  const overviewBtn = document.getElementById('overviewBtn');
  const searchBtn = document.getElementById('searchBtn');

  const searchModal = document.getElementById('searchModal');
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');

  const overviewModal = document.getElementById('overviewModal');
  const overviewGrid = document.getElementById('overviewGrid');

  // Initialize Counter
  if (totalSlidesNumEl) totalSlidesNumEl.textContent = totalSlides;

  // 1. Core Slide Navigation
  window.goToSlide = function(index) {
    if (index < 0 || index >= totalSlides) return;

    slides.forEach((slide, idx) => {
      if (idx === index) {
        slide.classList.add('active');
        slide.scrollTop = 0; // Reset scroll to top
      } else {
        slide.classList.remove('active');
      }
    });

    currentSlideIndex = index;

    // Update Counter & Progress Bar
    if (currentSlideNumEl) currentSlideNumEl.textContent = currentSlideIndex + 1;
    if (progressBarFillEl) {
      const progressPercent = ((currentSlideIndex + 1) / totalSlides) * 100;
      progressBarFillEl.style.width = `${progressPercent}%`;
    }

    // Update Navbar Active Tab
    navTabs.forEach(tab => {
      const slideTarget = parseInt(tab.getAttribute('data-slide'), 10);
      if (slideTarget === currentSlideIndex) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    // Close any open modals
    closeAllModals();
  };

  function nextSlide() {
    if (currentSlideIndex < totalSlides - 1) {
      goToSlide(currentSlideIndex + 1);
    }
  }

  function prevSlide() {
    if (currentSlideIndex > 0) {
      goToSlide(currentSlideIndex - 1);
    }
  }

  // Button Event Listeners
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);
  if (nextBtn) nextBtn.addEventListener('click', nextSlide);

  navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetSlide = parseInt(tab.getAttribute('data-slide'), 10);
      goToSlide(targetSlide);
    });
  });

  // 2. Interactive Sub-Tab Switcher inside Division Slides
  window.switchSubTab = function(btnElement, targetPanelId) {
    const slideContainer = btnElement.closest('.slide');
    if (!slideContainer) return;

    // Remove active class from all sibling buttons in this slide
    const buttons = slideContainer.querySelectorAll('.dtab-btn');
    buttons.forEach(b => b.classList.remove('active'));

    // Hide all tab panels in this slide
    const panels = slideContainer.querySelectorAll('.tab-panel');
    panels.forEach(p => p.classList.remove('active'));

    // Activate selected button & panel
    btnElement.classList.add('active');
    const targetPanel = slideContainer.querySelector(`#${targetPanelId}`);
    if (targetPanel) {
      targetPanel.classList.add('active');
    }
  };

  // 3. Keyboard Shortcuts
  document.addEventListener('keydown', (e) => {
    // Ignore keyboard events when typing in search input
    if (document.activeElement === searchInput) {
      if (e.key === 'Escape') closeAllModals();
      return;
    }

    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
      case 'PageDown':
      case ' ':
        nextSlide();
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
      case 'PageUp':
        prevSlide();
        break;
      case 'Home':
        goToSlide(0);
        break;
      case 'End':
        goToSlide(totalSlides - 1);
        break;
      case 'o':
      case 'O':
        toggleOverviewModal();
        break;
      case 'f':
      case 'F':
        toggleFullscreen();
        break;
      case 'k':
      case 'K':
        if (e.ctrlKey || e.metaKey) {
          e.preventDefault();
          toggleSearchModal();
        }
        break;
      case 'Escape':
        closeAllModals();
        break;
    }
  });

  // 4. Touch Swipe Gestures for Mobile
  let touchStartX = 0;
  let touchEndX = 0;

  document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, false);

  document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, false);

  function handleSwipe() {
    const swipeThreshold = 50;
    if (touchEndX < touchStartX - swipeThreshold) {
      nextSlide(); // Swipe left
    }
    if (touchEndX > touchStartX + swipeThreshold) {
      prevSlide(); // Swipe right
    }
  }

  // 5. Modals Management
  function closeAllModals() {
    if (searchModal) searchModal.classList.remove('active');
    if (overviewModal) overviewModal.classList.remove('active');
  }

  window.toggleSearchModal = function() {
    const isActive = searchModal.classList.contains('active');
    closeAllModals();
    if (!isActive) {
      searchModal.classList.add('active');
      setTimeout(() => searchInput.focus(), 100);
    }
  };

  window.toggleOverviewModal = function() {
    const isActive = overviewModal.classList.contains('active');
    closeAllModals();
    if (!isActive) {
      buildOverviewGrid();
      overviewModal.classList.add('active');
    }
  };

  if (searchBtn) searchBtn.addEventListener('click', toggleSearchModal);
  if (overviewBtn) overviewBtn.addEventListener('click', toggleOverviewModal);

  // 6. Overview Grid Generator
  function buildOverviewGrid() {
    if (!overviewGrid) return;
    overviewGrid.innerHTML = '';

    slides.forEach((slide, index) => {
      const card = document.createElement('div');
      card.className = 'overview-card';

      let titleText = `Slide ${index + 1}`;
      const headerEl = slide.querySelector('h1, h2');
      if (headerEl) {
        titleText = headerEl.innerText.replace('\n', ' ');
      }

      let textSnippet = slide.innerText.substring(0, 100) + '...';

      card.innerHTML = `
        <h5>#0${index + 1} &bull; ${titleText}</h5>
        <p>${textSnippet}</p>
      `;

      card.addEventListener('click', () => {
        goToSlide(index);
      });

      overviewGrid.appendChild(card);
    });
  }

  // 7. Search Feature
  if (searchInput && searchResults) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      searchResults.innerHTML = '';

      if (!query) {
        searchResults.innerHTML = '<p class="search-placeholder">Nhập từ khóa để tra cứu vị trí slide và thông tin tương ứng.</p>';
        return;
      }

      let matches = 0;
      slides.forEach((slide, index) => {
        const textContent = slide.innerText.toLowerCase();
        if (textContent.includes(query)) {
          matches++;
          const headerEl = slide.querySelector('h1, h2');
          const title = headerEl ? headerEl.innerText : `Slide ${index + 1}`;

          const resultItem = document.createElement('div');
          resultItem.className = 'search-result-item';
          resultItem.innerHTML = `
            <strong>Slide ${index + 1}: ${title}</strong>
            <p>Tìm thấy kết quả khớp trong slide này...</p>
          `;

          resultItem.addEventListener('click', () => {
            goToSlide(index);
          });

          searchResults.appendChild(resultItem);
        }
      });

      if (matches === 0) {
        searchResults.innerHTML = '<p class="search-placeholder">Không tìm thấy thông tin phù hợp với từ khóa.</p>';
      }
    });
  }

  // 8. Theme Switcher (Dark/Light)
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
      const isLight = document.body.classList.contains('light-mode');
      themeToggleBtn.innerHTML = isLight ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    });
  }

  // 9. Fullscreen Toggle
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.log(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  if (fullscreenBtn) fullscreenBtn.addEventListener('click', toggleFullscreen);

  // Initial setup call
  goToSlide(0);
});
