import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

function FormSearchbar(props) {
    return (
        <div className='search-bar-grid'>
            <i className="fas fa-search search-bar-grid__icon"/>
            <input className={`${props.className} form-search-bar search-bar-grid__input`} {...props.input} type='text' placeholder={`${props.placeholder}`} />
        </div>
        
    )
}

export class ShopSearchbar extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit} className={`${className} shop-search-bar`}>
                <Field name='query' className='shop-search-bar__form-search-bar' placeholder='Search' component={FormSearchbar}/>
            </form>
        )
    }
}

ShopSearchbar = reduxForm({
    form: 'ShopSearchbar'
})(ShopSearchbar);

export default ShopSearchbar
