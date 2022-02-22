import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {

        let { title, description, imgurl, newsUrl, author, date, source } = this.props;

        return (
            <div className="my-4">
                <div className="card">
                    <img src={!imgurl ? "https://imgix.gizmodo.com.au/content/uploads/sites/2/2022/01/17/iStock-1157754893-e1642401046333.jpg?ar=16%3A9&auto=format&fit=crop&q=65&w=1200" : imgurl} style={{ width: "295px", height: "250px" }} className="card-img-top" alt='C:\Users\Ryzen\Desktop\React_Projects_new\gamehub\public' />
                    <div className="card-body">
                        <h5 className="card-title">{title.slice(0, 100)}...</h5>
                        <p className="card-text">{description.slice(0, 100)}...</p>
                        <span class="badge bg-success">{source}</span>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
