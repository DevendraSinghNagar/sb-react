import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class NewsItem extends Component {
    // constructor(props) {
    //     super();
    //     console.log('props', props);
    // }

    render() {
        const { title, description, url, urlToImage } = this.props.article
        return (
            <article className='col-sm-3 mb-3'>
                <div className="card">
                    <img className="card-img-top" src={urlToImage} alt={title} />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={url} className="btn btn-outline-info">Read more</a>
                    </div>
                </div>
            </article>
        )
    }
}
NewsItem.propTypes = {
    article: PropTypes.object.isRequired
}
NewsItem.defaultProps = {
    article: {
        title: 'Title Here...',
        description: 'Desc...',
    }
}

export default NewsItem
