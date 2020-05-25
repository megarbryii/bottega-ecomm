import React, { Component } from 'react'

export class GreenPriceTag extends Component {
    render() {
        const { className, title } = this.props;
        return (
            <div className={`${className} green-price-tag`}>
                ${title}
            </div>
        )
    }
}

export default GreenPriceTag
