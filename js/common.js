import $ from 'jquery';
import jQuery from 'jquery';
window.$ = $;
window.jQuery = jQuery;


let input = $('.js-focus input');
let textarea = $('textarea');

$(document).ready(function () {
    input.focus(function () {
        $(this).closest('label').addClass('active');
    });
    input.focusout(function () {
        if($(this).val()) {
        }
        else {
            $(this).closest('label').removeClass('active');
        }
    });
    textarea.focus(function () {
        $(this).closest('label').addClass('active');
    });
    textarea.focusout(function () {
        if($(this).val()) {
        }
        else {
            $(this).closest('label').removeClass('active');
        }

    });
});

const classForContainer = 'js-accordion',
    classForButton = 'js-accordion-button',
    classForDropdown = 'js-accordion-dropdown',
    classForContent = 'js-accordion-content';

var accordions = document.querySelectorAll('.' + classForContainer);

createsAccordion(accordions);

function createsAccordion(elems) {

    elems.forEach(function (elem) {
        var button = elem.querySelector('.' + classForButton),
            dropdown = elem.querySelector('.' + classForDropdown),
            content = elem.querySelector('.' + classForContent),
            contentHeight = content.clientHeight;

        elem.addEventListener('click', function (event) {
            event.stopPropagation();
        });

        dropdown.style.height = "0";
        dropdown.style.overflow = "hidden";

        button.addEventListener('click', function (event) {
            if (elem.classList.contains('js-open')) {
                elem.classList.remove('js-open');
                dropdown.style.height = "0";
                return;
            }

            elems.forEach(function (elem) {
                var dropdown = elem.querySelector('.' + classForDropdown);
                if (elem.classList.contains('js-open')) {
                    elem.classList.remove('js-open');
                    dropdown.style.height = "0";
                }
            });

            elem.classList.add('js-open');
            dropdown.style.height = contentHeight + 'px';
        });
    });

    document.addEventListener('click', function (event) {
        elems.forEach(function (elem) {
            if (elem.classList.contains('js-open')) {
                var dropdown = elem.querySelector('.' + classForDropdown);
                elem.classList.remove('js-open');
                dropdown.style.height = "0";
            }
        });
    });
}



$('.b-lk-card__item-border').on('click', function () {
    let $this = $(this);
    let label = $this.find('label');
    let input = $this.find('input');

    $('.b-lk-card__item-border').each(function () {
        if ($(this).hasClass('active') && $(this).find('label').hasClass('radio')) {
            $(this).removeClass('active');
            $(this).find('label').removeClass('radio');
            $(this).find('input').removeAttr('checked');

        }

    });

    input.attr('checked','checked');
    $this.toggleClass('active');
    label.toggleClass('radio');

});

var copyTextareaBtn = document.querySelector('.js-textareacopybtn');

if(copyTextareaBtn) {
    copyTextareaBtn.addEventListener('click', function(event) {
        var copyTextarea = document.querySelector('.js-copytextarea');
        copyTextarea.select();

        try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            console.log('Copying text command was ' + msg);
        } catch (err) {
            console.log('Oops, unable to copy');
        }
    });
}

