var flag1 = 0;
var flag2 = 0;
var flag3 = 0;
var flag4 = 0;
var flag5 = 0;
var flag6 = 0;
var flag7 = 0;
var flag8 = 0;
var flag9 = 0;
var flag10 = 0;
var flag11 = 0;
var flag12 = 0;
var flag13 = 0;
var flag14 = 0;
var flag15 = 0;
var flag16 = 0;
var flag17 = 0;
var flag18 = 0;
var flag19 = 0;
var flag20 = 0;
var flag21 = 0;
var flag22 = 0;
var flagbirds = 0;
var flagMus = 1;
var flagArea1 = false;
var flagStop = false;

var juego = false;

$('#bus').css('left', '500px');
$('.etiqueta,.icono-Info,.edificio,#img_char_10,#mod_btn2_taller3,#mod_btn2_taller4').hide();
$('#layer_pasto').doAnim('bounceInUp');
$('#bus').doAnim('slideInLeft');
$('#lbl_Bienvenida').show().doAnim('bounceIn');
$('#lbl_Indicaciones,#lbl_Recomendaciones').show().doAnim('bounceInDown');
$('#img_piscina').show();
$('#img_podio,#img_rueda,#img_scroll').show();
$('#img_scroll').doAnim({ 'animation': 'flash', 'times': 'infinite', 'duration': 3 });
$('#mod1_juego').loadHTML('void.html');

$('#btn_Volume').click(function () {
  if (flagMus === 0) {
    flagMus = 1;
    $('#btn_Volume').attr('src', 'assets/img/on.png');
    $('#audBack')[0].play();
    $('#audBack2')[0].play();
    $('#audBack3')[0].play();
    $("#audBack")[0].volume = 0.3;
  } else if (flagMus === 1) {
    $('#btn_Volume').attr('src', 'assets/img/off.png');
    flagMus = 0;
    $('#audBack')[0].pause();
    $('#audBack2')[0].pause();
    $('#audBack3')[0].pause();
    $("#audBack")[0].volume = 0.3;
  }
});


var flagLocution = 1;
function muteMe_Locut(e) {
  e.muted = !0;
}
function unMuteMe_Locut(e) {
  e.muted = !1;
}
$(".locution_btn").click(function () {
  var e = document.querySelectorAll(".locution");
  0 === flagLocution ? (flagLocution = 1,
    $(".locution_btn").attr("src", "assets/img/on_l.png"),
    [].forEach.call(e, function (e) {
      unMuteMe_Locut(e);
    })) : 1 === flagLocution && ($(".locution_btn").attr("src", "assets/img/off_l.png"),
      flagLocution = 0,
      [].forEach.call(e, function (e) {
        muteMe_Locut(e);
      })
    );
});

