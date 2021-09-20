import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';
import Splash from './splash/splash_container';
import LogIn from './session/login_form_container';
import Signup from './session/signup_form_container';

const App = () => (
    <div>
        <Modal />
        <Splash />
    </div>
);

export default App;