import React from 'react';
import ReactDOM from 'react-dom';

export function render() {
    return { replace: '' }
}

export function mount(ctx, props, el) {
    if (process.env.PENGUIN_ENV === 'production') return;

    const {carousel, slides} = props;

    class Slide extends React.Component {
        render() {
            return (
                <div className="carousel-item">
                    <img className="d-block w-100" src="/static/images/cats3.jpg" alt=""/>
                    <div className="carousel-caption d-none d-md-block">
                        <h3>Headline</h3>
                        <p>Slide text</p>
                    </div>
                </div>
            );
        }
    }

    ReactDOM.render(<Slide />, el[0]);
}