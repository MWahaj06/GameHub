import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spin from './Spin'
import PropTypes from 'prop-types';


export class News extends Component {

    static defaultProps = {
        pageSize: 15,
        category: "gaming",
    }

    static propTypes = {
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    constructor(props) {
        super(props)
        this.state = {
            articles: [],
            loading: true,
            page: 1,
        }
        document.title = `Game Hub - ${this.props.category}`;
    }


    handleNext = async () => {
        window.scrollTo(0, 0);
        if (this.state.page + 1 > Math.ceil(this.state.totRes / this.props.pageSize)) {

        }
        else {
            let url = `https://newsapi.org/v2/everything?q=${this.props.category}&sortBy=publishedAt&language=en&apiKey=${this.props.api}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({ loading: true });
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            })

        }
    }

    handlePrev = async () => {
        window.scrollTo(0, 0);
        let url = `https://newsapi.org/v2/everything?q=${this.props.category}&sortBy=publishedAt&language=en&apiKey=${this.props.api}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/everything?q=${this.props.category}&sortBy=publishedAt&language=en&apiKey=${this.props.api}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            totRes: parsedData.totalResults,
            articles: parsedData.articles,
            loading: false
        })
    }

    render() {
        return (
            <div className="container">
                <marquee scrollamount="15"><h1 className="text-center my-4">Top Headlines for {this.props.category}</h1></marquee>
                {this.state.loading && <Spin />}
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-3" key={element.url}>
                            <NewsItem title={element.title ? element.title : " "} description={element.description ? element.description : " "} imgurl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>
                    })}
                    <div className="container d-flex justify-content-between fixed-bottom">
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-outline-danger" onClick={this.handlePrev}>&larr; Previous</button>
                        <button type="button" className="btn btn-outline-success" onClick={this.handleNext}>Next &rarr;</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default News
