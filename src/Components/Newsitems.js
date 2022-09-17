import React, { Component } from 'react'
import '../Styles/newsitem.css'
import TTWF from '../Material/The Times of World.png'

export default class Newsitems extends Component {
    render() {
        let { title, desc, imageurl, url } = this.props;
        return (
            <div className="Newsi">
                <div className="newsimg">
                    <img src={imageurl ? imageurl : TTWF} alt="" />
                </div>
                <div className="newstitle" id="newstitle">
                    <div className="title">
                        {title}
                    </div>
                    <div className="desc">
                        {desc}
                    </div>
                    <div className="btn">
                        <a href={url} target="_blank">
                            <button>
                                Read More about news
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
