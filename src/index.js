import $ from 'jquery';
import './scss/index.scss';

$('input, textarea').focus((e) => {
    const $this = $(e.currentTarget);
    const $label = $this.parent().find('label');
    $label.addClass('active');
});

$('input, textarea').blur((e) => {
    const $this = $(e.currentTarget);
    const $label = $this.parent().find('label');
    $label.removeClass('active'); 
})