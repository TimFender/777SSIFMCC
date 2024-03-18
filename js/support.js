document.addEventListener("DOMContentLoaded", function () {
  // Находим кнопки "Add to Cart"
  var addToCartButtons = document.querySelectorAll(".back-button");

  // Перебираем найденные кнопки "Add to Cart"
  addToCartButtons.forEach(function (button) {
    // Добавляем обработчик события клика только для кнопок "Add to Cart"
    button.addEventListener("click", function (event) {
      // Получаем значение атрибута data-modal текущей кнопки
      var modalClass = button.getAttribute("data-modal");
      // Показываем модальное окно
      openModal(modalClass);
      // Останавливаем всплытие события, чтобы оно не передавалось родительским элементам
      event.stopPropagation();
    });
  });

  // Функция открытия модального окна
  function openModal(modalClass) {
    console.log("Открытие модального окна:", modalClass); // Добавляем вывод в консоль
    var modal = document.querySelector("." + modalClass);
    modal.style.display = "block";
  }

  // Перебираем найденные модальные окна
  var modals = document.querySelectorAll(".modal-store");
  modals.forEach(function (modal) {
    // Находим кнопку закрытия модального окна в текущем модальном окне
    var closeBtn = modal.querySelector(".close");

    // Добавляем обработчик события клика для закрытия модального окна
    closeBtn.addEventListener("click", function () {
      console.log("Закрытие модального окна"); // Добавляем вывод в консоль
      modal.style.display = "none";
    });
  });

  // Закрываем модальное окно, если пользователь кликнул за его пределами
  window.addEventListener("click", function (event) {
    modals.forEach(function (modal) {
      if (event.target == modal) {
        console.log("Клик вне модального окна"); // Добавляем вывод в консоль
        modal.style.display = "none";
      }
    });
  });
});
