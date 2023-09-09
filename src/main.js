document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
        const posY = window.scrollY;

        if (posY < alturaHero) {
            ocultaElementos();
        } else {
            exibeElementos();
        }

    })

    // Attraction Tabs
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(btn) {
            const abaAlvo = btn.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            esconderAbas();
            aba.classList.add('shows__list--is-active');
            removeBotaoAtivo();
            btn.target.classList.add('shows__tabs__button--is-active');
        })
    }

    // Accordion FAQ
    for (let i = 0; i < questions.length; i++ ) {
        questions[i].addEventListener('click', abreOuFechaResposta);
    }
})

function exibeElementos() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function ocultaElementos() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function abreOuFechaResposta(el) {
    const classe = 'faq__questions__item--is-open';
    const parent = el.target.parentNode;

    parent.classList.toggle(classe);
}

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active')
    }
}

function esconderAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}