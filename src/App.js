import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authRequest, logoutRequest } from './App/store/reducers/authSlice';
import { getProductsRequest } from './App/store/reducers/productSlice';
import { isAuthenticated } from './App/auth/authService';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import Login from './App/pages/Login';
import Home from './App/pages/Home';
import { selectAuthUser, selectAuthLoading, selectAuthError, selectProducts, selectProductsLoading, selectProductsError } from './App/store/selector'; 

function App() {


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector(selectAuthUser);
  const authLoading = useSelector(selectAuthLoading);
  const authError = useSelector(selectAuthError);
  const products = useSelector(selectProducts);
  const productsLoading = useSelector(selectProductsLoading);
  const productError = useSelector(selectProductsError);

 

  useEffect(() => {
    const checkAuth = async () => {
        if(isAuthenticated()){
            dispatch({type: 'auth/silentTokenRequest'})
        } else if (location.pathname !== '/login'){
            navigate('/login')
        }
    }
    checkAuth()
}, [dispatch, navigate, location]);

  useEffect(() => {
    if (user) {
      dispatch(getProductsRequest());
    }
  }, [dispatch, user]);

  const handleLogin = () => {
    dispatch(authRequest());
  };

  const handleLogout = () => {
    dispatch({ type: 'auth/logoutRequest' });
    navigate('/login')
  };

  if(authLoading){
    return <div>Loading...</div>
  }

  if(authError){
    return <div>Auth Error: {authError}</div>
  }

  return (
    <div className="App">
        <nav>
            <Link to="/">Home</Link>
            {!user && <Link to="/login">Login</Link>}
            {user && <button onClick={handleLogout}>Logout</button>}
        </nav>
        <Routes>
            <Route path="/" element={user ? <Home products={products} productsLoading={productsLoading} productError={productError}/> : <div>Please Login</div>} />
            <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        </Routes>
    </div>
  );
}

export default App;