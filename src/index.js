import $ from 'jquery';
import './scss/index.scss';

$.ajax({
    url: '/api/portfolio',
    type: 'GET',
})
.done(function(data) {
    console.log("success",data);
})
.fail(function() {
    console.log("error");
})
.always(function() {
    console.log("complete");
});


$('input, textarea').focus((e) => {
    const $this = $(e.currentTarget);
    const $label = $this.parent().find('label');
    $label.addClass('active');
});

$('input, textarea').blur((e) => {
    const $this = $(e.currentTarget);
    const $label = $this.parent().find('label');
    $label.removeClass('active'); 
});

$('.portfolio-category-filter').click((e) => {
    
    e.preventDefault();

    const $this = $(e.currentTarget);
    const $li = $this.parent();

    $li.toggleClass('active');
});

$('.chip .close').click((e) => {
    const $this = $(e.currentTarget);
    $this.parent().remove();
});

$('.contact .submit').click((e) => {
    console.log('Submit');
    
    e.preventDefault();
   
    const $toasts = $('.toast');    
    $toasts.fadeIn(400);

    setTimeout(() => {
        $toasts.fadeOut(400);
    }, 3000);
});

$('.portfolio-header h3, .portfolio-actions a').click((e) => {

    e.preventDefault();

    const $modals = $('.modal-container');
    
    $modals.fadeIn(200);
    activateOverlay();
});

$('.modal-close, .overlay').click((e) => {

    e.preventDefault();

    const $modals = $('.modal-container');
    
    deactivateOverlay();   
    $modals.fadeOut(100);
});

function activateOverlay() {
    const $overlay = $('.overlay');
    $overlay.show();
}

function deactivateOverlay() {
    const $overlay = $('.overlay');
    $overlay.hide();
}
