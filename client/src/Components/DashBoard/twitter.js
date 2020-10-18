import React, { Component } from 'react'
import { Timeline } from 'react-twitter-widgets'

export default class twitter extends Component {
    render() {
        return (
            <Timeline
                dataSource={{
                    sourceType: 'profile',
                    screenName: 'elonmusk'
                }}
                options={{
                    height: '400',
                    width: '300'
                }}
            />
        )
    }
}
