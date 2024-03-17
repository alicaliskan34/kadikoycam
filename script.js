//! SLİDER YAPIMI SLİDER YAPIMI
//! SLİDER YAPIMI
let slideritem = document.querySelectorAll(".slider-item");
let sliderSetting = document.querySelectorAll(".sliderSetting");
let slider = document.querySelector(".slider");

sliderSetting[0].addEventListener("click", () => {
    slider.scrollLeft = 0;
    sliderSetting[0].classList.add("sliderActive");
    sliderSetting[1].classList.remove("sliderActive");
    sliderSetting[2].classList.remove("sliderActive");
    
})

sliderSetting[1].addEventListener("click", () => {
    let imgWidth = slider.offsetWidth;
    slider.scrollLeft = imgWidth;
    sliderSetting[1].classList.add("sliderActive");
    sliderSetting[0].classList.remove("sliderActive");
    sliderSetting[2].classList.remove("sliderActive");
    
})

sliderSetting[2].addEventListener("click", () => {
    let imgWidth = slider.offsetWidth;
    slider.scrollLeft = 2 * imgWidth;
    sliderSetting[2].classList.add("sliderActive");
    sliderSetting[0].classList.remove("sliderActive");
    sliderSetting[1].classList.remove("sliderActive");
    
})

let imgWidth = slider.offsetWidth;

let currentIndex = 0; // Mevcut slider pozisyonunu takip eden indeks

function autoSlide() {
    currentIndex++; // Bir sonraki fotoğrafa geç
    if (currentIndex >= slideritem.length) {
        currentIndex = 0; // Eğer son fotoğraftaysak, ilk fotoğrafa dön
    }

    updateSliderPosition();
    updateActiveSetting();
}

function updateSliderPosition() {
    slider.scrollLeft = imgWidth * currentIndex; // Slider'ın pozisyonunu güncelle
}

function updateActiveSetting() {
    // Tüm sliderSetting öğelerinin "sliderActive" sınıfını kaldır
    sliderSetting.forEach(setting => {
        setting.classList.remove("sliderActive");
    });

    // Mevcut indekse göre doğru sliderSetting öğesine "sliderActive" sınıfı ekle
    sliderSetting[currentIndex].classList.add("sliderActive");
}

// Başlangıçta slider ve ayarları güncelle
updateSliderPosition();
updateActiveSetting();

// Her 5 saniyede bir autoSlide fonksiyonunu çağıran setInterval
setInterval(autoSlide, 5000);





//!  AÇILIR KAPANIR MENUUU

let menuButton = document.querySelector(".menuu");
let menuResponsive = document.querySelector(".rmenu");

// Menüyü açıp kapatma işlemi
menuButton.addEventListener("click", () => {
    menuResponsive.classList.toggle("active");
    if (menuButton.innerHTML == `<i class="fa-solid fa-x"></i>`) {
        menuButton.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    } else {
        menuButton.innerHTML = `<i class="fa-solid fa-x"></i>`;
    }
});

// Ekran genişliğini kontrol edip, buna göre menüyü ayarlama
function adjustMenuOnResize() {
    if (window.innerWidth > 768) { // 768px, tipik bir tablet ekran boyutu. İhtiyaca göre bu değeri değiştirebilirsiniz.
        // Ekrandaki genişlik 768px'den büyükse, menüyü ve butonu varsayılan hale getir
        menuResponsive.classList.remove("active");
        menuButton.innerHTML = `<i class="fa-solid fa-bars"></i>`; // Veya menünüz kapalıyken göstermek istediğiniz simge
    }
}

// Pencere boyutu değiştiğinde adjustMenuOnResize fonksiyonunu çağır
window.addEventListener('resize', adjustMenuOnResize);

