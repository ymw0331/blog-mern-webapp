import React from 'react';
import { useParams } from 'react-router-dom';
import articleContent from './article-content';

const Article = () => {
  const { name } = useParams(); //name refered to App.js article route /:name
  const article = articleContent.find((article) => article.name === name);
  if (!article) return <h1>Article does not exist!</h1>;

  return (
    <>
      <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>
        {article.title}
      </h1>

      {article.content.map((paragraph, index) => (
        <p className='mx-auto leading-relaxed text-base mb-4' key={index}>
          {paragraph}
        </p>
      ))}

      <h1 className=''></h1>
    </>
  );
};

export default Article;
