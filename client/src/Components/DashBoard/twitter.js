import React, { Component } from 'react'
import { Timeline } from 'react-twitter-widgets'

export default class twitter extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Timeline
                dataSource={{
                    sourceType: 'list',
                    id: `${this.props.list}`
                    // screenName: `${this.props.account}`
                }}
                options={{
                    height: '425',
                    width: '350'
                }}
            />
        )
    }
}