$(".da-clic").click(function () { $("#efct_clic")[0].play(); });
(function ($) {
  $.jInvertScroll(['.scroll'], {
    onScroll: function (percent) {
      console.log(percent);
      if (percent > 0.00015 && flagbirds === 0) {
        myMiddle = parseInt($('.capa_3').css('left'));
        $('#bus').css('left', +500 + (Math.abs(myMiddle)) + 'px');
        $('#audBack')[0].play();
        $('#audBack2')[0].play();
        $('#audBack3')[0].play();
        $("#audBack")[0].volume = 0.3;
        // $("#audi1")[0].play();
        flagbirds = 1;
        playLocutionInfog('a');
      } else if (percent >= 0.02 && flag1 === 0) {
        $('#bienes_carrusel').show().doAnim('bounceIn');
        $('#boton_espe').show().doAnim('bounceIn');
        $('#img_cabina').show().doAnim({ 'animation': 'zoomIn', 'duration': 1 });
        flag1 = 1;
        playLocutionInfog('b');
      } else if (percent >= 0.050 && flag2 === 0) {
        $('#lbl_MuseoT').show().doAnim('bounceIn');
        $('#img_museo').show().doAnim({ 'animation': 'zoomIn', 'duration': 1 });
        flag2 = 1;
        playLocutionInfog('c');
      } else if (percent >= 0.084 && flag3 === 0) {
        $('#lbl_CentroT').show().doAnim('bounceIn');
        $('#lbl_CentroIN,#lbl_CentroRe').show().doAnim('bounceInUp');
        $('#img_museo_2').show().doAnim({ 'animation': 'zoomIn', 'duration': 1 });
        flag3 = 1;
        playLocutionInfog('d');
      } else if (percent >= 0.12 && flag4 === 0) {
        $('#lbl_TrajineraT').show().doAnim('bounceIn');
        $('#lbl_TrajineraIN').show().doAnim('bounceInUp');
        $('#img_trajinera').show().doAnim({ 'animation': 'swing', 'times': 'infinite' });
        flag4 = 1;
        playLocutionInfog('e');
      } else if (percent >= 0.15 && flag5 === 0) {
        $('#lbl_UnivT').show().doAnim('bounceIn');
        $('#lbl_UnivIN').show().doAnim('bounceInUp');
        $('#img_univ').show().doAnim({ 'animation': 'slideInRight', 'duration': 2 });
        flag5 = 1;
        playLocutionInfog('f');
      } else if (percent >= 0.19 && flag6 === 0) {
        $('#lbl_ChefT').show().doAnim('bounceIn');
        $('#lbl_ChefIN').show().doAnim('bounceInUp');
        $('#img_pizza').show().doAnim({ 'animation': 'slideInRight', 'duration': 1 });
        flag6 = 1;
        playLocutionInfog('g');
      } else if (percent >= 0.291 && flag7 === 0) {
        $('#lbl_CaidaT').show().doAnim('bounceIn');
        $('#lbl_CaidaIN').show().doAnim('bounceInUp');
        $('#img_paracaidista').show().doAnim({ 'animation': 'bounceInDown', 'duration': 4 });
        flag7 = 1;
        playLocutionInfog('h');
      } else if (percent >= 0.33 && flag8 === 0) {
        $('#lbl_DeportesT').show().doAnim('bounceIn');
        $('#lbl_DeportRE').show().doAnim('bounceInUp');
        flag8 = 1;
        playLocutionInfog('i');
      } else if (percent >= 0.40 && flag9 === 0) {
        $('#lbl_PodioT').show().doAnim('bounceIn');
        $('#lbl_PodioRE').show().doAnim('bounceInUp');
        flag9 = 1;
        playLocutionInfog('j');
      } else if (percent >= 0.47 && flag10 === 0) {
        $('#lbl_InfoT').show().doAnim('bounceIn');
        $('#lbl_InfoRE').show().doAnim('bounceInUp');
        $('#img_info').show().doAnim({ 'animation': 'slideInRight', 'duration': 3 });
        $('#img_info2').show().doAnim({ 'animation': 'zoomIn', 'duration': 3 });
        flag10 = 1;
        playLocutionInfog('k');
      } else if (percent >= 0.53 && flag11 === 0) {
        $('#lbl_BajadaT').show().doAnim('bounceInUp');
        $('#lbl_BajadaTT').show().doAnim('bounceIn');
        flag11 = 1;
        playLocutionInfog('l');
      } else if (percent >= 0.61 && flag12 === 0) {
        $('#lbl_img_77').show().doAnim('bounceIn');
        flag12 = 1;
        playLocutionInfog('m');
      } else if (percent >= 0.66 && flag13 === 0) {
        $('#lbl_Edificio').show().doAnim('bounceInUp');
        $('#lbl_Construccion').show().doAnim('bounceIn');
        flag13 = 1;
        playLocutionInfog('n');
      } else if (percent >= 0.70 && flag14 === 0) {
        $('#stop_area_2').show().doAnim('bounceInUp');
        $("#mod_btn2_taller").show().doAnim('bounceInUp');
        flag14 = 1;
        playLocutionInfog('p');
      } else if (percent >= 0.76 && flag15 === 0) {
        $('#lbl_Cons_no').show().doAnim('bounceIn');
        $('#lbl_Casita_no').show().doAnim('bounceInUp');
        flag15 = 1;
        playLocutionInfog('o');
      } else if (percent >= 0.84 && flag16 === 0) {
        $('#lbl_fuego_text').show().doAnim('bounceIn');
        $('#lbl_fuego_mujer').show().doAnim('bounceInUp');
        flag16 = 1;
        playLocutionInfog('q');
      } else if (percent >= 0.7 && flag17 === 0) {
        $('#lbl_fuego_text').show().doAnim('bounceIn');
        $('#lbl_fuego_mujer').show().doAnim('bounceInUp');
        flag17 = 1;
      } else if (percent >= 0.89 && flag18 === 0) {
        $('#stop_area_3').show().doAnim('bounceInUp');
        // !1 === flagJuego2 && ($("html,body").css({"overflow-y": "hidden"}));
        $('#lbl_InstruEdi').show().doAnim('bounceInUp');
        $('.btn_stop_area_3').show().doAnim('bounceInUp');
        $(".btn_stop_area_3").click(() => {
          $('.btn_stop_area_3').removeClass('myglow_img');
          $("#mod_btn2_taller3").show();
          $("#audi19")[0].play();
        });
        flag18 = 1;
      } else if (percent >= 0.89 && flag19 === 0) {
        $('#stop_area_4').show().doAnim('bounceInUp');
        !1 === flagStop && ($("html,body").css({ "overflow-y": "hidden" }));
        $('.btn_stop_area_4').show().doAnim('bounceInUp');
        $(".btn_stop_area_4").click(() => {
          $('.btn_stop_area_4').removeClass('myglow_img');
          $("#mod_btn2_taller4").show();
          $("#audi20")[0].play();
        });
        flag19 = 1;
      } else if (percent >= 0.95 && flag20 === 0) {
        $('#lbl_Muros_Incendio').show().doAnim('bounceInUp');
        flag20 = 1;
        playLocutionInfog('r');
        console.log('rr');
      } else if (percent >= 1 && flag21 === 0) {
        // $('#lbl_text_refi').show().doAnim('bounceInUp');
        $('#lbl_mujer_refri').show().doAnim('bounceInUp');
        $('#btn_infografia_juego').show().doAnim('bounceIn');
        // $('#btn_infografia_fin').show().doAnim('bounceIn');
        flag21 = 1;
        playLocutionInfog('s');
        console.log('s');
      }
    }
  });
}(jQuery));


