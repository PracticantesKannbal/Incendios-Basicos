var countInterval;
$(".s1_e2").click(function () {
    $(".modal__juego-container").hide();
    $(".s2").show();
    $(".preg1").hide();
    $(".s1_e2").removeClass("fadeInDown").addClass("infinite heartBeat")
});

$(".s1_e3").click(function () {
    $(".s2").hide();
    $(".s3").show();
    $(".preg1").show();
});
$(".da-clic").click(function(){ $("#efct_clic")[0].play(); });
//Contador
function paddedFormat(num) {
    return num < 10 ? "0" + num : num;
}
function startCountDown(duration, element) {
    var secondsRemaining = duration;
    var min = 0;
    var sec = 0;
    countInterval = setInterval(function () {
        min = parseInt(secondsRemaining / 60);
        sec = parseInt(secondsRemaining % 60);

        element.textContent = `${paddedFormat(min)}:${paddedFormat(sec)}`;

        secondsRemaining = secondsRemaining - 1;
        if (secondsRemaining < 0) {
            clearInterval(countInterval);
            console.log("termino conteo");
            if (!firsttime_game2) {
                firsttime_game2 = true;
                $("#mod_repeat").show();
            } else {
                $("#mod_cotinue").show();
                $("#voice")[0].play();
            }

        };
    }, 1000);
}

$(".info").click(function () {
    $("#mod_info").show();
});

function removeAnim(param) {
    console.log("entra remove");
    $(".s2_p" + param + "_op1").removeClass("animated");
    $(".s2_p" + param + "_op2").removeClass("animated");
    $(".s2_p" + param + "_op3").removeClass("animated");
}

$(".elem_p").click(function () {
    validar_respuesta(this);
})

