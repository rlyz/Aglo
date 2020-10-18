import React, { Component } from 'react'
import Youtube from "./youtube";
import Twitter from "./twitter";
import Reddit from './reddit';
import Medium from './medium';

export default class dashboard extends Component {
    render() {
        return (
            <div>
                <Youtube />
                <Twitter />
                <Reddit />
                <Medium />
            </div>
        )
    }
}