$("#cls_mod7_taller3_btn2").click(() => {
  $("#mod_btn2_taller3").hide();
  $("#audi19")[0].pause();
  $("#audi19")[0].currentTime = 0;
});
$("#cls_mod7_taller4_btn2").click(() => {
  $("#mod_btn2_taller4").hide();
  $("#audi20")[0].pause();
  $("#audi20")[0].currentTime = 0;
  $('html,body').css({ 'overflow-y': 'auto' });
});
// Carousel
var carousel_btn2_taller2 = 1;
$("#efct_next")[0].play();
taller_showDivs2(carousel_btn2_taller2);

function taller_plusDivs2(n) {
  taller_showDivs2(carousel_btn2_taller2 += n);
  $("#efct_next")[0].play();
}

function taller_showDivs2(n) {
  var i;
  var x = document.getElementsByClassName("mySlides_taller");
  if (n > x.length) {
    carousel_btn2_taller2 = 1;
    $("#efct_next")[0].play();
  }
  if (n < 1) {
    carousel_btn2_taller2 = x.length;
    $("#efct_next")[0].play();
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[carousel_btn2_taller2 - 1].style.display = "block";

  if (n == i) {
    $(".next_t").hide().removeClass('animated infinite heartBeat');
  } else {
    $(".next_t").show();
  }
  if (n == 1) {
    $(".prev_t").hide();
  } else {
    $(".prev_t").show();
  }
}

$(".next_t").click(function(){
  resetLocutionInfo();
  $('#audi16')[0].play();
})

$(".prev_t").click(function(){
  resetLocutionInfo();
  $('#audi15')[0].play();
})

$('#btn_returnInfo').click(function () {
  $('html,body').css({ 'overflow-y': 'hidden' });
  $("#mod_info_intro").hide();
  $("#mod_info_intro").scrollTop(0);
  $('#audBack')[0].pause();
  $('#audBack2')[0].pause();
  $('#audBack3')[0].pause();
  $('#btn_VolumenIndex, #btn_AudLoc').removeClass('hide');
  resetLocutionInfo()
  numSlides = 14;
  ctrl_slides();
  if (flagMusIndex === 1) {
    $('#audGen')[0].play();
  } else {
    $('#audGen')[0].pause();
  }
});
$('.btn_infografia_juego').click(function () {
  juego = true;
  unlock_menu();
  $('html,body').css({ 'overflow-y': 'hidden' });
  $('#mod1_juego').show().loadHTML('juego_1.html');
})

//Locutar infografia
function stopLocution(e) {
  e.pause();
  e.currentTime = 0;
}

function resetLocutionInfo() {
  console.log("entra reset");
  var e = document.querySelectorAll(".locution");
  [].forEach.call(e, function (e) {
    stopLocution(e);
  })
}
function playLocutionInfog(letra) {
  console.log("entra playLocutionInfog Infografia");
  resetLocutionInfo();
  if (letra == "a") {
    $("#audi1")[0].play();
  }
  if (letra == "b") {
    $("#audi2")[0].play();
  }
  if (letra == "c") {
    $("#audi3")[0].play();
  }
  if (letra == "d") {
    $("#audi4")[0].play();
  }
  if (letra == "e") {
    $("#audi5")[0].play();
  }
  if (letra == "f") {
    $("#audi6")[0].play();
  }
  if (letra == "g") {
    $("#audi7")[0].play();
  }
  if (letra == "h") {
    $("#audi8")[0].play();
  }
  if (letra == "i") {
    $("#audi9")[0].play();
  }
  if (letra == "j") {
    $("#audi10")[0].play();
  }
  if (letra == "k") {
    $("#audi11")[0].play();
  }
  if (letra == "l") {
    $("#audi12")[0].play();
  }
  if (letra == "m") {
    $("#audi13")[0].play();
  }
  if (letra == "n") {
    $("#audi14")[0].play();
  }
  if (letra == "o") {
    $("#audi17")[0].play();
  }
  if (letra == "p") {
    $("#audi15")[0].play();
  }
  if (letra == "q") {
    $("#audi18")[0].play();
  }
  if (letra == "r") {
    $("#audi21")[0].play();
  }
  if (letra == "s") {
    $("#audi22")[0].play();
  }
  if (letra == "t") {
    // $("#audi20")[0].play();
  }
}