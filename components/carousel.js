import React from 'react';
import ReactDOM from 'react-dom';
import NavItem from '../react-components/nav-item';
import Slide from '../react-components/slide';

export function render() {
    return { replace: '' }
}

export function mount(ctx, props, el) {
    if (process.env.PENGUIN_ENV === 'production') return;

    const {id, slides} = props;

    class Carousel extends React.Component {
    	componentDidMount() {
    		console.log($('#' + id));
    		$('#' + id).carousel();
    	}
        render() {
            return (
            	<div id={id} className="carousel slide" data-ride="carousel" data-component='Carousel'>
	                <ol className="carousel-indicators">
	                	{slides.map((navItem, index) =>
							<NavItem key={navItem} carousel={'#' + id} slideNo={index}/>
						)}
			        </ol>
			        <div className="carousel-inner">
			        	{slides.map((slide, index) =>
							<Slide key={`slide-${slide}`} imageUrl={slide} slideNo={index}/>
						)}
			        </div>
			        <a className="carousel-control-prev" href={'#' + id} role="button" data-slide="prev">
			            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
			            <span className="sr-only">Previous</span>
			        </a>
			        <a className="carousel-control-next" href={'#' + id} role="button" data-slide="next">
			            <span className="carousel-control-next-icon" aria-hidden="true"></span>
			            <span className="sr-only">Next</span>
			        </a>
		        </div>
            );
        }
    }

    ReactDOM.render(<Carousel />, el);
}