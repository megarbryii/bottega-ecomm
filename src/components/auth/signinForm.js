import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../formFields';
import Details from '../details';

import '../../history';
import history from '../../history';

class SignInForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        const links = [
            {   
                id:0,
                title: 'Not registered? Create account here',
                onClick: () => history.push('/signup')
            },
            {   
                id:1,
                title: 'Forgot Email?',
                onClick: () => console.log('Forgot email')
            },
            {   
                id:2,
                title: 'Forgot Password?',
                onClick: () => console.log('Forgot password')
            },
        ]
        return (
            <form  onSubmit={handleSubmit} className={`${className} sign-in-form`}>
                <Field 
                    className='sign-in-form__email' 
                    type='email'
                    name='email' 
                    placeholder='Email' 
                    title='Email'
                    component={FormInput}
                />

                <Field 
                    className='sign-in-form__password' 
                    type='password'
                    name='password' 
                    placeholder='Password' 
                    title='Password'
                    component={FormInput}
                />

                <div className='sign-in-form__line' />

                <Field 
                    className='sign-in-form__login' 
                    type='submit'
                    name='login' 
                    title='Login'
                    onClick={() => history.push('/account')}
                    component={FormButton}
                />

                <Details className='sign-in-form__details' title='Quick Links' links={links}/>
            </form>
        )
    }
}

SignInForm = reduxForm({
    form: 'SignIn'
})(SignInForm);

export default SignInForm;