import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import {Component1} from "../1";
import {Component2} from "../2";
import {Component3} from "../3";
import {Component4} from "../4";
import {Component5} from "../5";
import {Component6} from "../6";
import {Component7} from "../7";

import style from './main.module.css'


export function Main() {
    return (
        <BrowserRouter basename={'/'}>
            <div>Hello World!</div>
            <Switch>
                <Route exact path={'/1'}>
                    <Component1/>
                </Route>
                <Route exact path={'/2'}>
                    <Component2/>
                </Route>
                <Route exact path={'/3'}>
                    <Component3/>
                </Route>
                <Route exact path={'/4'}>
                    <Component4/>
                </Route>
                <Route exact path={'/5'}>
                    <Component5/>
                </Route>
                <Route exact path={'/6'}>
                    <Component6/>
                </Route>
                <Route exact path={'/7'}>
                    <Component7/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}