import React, { Component } from 'react'
import '../Styles/bgposter.css'
import PropTypes from 'prop-types'

export default class Bgposter extends Component {
    static defaultProps = {
        category: 'general'
    }

    static propTypes = {
        category: PropTypes.string
    }
    constructor() {
        super();
        this.state = {
            color: "purple"
        }
    }
    componentDidMount() {
        if (this.props.category === 'general') {
            this.setState({ color: "purple" });
        }
        else if (this.props.category === 'business') {
            this.setState({ color: "green" });
        }
        else if (this.props.category === 'entertainment') {
            this.setState({ color: "skyblue" });
        }
        else if (this.props.category === 'health') {
            this.setState({ color: "red" });
        }
        else if (this.props.category === 'science') {
            this.setState({ color: "blue" });
        }
        else if (this.props.category === 'sports') {
            this.setState({ color: "yellow" });
        }
        else {
            this.setState({ color: "orange" });
        }
    }
    render() {
        return (
            <div
                className="bgposter"
                style={{ backgroundColor: `${this.state.color}` }}
            >
                <h1>{this.props.category.toUpperCase()}</h1>
            </div>
        )
    }
}
