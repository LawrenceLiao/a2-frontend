import './App.css';
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Main from './components/Main/Main';

const PrivateRoute = ({ component: Component, ...rest }) => ( <
    Route {...rest }
    render = {
        (props) => (
            localStorage.getItem('login') === 'true' ?
            < Component {...props }
            /> :
            < Redirect to = {
                { pathname: '/login' } }
            />
        )
    }
    />
);

const PublicRoute = ({ component: Component, ...rest }) => ( <
    Route {...rest }
    render = {
        (props) => (
            localStorage.getItem('login') === 'true' ?
            < Redirect to = {
                { pathname: '/main' } }
            /> :
            < Component {...props }
            />
        )
    }
    />
);

const App = () => (  
    <Router >
    < Switch >
    <PublicRoute exact path = "/" component = { Login }/> 
    <PublicRoute path = "/login" component = { Login } /> 
    <PublicRoute path = "/signup" component = { Signup }/>
    <PrivateRoute path = "/main" component = {Main} />
    </Switch> 
    </Router>
)

export default App;