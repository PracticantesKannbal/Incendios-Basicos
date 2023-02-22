var scorm = pipwerks.SCORM;
lmsConnected = scorm.init();
var g_avance = 1;
const g_avMax = 8;
//Control Scorm
function init_Course() {
  if (lmsConnected) {
    var completionstatus = scorm.get("cmi.core.lesson_status");
    var strAvance = scorm.get("cmi.suspend_data");
    if (completionstatus === "failed" || completionstatus === "incomplete") {
      if (strAvance === '') {
        g_avance = 1;
      } else {
        g_avance = parseInt(strAvance);
      }
    } else if (completionstatus === "completed" || completionstatus === "passed") {
      console.log('Ya haz completado la actividad con éxito');
      g_avance = g_avMax;
    }
    console.log(g_avance);
  } else {
    console.log("Advertencia: Esta actividad no está conectada al LMS, no se podrá guardar su progreso");
  }
}

function save_Status() {
  if (lmsConnected) {
    if (g_avance < g_avMax) {
      scorm.set("cmi.suspend_data", g_avance.toString());
      scorm.set("cmi.core.lesson_status", 'incomplete');
      scorm.set("cmi.core.score.raw", (g_avance / g_avMax) * 100);
      scorm.save();
    }
  } else {
    console.log("Advertencia: Esta actividad no está conectada al LMS, no se podrá guardar su progreso");
  }
}
function setComplete() {
  if (lmsConnected) {
    scorm.set("cmi.core.score.raw", 100);
    scorm.set("cmi.core.lesson_status", "passed");
    scorm.save();
  } else {
    console.log("Advertencia: Esta actividad no está conectada al LMS, no se podrá guardar su progreso");
  }
}
function exit_lms() {
  scorm.quit();
  parent.window.close();
}
window.onbeforeunload = function () {
  save_Status();
  window.scrollTo(0, 0);
};
