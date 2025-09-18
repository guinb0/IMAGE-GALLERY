$(document).ready(function() {
  // Función para filtrar las imágenes por categoría, al hacer click en los botones de filtrado
  $('.filter-btn').click(function() {
    var categoria = $(this).data('category');

    if (categoria === 'todos') {
      $('.imagen').fadeIn();
    } else {
      $('.imagen').fadeOut();
      $('.imagen[data-category="' + categoria + '"]').fadeIn();
    }
  });
});
