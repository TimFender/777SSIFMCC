//! Функціонал для navbar menu.  Код забезпечує відкриття та закриття меню при кліку на елемент "menu" та можливість зміни вигляду іконки кнопки при цьому.

// Знаходить елемент з класом "navbar", який знаходиться всередині елемента з класом "header"
let navbar = document.querySelector(".header .navbar");
// Знаходить елемент з ідентифікатором "menu". Це може бути, наприклад, кнопка або іконка, на яку ви клікаєте для виклику меню.
let menu = document.querySelector("#menu");
// Додає обробник події onclick на елемент "menu". Коли користувач клікає на елемент "menu", викликається ця функція.
menu.onclick = () => {
  console.log("Click");
  navbar.classList.toggle("active");
};
// Оголошує функцію changeIcon, яка приймає параметр icon.
// Використовує метод toggle для додавання або видалення класу "fa-times" для переданого елемента icon.
// Це може бути використано для зміни іконки кнопки, коли меню відкрите чи закрите.
let changeIcon = function (icon) {
  icon.classList.toggle("fa-times");
};

//! Додавання класу active до меню
var currentLocation = window.location.href;
var menuLinks = document.querySelectorAll(".menu__link");
menuLinks.forEach(function (link) {
  // якщо URL посилання Відповідно до поточного URL-адреси сторінки
  if (link.href === currentLocation) {
    // Додається класс "active" до посилання
    link.classList.add("active");
  }
});

//! Кнопка member в хедері. Відкриває приватну групу777 в Telegram
// Функція redirectToExample приймає параметр telegram
function redirectToExample(telegram) {
  // Виконуємо об'єкт window.open для відкриття нового вікна із вказанням на посилання URL
  window.open(
    "https://t.me/+ZmkQyRmgv9Y5M2Iy",
    "_blank",
    "noopener,noreferrer"
  );
}

//! Оновлена версія відкриття спойлерів.
document.addEventListener("DOMContentLoaded", function () {
  var collapsibles = document.querySelectorAll(".collapsible");

  collapsibles.forEach(function (collapsible) {
    collapsible.addEventListener("click", function () {
      var content = this.nextElementSibling;
      var allCollapsibles = document.querySelectorAll(".collapsible");

      // Закриваємо всі раніше відкриті списки
      allCollapsibles.forEach(function (item) {
        var itemContent = item.nextElementSibling;
        if (item !== collapsible && item.classList.contains("active")) {
          item.classList.remove("active");
          itemContent.style.maxHeight = null;
        }
      });

      // Перемикаємо активний клас поточного елемента
      this.classList.toggle("active");

      // Встановлюємо висоту контенту поточного елемента
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = "0";

        setTimeout(function () {
          content.style.maxHeight = content.scrollHeight + "px";
        }, 10); // Змініть це значення за необхідності
      }
    });
  });
});

//! Функція виклику при натисканні на кнопку виклику адміна
function callNumber() {
  window.location.href = "tel:+380730000000"; // Замініть номер на потрібний
}

//! Функція появи кнопки "TOP" - при скролі.
window.addEventListener("scroll", function () {
  var scrollToTopLinks = document.querySelectorAll(".scrollToTopLink");
  scrollToTopLinks.forEach(function (link) {
    if (window.scrollY > 100) {
      link.style.display = "block";
    } else {
      link.style.display = "none";
    }
  });
});

document.querySelectorAll(".scrollToTopLink").forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevents default anchor behavior
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
