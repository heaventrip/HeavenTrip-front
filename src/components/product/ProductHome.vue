<template>
  <div>
    <ProductHeader />
    <div class="main-product-content">
      <ProductNav />
      <ProductNav2 />
    </div>
    <ProductSection />
    <ProductFooter />
    <ProductModal />
  </div>
</template>

<script>
import ProductHeader from "@/components/product/ProductHeader";
import ProductNav from "@/components/product/ProductNav";
import ProductNav2 from "@/components/product/ProductNav2";
import ProductFooter from "@/components/product/ProductFooter";
import ProductSection from "@/components/product/ProductSection";
import ProductModal from "@/components/product/ProductModal";

export default {
  name: "ProductHome",
  mounted() {
    $(function () {
      $(".select-place").select2({
        minimumResultsForSearch: Infinity,
      });
      $("select.select-place").change(function () {
        var selectedCountry = $(this).children("option:selected").val();
        $('.nav-pills a[href="' + selectedCountry + '"]').tab("show");
      });
      var x = document.getElementById("center");
      x.scrollIntoView({ inline: "center" });
      // document.getElementsById('active').scrollIntoView({ inline: 'center' });
      $('[data-toggle="tooltip"]').tooltip();
      $(
        ".user-circle,.capacity-msg,.count-cross,.backdrop,.premier-text"
      ).hide();
      var width = $(window).width();
      $("#navbarSupportedContent")
        .on("shown.bs.collapse", function () {
          $(".user-circle").show();
          $(".navbar").css({
            "border-bottom": "none",
            "background-color": "#292F33",
          });
          $("body").css("overflow", "hidden");
        })
        .on("hidden.bs.collapse", function () {
          $(".user-circle").hide();
          $(".navbar").css({
            "border-bottom": "1px solid hsla(0,0%,98%,.5)",
            "background-color": "transparent",
          });
          $("body").css("overflow", "visible");
        });
      $("#viewMore")
        .on("show.bs.collapse", function () {
          $(".view-more-btn").html(
            'Voir moins <i class="fas fa-chevron-up ml-2"></i>'
          );
        })
        .on("hide.bs.collapse", function () {
          $(".view-more-btn").html(
            'Voir plus <i class="fas fa-chevron-down ml-2"></i>'
          );
        });
      $("#viewMoreday1,#viewMoreday2")
        .on("show.bs.collapse", function () {
          $(this).parent().find(".view-more-btn.active_hidden").hide();
        })
        .on("hide.bs.collapse", function () {
          $(this).parent().find(".view-more-btn.active_hidden").show();
        });
      $(".booking-session .booking-session-list li a")
        .on("shown.bs.tab", function (e) {
          e.preventDefault();
          $(".backdrop").show();
          $("body").css("overflow", "hidden");
        })
        .on("hidden.bs.tab", function (e) {
          e.preventDefault();
          $(".backdrop").hide();
          $("body").css("overflow", "visible");
        });
      $("#datepicker-range-start").Zebra_DatePicker({
        onChange: function () {
          // var dval = $(this).val();
          // alert(dval);
          $(".date-buttons").removeClass("active");
          $(this).parents(".date-buttons").addClass("active");
        },
        onClose: function (el) {
          showDays(el);
        },
        direction: true,
        container: $(".datepicker-col"),
        pair: $("#datepicker-range-end"),
        // always_visible: $('#show-datepicker'),
        days: ["D", "L", "M", "M", "J", "V", "S"],
        months: [
          "JANVIER",
          "FÉVRIER",
          "MARS",
          "AVRIL",
          "MAI",
          "JUIN",
          "JUILLET",
          "AOÛT",
          "SEPTEMBRE",
          "OCTOBRE",
          "NOVEMBRE",
          "DÉCEMBRE",
        ],
        // months_abbr: ['JANVIER','FÉVRIER','MARS','AVRIL','MAI','JUIN','JUILLET','AOÛT','SEPTEMBRE','OCTOBRE','NOVEMBRE','DÉCEMBRE'],
        // months_abbr:true,
        // eslint-disable-next-line no-dupe-keys
        onClose: null,
        disabled_dates: false,
        show_select_today: false,
        show_clear_date: false,
        select_other_months: true,
        format: "d F Y",
        open_on_focus: true,
        // current_date: true,
      });

      $("#datepicker-range-end").Zebra_DatePicker({
        onChange: function () {
          $(".date-buttons").removeClass("active");
          $(this).parents(".date-buttons").addClass("active");
        },
        onClose: function (el) {
          showDays(el);
        },
        direction: 1,
        container: $(".datepicker-col"),
        days: ["D", "L", "M", "M", "J", "V", "S"],
        months: [
          "JANVIER",
          "FÉVRIER",
          "MARS",
          "AVRIL",
          "MAI",
          "JUIN",
          "JUILLET",
          "AOÛT",
          "SEPTEMBRE",
          "OCTOBRE",
          "NOVEMBRE",
          "DÉCEMBRE",
        ],
        //months_abbr: ['JANVIER','FÉVRIER','MARS','AVRIL','MAI','JUIN','JUILLET','AOÛT','SEPTEMBRE','OCTOBRE','NOVEMBRE','DÉCEMBRE'],
        // months_abbr:['jan','frb','MARS','AVRIL','MAI','JUIN','JUILLET','ss','SEPTEMBRE','OCTOBRE','NOVEMBRE','dssd'],
        show_select_today: false,
        show_clear_date: false,
        select_other_months: true,
        format: "d F Y",
        // always_visible: $('#show-datepicker'),
      });

      $("#datepickbtn").on("click", function (e) {
        $("#depart_datepick")
          .find(".Zebra_DatePicker:first")
          .addClass("after_date");
        $("#datepicker-range-start").triggerHandler("click");
        e.preventDefault();
      });
      $("#retourpickbtn").on("click", function (e) {
        $("#depart_datepick")
          .find(".Zebra_DatePicker:last")
          .addClass("before_date");
        $("#datepicker-range-end").triggerHandler("click");
        e.preventDefault();
      });
    });
    function showDays() {
      // get date
      var start = $("#datepicker-range-start").val();
      var end = $("#datepicker-range-end").val();
      if (!start || !end) return;

      // parse date
      var startArr = start.split(" ");
      var endArr = end.split(" ");
      if (endArr[1] == "FÉVRIER") {
        endArr[1] = "feb";
      }
      if (endArr[1] == "AOÛT") {
        endArr[1] = "aug";
      }
      if (endArr[1] == "DÉCEMBRE") {
        endArr[1] = "dec";
      }
      if (startArr[1] == "FÉVRIER") {
        startArr[1] = "feb";
      }
      if (startArr[1] == "AOÛT") {
        startArr[1] = "aug";
      }
      if (startArr[1] == "DÉCEMBRE") {
        startArr[1] = "dec";
      }
      var startDate = new Date(startArr);
      var endDate = new Date(endArr);

      // var startDate = new Date(startArr[2], startArr[0] - 1, startArr[1]);
      // var endDate = new Date(endArr[2], endArr[0] - 1, endArr[1]);
      console.log(start);
      console.log(end);
      console.log(startArr);
      console.log(endArr);
      console.log(startArr[0]);
      console.log(startArr[1]);
      console.log(startArr[2]);
      console.log(startDate);
      console.log(endArr[0]);
      console.log(endArr[1]);
      console.log(endArr[2]);
      console.log(endDate);
      // calculate days
      var milliseconds = endDate.getTime() - startDate.getTime();
      var days = milliseconds / (1000 * 60 * 60 * 24);
      // var days = Math.round((endDate-startDate)/(1000*60*60*24));
      console.log(days);
      $("#days").text(days);
      $("#nights").text(days - 1);
      $(".premier-text").show();
    }
    function increaseValue() {
      var value = parseInt(document.getElementById("number").value, 10);
      value = isNaN(value) ? 0 : value;
      value++;
      document.getElementById("number").value = value;

      // var value = parseInt(document.getElementById("countNumber").value, 10);
      value = isNaN(value) ? 0 : value;
      // value > 2 ? value = 2 : '';
      if (value > 1) {
        value = 2;
        $(".capacity-msg,.count-cross").show();
        $(".value-button.increase").hide();
      }
      if (value < 3) {
        $(".value-button.decrease").removeClass("inactive");
      }
      value++;
      document.getElementById("countNumber").value = value;
    }

    function decreaseValue() {
      var value = parseInt(document.getElementById("number").value, 10);
      value = isNaN(value) ? 0 : value;
      if (value > 1) {
        $(".capacity-msg,.count-cross").hide();
        $(".value-button.increase").show();
      }
      if (value <= 1) {
        $(".value-button.decrease").addClass("inactive");
      }
      value < 1 ? (value = 1) : "";
      value--;
      document.getElementById("number").value = value;

      // var value = parseInt(document.getElementById("countNumber").value, 10);
      value = isNaN(value) ? 0 : value;
      value < 1 ? (value = 1) : "";
      value--;
      document.getElementById("countNumber").value = value;
    }
  },
  components: {
    ProductHeader,
    ProductNav,
    ProductNav2,
    ProductFooter,
    ProductSection,
    ProductModal,
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
};
</script>
