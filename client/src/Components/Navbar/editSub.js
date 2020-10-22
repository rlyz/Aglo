import React, { Component } from 'react';
import Form from './form';
import axios from 'axios';

export default class editSub extends Component {
    constructor(props) {
        super(props)
    }

    onClickHandler(e, _id, name) {
        e.preventDefault()
        const youtubeQueries = e.target.youtubeQueries.value;
        const twitter = e.target.twitter.value;
        const reddit = e.target.reddit.value;
        axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${youtubeQueries}&key=AIzaSyC7a7yjorBWX85JtYexyicEEH3BrsOAvTY`)
            .catch(err => console.log(err))
            .then(res => res.json())
            .then(res => {
                const { items } = res;
                const youtube = items.map(items => {
                    return items.id.videoId
                })
                console.log(youtube)
                axios({
                    method: "POST",
                    url: "/api/add",
                    data: { user_id: _id, user_name: name, reddit, twitter, youtubeQueries, youtube },
                    withCredentials: true,
                    credentials: 'include',
                })


            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <Form onClickHandler={this.onClickHandler} _id={this.props.props._id} name={this.props.props.user} />
        )
    }
}
