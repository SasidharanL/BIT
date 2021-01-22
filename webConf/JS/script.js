var btn = document.getElementById('nav-btn');
let icon = document.getElementById("icon");
btn.addEventListener('click', (event)=>{
    document.getElementById("drop-down").classList.toggle("active");
    icon.classList.toggle("active");

    if(icon.classList.contains("active")){
        icon.classList.replace("fa-bars", "fa-times");
    }
    else{
        icon.classList.replace("fa-times", "fa-bars");
    }
});  

function updateTimer(deadline) {
    var time = deadline - new Date();
    return {
        'days': Math.floor(time / (1000 * 60 * 60 * 24)),
        'hours': Math.floor((time / (1000 * 60 * 60)) % 24),
        'minutes': Math.floor((time / 1000 / 60) % 60),
        'seconds': Math.floor((time / 1000) % 60),
        'total': time
    };
}


function animateClock(span) {
    span.className = "turn";
    setTimeout(function () {
        span.className = "";
    }, 700);
}

function startTimer(id, deadline) {
    var timerInterval = setInterval(function () {
        var clock = document.getElementById(id);
        var timer = updateTimer(deadline);

        clock.innerHTML = '<span>' + timer.days + '</span>' +
            '<span>' + timer.hours + '</span>' +
            '<span>' + timer.minutes + '</span>' +
            '<span>' + timer.seconds + '</span>';

        //animations
        var spans = clock.getElementsByTagName("span");
        animateClock(spans[3]);
        if (timer.seconds == 59) animateClock(spans[2]);
        if (timer.minutes == 59 && timer.seconds == 59) animateClock(spans[1]);
        if (timer.hours == 23 && timer.minutes == 59 && timer.seconds == 59) animateClock(spans[0]);

        //check for end of timer
        if (timer.total < 1) {
            clearInterval(timerInterval);
            clock.innerHTML = '<h1>The countdown Finished!</h1>';
            document.getElementById('units').classList.toggle('disappear');
        }


    }, 1000);
}


window.onload = function () {
    var deadline = new Date("October 25, 2021 0:00:00");
    startTimer("clock", deadline);
};
