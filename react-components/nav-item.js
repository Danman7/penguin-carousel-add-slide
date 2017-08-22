import React from 'react';
import ReactDOM from 'react-dom';

export default class NavItem extends React.Component {

    render() {
        const {carousel, slideNo} = this.props;
        return (<li className={slideNo === 0 ? 'active' : ''} data-target={carousel} data-slide-to={slideNo}></li>);
    }
}