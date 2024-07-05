import React from 'react';
import { useParams } from "react-router-dom";
import { articles } from '../data/articles';
import '../style/articlepage.css'; // Import CSS file for styling

export const ArticlePage = () => {
  const params = useParams();
  const id = parseInt(params.id); // Parse id as integer
  const article = articles[0].find(article => article.id === id);

  // Handle case where article with given id is not found
  if (!article) {
    return <div className="article-page">Article not found</div>;
  }

  return (
    <div className="article-page">
      <div className='articleContent'>
        <h2>{article.title}</h2>
        <div>
          <p>{article.content}</p>
          {article.src && <img src={article.src} alt={article.title} />}
        </div>
      </div>
    </div>
  );
};


