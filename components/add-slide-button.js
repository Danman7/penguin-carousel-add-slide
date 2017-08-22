import React from 'react';
import ReactDOM from 'react-dom';
import {mount as navItemMount} from './nav-item';
import {mount as slideMount} from './slide';

export function render() {
    return { replace: '' }
}

export function mount(ctx, props, el) {
    if (process.env.PENGUIN_ENV === 'production') return;

    const {carousel} = props;

    // get number of slides
    var slides = $(carousel + ' .carousel-item').length;

    class AddSlideButton extends React.Component {
        addNewSlide() {
            navItemMount(ctx, {slides, carousel}, $(carousel + ' .carousel-indicators'));
            // slideMount(ctx, {slides, carousel}, $(carousel + ' .carousel-inner'));
            slides += 1;
        }

        render() {
            return (<button className="btn" onClick={this.addNewSlide}>{props.title}</button>);
        }
    }

    ReactDOM.render(<AddSlideButton />, el);
}