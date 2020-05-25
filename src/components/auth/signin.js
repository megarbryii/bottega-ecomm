import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import SignInForm from './signinForm';
import PageTitle from '../pageTitle';



class SignIn extends Component {

    onSubmit = (fields) => {
        console.log(fields)
    }

    componentDidMount = () => {
        this.props.setHeaderLinks([]);
        this.props.setNavbarLinks([]);
    }

    render() {
        return (
            <div className='sign-in'>
                <PageTitle className='sign-in__page-title'  title='Login' />
                <SignInForm onSubmit={this.onSubmit} className='sign-in__form'/>
            </div>
        )
    }
}

SignIn = connect(null, actions)(SignIn);

export default SignIn;