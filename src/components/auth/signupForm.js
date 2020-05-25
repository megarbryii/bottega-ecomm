import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../formFields';
import Details from '../details';

import history from '../../history';

class SignUpForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        const info = [
            {   
                id:0,
                title: 'At least six charachters'
            },
            {   
                id:1,
                title: 'At least one number'
            },
            {   
                id:2,
                title: 'At least one character'
            },
        ]
        return (
            <form  onSubmit={handleSubmit} className={`${className} sign-up-form`}>
                <Field 
                    className='sign-up-form__name' 
                    type='text'
                    name='name' 
                    placeholder='Name' 
                    title='Name'
                    component={FormInput}
                />

                <Field 
                    className='sign-up-form__email' 
                    type='email'
                    name='email' 
                    placeholder='Email' 
                    title='Email'
                    component={FormInput}
                />

                <Field 
                    className='sign-up-form__password' 
                    type='password'
                    name='password' 
                    placeholder='Password' 
                    title='Password'
                    component={FormInput}
                />

                <Field 
                    className='sign-up-form__confirm' 
                    type='password'
                    name='confirm' 
                    placeholder='Confirm password' 
                    title='Confirm password'
                    component={FormInput}
                />

                <div className='sign-up-form__line' />

                <Field 
                    className='sign-up-form__login' 
                    type='submit'
                    name='create' 
                    title='Create Account'
                    onClick={() => history.push('/account')}
                    component={FormButton}
                />

                <Field 
                    className='sign-up-form__back' 
                    type='button'
                    name='back' 
                    title='Back'
                    short={true}
                    onClick={() => history.push('/signin')}
                    component={FormButton}
                />

                <Details className='sign-up-form__details' title='Password Requirements' infos={info}/>
            </form>
        )
    }
}

SignUpForm = reduxForm({
    form: 'SignIn'
})(SignUpForm);

export default SignUpForm;