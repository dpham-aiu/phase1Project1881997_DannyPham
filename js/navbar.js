$(".navbar-nav.nav-link").on("click", function (event) {
  event.preventDefault();
  $(".navbar-nav").find(".active").removeClass("active");
  $(this).addClass("active");
});
