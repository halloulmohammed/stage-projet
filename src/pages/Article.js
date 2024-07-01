// src/components/Article.js

import React from 'react';

import { Comments } from "../component/Comments";
export const Article = ({ article }) => {
  

  return (
    <div className="article">
      <div className='arcticleContent'>
        <h2>{article.title}</h2>
        <p>{article.content}</p>
      </div>
      <h3>Comments:</h3>
      <Comments />
    </div>
  );
};


