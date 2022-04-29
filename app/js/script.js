const countdown = () => {
    const countDate = new Date('October 17, 2022 08:00:00').getTime();
    const now = new Date().getTime();
    // console.log(countDate);
    // console.log(now);

    const gap = countDate - now;
    const secoud = 1000;
    // console.log(gap);

    var time_ele = document.getElementById('count');
    var main_time = Math.floor(gap / secoud)
    var string_time = main_time.toLocaleString("en-US")
    time_ele.innerText = string_time + ' SECONDS'

}

setInterval(countdown, 1000)


// Background Music

var audio = new Audio('audio/lofi.mp3');
audio.loop = true;



