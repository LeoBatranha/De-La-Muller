
$(document).ready(function() {
  $("#form-contato").on("submit", function(e) {
    e.preventDefault();
    $("#mensagem-sucesso").fadeIn();
    setTimeout(() => {
      $("#mensagem-sucesso").fadeOut();
      this.reset();
    }, 3000);
  });
});
