(() => {
  const business = window.BUSINESS;
  if (business) {
    document.querySelectorAll('a[href^="tel:"]').forEach(link => { link.href = `tel:${business.phone}`; });
    document.querySelectorAll('a[href^="https://wa.me/"]').forEach(link => {
      const url = new URL(link.href);
      url.pathname = `/${business.whatsapp}`;
      link.href = url.toString();
    });
    document.querySelectorAll('a[href*="google.com/maps"]').forEach(link => {
      link.href = business.googleMapsUrl || business.mapSearchUrl;
    });
    document.querySelectorAll('a[href^="https://www.instagram.com/"]').forEach(link => { link.href = business.instagram; });
    document.querySelectorAll(".header-phone b, .footer-number, .topline-inner > a, .contact-panel a[href^='tel:']").forEach(node => { node.textContent = business.phoneDisplay; });
    document.querySelectorAll(".contact-actions a[href^='tel:']").forEach(node => { node.textContent = `↗ ${business.phoneDisplay}`; });
    document.querySelectorAll(".topline-inner > span:nth-child(2) b").forEach(node => { node.textContent = business.hours.replace("Her gün ", ""); });
    document.querySelectorAll(".footer-contact > span:last-of-type, .contact-panel p:last-of-type").forEach(node => { node.textContent = business.hours; });
    document.querySelectorAll(".quick-grid > div:last-child small").forEach(node => { node.textContent = business.hours; });
    document.querySelectorAll(".area-address small, .footer-contact > span:first-of-type").forEach(node => { node.textContent = business.address; });
    document.querySelectorAll(".content-section p").forEach(node => {
      if (node.textContent.trim().startsWith("Akçaalan Mahallesi,")) node.textContent = business.address;
    });
  }
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#primary-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      toggle.setAttribute("aria-label", open ? "Menüyü aç" : "Menüyü kapat");
      nav.classList.toggle("is-open", !open);
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
    }));
  }
  document.querySelectorAll(".faq-list details").forEach(item => {
    item.addEventListener("toggle", () => {
      if (item.open) document.querySelectorAll(".faq-list details").forEach(other => { if (other !== item) other.open = false; });
    });
  });
  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();
  const requestForm = document.querySelector("#service-request");
  if (requestForm) requestForm.addEventListener("submit", event => {
    event.preventDefault();
    const form = new FormData(requestForm);
    const text = [
      "Merhaba Dost Teknik, servis talebim var.",
      `Ad Soyad: ${form.get("name")}`,
      `Telefon: ${form.get("phone")}`,
      `Hizmet: ${form.get("service")}`,
      `Bölge: ${form.get("area")}`,
      `Mesaj: ${form.get("message") || "Belirtilmedi"}`
    ].join("\n");
    const number = business ? business.whatsapp : "905348895148";
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  });
})();
