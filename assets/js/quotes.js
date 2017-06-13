var cargarPagina = function() {
    cargarInformacion();
};

var cargarInformacion = function() {
  var url ='http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=20';
  $.getJSON(url, function(response){
    var id = response[1].ID;
    var frase = response[1].content;
    var link = response[1].link;
    var autora = response[1].title;
      console.log(id);
      console.log(frase);
      
  });
};


$(document).ready(cargarPagina);