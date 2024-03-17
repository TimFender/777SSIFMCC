// Отримуємо посилання на модальне вікно, зображення у модальному вікні та всі зображення в галереї
var modal = document.getElementById("modal");
var modalImg = document.getElementById("modalImg");
var galleryItems = document.querySelectorAll(".gallery-item img");

// Встановлюємо початкове значення індексу зображення
var slideIndex = 0;

// Функція для відображення зображення з поточним індексом
function showSlides() {
  var slides = document.querySelectorAll(".gallery-item img");
  // Обробляємо випадки переповнення масиву
  if (slideIndex >= slides.length) {
    slideIndex = 0; // Повертаємось на початок, якщо досягнуто кінця масиву
  }
  if (slideIndex < 0) {
    slideIndex = slides.length - 1; // Переходимо до останнього зображення, якщо досягнуто початок масиву
  }

  // Застосовуємо ефект плавного переходу між зображеннями
  modalImg.classList.remove("fade-in"); // Видаляємо клас з ефектом
  setTimeout(function () {
    modalImg.src = slides[slideIndex].src; // Встановлюємо нове зображення
    setTimeout(function () {
      modalImg.classList.add("fade-in"); // Додаємо клас з ефектом
    }, 100); // Подождите некоторое время после установки нового изображения
  }, 100);
}

// Функція для перелистування зображень вперед або назад
function plusSlides(n) {
  slideIndex += n; // Збільшуємо або зменшуємо індекс зображення на значення n
  showSlides(); // Відображаємо відповідне зображення
}

// Отримуємо посилання на кнопку закриття модального вікна
var closeBtn = document.getElementsByClassName("close")[0];

// Додаємо обробник події кліка на кнопку закриття модального вікна
closeBtn.onclick = function () {
  modal.style.display = "none"; // Закриваємо модальне вікно
};

// Додаємо обробник події кліка поза межами модального вікна для його закриття
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none"; // Закриваємо модальне вікно при кліку за його межами
  }
};

// Додаємо обробники подій кліка на зображення в галереї
galleryItems.forEach(function (item, index) {
  item.addEventListener("click", function () {
    // При кліку на зображення відкриваємо модальне вікно і відображаємо обране зображення
    modal.style.display = "block";
    modalImg.src = this.src;
    slideIndex = index; // Встановлюємо індекс зображення для правильного перелистування
  });
});
