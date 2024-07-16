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
      <main>
      <a href="/article">
    <svg className="back-icon" viewBox="0 0 24 24">
        <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
    </svg>
</a>

        <span className="logo">{article.logo}</span>

        <header>
          <h1 className="title">
          {article.title}
          </h1>

          <div className="author">
            <img src="https://raw.githubusercontent.com/vdsabev/editorial-exploration/master/author.png" />&nbsp;by&nbsp;
            <a href="#" rel="author">{article.author}</a>
          </div>
          <p className="subtitle">{article.header}
          </p>
        </header>
        <div className="images">
          <img className="images__primary" src={article.src} />
          <img className="images__secondary" src={article.secondpic} />
          <button type="button" className="images__more">
            <svg viewBox="0 0 24 24">
              <path d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z" />
            </svg>
            4 images
          </button>
        </div>
        <section className="text">
          <p>{article.content}</p>
        </section>
        <div id='bottom'></div>
        <a href='#bottom' className="down-icon" >
          <svg  viewBox="0 0 24 24">
          <path d="M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z" />
          </svg>
        </a>
      </main>
    </div>
  );
};


