import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Home from './Home'
import LectureList from '../_lecture/LectureList'

export const PrivateRoute = ({ component: Component, authed, ...rest }) => (
    <Route {...rest} render={props => (
        authed === true
            ? <LectureList {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location} }} />
    )} />
)