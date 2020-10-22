import React, { Component } from 'react'
import Youtube from "./youtube";
import Twitter from "./twitter";
import Reddit from './reddit';
import Medium from './medium';
import axios from 'axios';

export default class dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            accessToken: this.props.accessToken,
            _id: this.props.props._id,
            name: this.props.props.user
        }
    }
    componentDidMount() {
        if (this.state._id) {
            const { _id, name } = this.props.props
            axios.post('/api', { _id })
                .then(res => {
                    console.log(res.data)
                    if (res.data) {
                        this.setState({
                            subReddits: res.data.reddit,
                            twitter: res.data.twitter,
                            youtube: res.data.youtube
                        })
                    }
                })
        }
    }
    componentDidUpdate(previousProps) {
        if (previousProps.props._id !== this.props.props._id) {
            const { _id, name } = this.props.props
            if (_id) {
                axios.post('/api', { _id })
                    .then(res => {
                        if (res.data) {
                            this.setState({
                                subReddits: res.data.reddit,
                                twitter: res.data.twitter,
                                youtube: res.data.youtube
                            })
                        }
                    })
            }
            this.setState({
                subReddits: '',
                twitter: '',
                youtube: ''
            })
        }
    }


    render() {
        if (this.state.subReddits) {
            const reddit = this.state.subReddits.map((item, index) => {
                return <Reddit subReddit={item} key={index} />
            })
            const twitter = this.state.twitter.map((item, index) => {
                return <Twitter list={item} key={index} />
            })
            var youtube = this.state.youtube
            youtube.sort(() => Math.random() - 0.5)
            youtube.length = 5
            var youtubeTrimmed = youtube.map((item, index) => {
                return (
                    <Youtube accessToken={this.props.accessToken} videoId={item} />
                )
            })
            return (
                <div>
                    <div className="row">
                        {youtubeTrimmed}
                    </div>
                    {twitter}
                    {reddit}
                    <Medium />
                </div>
            )
        }
        return null
    }
}
