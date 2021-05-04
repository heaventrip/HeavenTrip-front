$(function () {
  $("").select2({
    minimumResultsForSearch: Infinity,
  });
  // $('#my-select').searchableOptionList();
  $("#my-activitysearch").searchableOptionList({
    showSelectAll: false,
    allowNullSelection: true,
    maxHeight: "250px",
    texts: {
      searchplaceholder: "Activités",
    },
  });
  $("#my-place").searchableOptionList({
    showSelectAll: false,
    allowNullSelection: true,
    maxHeight: "250px",
    texts: {
      searchplaceholder: "Pays",
    },
  });
  $("#my-spot").searchableOptionList({
    showSelectAll: false,
    allowNullSelection: true,
    maxHeight: "250px",
    texts: {
      searchplaceholder: "Spot",
    },
  });
  $("#my-depart").searchableOptionList({
    showSelectAll: false,
    allowNullSelection: true,
    maxHeight: "250px",
    texts: {
      searchplaceholder: "Mois de départ",
    },
  });
  $("#my-level").searchableOptionList({
    showSelectAll: false,
    allowNullSelection: true,
    maxHeight: "250px",
    texts: {
      searchplaceholder: "Niveau",
    },
  });

  $('[data-toggle="tooltip"]').tooltip();
  $(".user-circle").hide();
  $("#navbarSupportedContent").on("shown.bs.collapse", function () {
    $(".user-circle").show();
    $(".navbar").css({
      "border-bottom": "none",
      "background-color": "#292F33",
    });
    $("body").css("overflow", "hidden");
  });
  $("#navbarSupportedContent").on("hidden.bs.collapse", function () {
    $(".user-circle").hide();
    $(".navbar").css({
      "border-bottom": "1px solid hsla(0,0%,98%,.5)",
      "background-color": "transparent",
    });
    $("body").css("overflow", "visible");
  });
});
