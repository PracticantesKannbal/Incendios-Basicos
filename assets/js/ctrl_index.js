var avsExpert = 0, avSlide8 = 0, avSlide9 = 0, avSlide1 = 0;
var numSlides = 1, numSlide9_1 = 1, numSlide9_2 = 1, numSlide1_2 = 1;
var flagPiso3Finish = false;
var finishSlide12_1 = false;
var sabias = 0
var flagMusIndex = 1;
$("#precache_index").waitForImages({
  finished: function () {
    $("#loading_screen").fadeOut("slow");
    $("#precache_index").hide();
    ctrl_slides();
    ctrl_avanceExp();
    ctrl_avance_slide9(avSlide9);
    $('#btn_start_sini1').delay(3000).fadeIn();
    $('#btn_openSide').show();
    $("#acar1")[0].pause();
    $("#acar1")[0].currentTime = 0;
  },
  waitForAll: true
});
$('#btn_VolumenIndex').click(function () {
  if (flagMusIndex === 0) {
    flagMusIndex = 1;
    $('#btn_VolumenIndex').attr('src', 'assets/img/on.png');
    $('#audGen')[0].play();
    $("#audGen")[0].volume = 0.3;
  } else if (flagMusIndex === 1) {
    $('#btn_VolumenIndex').attr('src', 'assets/img/off.png');
    flagMusIndex = 0;
    $('#audGen')[0].pause();
    $("#audGen")[0].volume = 0.3;
  }
});
var flagLocutionn = 1;
function muteMe_Locut(e) {
  e.muted = !0;
}
function unMuteMe_Locut(e) {
  e.muted = !1;
}
$(".btn_AudLoc").click(function () {
  var e = document.querySelectorAll(".locuIndex");
  0 === flagLocutionn ? (flagLocutionn = 1,
    $(".btn_AudLoc").attr("src", "assets/img/on_l.png"),
    [].forEach.call(e, function (e) {
      unMuteMe_Locut(e);
    })) : 1 === flagLocutionn && ($(".btn_AudLoc").attr("src", "assets/img/off_l.png"),
      flagLocutionn = 0,
      [].forEach.call(e, function (e) {
        muteMe_Locut(e);
      })
    );
});

//Botón Navbar Abrir
$('#btn_openSide').click(() => $("#mySidebar").css({ width: "25%" }));
//Botón Navbar Cerrar
$('#close_sideBar').click(() => $("#mySidebar").css({ width: "0%" }));


$(".elem_click").click(function () { $("#efct_clic")[0].play(); });
$(".da-clic").click(function () { $("#efct_clic")[0].play(); });
$(".elem_close").click(function () { $("#efct_close")[0].play(); });

function ctrl_slides() {
  console.log(numSlides);
  $("#acar1")[0].pause();
  $("#acar1")[0].currentTime = 0;
  $('#audi16')[0].pause();
  $(".slide_sini").hide();
  $("#slide_sini_" + numSlides).show();
  if (numSlides === 1) {
    $("#sini_Next").hide();
    $("#sini_Prev").hide();
  }else if(numSlides === 11 || numSlides === 17){
    $("#sini_Next").hide();
  } else if (numSlides === 8) {
    $("#sini_Prev").show();
    $("#sini_Next").hide();
  } else {
    $("#sini_Prev,#sini_Next").show();
    $("#slide10_text_1,#slide10_text_2,#slide10_text_3").hide();
    $("#slide10_text_4,#slide10_text_5").hide();
    if (numSlides === 9) {      
      $(".btn_AudLoc").removeClass('hide')
    }
    if (numSlides === 14) {
      $("#slide10_text_0").show().doAnim("zoomIn");
      $("#slide10_text_1").delay(800).fadeIn(0).doAnim({ 'animation': 'slideInRight', 'duration': 2 });
      $("#slide10_text_2").delay(1600).fadeIn(0).doAnim({ 'animation': 'slideInRight', 'duration': 2 });
      $('#slide10_text_next').show();
      $('#slide10_text_prev,#slide10_text_3,#slide10_text_4,#slide10_text_5').hide();
    } else if (numSlides === 15) {
      resetLocution()
      $('.infografia_horizontal').show();
      $("#sini_Prev").hide();
      $("#sini_Next").hide();
      $('#audGen')[0].pause();
      $('#btn_VolumenIndex, #btn_AudLoc').addClass('hide');
      $('html,body').css({ 'overflow-y': 'auto' });
    } else if (numSlides === 18) {
      $("#sini_Prev,#sini_Next").show();
    } else if (numSlides === 20) {
      $("#sini_Prev").show();
      $("#sini_Next").hide();
    }
  }
  if (numSlides === 9 || numSlides === 10 || numSlides === 11 || numSlides === 12 || numSlides === 13 || numSlides === 14 ||
    numSlides === 15  || numSlides === 16 || numSlides === 17 || numSlides === 18 || numSlides === 19 || numSlides === 20
  ) {
    playLocution(numSlides)
  }

  unlock_menu();
}

