
function promotion(countDownDate) {
    var date = new Date(countDownDate).getTime();
    var x = setInterval(function () {
        // Tính toán thời gian
        var distance = date - +new Date().getTime();
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (distance < 0) {
            clearInterval(x);
            days = hours = minutes = seconds = 0;
        }

        document.getElementById('countdown').innerHTML =
            `<div class="promotion-item"><span class="d-block promotion-number">` + days + `</span>Ngày</div>
             <div class="promotion-item"><span class="d-block promotion-number">`+ hours + `</span>Giờ</div>
             <div class="promotion-item"><span class="d-block promotion-number">`+ minutes + `</span>Phút</div>
             <div class="promotion-item"><span class="d-block promotion-number">`+ seconds + `</span>Giây</div>
            `;
    }, 1000);
}


$(window).scroll(function () {
    if ($(window).scrollTop() >= 500) {
        $('#scroll').show();
    } else {
        $('#scroll').hide();
    }
});

document.getElementById('scroll').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: `smooth`
    })
})