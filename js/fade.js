$(function() {
  // SCROLLFIRE
  const options = [
    {
      selector: ".first-row",
      offset: 50,
      callback: function(e) {
        Materialize.fadeInImage($(e));
      }
    },
    {
      selector: ".second-row",
      offset: 300,
      callback: function(e) {
        Materialize.fadeInImage($(e));
      }
    },
    {
      selector: ".third-row",
      offset: 350,
      callback: function(e) {
        Materialize.fadeInImage($(e));
      }
    },
    {
      selector: ".fourth-row",
      offset: 360,
      callback: function(e) {
        Materialize.fadeInImage($(e));
      }
    }
  ];

  Materialize.scrollFire(options);
});
