/* Gamu Journal landing — client interactions.
 * Pure DOM behavior. No i18n (server-rendered).
 */
(function () {
  "use strict";

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  // FAQ accordion
  const qs = $$(".faq-q");
  qs.forEach((btn) => {
    const ans = btn.nextElementSibling;
    if (ans) ans.style.maxHeight = "0px";
    btn.addEventListener("click", () => {
      const open = btn.getAttribute("aria-expanded") === "true";
      qs.forEach((other) => {
        if (other !== btn) {
          other.setAttribute("aria-expanded", "false");
          const oAns = other.nextElementSibling;
          if (oAns) oAns.style.maxHeight = "0px";
        }
      });
      btn.setAttribute("aria-expanded", open ? "false" : "true");
      if (ans) ans.style.maxHeight = open ? "0px" : ans.scrollHeight + "px";
    });
  });

  // Sticky CTA
  const sticky = $(".sticky-cta");
  if (sticky) {
    let armed = false;
    const onScroll = () => {
      const isMobile = window.innerWidth < 900;
      const shouldShow = isMobile && window.scrollY > 600;
      if (shouldShow !== armed) {
        armed = shouldShow;
        sticky.classList.toggle("visible", shouldShow);
        document.body.classList.toggle("with-sticky", shouldShow);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
  }

  // Reveal on scroll
  const io =
    "IntersectionObserver" in window
      ? new IntersectionObserver(
          (entries) => {
            entries.forEach((e) => {
              if (e.isIntersecting) {
                e.target.classList.add("in");
                io.unobserve(e.target);
              }
            });
          },
          { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
        )
      : null;

  $$(".reveal").forEach((el) => {
    if (io) io.observe(el);
    else el.classList.add("in");
  });

  // Smooth scroll for in-page anchors
  $$('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const target = $(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
})();
