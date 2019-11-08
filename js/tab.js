export class tabClass {

    constructor() {
        // Tab
        this.tab = document.getElementsByClassName('tab');

        // Taba ait butonları ve içerikleri bul
        for ( let i = 0; i < this.tab.length; i++ ) {

            // Buton
            let button = this.tab[i].querySelectorAll('.tab-button');
            // İçerik
            let content = this.tab[i].querySelectorAll('.tab-content');

            // Metodları Çalıştır
            this.tabClickButton(content, button);
            this.tabDisplay(content, 0);
        }
    }


    tabClickButton(content, button) {
        // Gelen buton parametresini for döngüsüne sok
        for (let i = 0; i < button.length; i++) {

            // Döngü içerisinde click eventi ile tabDisplay metodunu çalıştır.
            // Ardından eventi durdur.
            button[i].onclick = () => {
                this.tabDisplay(content, button[i].dataset.target);
                event.preventDefault()
            }
        }
    }

    tabDisplay(content, target) {
        // Parametre ile gelen contenti for döngüsüne sokarak bütün alakalı contentleri gizle.
        for ( let i = 0; i < content.length; i++) {
            content[i].style.display = 'none';
        }

        // Alakalı contenti göster
        if ( target === 0 ) {
            // Sayfa açıldığında ilk gösterilecek olan content.
            content[0].style.display = 'block';
        } else {
            //Buton tıklandığında ilgili target gösterilsin.
            document.getElementById(target).style.display = 'block';
        }
    }

}
