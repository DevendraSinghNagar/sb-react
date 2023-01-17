import React, { useState, useEffect } from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from '../shared/Loader'
import NewsItem from './NewsItem'

function NewsFxWithInfiniteScroll() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const pageSize = 30;
  let totalResults = 0;
  const [page, setPage] = useState(0);
  const [articles, setArticles] = useState([]);
  const [loader, setLoader] = useState(true);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${apiKey}&pageSize=${pageSize}&page=` + (page + 1);
    // const url = `https://jsonplaceholder.typicode.com/posts/`+ page;    
    await fetch(url)
      .then(response => response.json())
      .then(data => {
        setPage(page + 1);
        setArticles(articles.concat(data.articles));
        setLoader(false);
        totalResults = data.totalResults;
      })
      .catch(error => {
        console.error('Error-', error);
      });

  }

  useEffect(() => {
    fetchMoreData();
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <div className='text-center'>
        <h1>Top Headlines</h1>
        {loader && <Loader />}
      </div>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<Loader />}
      // height={200}
      >
        <div className='row'>
          {!loader && articles.length > 0 && articles.map((article, index) =>
            <NewsItem key={index} article={article} index={index} />
          )}
        </div>
      </InfiniteScroll>
    </>
  )
}

export default NewsFxWithInfiniteScroll

