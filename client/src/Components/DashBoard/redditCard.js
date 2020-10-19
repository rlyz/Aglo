import React, { Component } from 'react'

export default class redditCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            preview: ''
        }
    }
    render() {
        if (this.props.data.thumbnail == 'self') {
            return (
                <div className="col-lg-4 col-sm-6 mb-4">
                    <div className="card h-100">
                        <a target="_blank" rel="external" href={`https://www.reddit.com${this.props.data.permalink}`}>
                            <img className="card-img-top" src={`https://picsum.photos/id/${Math.pow(this.props.data.ups, 2)}/200/300`} width='348px' height='231px' />
                            <div className="card-body">
                                <h4 className="card-title">{this.props.data.title}</h4>
                            </div>
                        </a>
                    </div>
                </div>
            )
        }
        return (
            <div className="col-lg-4 col-sm-6 mb-4">
                <div className="card h-100">
                    <a target="_blank" rel="external" href={`https://www.reddit.com${this.props.data.permalink}`}>
                        <img className="card-img-top" src={this.props.data.thumbnail ? this.props.data.thumbnail : this.props.data.url_overridden_by_dest} width='348px' height='231px' />
                        <div className="card-body">
                            <h4 className="card-title">{this.props.data.title}</h4>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}