function unlock_menu() {
  $('.btn_navegacion').removeClass('btn_nav_activo');

  //Del slide 10 al 15 se activa el primer elemento del menú
  if (numSlides >= 10 && numSlides < 16) {
    $('#btn_nav_1,#txt_pregunta_1').css({ "pointer-events": "auto" }).removeClass('w3-opacity');
    $('#btn_nav_1').css({"background-color": "#a8ccff"});
    $('#btn_nav_1').addClass('btn_nav_activo');
    g_avance = 1;
  //En el slide 16 se activa el segundo elemento del menú, si no se ha jugado el juego
  } else if (numSlides === 16 && juego === false) {
    $('#btn_nav_2,#txt_pregunta_2').css({ "pointer-events": "auto" }).removeClass('w3-opacity');
    $('#btn_nav_2').css({"background-color": "#a8ccff"});
    $('#btn_nav_2').addClass('btn_nav_activo');
    g_avance = 2;
  //En el slide 16 se activa el tercer elemento del menú, si ya se ha jugado el juego
  } else if (numSlides === 16 && juego === true) {
    $('#btn_nav_3,#txt_pregunta_3').css({ "pointer-events": "auto" }).removeClass('w3-opacity');
    $('#btn_nav_3').css({"background-color": "#a8ccff"});
    $('#btn_nav_3').addClass('btn_nav_activo');
    g_avance = 3;
  //Del slide 16 al 19 se activa el cuarto elemento del menú
  } else if (numSlides > 16 && numSlides < 20) {
    $('#btn_nav_4,#txt_pregunta_4').css({ "pointer-events": "auto" }).removeClass('w3-opacity');
    $('#btn_nav_4').css({"background-color": "#a8ccff"});
    $('#btn_nav_4').addClass('btn_nav_activo');
    g_avance = 4;
  //Desde el slide 20 se activa el quinto elemento del menú
  } else if (numSlides >= 20) {
    $('#btn_nav_5,#txt_pregunta_5').css({ "pointer-events": "auto" }).removeClass('w3-opacity');
    $('#btn_nav_5').css({"background-color": "#a8ccff"});
    $('#btn_nav_5').addClass('btn_nav_activo');
    g_avance = 4;
  }
  save_Status();
}

//Se resetea el estado del juego dependiendo de a qué opción del menú se le dé click
$('#btn_nav_2, #txt_pregunta_2').click(() => {
  juego = false;
});
$('#btn_nav_3, #txt_pregunta_3').click(() => {
  juego = true;
});


$(".cls_info_intro").click(function () {
  $("#mod_info_intro").hide();
  $("#mod_info_intro").scrollTop(0);
});

$("#sini_Prev").click(function () {
  1 < numSlides && numSlides--;
  ctrl_slides();
  $("#efct_next")[0].play();
});
$("#sini_Next").click(function () {
  25 > numSlides && numSlides++;
  $("#efct_next")[0].play();
  ctrl_slides();
});

//Botones slide intro AXA Incendios
$('.video_slide_7').click(function () {
  $('#mod_cultOrg').show();
  resetLocution();
  $('#audGen')[0].pause();
  $('#vid_cultOrg').get(0).play();
  $('#cls_cultOrg').click(function () {
    $('#mod_cultOrg').hide();
    $('#vid_cultOrg').get(0).pause();
    $('#sini_Prev,#sini_Next').show();
    $('#audGen')[0].play();
  });
});

