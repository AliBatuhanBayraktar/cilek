export class announcementList {

    constructor() {
        // Değişkenler

        this.announcementList     = document.getElementById('announcement-list-carousel').getElementsByTagName('ul');
        this.announcementListItem = this.announcementList[0].getElementsByTagName('li');

        // Kaç duyuru var?
        this.lenghtAnnouncement = this.announcementListItem.length;

        // Duyuru yükseklikleri kaç?
        this.heightAnnouncement = this.announcementListItem[0].clientHeight;
        this.top = 0;
        this.announcementTime = 4000;
    }

    // Listeyi kaydırma metodu

    announcement(hover , time) {

        // Eğer zaman aralığı parametre ile belirtilirse bu değeri kullan.
        if (time) {
            this.announcementTime = time;
        }

        // Kaydır
        this.interval = setInterval(() => {
            this.top -= this.heightAnnouncement;
            if (this.top < 0 - ((this.lenghtAnnouncement - 1) * this.heightAnnouncement)) {
                this.top = 0;
            }
            this.announcementList[0].style.top = this.top + 'px';
        }, this.announcementTime);

        // Eğer hover özelliği parametreler ile belirtilirse stopAnnouncement ve startAnnouncement metodlarını kullan.
        if(hover) {
            this.stopAnnouncement();
            this.startAnnouncement();
        }

    }

    // Listeyi kaydırmaya başlat.
    startAnnouncement() {
        this.announcementList[0].addEventListener('mouseleave', () => {
            this.announcement();
        });
    }

    // Listeyi kaydırmayı durdur.
    stopAnnouncement() {
        this.announcementList[0].addEventListener('mouseover', () => {
            clearInterval(this.interval);
        });
    }

}
