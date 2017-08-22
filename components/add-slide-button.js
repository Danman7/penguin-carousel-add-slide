import React from 'react';
import ReactDOM from 'react-dom';

export function render() {
    return { replace: '' }
}

export function mount(ctx, props, el) {
    if (process.env.PENGUIN_ENV === 'production') return;

    // get number of slides
    var slides = $(props.carousel + ' .carousel-item').length;

    // class AddSlideButton extends React.Component {
    //     render() {
    //         return <h1 > Hello, { this.props.name } < /h1>;
    //     }
    // }

    el.onclick = e => {
        // add nav item
        $(props.carousel + ' .carousel-indicators').append('<li data-target="' + props.carousel + '" data-slide-to="' + slides + '"></li>');

        // add default slide
        var slideMarkup = [
            '<div class="carousel-item">',
            '<img class="d-block w-100" src="/static/images/cats3.jpg" alt="">',
            '<div class="carousel-caption d-none d-md-block">',
            '<h3 data-component="Inplace" data-props=\"{"field":"slide-' + slides + '-headline"}\">Headline</h3>',
            '<p data-component="Inplace" data-props=\"{"field":"slide-' + slides + '-text"}\">Slide text</p>',
            '</div>',
            '</div>'
        ].join('');

        $(props.carousel + ' .carousel-inner').append(slideMarkup);

        slides += 1;
    }
}