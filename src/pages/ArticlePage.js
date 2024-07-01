// src/pages/ArticlePage.js

import React from 'react';
import {ArticleList} from './ArticleList';
import '../style/articlepage.css'; // Import CSS file for styling

export const ArticlePage = () => {
  return (
    <div className="article-page">
      <h1 className="page-title">Articles about Ultras</h1>
      <ArticleList />
    </div>
  );
};

