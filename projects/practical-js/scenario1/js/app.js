
window.onload = function () {
    let emailModal = document.getElementsByClassName('email-modal')[0];

    let closeButton = document.getElementsByClassName('email-modal__close-btn')[0];

    let emailInput = document.getElementsByClassName('email-modal__input')[0];

    let emailButton = document.getElementsByClassName('email-modal__button')[0];

    let thankMessage = document.getElementsByClassName('email-thank')[0];

    let declineOffer = document.getElementsByClassName('email-modal__decline-offer')[0];

    let emailState = false;

    let showModal = () => {
        if (emailState == false) {
            emailModal.classList.add('email-modal--visible');
            emailState = true;
        }
    }

    let closeModal = () => {
        emailModal.classList.remove('email-modal--visible');
    }

    let addErrors = () => {
        document.getElementsByClassName('email-modal__error-message')[0].classList.add('email-modal__error-message--active');
        document.getElementsByClassName('email-modal__form-group')[0].classList.add('email-modal__form-group--error');
    }

    let removeErrors = () => {
        document.getElementsByClassName('email-modal__error-message')[0].classList.remove('email-modal__error-message--active');
        document.getElementsByClassName('email-modal__form-group')[0].classList.remove('email-modal__form-group--error');
    }

    let showThankMessage = () => {
        thankMessage.classList.add('email-thank--success');
        setTimeout(() => {
            closeModal();
        }, 3000)
    }

    // function ValidateEmail(email) {
    //     return /\s+@\s+\.\s+/.test(email);
    // }
    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    declineOffer.addEventListener('click', () => {
        closeModal();
    });

    emailInput.addEventListener('click', () => {
        removeErrors();
    });

    emailButton.addEventListener('click', () => {
        if (validateEmail(emailInput.value)) {
            showThankMessage();
        } else {
            addErrors();
        }
    });

    closeButton.addEventListener('click', () => {
        closeModal();
    });

    document.body.addEventListener('mouseleave', () => {
        showModal()
    });
}