$('#btn_start_sini1').click(function () {
  numSlides = 2;
  ctrl_slides();
  $('#btn_VolumenIndex').removeClass('hide');
  $('#audGen')[0].play();
  $("#audGen")[0].volume = 0.3;
});


$('#btn_infografia_fin').click(function () {
  $('html,body').css({ 'overflow-y': 'hidden' });
  $('#audBack')[0].pause();
  $('#audBack2')[0].pause();
  $('#audBack3')[0].pause();
  $('#infografia_horizontal').hide();
  numSlides = 17;
  ctrl_slides();
  window.scrollTo(0, 0);
  $("#audi23")[0].pause();
  $("#audi23")[0].currentTime = 0;
  $('#audGen')[0].play();
  $('#btn_VolumenIndex, #btn_AudLoc').removeClass('hide');
});

$("#btn_start_slide15").click(function () {
  $("#mod_expertos_1").show();
  resetLocution();
  playLocutionCarrusel(1)
  $("#btn_start_slide15").removeClass("myglow_img_blue");
});
$("#cls_expertos_1").click(function () {
  $("#mod_expertos_1").hide();
  $("#sini_Prev,#sini_Next").show();
  resetLocutionSlide()
  resetLocution()
});

function ctrl_avanceExp() {
  $(".carru_slide1_2").hide();
  $("#carru_slide1_2_" + numSlide1_2).show();
  $('.circ_slide1_2').removeClass('w3-light-blue').addClass('w3-white');
  $('#circ_slide1_2_' + numSlide1_2).removeClass('w3-white').addClass('w3-light-blue');
  if (numSlide1_2 === 1) {
    $("#slide1_2_Prev").hide();
    $("#slide1_2_Next").show();
  } else if (numSlide1_2 === 7) {
    $("#slide1_2_Prev,#cls_expertos_1").show();
    $("#slide1_2_Next").hide();
  } else {
    $("#slide1_2_Prev,#slide1_2_Next").show();
  }
  if (numSlide1_2 === 1 || numSlide1_2 === 2 || numSlide1_2 === 3 || numSlide1_2 === 4 || numSlide1_2 === 5 || numSlide1_2 === 6 || numSlide1_2 === 7
  ) {
    playLocutionCarrusel(numSlide1_2)
  }
}
function ctrl_avance_slide9(ptrId) {
  if ((avSlide9 < 2) && (avSlide9 <= ptrId)) {
    avSlide9 = ptrId + 1;

  } else if (avSlide9 >= 2) {
    $('.btn_slide9').show().css('pointer-events', 'auto');
  }
}

$('#btn_slide9').click(function () {
  $('#mod_slide9_1').show();
  ctrl_slide9_1();
});

$('.cls_slide9').click(function () {
  strId = $(this).attr("id").split("_")[2];
  numSlide9_1 = 1, numSlide9_2 = 1;
  $('#mod_slide9_' + strId).hide();
  $('.btn_conoce_recorrido,.boton_slide_3').show();
  ctrl_avance_slide9(parseInt(strId));
  $('.btn_slide9').show();
});

function ctrl_slide9_1() {
  $(".carru_slide9_1").hide();
  $("#carru_slide9_1_" + numSlide9_1).show();
  if (numSlide9_1 === 1) {
    $("#slide9_1_Prev").hide();
    $("#slide9_1_Next").show();
  } else if (numSlide9_1 === 4) {
    $("#slide9_1_Prev").show();
    $("#slide9_1_Next").hide();
  } else {
    $("#slide9_1_Prev").show();
    $("#slide9_1_Next").show();
  }
}

$("#slide9_1_Prev").click(function () {
  1 < numSlide9_1 && numSlide9_1--;
  ctrl_slide9_1();
});
$("#slide9_1_Next").click(function () {
  4 > numSlide9_1 && numSlide9_1++;
  ctrl_slide9_1();
});


$("#slide1_2_Prev").click(function () {
  1 < numSlide1_2 && numSlide1_2--;
  ctrl_avanceExp();
});
$("#slide1_2_Next").click(function () {
  7 > numSlide1_2 && numSlide1_2++;
  ctrl_avanceExp();
});

$('#btn_casoExperto').click(() => $('#mod_casoExperto').show());
$('#cls_casoExperto').click(() => $('#mod_casoExperto').hide());

