// Placeholder
// $('#inputSearch').placeholderTypewriter({
//     text: document.getElementById("inputSearch").getAttribute("data-placeholder").split(';') 
// });

// Filter
function filter() {
    console.log(123);
}

// Scroll
$(window).scroll(function () {
    $(window).scrollTop() >= 500 ? $('#scroll').show() : $('#scroll').hide();
});
document.getElementById('scroll').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: `smooth`
    })
})

// Promotion time
function promotion(countDownDate) {
    console.log(123);
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
            `<div class="promotion-item text-center me-4"><span class="d-block mt-2">` + days + `</span>Ngày</div>
             <div class="promotion-item text-center me-4"><span class="d-block mt-2">`+ hours + `</span>Giờ</div>
             <div class="promotion-item text-center me-4"><span class="d-block mt-2">`+ minutes + `</span>Phút</div>
             <div class="promotion-item text-center me-4"><span class="d-block mt-2">`+ seconds + `</span>Giây</div>
            `;
    }, 1000);
}

// Disable enter submit
$(document).on("keypress", "form", function (event) {
    return event.keyCode != 13;
});

// Quantity
$('.product-detail-quantity a').on('click', function () {
    var a = $(this);
    var oldValue = a.parent().parent().find('input').val();

    if (a.hasClass('btn-plus')) {
        var newVal = parseFloat(oldValue) + 1;
    } else {
        var newVal = oldValue > 1 ? parseFloat(oldValue) - 1 : 1;
    }
    a.parent().parent().find('input').val(newVal);
    onDetailChange();
});

// Toast
function showErrorToast() {
    toast("Thất bại!", "Có lỗi xảy ra, vui lòng liên hệ quản trị viên.", "error", 3000);
}

function toast(title, message, type, duration = 5000) {
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
