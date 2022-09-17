import React, { Component } from 'react'
import '../Styles/news.css'
import Newsitems from './Newsitems'
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Spinner'
import PropTypes from 'prop-types'
export default class News extends Component {
    static defaultProps = {
        category: 'general'
    }

    static propTypes = {
        category: PropTypes.string
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            country: 'in',
            totalResults: 0,
            page: 0,
            pageSize: 10
        }
    }
    async componentDidMount() {
        this.props.progress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.props.category}&apiKey=58859d0fff5d48c8bfff2897d6d9a08a&page=1&pageSize=${this.state.pageSize}`;
        let data = await fetch(url);
        this.props.progress(40);
        let parasData = await data.json();
        this.props.progress(45);
        this.setState({
            articles: parasData.articles,
            totalResults: parasData.totalResults
        });
        this.props.progress(100);
    }

    fetchMoreData = async () => {
        this.setState({
            page: this.state.page + 1
        })
        const url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.props.category}&apiKey=58859d0fff5d48c8bfff2897d6d9a08a&page=${this.state.page}&pageSize=${this.state.pageSize}`;
        let data = await fetch(url);
        let parasData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parasData.articles),
            totalResults: parasData.totalResults
        });
    }
    capitalize(s) {
        return s && s[0].toUpperCase() + s.slice(1);
    }
    render() {
        {
            document.title = `${this.capitalize(this.props.category)}-The Times of World`
        }
        return (
            <div className="news-container">
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className="news-items">
                        {
                            this.state.articles.map((element) => {
                                return <Newsitems
                                    key={element.url}
                                    title={element.title}
                                    desc={element.description}
                                    imageurl={element.urlToImage}
                                    url={element.url}
                                />
                            })
                        }
                    </div>
                </InfiniteScroll>
            </div>
        )
    }
}
