export class verticalCarouselClass {

    constructor(id, hover, time) {

        // Değişkenler
        this.carouselTime       = 5000;
        this.carouselSection    = document.getElementById(id);

        let carouselList = this.carouselSection.querySelector('.vertical-carousel-body');

        this.carousel(carouselList, time, hover);


    }

    // Listeyi kaydırma metodu

    carousel(list, time, hover) {

            // Her bir carousel için kendine özgü değerler oluştur
            let listContainer = list.querySelector('ul');
            let listItem = list.querySelectorAll('li');
            let listHeight = listItem[0].clientHeight;
            let listLenght = listItem.length;


            // Eğer zaman aralığı parametre ile belirtilirse bu değeri kullan.
            if (!time) {
                time = this.carouselTime;
            }

            this.slide(time, listHeight, listLenght, listContainer);

            if (hover) {

                this.stopAnnouncement(listContainer);
                this.startAnnouncement(time, listHeight, listLenght, listContainer);

            }

    }

    slide(time, height, lenght, list) {

        // İlk konumu belirle
        let top = 0;

        // Belirtilen zaman aralıklarında çalıştır.
        this.interval = setInterval(() => {

            // Yeni konumu belirle
            top -= height;

            // Koşul uygunlaşırsa konumu başa al
            if (top < -((lenght - 1) * height)) {
                top = 0;
            }

            // Konumu uygula
            list.style.top = top + 'px';

        }, time)

    }


    // Listeyi kaydırmaya başlat.
    startAnnouncement(time, listHeight, listLenght, listContainer) {
        listContainer.addEventListener('mouseleave', () => {
            this.slide(time, listHeight, listLenght, listContainer);
        });
    }

    // Listeyi kaydırmayı durdur.
    stopAnnouncement(list) {
        list.addEventListener('mouseover', () => {
            clearInterval(this.interval);
        });
    }

}
