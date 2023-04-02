import React, { Component } from 'react'
import NewsItem from './NewsItem'
// import PropTypes from 'prop-types';

export class ClassCompWithPagination extends Component {
    // static propTypes = {
    //     pageSize: PropTypes.number
    // }
    // static defaultProps = {
    //     pageSize: 20
    // }
    pageSize = 20;

    constructor() {
        super();
        this.state = {
            page: 1,
            articles: [],
            loader: false
        }
    }

    getData = async () => {
        this.setState({
            loader: true
        });
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=ce60d56fde9243b9a55803452a4c4324&pageSize=${this.pageSize}&page=` + this.state.page;
        await fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    articles: data.articles,
                    loader: false,
                    totalResults: data.totalResults
                })
                console.log(data);
            })
            .catch(error => console.error('Error-', error));
        console.log(this.state.articles);
    }

    handlerNext = async () => {
        this.setState({ page: this.state.page + 1 }, this.getData);
    }
    handlerPrev = async () => {
        this.setState({ page: this.state.page - 1 }, this.getData);
    }

    async componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <div className='row'>
                <div className='col-12 text-center'>
                    {this.state.loader && <div className="spinner-grow text-primary" role="status">
                        <span className="sr-only"></span>
                    </div>}
                </div>
                {!this.state.loader && this.state.articles && this.state.articles.map((article, index) =>
                    <NewsItem key={article.publishedAt} article={article} />
                )}
                <div className='col-12 d-flex justify-content-between'>
                    <button disabled={this.state.page <= 1} onClick={this.handlerPrev} type="button" className="btn btn-primary">Previous</button>
                    <button disabled={Math.ceil(this.state.totalResults / this.pageSize) <= this.state.page} onClick={this.handlerNext} type="button" className="btn btn-primary">Next</button>
                </div>
            </div>
        )
    }
}

export default ClassCompWithPagination
