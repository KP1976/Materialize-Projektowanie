$(function() {
  // INICJALIZACJA MODALU
  $(".modal").modal();

  // SCROLLFIRE
  const options = [
    {
      selector: ".row-1",
      offset: 50,
      callback: function(e) {
        Materialize.fadeInImage($(e));
      }
    },
    {
      selector: ".row-2",
      offset: 300,
      callback: function(e) {
        Materialize.fadeInImage($(e));
      }
    },
    {
      selector: ".row-3",
      offset: 400,
      callback: function(e) {
        Materialize.fadeInImage($(e));
      }
    }
  ];

  Materialize.scrollFire(options);
});
