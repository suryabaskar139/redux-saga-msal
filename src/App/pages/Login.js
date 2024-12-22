import React from 'react';
const Login = ({ handleLogin }) => {
    return (
        <div>
            <h1>Login</h1>
            <button type="button" class="btn btn-primary" onClick={handleLogin}>Login with Azure AD</button>
        </div>
    )
}

export default Login