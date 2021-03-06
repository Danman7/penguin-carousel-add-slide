import React from 'react';
import ReactDOM from 'react-dom';

export default class Slide extends React.Component {
    render() {
        const {imageUrl, slideNo} = this.props;
        return (
            <div className={`carousel-item ${slideNo === 0 ? 'active' : ''}`}>
                <img className="d-block w-100" src={imageUrl} alt=""/>
                <div className="carousel-caption d-none d-md-block">
                    <h3 data-component='Inplace' data-props={`{"field":"slide-${slideNo}-headline"}`}>Headline</h3>
                    <p data-component='Inplace' data-props={`{"field":"slide-${slideNo}-text"}`}>Slide text</p>
                </div>
            </div>
        );
    }
}