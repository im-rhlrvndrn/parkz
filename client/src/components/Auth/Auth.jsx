import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Auth.scss';
import AuthInput from './AuthInputs/AuthInput';

const Auth = (props) => {
    const [authState, setAuthState] = useState('login');

    React.useEffect(() => {
        setAuthState(props.match.params.auth);
    }, []);

    return (
        <div className='authWrapper'>
            <form>
                <h1>{authState === 'login' ? 'Welcome to Parkz' : 'Join Parkz'}</h1>
                {authState === 'register' && <AuthInput htmlFor='full name' />}
                <AuthInput htmlFor='email' type='email' />
                <AuthInput htmlFor='password' type='password' />
                {authState === 'register' && (
                    <AuthInput htmlFor='confirm password' type='password' />
                )}
                <button type='submit'>{authState === 'login' ? 'Login' : 'Register'}</button>
                {authState === 'login' ? (
                    <div className='login-list'>
                        <Link to='/forgotpassword'>
                            {authState === 'login' ? 'Forgot Password' : null}
                        </Link>
                        <Link to='/auth/register'>
                            {authState === 'login'
                                ? 'Create a new account'
                                : 'Already have an account? Login'}
                        </Link>
                    </div>
                ) : (
                    <div className='register-list'>
                        <Link to='/auth/login'>
                            {authState === 'login'
                                ? 'Create a new account'
                                : 'Already have an account? Login'}
                        </Link>
                    </div>
                )}
            </form>
            <div className='image'></div>
        </div>
    );
};

export default Auth;
