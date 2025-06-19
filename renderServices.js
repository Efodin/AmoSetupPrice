document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("services-list");

  const createServiceHTML = (service) => {
    const optionsHTML = service.options.map(option => `
      <div class="checkbox__item">
        <input class="checkbox__input" type="checkbox" value="${option.value}">
        <label class="checkbox__label">${option.label}</label>
      </div>
    `).join('');

    return `
      <section class="price-section">
        <h4 class="price-section__title">${service.title}</h4>
        <p class="price-section__description">${service.description}</p>
        <div class="checkbox">${optionsHTML}</div>
      </section>
    `;
  };

  container.innerHTML = window.services.map(createServiceHTML).join('');

  if (typeof initCalculator === 'function') {
    initCalculator();
  }
});
