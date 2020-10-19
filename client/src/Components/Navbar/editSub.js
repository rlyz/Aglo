import React, { Component } from 'react';
import Form from './form';

export default class editSub extends Component {
    constructor(props) {
        super(props)
    }

    onClickHandler(e, _id) {
        e.preventDefault()
        const youtubeQueries = e.target.youtubeQueries.value;
        const twitter = e.target.twitter.value;
        const reddit = e.target.reddit.value;
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${youtubeQueries}&key=AIzaSyCBspJcn59nCeWMjCL8YgAmZ2cZd1AKMOg`)
            .then(res => res.json())
            .then(res => {
                const { items } = res;
                const videoId = items.filter(items => {
                    if (items.id.videoId) {
                        return items.id.videoId
                    }
                })
                console.log(videoId)


            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <Form onClickHandler={this.onClickHandler} _id={this.props.props._id} />
        )
    }
}
