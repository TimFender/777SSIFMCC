// Функція відкриття модального вікна при кліку на кнопку "Add to Cart"
function openModal(modalClass) {
  var modal = document.querySelector("." + modalClass);
  modal.style.display = "block";
}

// Отримуємо всі модальні вікна з класом .modal-store
var modals = document.querySelectorAll(".modal-store");

// Отримуємо всі карточки товарів
var productCards = document.querySelectorAll(".product-card");

// Перебираємо отримані карточки товарів
productCards.forEach(function (card, index) {
  // Додаємо обробник події кліку до карточки товару
  card.addEventListener("click", function (event) {
    // Перевіряємо, чи клікнуто саме на кнопку "Add to Cart"
    if (event.target.classList.contains("back-button")) {
      // Отримуємо відповідне модальне вікно
      var modal = modals[index];
      // Показуємо модальне вікно
      openModal(modal.classList[1]); // Викликаємо функцію відкриття модального вікна з класом
    }
  });
});

// Перебираємо отримані модальні вікна
modals.forEach(function (modal) {
  // Отримуємо кнопку закриття модального вікна в поточному модальному вікні
  var closeBtn = modal.querySelector(".close");

  // Функція закриття модального вікна
  closeBtn.onclick = function () {
    modal.style.display = "none";
  };
});

// Закриваємо модальне вікно, якщо користувач клікає за його межами
window.onclick = function (event) {
  modals.forEach(function (modal) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
};
