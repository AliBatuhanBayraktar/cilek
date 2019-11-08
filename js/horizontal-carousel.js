export class horizontalCarouselClass {

    constructor() {
        //
    }

    horizontalCarousel(id) {

        // Değerler
        let carousel = document.getElementById(id);
        let carouselItem = carousel.querySelectorAll('.item');
        let nextButton = carousel.querySelectorAll('.next-button')[0];
        let prevButton = carousel.querySelectorAll('.prev-button')[0];

        // Carouseli çalıştır.
        this.slide(carouselItem);

        // Carousel navigasyon noktalarını oluştur ve aktifliğini düzenle.
        this.createCarouselDots(carousel, carouselItem);
        let dots = carousel.querySelectorAll('.slider-dots li');
        this.carouselDotsActive(dots);

        // Carousel navigasyonunu çalıştır.
        this.clickButton(carouselItem, prevButton, nextButton, dots);

    }


    slide(item) {

        // İlk slide sırasını belirle.
        this.itemQueue = 0;

        // İlk sliderı göster.
        item[this.itemQueue].style.display = 'flex';

        // Belirtilen saniye aralıkları ile nextSlide metodunu çalıştır.
        this.interval = setInterval(() => this.nextSlide(item), 5000);

    }

    clickButton(item, prevButton, nextButton, dots) {

        // Geri butonunu tıklandığında prevSlide metodunu çalıştır.
        prevButton.addEventListener('click', () => {
            clearInterval(this.interval);
            this.prevSlide(item);
            this.interval = setInterval(() => this.nextSlide(item), 5000);
            this.carouselDotsActive(dots);
            event.preventDefault();

        });

        // İleri butonuna tıklandığında nextSlide metodunu çalıştır.
        nextButton.addEventListener('click', () => {
            clearInterval(this.interval);
            this.nextSlide(item);
            this.interval = setInterval(() => this.nextSlide(item), 5000);
            this.carouselDotsActive(dots);
            event.preventDefault();
        });

        // Heer nokta için bir döngü yap.
        for (let i = 0; i < dots.length; i++) {

            // Noktaya tıklanması için event oluştur.
            dots[i].addEventListener('click', () => {

                clearInterval(this.interval);
                this.nextSlide(item, i);
                this.interval = setInterval(() => this.nextSlide(item), 5000);
                this.carouselDotsActive(dots);
                event.preventDefault();

            });

        }

    }

    nextSlide(item, targetItem) {

        // Bütün slideları görünmez hale getir.
        for (let i = 0; i < item.length; i++) {
            item[i].style.display = 'none';
        }

        // Eğer slide geçişi için hedef belirtilmemişse
        if ( targetItem === undefined) {

            // Slide sırasını slide item sayısından fazla olmayacak şekilde güncelle.
            // Eğer fazla olursa 0'a dön.
            if (this.itemQueue < item.length - 1) {
                this.itemQueue++;
            } else {
                this.itemQueue = 0;
            }

        } else {

            // Hedeflenen slidın sayısını slide sırasına eşitle.
            this.itemQueue = targetItem;

        }

        // Belirlenen slideı görünen hale getir.
        item[this.itemQueue].style.display = 'flex';

    }

    prevSlide(item) {

        // Bütün slideları görünmez hale getir.
        for (let i = 0; i < item.length; i++) {
            item[i].style.display = 'none';
        }

        // Slide sırasını s0'dan az olmayacak şekilde güncelle.
        // Eğer fazla olursa item sayısı kaçsa o sayıya dön.
        if (this.itemQueue > 0) {
            this.itemQueue--;
        } else {
            this.itemQueue = item.length - 1;
        }

        // Belirlenen slideı görünen hale getir.
        item[this.itemQueue].style.display = 'flex';

    }

    createCarouselDots(carousel, item) {

        // Noktalar için ul tagını oluştur
        let dots = document.createElement('ul');
        dots.className = 'slider-dots';
        carousel.appendChild(dots);

        // ul tagının içine her bir slide için nokta oluştur.
        for ( let i = 0; i < item.length; i++ ) {

            let dot = document.createElement('li');
            dot.innerHTML = '<span></span>';
            dots.appendChild(dot);

        }

    }

    carouselDotsActive(dots){

        // Bütün noktalardan aktifliği kaldır.
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = '';
        }

        // Belirlenen nokta için aktiflik getir.
        dots[this.itemQueue].className = 'active';

    }
}
