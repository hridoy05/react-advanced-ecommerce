import React from 'react';
import FormInput from '../form-input/FormInput';
import './SignUp.style.scss'


class SignUp extends React.Component{
    state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
    render(){
        const {displayName, email, password, confirmPassword} = this.state
        return(
            <div class='sign-up'>
                <h2 className='title'>I don not have a account</h2>
                <span>Sign up with your email and account</span>
                <form className='sign-up-form'  onSubmit={this.handleSubmit}>
                    <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={this.handleChange}
                    label='Display Name'
                    required
                    >

                    </FormInput>
                    <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={this.handleChange}
                    label='Email'
                    required
                    >

                    </FormInput>
                    <FormInput
                    type='password'
                    name='pasword'
                    value={password}
                    onChange={this.handleChange}
                    label='pasword'
                    required
                    >

                    </FormInput>
                    <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={this.handleChange}
                    label='Confirm Password'
                    required
                    >

                    </FormInput>
                </form>
                  
            </div>
        )
    }
}

export default SignUp;