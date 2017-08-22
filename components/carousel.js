import React from 'react';
import ReactDOM from 'react-dom';
import NavItem from './nav-item';

export function render() {
    return { replace: '' }
}

export function mount(ctx, props, el) {
    if (process.env.PENGUIN_ENV === 'production') return;

    const {id, slides} = props;

    class Carousel extends React.Component {
        render() {
            return (
            	<div id={id} class="carousel slide" data-ride="carousel" data-component='Carousel'>
	                <ol class="carousel-indicators">
	                	{slides.map((navItem, index) =>
							<NavItem key={navItem} carousel={'#' + el.id} slideNo={index}/>
						)}
			        </ol>
			        <div class="carousel-inner">
			            <div class="carousel-item active">
			                <img class="d-block w-100" src="/static/images/cats1.jpeg" alt="First slide"/>
			                <div class="carousel-caption d-none d-md-block">
			                    <h3 data-component='Inplace' data-props='{"field":"slide-1-headline"}'>Headline</h3>
			                    <p data-component='Inplace' data-props='{"field":"slide-1-text"}'>Slide text</p>
			                </div>
			            </div>
			            <div class="carousel-item">
			                <img class="d-block w-100" src="/static/images/cats2.jpg" alt="Second slide"/>
			                <div class="carousel-caption d-none d-md-block">
			                    <h3 data-component='Inplace' data-props='{"field":"slide-2-headline"}'>Headline</h3>
			                    <p data-component='Inplace' data-props='{"field":"slide-2-text"}'>Slide text</p>
			                </div>
			            </div>
			        </div>
			        <a class="carousel-control-prev" href={id} role="button" data-slide="prev">
			            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
			            <span class="sr-only">Previous</span>
			        </a>
			        <a class="carousel-control-next" href={id} role="button" data-slide="next">
			            <span class="carousel-control-next-icon" aria-hidden="true"></span>
			            <span class="sr-only">Next</span>
			        </a>
		        </div>
            );
        }
    }

    ReactDOM.render(<Carousel />, el);
}