import React, { useEffect, useState } from 'react'
import NewsItems from './NewsItems';


const NewsFeed = ({category}) => {

    const [ articles, setArticals] = useState([]);

    useEffect (() => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url).then(response => response.json()).then(data => setArticals(data.articles));
    },[category]);

  return (
    <div >
        

   {articles.map((news,index) => {
        return <NewsItems key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />

   })}
  </div>
)}

export default NewsFeed