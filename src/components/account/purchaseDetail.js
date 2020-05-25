import React, { Component } from 'react';

import { connect } from 'react-redux';

const PurchaseDetailLabel = ({className, title, value}) => {
    return (
        <div className={`${className} purchase-detail-label`}>
            <div className='purchase-detail-label__label'>
                {title}
            </div>
            
            <div className='purchase-detail-label__value'>
                {value}
            </div>
        </div>
    )
}

class PurchaseDetail extends Component {
    render() {
        const { className, orderNumber, orderDate, total, creditCard, user } = this.props;
        const { name, shippingAddress } = user;
        return (
            <div className={`${className} purchase-detail`}>
                <PurchaseDetailLabel 
                    className='purchase-detail__order-number'
                    title='Order number'
                    value={orderNumber}
                />

                <PurchaseDetailLabel 
                    className='purchase-detail__order-date'
                    title='Order date'
                    value={orderDate}
                />

                <PurchaseDetailLabel 
                    className='purchase-detail__shipping'
                    title='Shipping Address'
                    value={`${name}~\n\r${shippingAddress}`}
                />

                <PurchaseDetailLabel 
                    className='purchase-detail__total'
                    title='Total'
                    value={total}
                />
                
                <PurchaseDetailLabel 
                    className='purchase-detail__credit-card'
                    title='Credit card'
                    value={creditCard}
                />

                <div className='purchase-detail__track-shipment'>
                    Track Shipment
                </div>

                <div className='purchase-detail__print-receipt'>
                    Print Receipt
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { purchaseDetail } = state.user;
    return{
        ...purchaseDetail
    }
}

PurchaseDetail = connect(mapStateToProps)(PurchaseDetail);

export default PurchaseDetail;