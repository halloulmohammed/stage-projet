import React from 'react';
import  '../style/articllist.css';
import {Article} from './Article';
import {articles}  from '../data/articles';

export const ArticleList = () => {
  return (
    <div className="article-list">
      <h1 className="page-title">Articles about Ultras</h1>
      {articles[0].map(article => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  );
};

