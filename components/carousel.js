import React from 'react';
import ReactDOM from 'react-dom';
import NavItem from './nav-item';
import Slide from './slide';

export function render() {
    return { replace: '' }
}

export function mount(ctx, props, el) {
    if (process.env.PENGUIN_ENV === 'production') return;

    const {id, slides} = props;

    class Carousel extends React.Component {
        render() {
            return (
            	<div id={id} className="carousel slide" data-ride="carousel" data-component='Carousel'>
	                <ol className="carousel-indicators">
	                	{slides.map((navItem, index) =>
							<NavItem key={navItem} carousel={'#' + el.id} slideNo={index}/>
						)}
			        </ol>
			        <div className="carousel-inner">
			        	{slides.map((navItem, index) =>
							<Slide key={`slide-${navItem}`} imageUrl={navItem} slideNo={index}/>
						)}
			            <div className="carousel-item active">
			                <img className="d-block w-100" src="/static/images/cats1.jpeg" alt="First slide"/>
			                <div className="carousel-caption d-none d-md-block">
			                    <h3 data-component='Inplace' data-props='{"field":"slide-1-headline"}'>Headline</h3>
			                    <p data-component='Inplace' data-props='{"field":"slide-1-text"}'>Slide text</p>
			                </div>
			            </div>
			            <div className="carousel-item">
			                <img className="d-block w-100" src="/static/images/cats2.jpg" alt="Second slide"/>
			                <div className="carousel-caption d-none d-md-block">
			                    <h3 data-component='Inplace' data-props='{"field":"slide-2-headline"}'>Headline</h3>
			                    <p data-component='Inplace' data-props='{"field":"slide-2-text"}'>Slide text</p>
			                </div>
			            </div>
			        </div>
			        <a className="carousel-control-prev" role="button" data-slide="prev">
			            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
			            <span className="sr-only">Previous</span>
			        </a>
			        <a className="carousel-control-next" role="button" data-slide="next">
			            <span className="carousel-control-next-icon" aria-hidden="true"></span>
			            <span className="sr-only">Next</span>
			        </a>
		        </div>
            );
        }
    }

    ReactDOM.render(<Carousel />, el);
}