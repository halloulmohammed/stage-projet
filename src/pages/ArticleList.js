import React from 'react';
import {Article} from './Article';
import { articles } from '../data/articles';


export const ArticleList = () => {
  return (
    <div className="article-list">
      {articles.map(article => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  );
};
