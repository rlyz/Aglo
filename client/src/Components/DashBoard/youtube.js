import React, { Component } from 'react'
import YouTube from 'react-youtube';

export default class youtube extends Component {
    constructor() {
        super()
        this.setState = {
            testing: ""
        }
    }

    componentDidMount() {
        fetch('https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.activities.list?part=snippet,contentDetails&home=true&key=AIzaSyCBspJcn59nCeWMjCL8YgAmZ2cZd1AKMOg')
            .then(res => res.text())
            .then(res => console.log(res))
    }
    render() {
        return (<>
            <YouTube videoId="x1tICdfXdyA" />
            <YouTube videoId="brKJFkLQWYo" />
        </>
        )
    }
}

//'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UC_ML5xP23TOWKUcc-oAE_Eg&order=date&key=[YOUR_API_KEY]'

//  'https://www.googleapis.com/youtube/v3/subscriptions?part=snippet&mine=true&key=[YOUR_API_KEY]' \
