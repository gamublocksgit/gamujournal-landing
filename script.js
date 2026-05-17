/* Gamu Journal — landing page interactions
   Vanilla JS. Keep the bundle small. */

(function () {
  'use strict';

  // ---- FAQ accordion ----
  const qs = document.querySelectorAll('.faq-q');
  qs.forEach((btn) => {
    btn.addEventListener('click', () => {
      const open = btn.getAttribute('aria-expanded') === 'true';
      // collapse siblings (single-open behavior)
      qs.forEach((other) => {
        if (other !== btn) {
          other.setAttribute('aria-expanded', 'false');
          const ans = other.nextElementSibling;
          if (ans) ans.style.maxHeight = '0px';
        }
      });
      btn.setAttribute('aria-expanded', open ? 'false' : 'true');
      const ans = btn.nextElementSibling;
      if (ans) {
        if (open) {
          ans.style.maxHeight = '0px';
        } else {
          ans.style.maxHeight = ans.scrollHeight + 'px';
        }
      }
    });
  });

  // ---- Sticky CTA ----
  const sticky = document.querySelector('.sticky-cta');
  if (sticky) {
    let armed = false;
    const onScroll = () => {
      const isMobile = window.innerWidth < 900;
      const shouldShow = isMobile && window.scrollY > 600;
      if (shouldShow !== armed) {
        armed = shouldShow;
        sticky.classList.toggle('visible', shouldShow);
        document.body.classList.toggle('with-sticky', shouldShow);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();
  }

  // ---- Reveal on scroll ----
  const io = ('IntersectionObserver' in window)
    ? new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' })
    : null;

  document.querySelectorAll('.reveal').forEach((el) => {
    if (io) io.observe(el);
    else el.classList.add('in');
  });

  // ---- Smooth scroll for in-page anchors ----
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ---- Analytics stub (privacy-friendly) ----
  const track = (event, payload) => {
    if (window.parent) {
      try { window.parent.postMessage({ type: '__analytics', event, payload }, '*'); } catch (_) {}
    }
    // console.debug('[analytics]', event, payload);
  };
  window.__track = track;

  // CTA clicks
  document.querySelectorAll('[data-track]').forEach((el) => {
    el.addEventListener('click', () => track('cta_click', { id: el.dataset.track }));
  });
  // Store badge clicks
  document.querySelectorAll('[data-store-badge]').forEach((el) => {
    el.addEventListener('click', () => track('store_badge_click', { store: el.dataset.storeBadge }));
  });
  // Screenshot engagement
  document.querySelectorAll('.showcase-card').forEach((card, index) => {
    card.addEventListener('click', () => {
      track('screenshot_engagement', {
        index: index + 1,
        title: card.querySelector('h4')?.textContent.trim() || ''
      });
    });
  });
  const showcaseRail = document.querySelector('.showcase-rail');
  if (showcaseRail) {
    let trackedShowcaseScroll = false;
    showcaseRail.addEventListener('scroll', () => {
      if (!trackedShowcaseScroll) {
        trackedShowcaseScroll = true;
        track('screenshot_engagement', { action: 'scroll' });
      }
    }, { passive: true });
  }
  // FAQ opens
  document.querySelectorAll('.faq-q').forEach((q) => {
    q.addEventListener('click', () => {
      if (q.getAttribute('aria-expanded') === 'true') {
        track('faq_open', { q: q.textContent.trim().slice(0, 80) });
      }
    });
  });
  // Scroll depth
  let maxDepth = 0;
  const depths = [25, 50, 75, 100];
  const sent = new Set();
  window.addEventListener('scroll', () => {
    const h = document.documentElement;
    const pct = (h.scrollTop + window.innerHeight) / h.scrollHeight * 100;
    if (pct > maxDepth) maxDepth = pct;
    depths.forEach((d) => {
      if (maxDepth >= d && !sent.has(d)) {
        sent.add(d);
        track('scroll_depth', { pct: d });
      }
    });
  }, { passive: true });
})();
