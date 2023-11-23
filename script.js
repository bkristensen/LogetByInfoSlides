//var elem = document.documentElement;
//function openFullscreen() {
//  if (elem.requestFullscreen) {
//    elem.requestFullscreen();
//  } else if (elem.webkitRequestFullscreen) { /* Safari */
//    elem.webkitRequestFullscreen();
//  } else if (elem.msRequestFullscreen) { /* IE11 */
//    elem.msRequestFullscreen();
//  }
//}
//
//function closeFullscreen() {
//  if (document.exitFullscreen) {
//    document.exitFullscreen();
//  } else if (document.webkitExitFullscreen) { /* Safari */
//    document.webkitExitFullscreen();
//  } else if (document.msExitFullscreen) { /* IE11 */
//    document.msExitFullscreen();
//  }
//}
//
//openFullscreen();

function updateDateTime() {
    const now = new Date();
    const currentDateTime = now.toLocaleString();
    document.querySelector('.timer_clock').textContent = currentDateTime;
}

function reloadSlides() {
    location.reload();
}
// call the `updateDateTime` function every second
setInterval(updateDateTime, 1000);

setInterval(reloadSlides, 1000 * 60 * 60);