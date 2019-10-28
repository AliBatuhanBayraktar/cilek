export class smallFunctions {

    constructor() {
        // Değişkenler
        this.button = document.getElementsByClassName('toggle-button');
    }

    toggleButton(){

        // Buton döngüsü
        for ( let i = 0; i < this.button.length; i++ ) {
            // Butona tıkladığında css sınıflarını değiştir.
            this.button[i].onclick = () => {
                this.target = document.getElementById(this.button[i].dataset.target);
                this.target.classList.toggle('open');
                document.getElementsByTagName('body')[0].classList.toggle('fixed');
                event.preventDefault();
            };
        }

    }

}
