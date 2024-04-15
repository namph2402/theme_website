// Placeholder
$('#inputSearch').placeholderTypewriter({
    text: document.getElementById("inputSearch").getAttribute("data-placeholder").split(';') 
});

// Scroll
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

// Promotion time
function promotion(countDownDate) {
    var date = new Date(countDownDate).getTime();
    var x = setInterval(function () {
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

// Toast
function showErrorToast() {
    toast({
        title: "Thất bại!",
        message: "Có lỗi xảy ra, vui lòng liên hệ quản trị viên.",
        type: "error",
        duration: 5000
    });
}

function toast({ title, message, type, duration = 5000 }) {
    const main = document.getElementById("toast");
    if (main) {
        const toast = document.createElement("div");

        const autoRemoveId = setTimeout(function () {
            main.removeChild(toast);
        }, duration + 1000);

        toast.onclick = function (e) {
            if (e.target.closest(".toast__close")) {
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        };

        const icons = {
            success: "fas fa-check-circle",
            error: "fas fa-exclamation-circle"
        };
        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);

        toast.classList.add("toastMsg", `toast--${type}`);
        toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;

        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>
            <div class="toast__close">
                <i class="fas fa-times"></i>
            </div>`;
        main.appendChild(toast);
    }
}