$("#btn_sabiasExp").click(function () {
  $('#sabias_expertos_1').show();
  resetLocution();
  resetLocutionSlide();
  $("#sab1")[0].play();
});
$("#cls_sabiasExperto").click(function () {
  $('#sabias_expertos_1').hide();
  $("#sab1")[0].pause()
});

//Cambiar para despues implementar carga de módulos
$('.btn_contInc').click(function () {
  strId = $(this).attr("id").split("_")[2];
  if (strId === '1') {
    $("#gifavion").show();
    $("#aud_avion")[0].play();
    setTimeout(function(){
      $("#gifavion").hide();
      numSlides = 9;
      ctrl_slides();
    },3000) 
  }
});

$(".btn_navegacion").click(function () {
  $("#efct_clic")[0].play();
  $('.modal').hide();
  // resetLocution();
  strID = $(this).attr("id").split("_")[2];
  "1" === strID && (numSlides = 10, $('#mod1_juego').hide().loadHTML('void.html'), $('html,body').css({ 'overflow-y': 'hidden' }));
  "2" === strID && (numSlides = 16, $('#mod1_juego').hide().loadHTML('void.html'));
  "3" === strID && (numSlides = 16, $('#mod1_juego').show().loadHTML('juego_1.html'));
  "4" === strID && (numSlides = 17, $('#mod1_juego').hide().loadHTML('void.html'), $('html,body').css({ 'overflow-y': 'hidden' }));
  "5" === strID && (numSlides = 20, $('#mod1_juego').hide().loadHTML('void.html'), $('html,body').css({ 'overflow-y': 'hidden' }));
  ctrl_slides();
});

//Lucutar
function stopLocution(e) {
  e.pause();
  e.currentTime = 0;
}
function stopLocution2(e) {
  e.pause();
  e.currentTime = 0;
}


function resetLocution() {
  //console.log("entra reset");
  var e = document.querySelectorAll(".locuIndex");
  [].forEach.call(e, function (e) {
    stopLocution(e);
  })
}
function resetLocutionSlide() {
  //console.log("entra reset");
  var e = document.querySelectorAll(".locuIndex");
  [].forEach.call(e, function (e) {
    stopLocution2(e);
  })
}
function resetLocutionSabias() {
  //console.log("entra reset");
  var e = document.querySelectorAll(".locuIndex");
  [].forEach.call(e, function (e) {
    stopLocution3(e);
  })
}
function playLocution(currentSlide) {
  //console.log("entra playLocution");
  resetLocution();
  if (currentSlide == 10) {
    $("#aud1")[0].play();
  }
  if (currentSlide == 11) {
    $("#aud2")[0].play();
  }
  if (currentSlide == 12) {
    $("#aud3")[0].play();
  }
  if (currentSlide == 13) {
    $("#aud4")[0].play();
  }
  if (currentSlide == 14) {
    $("#aud5")[0].play();
  }
  if (currentSlide == 15) {
    $("#aud6")[0].play();
  }
  // if (currentSlide == 16) {
  //   $("#aud7")[0].play();
  // }
  if (currentSlide == 17) {
    $("#aud7")[0].play();
  }
  if (currentSlide == 18) {
    $("#aud8")[0].play();
  }
  if (currentSlide == 19) {
    $("#aud9")[0].play();
  }
  if (currentSlide == 20) {
    $("#aud10")[0].play();
  }
  if (currentSlide == 21) {
    $("#aud11")[0].play();
  }
  

}
function playLocutionCarrusel(currentSlide) {
  //console.log("entra playLocutionCarrusel");
  resetLocutionSlide();
  resetLocution();
  if (currentSlide == 1) {
    $("#acar1")[0].play();
  }
  if (currentSlide == 2) {
    $("#acar2")[0].play();
  }
  if (currentSlide == 3) {
    $("#acar3")[0].play();
  }
  if (currentSlide == 4) {
    $("#acar4")[0].play();
  }
  if (currentSlide == 5) {
    $("#acar5")[0].play();
  }
  if (currentSlide == 6) {
    $("#acar6")[0].play();
  }
  if (currentSlide == 7) {
    $("#acar7")[0].play();
  }
}
