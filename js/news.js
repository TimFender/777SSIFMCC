//! Кнопка поділитися на Facebook
// document.addEventListener("DOMContentLoaded", function () {
//   const shareButtons = document.querySelectorAll(".share-btn");
//   shareButtons.forEach((button) => {
//     button.addEventListener("click", () => {
//       // Отримання унікального ідентифікатора карточки новини
//       const articleId = button.closest(".newsbox").dataset.articleId;

//       // Формування URL для sharing on Facebook з унікальним ідентифікатором
//       const articleUrl = `https://timfender.github.io/777SEVENSMCC/news.html?id=${articleId}`;

//       // Формування посилання для sharing on Facebook
//       const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
//         articleUrl
//       )}`;

//       // Відкриття посилання у новому вікні
//       window.open(facebookShareUrl, "_blank");
//     });
//   });
// });
