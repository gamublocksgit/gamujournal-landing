/* Gamu Journal — landing page interactions
   Vanilla JS. Keep the bundle small. */

(function () {
  "use strict";

  const LANG_KEY = "gamu-journal-lang";
  const languages = window.LANGUAGES || [{ key: "en", label: "EN", name: "English", htmlLang: "en" }];
  const copy = window.COPY || {};
  const languageByKey = Object.fromEntries(languages.map((lang) => [lang.key, lang]));

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  const stripHtml = (value) => {
    const div = document.createElement("div");
    div.innerHTML = value || "";
    return div.textContent || "";
  };

  const getPath = (source, path) => path.split(".").reduce((acc, key) => acc && acc[key], source);

  const setText = (selector, value, root = document) => {
    const el = typeof selector === "string" ? $(selector, root) : selector;
    if (el && value != null) el.textContent = value;
  };

  const setHtml = (selector, value, root = document) => {
    const el = typeof selector === "string" ? $(selector, root) : selector;
    if (el && value != null) el.innerHTML = value;
  };

  const setMeta = (selector, value) => {
    const el = $(`meta[${selector}]`);
    if (el && value != null) el.setAttribute("content", value);
  };

  const normalizeLocale = (raw) => {
    if (!raw) return null;
    const normalized = String(raw).trim().replace("-", "_");
    const lower = normalized.toLowerCase();
    if (lower === "pt" || lower === "pt_br") return "pt_BR";
    const exact = languages.find((lang) => lang.key.toLowerCase() === lower);
    if (exact) return exact.key;
    const languageOnly = lower.split("_")[0];
    const match = languages.find((lang) => lang.key.toLowerCase() === languageOnly);
    return match ? match.key : null;
  };

  const resolveInitialLocale = () => {
    const params = new URLSearchParams(window.location.search);
    const fromQuery = normalizeLocale(params.get("lang"));
    if (fromQuery) return fromQuery;
    const browserLocales = navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language];
    for (const candidate of browserLocales) {
      const resolved = normalizeLocale(candidate);
      if (resolved) return resolved;
    }
    try {
      const fromStorage = normalizeLocale(localStorage.getItem(LANG_KEY));
      if (fromStorage) return fromStorage;
    } catch (_) {}
    return "en";
  };

  const setList = (nodes, values, render) => {
    nodes.forEach((node, index) => {
      if (values[index] == null) return;
      render(node, values[index], index);
    });
  };

  const setIconText = (node, value) => {
    const img = $("img", node);
    node.textContent = "";
    if (img) node.appendChild(img);
    node.append(document.createTextNode(value));
  };

  const setLinkWithSvg = (node, value) => {
    const svg = $("svg", node);
    node.textContent = value + " ";
    if (svg) node.appendChild(svg);
  };

  const setFaqButton = (node, value) => {
    const chev = $(".chev", node);
    node.textContent = value + " ";
    if (chev) node.appendChild(chev);
  };

  const closeFaqPanels = () => {
    $$(".faq-q").forEach((btn) => {
      btn.setAttribute("aria-expanded", "false");
      const ans = btn.nextElementSibling;
      if (ans) ans.style.maxHeight = "0px";
    });
  };

  const updateJsonLd = (t) => {
    const appJson = $("#app-jsonld");
    if (appJson) {
      appJson.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MobileApplication",
        name: "Gamu Journal",
        operatingSystem: "Android, iOS",
        applicationCategory: "LifestyleApplication",
        downloadUrl: [
          "https://play.google.com/store/apps/details?id=com.gamublocks.gamujournal",
          "https://apps.apple.com/us/app/gamu-journal-private-diary/id6759192253",
        ],
        offers: [
          { "@type": "Offer", price: "0", priceCurrency: "USD", name: t.meta.offerFree },
          { "@type": "Offer", name: t.meta.offerPro },
        ],
        publisher: { "@type": "Organization", name: "Gamu Blocks", url: "https://gamublocks.com" },
      }, null, 2);
    }

    const faqJson = $("#faq-jsonld");
    if (faqJson) {
      faqJson.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: t.faq.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: stripHtml(answer) },
        })),
      }, null, 2);
    }
  };

  const applyDataAttributes = (t) => {
    $$("[data-i18n]").forEach((el) => {
      const value = getPath(t, el.dataset.i18n);
      if (value != null) el.textContent = value;
    });
    $$("[data-i18n-attr]").forEach((el) => {
      el.dataset.i18nAttr.split(";").forEach((entry) => {
        const [attr, path] = entry.split(":");
        const value = getPath(t, path);
        if (attr && value != null) el.setAttribute(attr, value);
      });
    });
  };

  const renderLanguageSwitcher = (current) => {
    const select = $(".lang-switcher");
    if (!select) return;
    if (!select.options.length) {
      languages.forEach((lang) => {
        const option = document.createElement("option");
        option.value = lang.key;
        option.textContent = lang.name || lang.label;
        option.title = lang.name;
        option.lang = lang.htmlLang || lang.key;
        select.appendChild(option);
      });
    }
    select.value = current;
  };

  const renderLocale = (locale, persist = false) => {
    const lang = normalizeLocale(locale) || "en";
    const t = copy[lang] || copy.en;
    const meta = languageByKey[lang] || languageByKey.en;

    document.documentElement.lang = meta.htmlLang || lang;
    document.title = t.meta.title;
    setMeta('name="description"', t.meta.description);
    setMeta('property="og:title"', t.meta.ogTitle);
    setMeta('property="og:description"', t.meta.ogDescription);

    renderLanguageSwitcher(lang);
    applyDataAttributes(t);
    updateJsonLd(t);

    setList($$(".nav-links a"), t.nav, (node, value) => setText(node, value));
    setText(".nav-cta", t.navCta);

    setText(".hero-copy h1", t.hero.h1);
    setText(".hero-sub", t.hero.sub);
    setList($$(".hero-chips .chip"), t.hero.chips, setIconText);
    setLinkWithSvg($(".see-privacy"), t.hero.seePrivacy);
    setList($$(".hero-micro span:not(.sep)"), t.hero.micro, (node, value) => setText(node, value));
    setList($$(".hero-tag"), t.hero.tags, (node, value) => setHtml(node, value));
    setList($$(".hero-phones img"), t.hero.phoneAlts, (node, value) => node.setAttribute("alt", value));
    $(".hero-chips")?.setAttribute("aria-label", t.a11y.heroChips);
    $(".hero-ctas .store-link[data-store-badge='google_play']")?.setAttribute("aria-label", t.a11y.googlePlay);
    $(".hero-ctas .store-link[data-store-badge='app_store']")?.setAttribute("aria-label", t.a11y.appStore);
    $(".hero-ctas .store-link[data-store-badge='google_play'] img")?.setAttribute("alt", t.a11y.googlePlayBadge);
    $(".hero-ctas .store-link[data-store-badge='app_store'] img")?.setAttribute("alt", t.a11y.appStoreBadge);
    $(".hero-micro")?.setAttribute("aria-label", t.a11y.installTerms);
    $(".hero-phones")?.setAttribute("aria-label", t.a11y.heroPreview);

    setList($$(".trust-item"), t.trust, setIconText);

    setText(".showcase .section-header .eyebrow", t.showcase.eyebrow);
    setText(".showcase .section-header h2", t.showcase.h2);
    setText(".showcase .section-header p", t.showcase.p);
    setList($$(".showcase-card"), t.showcase.cards, (card, values, index) => {
      setText($(".num", card), values[0]);
      setText($("h4", card), values[1]);
      setText($("p", card), values[2]);
      $("img", card)?.setAttribute("alt", t.assets.showcaseAlts[index]);
    });

    setText(".features .section-header .eyebrow", t.features.eyebrow);
    setText(".features .section-header h2", t.features.h2);
    setText(".features .section-header p", t.features.p);
    setList($$(".feature"), t.features.cards, (card, values, index) => {
      setText($(".feat-tag", card), values.tag);
      setText($(".feat-copy h3", card), values.h3);
      setText($(".feat-copy p", card), values.p);
      setList($$(".feat-bullets li", card), values.bullets, (li, value) => setText(li, value));
      $("img", card)?.setAttribute("alt", t.assets.featureAlts[index]);
    });

    setText(".privacy .section-header .eyebrow", t.privacy.eyebrow);
    setHtml(".privacy .section-header h2", t.privacy.h2);
    setText(".privacy .section-header p", t.privacy.p);
    setList($$(".priv-card"), t.privacy.cards, (card, values) => {
      setText($(".label", card), values[0]);
      setText($("h4", card), values[1]);
      setHtml($("p", card), values[2]);
    });
    setHtml(".privacy-note", t.privacy.note);

    setText(".pricing .section-header .eyebrow", t.pricing.eyebrow);
    setText(".pricing .section-header h2", t.pricing.h2);
    setText(".pricing .section-header p", t.pricing.p);
    const priceCards = $$(".price-card");
    [
      [priceCards[0], t.pricing.free],
      [priceCards[1], t.pricing.pro],
    ].forEach(([card, values]) => {
      if (!card) return;
      setText($(".tier", card), values.tier);
      setText($(".price-head h3", card), values.name);
      setHtml($(".price", card), `${values.price}<small>${values.small}</small>`);
      setText($(".note", card), values.note);
      setList($$("ul li", card), values.bullets, (li, value) => setText(li, value));
      setText($(".btn-full", card), values.cta);
      setText($(".price-foot small", card), values.foot);
    });

    setText(".faq .section-header .eyebrow", t.faqHeader.eyebrow);
    setText(".faq .section-header h2", t.faqHeader.h2);
    setList($$(".faq-item"), t.faq, (item, values) => {
      setFaqButton($(".faq-q", item), values[0]);
      setHtml($(".faq-a-inner", item), values[1]);
    });
    closeFaqPanels();

    setText(".footer-brand p", t.footer.tagline);
    const footerCols = $$(".footer-col");
    setText($("h4", footerCols[0]), t.footer.product);
    setText($("h4", footerCols[1]), t.footer.studio);
    setText($("h4", footerCols[2]), t.footer.get);
    setList($$("a", footerCols[0]), t.nav, (node, value) => setText(node, value));
    const studioLinks = $$("a", footerCols[1]);
    setText(studioLinks[1], t.footer.baby);
    setText(studioLinks[2], t.footer.neko);
    setText(studioLinks[3], t.footer.gronu);
    setText(studioLinks[4], t.footer.gnit);
    setHtml(".credits", t.footer.credits);

    setText(".sticky-cta strong", t.sticky.title);
    setText(".sticky-cta .copy span", t.sticky.sub);
    setLinkWithSvg($(".sticky-cta .btn-mini"), t.sticky.cta);

    if (persist) {
      try { localStorage.setItem(LANG_KEY, lang); } catch (_) {}
    }
  };

  const initialLocale = resolveInitialLocale();
  renderLocale(initialLocale, !!new URLSearchParams(window.location.search).get("lang"));

  $(".lang-switcher")?.addEventListener("change", (event) => {
    renderLocale(event.target.value, true);
  });

  // ---- FAQ accordion ----
  const qs = $$(".faq-q");
  qs.forEach((btn) => {
    btn.addEventListener("click", () => {
      const open = btn.getAttribute("aria-expanded") === "true";
      qs.forEach((other) => {
        if (other !== btn) {
          other.setAttribute("aria-expanded", "false");
          const ans = other.nextElementSibling;
          if (ans) ans.style.maxHeight = "0px";
        }
      });
      btn.setAttribute("aria-expanded", open ? "false" : "true");
      const ans = btn.nextElementSibling;
      if (ans) ans.style.maxHeight = open ? "0px" : ans.scrollHeight + "px";
    });
  });

  // ---- Sticky CTA ----
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

  // ---- Reveal on scroll ----
  const io = ("IntersectionObserver" in window)
    ? new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" })
    : null;

  $$(".reveal").forEach((el) => {
    if (io) io.observe(el);
    else el.classList.add("in");
  });

  // ---- Smooth scroll for in-page anchors ----
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

  // ---- Analytics stub (privacy-friendly) ----
  const track = (event, payload) => {
    if (window.parent) {
      try { window.parent.postMessage({ type: "__analytics", event, payload }, "*"); } catch (_) {}
    }
  };
  window.__track = track;

  $$("[data-track]").forEach((el) => {
    el.addEventListener("click", () => track("cta_click", { id: el.dataset.track }));
  });
  $$("[data-store-badge]").forEach((el) => {
    el.addEventListener("click", () => track("store_badge_click", { store: el.dataset.storeBadge }));
  });
  $$(".showcase-card").forEach((card, index) => {
    card.addEventListener("click", () => {
      track("screenshot_engagement", {
        index: index + 1,
        title: card.querySelector("h4")?.textContent.trim() || "",
      });
    });
  });

  const showcaseRail = $(".showcase-rail");
  if (showcaseRail) {
    let trackedShowcaseScroll = false;
    showcaseRail.addEventListener("scroll", () => {
      if (!trackedShowcaseScroll) {
        trackedShowcaseScroll = true;
        track("screenshot_engagement", { action: "scroll" });
      }
    }, { passive: true });
  }

  $$(".faq-q").forEach((q) => {
    q.addEventListener("click", () => {
      if (q.getAttribute("aria-expanded") === "true") {
        track("faq_open", { q: q.textContent.trim().slice(0, 80) });
      }
    });
  });

  let maxDepth = 0;
  const depths = [25, 50, 75, 100];
  const sent = new Set();
  window.addEventListener("scroll", () => {
    const h = document.documentElement;
    const pct = ((h.scrollTop + window.innerHeight) / h.scrollHeight) * 100;
    if (pct > maxDepth) maxDepth = pct;
    depths.forEach((d) => {
      if (maxDepth >= d && !sent.has(d)) {
        sent.add(d);
        track("scroll_depth", { pct: d });
      }
    });
  }, { passive: true });
})();
