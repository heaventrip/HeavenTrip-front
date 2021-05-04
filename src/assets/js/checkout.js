$(function () {
  $('[data-toggle="tooltip"]').tooltip();
  $(".expire_date").datepicker();
  $(".avalaible-mem,.validate-btn-info,.card-transfer,.bank-transfer").hide();
  $(".custom-control.custom-radio").change(function () {
    if ($("#customRadio3").is(":checked")) {
      $(this).parent().find(".avalaible-mem").show();
    } else {
      $(this).parent().find(".avalaible-mem").hide();
    }
  });
  $(".custom-control.sameAddrCheck").change(function () {
    if ($("#sameAddr").is(":checked")) {
      $(".login-tabs").hide();
      $(".validate-btn-info").show();
    } else {
      $(".login-tabs").show();
      $(".validate-btn-info").hide();
    }
  });
  $("input[type=radio][name=choicePay]").change(function () {
    if ($("#card_transfer").is(":checked")) {
      $(".card-transfer").show();
      $("#checkout_card_number").focus();
      $(".bank-transfer").hide();
    } else if ($("#bank_transfer").is(":checked")) {
      $(".card-transfer").hide();
      $(".bank-transfer").show();
    }
  });
});

var $cardinput = $("#checkout_card_number_logo");
$("#checkout_card_number").validateCreditCard(function (result) {
  // console.log(result);
  if (result.card_type != null) {
    switch (result.card_type.name) {
      case "visa":
        $cardinput.css("background-position", "right -35px top 0px");
        $cardinput.addClass("card_visa");
        break;

      case "visa_electron":
        $cardinput.css("background-position", "right -35px top 0px");
        $cardinput.addClass("card_visa_electron");
        break;

      case "mastercard":
        $cardinput.css("background-position", "right 9px top 0px");
        $cardinput.addClass("card_mastercard");
        break;

      case "maestro":
        $cardinput.css("background-position", "right 9px top 0px");
        $cardinput.addClass("card_maestro");
        break;

      case "discover":
        $cardinput.css("background-position", "right -81px top 0px");
        $cardinput.addClass("card_discover");
        break;

      case "amex":
        $cardinput.css("background-position", "right -81px top 0px");
        $cardinput.addClass("card_amex");
        break;

      default:
        $cardinput.css("background-position", "right 50px top 0px");
        break;
    }
  } else {
    $cardinput.css("background-position", "right 50px top 0px");
  }

  // Check for valid card numbere - only show validation checks for invalid Luhn when length is correct so as not to confuse user as they type.
  if (result.length_valid || $cardinput.val().length > 16) {
    if (result.luhn_valid) {
      $cardinput.parent().removeClass("has-error").addClass("has-success");
    } else {
      $cardinput.parent().removeClass("has-success").addClass("has-error");
    }
  } else {
    $cardinput.parent().removeClass("has-success").removeClass("has-error");
  }
});
