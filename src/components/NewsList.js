import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from '../../node_modules/axios/index';
import NewsItem from './NewsItem';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
            const query = category === 'all' ? '' : `&category=${category}`;
            console.log(query);
            const response = await axios.get(
                `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=f8c60e7813384c08bb89eb2f317b1af0`
          );
          setArticles(response.data.articles);
        } catch (e) {
          console.log(e);
        }
        setLoading(false);
      };
      fetchData();
    }, [category]);
  
    if (loading) {
      return <NewsListBlock>대기 중 ...</NewsListBlock>;
    }
    if (!articles) {
      return null;
    }
  
    return (
      <NewsListBlock>
        {articles.map((article) => (
          <NewsItem key={article.url} article={article} />
        ))}
      </NewsListBlock>
    );
  };

export default NewsList;