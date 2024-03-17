// Логіка та поведінка сторінки "index.html" Після завантаження сторінки користувач натискає на посилання у вигляді картинки флагу клуба, після цього включається аудіофайл і через 5 секунд відбувається плавний перехід на сторінку "news.html". Плавний перехід з ефектом блюр (scc/home.css).

document.addEventListener("DOMContentLoaded", function () {
  // Отримуємо посилання і аудіоелемент
  var link = document.getElementById("delayedLink");
  var audioElement = document.getElementById("audioin");

  // Перевіряємо що посилання і аудіоелемнт існують
  if (link !== null && audioElement !== null) {
    // Отримуємо URL для перенаправлення
    var redirectTo = link.getAttribute("href");

    // Відключаємо автовідтворення при загрузці сторінки
    audioElement.autoplay = false;

    // Додаємо прослухати подію click на посилання
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Попереджуємо стандартну дію посилання

      // Відтворення аудіо при кліку на посилання
      if (audioElement.paused) {
        audioElement.play().catch(function (error) {
          console.error("Failed to play audio:", error.message);
        });
      }

      // Затримка перед переходом
      setTimeout(function () {
        // Добавляємо клас для анімації і починаємо плавне зникнення сторінки
        document.body.classList.add("fade-out");

        // Після завершення анімації відбувається перехід на іншу сторінку
        setTimeout(function () {
          window.location.href = redirectTo;
        }, 500); // Затримка, що відповідає часу анімації
      }, 5000); // Затримка перед переходом на іншу сторінку
    });
  }

  // Видалення класу для вимкнення ефекту blur при поверненні на сторінку
  window.addEventListener("pageshow", function (event) {
    var historyTraversal =
      event.persisted ||
      (typeof window.performance != "undefined" &&
        window.performance.navigation.type === 2);
    if (historyTraversal) {
      document.body.classList.remove("fade-out");
    }
  });

  // JavaScript для блокування скачування елементів через блокування контекстного меню
  // document.addEventListener("contextmenu", function (e) {
  //   e.preventDefault();
  // });

  document.addEventListener("dragstart", function (e) {
    e.preventDefault();
  });
});
