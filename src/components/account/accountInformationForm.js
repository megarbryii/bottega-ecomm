import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton, LongGreyButton } from '../formFields';


class AccountInformationForm extends Component {
    constructor() {
        super();

        this.state = {
            showPasswords: false
        }
    }


    render() {
        const { className, handleSubmit } = this.props;
        
        return (
            <form  onSubmit={handleSubmit} className={`${className} account-information-form`}>
                <Field 
                    className='account-information-form__name' 
                    type='text'
                    name='name' 
                    placeholder='Name' 
                    title='Name'
                    component={FormInput}
                />

                <Field 
                    className='account-information-form__email' 
                    type='email'
                    name='email' 
                    placeholder='Email' 
                    title='Email'
                    component={FormInput}
                />

                <Field 
                    className='account-information-form__street' 
                    type='text'
                    name='street' 
                    placeholder='Street' 
                    title='Street'
                    component={FormInput}
                />

                <Field 
                    className='account-information-form__city' 
                    type='text'
                    name='city' 
                    placeholder='City' 
                    title='City'
                    component={FormInput}
                />

                <Field 
                    className='account-information-form__state' 
                    type='text'
                    name='state' 
                    placeholder='State' 
                    title='State'
                    component={FormInput}
                />

                <Field 
                    className='account-information-form__zip-code' 
                    type='text'
                    name='zipCode' 
                    placeholder='Zip Code' 
                    title='Zip Code'
                    component={FormInput}
                />

                
                { this.state.showPasswords ?
                
                [

                    <Field
                    key={0} 
                    className='account-information-form__current-password' 
                    type='password'
                    name='current-password' 
                    placeholder='Current Password' 
                    title='Current Password'
                    component={FormInput}
                />, 

                <Field 
                    key={1}
                    className='account-information-form__new' 
                    type='password'
                    name='new-password' 
                    placeholder='New Password' 
                    title='New Password'
                    component={FormInput}
                />, 

                <Field
                    key={2}
                    className='account-information-form__confirm' 
                    type='password'
                    name='confirm-password' 
                    placeholder='Confirm Password' 
                    title='Confirm Password'
                    component={FormInput}
                />, 

                <Field 
                    key={3}
                    className='account-information-form__update' 
                    type='submit'
                    name='update' 
                    title='Update Account'
                    onClick={() => this.setState({ showPasswords: false })}
                    component={FormButton}
                />,

                <Field 
                    key={4}
                    className='account-information-form__cancel' 
                    type='button'
                    name='cancel' 
                    title='Cancel'
                    short={true}
                    onClick={() => this.setState({ showPasswords: false })}
                    component={FormButton}
                />
                
            ]
                :
                <Field 
                    className='account-information-form__change-password' 
                    type='button'
                    name='changePassword'
                    labelTitle='Password'
                    title='Change Password'
                    onClick={() => this.setState({ showPasswords: true })}
                    component={LongGreyButton}
                />
                }
                <div className='account-information-form__line' />

            </form>
        )
    }
}

AccountInformationForm = reduxForm({
    form: 'AccountInformationForm'
})(AccountInformationForm);

export default AccountInformationForm;