/*jQuery.expr[':'].contains = function(a, i, m) {
  return jQuery(a).text().toUpperCase()
      .indexOf(m[3].toUpperCase()) >= 0;
};

$('#search').keyup(function (){
    $('#contenedorProductos').removeClass('d-none');
    var filter = $(this).val(); // 
    $('.card-deck').find('.card .card-body h4:not(:contains("'+filter+'"))').parent().parent().addClass('d-none');
})


JQuery(document).ready(function () {
    (function ($) {
      $('#search').keyup(function () {
        var value = reemplazarAcentos($(this).val().toLowerCase())
        $('#content .card').hide();
        $('#content .card').filter(function () {
          return existText($(this).text(), value);
        }).show();
      })
    }(jQuery));
  });
  
  */
  jQuery.expr[':'].contains = function(a, i, m) {
    return jQuery(a).text().toUpperCase()
        .indexOf(m[3].toUpperCase()) >= 0;
  };
  
  $('#search').keyup(function (){
      $('.card').removeClass('d-none');
      var filter = $(this).val(); //Toma el valor del imput
      $('#contenedorProductos').find('.card .card-body h5:not(:contains("'+filter+'"))').parent().parent().addClass('d-none');
  })
  

  