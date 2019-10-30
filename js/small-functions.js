export class smallFunctions {

    constructor() {

        // Toggle Button
        this.button = document.getElementsByClassName('toggle-button');

        // Input
        this.formElement = document.getElementsByClassName('form-element');

        // Show Password Button
        this.btnSwitchPassoword = document.getElementsByClassName('btn-switch-password');
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

    formElementMethod() {

        for ( let i = 0; i < this.formElement.length; i++ ) {

            let input = this.formElement[i].querySelector('input');
            let label = this.formElement[i].querySelector('label');

            let inputHeight = input.clientHeight;
            this.formElement[i].style.height = inputHeight + 21 + 'px';

            // Inputa girdiğimde labelin minimalize halini belirle.
            input.onfocus = () => {

                // Label konumunu ayarla
                label.style.fontSize = '11px';
                label.style.height = '21px';
                label.classList.add('label-on-focus');

                // Input uyarı rengini belirle
                this.formElement[i].classList.add('form-info');
                this.formElement[i].classList.remove('form-success', 'form-warning');
            };

            // Inputtan çıktığımda kontrolden sonra labelin şeklini belirle.
            input.onblur = () => {
                if ( 0 <! input.value.trim().length ) {

                    // Label konumunu ayarla
                    label.style.fontSize = '16px';
                    label.style.height = '100%';
                    label.classList.remove('label-on-focus');

                    // Input doluysa başarılı belirt.
                    this.formElement[i].classList.add('form-warning');
                    this.formElement[i].classList.remove('form-success', 'form-info');

                } else {

                    // Input boşsa hata belirt.
                    this.formElement[i].classList.add('form-success');
                    this.formElement[i].classList.remove('form-warning', 'form-info');
                }
            }

        }

    }

    // Kullanıcı istediğinde şifresini görmesi.
    showPasswordMethod() {

        // Bütün btnSwitchPassoword'leri döngüye sok.
        for ( let i = 0; i < this.btnSwitchPassoword.length; i++ ) {

            // Butona tıklandığında eylemi gerçekleştir.
            this.btnSwitchPassoword[i].onclick = () => {

                // Hedef input için değerler oluştur.
                let name = this.btnSwitchPassoword[i].dataset.target;
                let input = document.getElementsByName(name);

                // Hedef inputun typenı belirleyip toggle işlemini yap.
                if ( input[0].type === 'password' ) {
                    input[0].type = 'text';
                } else {
                    input[0].type = 'password';
                }

                // Diğer eventleri durdur!
                event.preventDefault();
            }

        }

    }

}
