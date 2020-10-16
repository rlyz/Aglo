import React, { Component } from 'react'

export default class youtube extends Component {
    constructor() {
        super()
        this.setState = {
            testing: ""
        }
    }

    componentDidMount() {
        fetch('/users')
            .then(res => res.text())
            .then(res => console.log(res))
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}
