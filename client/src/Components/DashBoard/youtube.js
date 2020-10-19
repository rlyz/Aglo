import React, { Component } from 'react'
import YouTube from 'react-youtube';

export default class youtube extends Component {
    constructor() {
        super()
        this.state = {
            testing: ""
        }
    }


    render() {
        if (this.props.videoId) {
            const opts = { height: '239', width: '290' }
            return (<>
                <div className="col-lg-4 col-sm-6 mb-4">
                    <div className="card h-100">
                        <YouTube opts={opts} videoId={this.props.videoId} />
                    </div>
                </div>
            </>
            )
        }
        return null
    }
}



{/* <div className="col-lg-4 col-sm-6 mb-4">
    <div className="card h-100">
        <a target="_blank" rel="external" href={`https://www.reddit.com${this.props.data.permalink}`}>
            <img className="card-img-top" src={this.props.data.thumbnail ? this.props.data.thumbnail : this.props.data.url_overridden_by_dest} width='348px' height='231px' />
            <div className="card-body">
                <h4 className="card-title">{this.props.data.title}</h4>
            </div>
        </a>
    </div>
</div> */}


//  `https://www.googleapis.com/youtube/v3/activities?part=contentDetails&channelId=${item.snippet.resourceId.channelId}&maxResults=1&key=AIzaSyCBspJcn59nCeWMjCL8YgAmZ2cZd1AKMOg` \



//  'https://www.googleapis.com/youtube/v3/subscriptions?part=snippet&mine=true&key=[YOUR_API_KEY]' \


        // fetch(`https://cors-anywhere.herokuapp.comhttps://www.googleapis.com/youtube/v3/search?part=snippet&q=React%20js&key=AIzaSyCBspJcn59nCeWMjCL8YgAmZ2cZd1AKMOg`)
        //     .then(res => res.json())
        //     .then(res => {
        //         console.log(res);
        //         this.setState({
        //             videoList: res.items
        //         })
        //     })
        //     .catch(err => console.log(err))