import React from 'react';
import { Link } from 'react-router-dom';

export const Article = ({ article }) => {
  return (
    <div className="article">
      <div className='articleContent'>
        <h2>{article.title}</h2>
        <div className='articleDesc'>
          <p>{article.header}</p>
          {article.src && <img src={article.src} alt={article.title} />}
        </div>
        <Link to={`/article/${article.id}`}>
          Read More..
        </Link>
      </div>
    </div>
  );
};


