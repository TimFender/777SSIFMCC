// Функция открытия модального окна
function openModal(modalClass) {
  var modal = document.querySelector("." + modalClass);
  modal.style.display = "block";
}

// Получаем все модальные окна с классом modal-store
var modals = document.querySelectorAll(".modal-store");

// Получаем все карточки товаров
var productCards = document.querySelectorAll(".product-card");

// Перебираем полученные карточки товаров
productCards.forEach(function (card, index) {
  // Добавляем обработчик события клика
  card.addEventListener("click", function () {
    // Получаем соответствующий модальный элемент
    var modal = modals[index];
    // Показываем модальное окно
    modal.style.display = "block";
  });
});

// Перебираем полученные модальные окна
modals.forEach(function (modal) {
  // Получаем кнопку закрытия модального окна в текущем модальном окне
  var closeBtn = modal.querySelector(".close");

  // Функция закрытия модального окна
  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  // Закрываем модальное окно, если пользователь щелкает за его пределами
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});
