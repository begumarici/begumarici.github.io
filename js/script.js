// navbar and buttons - smooth scroll
function smoothScroll(targetId) {
    var target = document.getElementById(targetId);
    var targetPosition = target.getBoundingClientRect().top + window.scrollY;
    var startPosition = window.scrollY;
    var distance = targetPosition - startPosition;
    var duration = 1200; // 1.2 sec
    var startTime = null;

    function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var progress = easeInOutCubic(timeElapsed / duration);
        var run = startPosition + (distance * progress);

        window.scrollTo(0, run);

        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }

    requestAnimationFrame(animation);
}

// mouse - smooth scrolling 
let isScrolling = false;
let scrollDelta = 0;

window.addEventListener("wheel", function (event) {
    event.preventDefault();
    scrollDelta += event.deltaY * 0.15; 

    if (!isScrolling) {
        isScrolling = true;
        requestAnimationFrame(smoothMouseScroll);
    }
}, { passive: false });

function smoothMouseScroll() {
    let currentScroll = window.scrollY;
    let targetScroll = currentScroll + scrollDelta;

    scrollDelta *= 0.9; 

    window.scrollTo(0, targetScroll);

    if (Math.abs(scrollDelta) > 0.5) {
        requestAnimationFrame(smoothMouseScroll);
    } else {
        isScrolling = false;
    }
}