function validar_respuesta(param) {
    var question = $(param).attr("id").split("_")[0];
    var answer_selected = $(param).attr("id").split("_")[1];
    console.log(question + " " + answer_selected);
    $(".s2_" + question + "_e1").hide();

    if (question == "p1") {
        if (answer_selected == "op2") {
            $("#mod_good").show();
            $("#aud_win")[0].play();
            $(".s2_p1_e2").hide();
            $("#" + question + "_" + answer_selected).attr("src", "assets/img/parte_1/juego/pregunta-1/" + answer_selected + "_bien.png");
            $("#" + question + "_" + "op1").attr("src", "assets/img/parte_1/juego/pregunta-1/" + "op1" + "_mal.png");
            $("#" + question + "_" + "op3").attr("src", "assets/img/parte_1/juego/pregunta-1/" + "op3" + "_mal.png");
            nextQuestion(1, 2000);
        } else {
            $("#mod_p1_bad").show();
            $(".s2_p1_e2").hide();
            $("#" + question + "_" + answer_selected).attr("src", "assets/img/parte_1/juego/pregunta-1/" + answer_selected + "_mal.png");
            nextQuestion(1, 2000);
        }
    }

    if (question == "p2") {
        if (answer_selected == "op2") {
            $("#mod_good").show();
            $("#aud_win")[0].play();
            $(".s2_p2_e2").hide();
            $("#" + question + "_" + answer_selected).attr("src", "assets/img/parte_1/juego/Pregunta-2/" + answer_selected + "_bien.png");
            $("#" + question + "_" + "op1").attr("src", "assets/img/parte_1/juego/Pregunta-2/" + "op1" + "_mal.png");
            $("#" + question + "_" + "op3").attr("src", "assets/img/parte_1/juego/Pregunta-2/" + "op3" + "_mal.png");
            nextQuestion(2, 2000);
        } else {
            $("#mod_" + question + "_bad").show();
            $('#aud_error').get(0).play();
            $(".s2_p2_e2").hide();
            $("#" + question + "_" + answer_selected).attr("src", "assets/img/parte_1/juego/Pregunta-2/" + answer_selected + "_mal.png");
            nextQuestion(2, 2000);
        }
    }

    if (question == "p3") {
        if (answer_selected == "op1") {
            $("#mod_good").show();
            $("#aud_win")[0].play();
            $(".s2_p3_e2").hide();
            $("#" + question + "_" + answer_selected).attr("src", "assets/img/parte_1/juego/Pregunta-3/" + answer_selected + "_bien.png");
            $("#" + question + "_" + "op2").attr("src", "assets/img/parte_1/juego/Pregunta-3/" + "op2" + "_mal.png");
            $("#" + question + "_" + "op3").attr("src", "assets/img/parte_1/juego/Pregunta-3/" + "op3" + "_mal.png");
            nextQuestion(3, 2000);
        } else {
            $("#mod_" + question + "_bad").show();
            $('#aud_error').get(0).play();
            $(".s2_p3_e2").hide();
            $("#" + question + "_" + answer_selected).attr("src", "assets/img/parte_1/juego/Pregunta-3/" + answer_selected + "_mal.png");
            nextQuestion(3, 2000);
        }
    }

    if (question == "p4") {
        if (answer_selected == "op3") {
            $("#mod_good").show();
            $("#aud_win")[0].play();
            $(".s2_p4_e2").hide();
            $("#" + question + "_" + answer_selected).attr("src", "assets/img/parte_1/juego/Pregunta-4/" + answer_selected + "_bien.png");
            $("#" + question + "_" + "op1").attr("src", "assets/img/parte_1/juego/Pregunta-4/" + "op1" + "_mal.png");
            $("#" + question + "_" + "op2").attr("src", "assets/img/parte_1/juego/Pregunta-4/" + "op2" + "_mal.png");
            nextQuestion(4, 2000);
        } else {
            $("#mod_" + question + "_bad").show();
            $('#aud_error').get(0).play();
            $(".s2_p4_e2").hide();
            $("#" + question + "_" + answer_selected).attr("src", "assets/img/parte_1/juego/Pregunta-4/" + answer_selected + "_mal.png");
            nextQuestion(4, 2000);

        }
    }

    if (question == "p5") {
        if (answer_selected == "op1") {
            $("#mod_good").show();
            $("#aud_win")[0].play();
            $(".s2_p5_e2").hide();
            $("#" + question + "_" + answer_selected).attr("src", "assets/img/parte_1/juego/Pregunta-5/" + answer_selected + "_bien.png");
            $("#" + question + "_" + "op2").attr("src", "assets/img/parte_1/juego/Pregunta-3/" + "op2" + "_mal.png");
            $("#" + question + "_" + "op3").attr("src", "assets/img/parte_1/juego/Pregunta-3/" + "op3" + "_mal.png");
            nextQuestion(5, 2000);
        } else {
            $("#mod_" + question + "_bad").show();
            $('#aud_error').get(0).play();
            $(".s2_p5_e2").hide();
            $("#" + question + "_" + answer_selected).attr("src", "assets/img/parte_1/juego/Pregunta-5/" + answer_selected + "_mal.png");
            nextQuestion(5, 2000);
        }
    }
}

function nextQuestion(question, time) {
    next = question + 1;
    setTimeout(function () {
        $("#mod_good,#mod_p" + question + "_bad,.preg" + question + " ").hide();
        if (next <= 5) {
            $(".preg" + next).show();
            setTimeout(function () { removeAnim(next); }, 4000);
        } else {
            clearInterval(countInterval);
            $("#mod_finish").show();
        }
    }, time);
}

$(".mod_btn_fin").click(function () {
    $('#mod1_juego').loadHTML('void.html');
    $('#mod1_juego').hide();
    $('#lbl_text_refi').show().doAnim('bounceInUp');
    $('#btn_infografia_fin').show().doAnim('bounceIn');
    $("#audi23")[0].play();
});

$(".mod_btn_try").click(function () {
    $('#mod1_juego').loadHTML('juego_2.html');
});

$(".mod_btn_clo").click(function () {
    $('#mod1_juego').loadHTML('void.html');
    $('#mod1_juego').hide();
});



// $('.btn__juego-instrucciones').click(function () {
//     $(".modal__juego-container").show();
// })

// $('.btn__juego-instrucciones_cerrar').click(function () {
//     $(".modal__juego-container").hide();
// })