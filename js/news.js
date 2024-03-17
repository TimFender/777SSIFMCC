//! Кнопка поділитися на Facebook
document.addEventListener("DOMContentLoaded", function () {
  const shareButtons = document.querySelectorAll(".share-btn");
  shareButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Получаем уникальный идентификатор карточки новости
      const articleId = button.closest(".newsbox").dataset.articleId;

      // Формируем URL для шаринга на Facebook с учетом уникального идентификатора
      const articleUrl = `https://timfender.github.io/777SEVENSMCC/news.html?id=${articleId}`;

      // Формируем ссылку для шаринга на Facebook
      const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        articleUrl
      )}`;

      // Открываем ссылку в новом окне
      window.open(facebookShareUrl, "_blank");
    });
  });
});
