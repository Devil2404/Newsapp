import React, { Component } from 'react'
import loading from '../Material/loading.gif'
export default class Spinner extends Component {
    render() {
        return (
            <div className="loading">
                <img src={loading} alt="loading" />
            </div>
        )
    }
}
