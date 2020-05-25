import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import SignUpForm from './signupForm';
import PageTitle from '../pageTitle';




class SignUp extends Component {
    
    onSubmit = (fields) => {
        console.log(fields)
    }

    componentDidMount = () => {
        this.props.setHeaderLinks([]);
        this.props.setNavbarLinks([]);
    }


    render() {
        return (
            <div className='sign-up'>
                <PageTitle className='sign-up__page-title'  title='Register' />
                <SignUpForm onSubmit={this.onSubmit} className='sign-up__form'/>
            </div>
        )
    }
}

SignUp = connect(null, actions)(SignUp);

export default SignUp;