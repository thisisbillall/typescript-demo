import { Login } from './Login';
import React from 'react';
import { ProfileProps } from './Profile';

type LoginProp={
    isLoggedIn:boolean
    Component:React.ComponentType<ProfileProps>
}

export default function Private({isLoggedIn,Component} :LoginProp ){

    if(!isLoggedIn){
        return <Login/>;
    }
    else{
        return <Component name="Bilal"/>
    }
}