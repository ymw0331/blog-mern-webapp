import React from 'react';
import { useParams } from 'react-router-dom';
import articleContent from './article-content';

const Article = () => {
  const { name } = useParams(); //name refered to App.js article route /:name
  const article = articleContent.find((article) => article.name === name);
  if (!article) return <h1>Article does not exist!</h1>;

  return (
    <>
     
      {article.content.map((paragraph, index) => (
        <p className='mx-auto leading-relaxed text-base mb-4' key={index}>
          {paragraph}
        </p>
      ))}


    </>
  );
};

export default Article;
