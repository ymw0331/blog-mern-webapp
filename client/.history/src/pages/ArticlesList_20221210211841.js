import React from 'react';
import articleContent from './article-content';

const ArticlesList = () => {
  return (
    <div>
      <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>
        Articles
      </h1>
      <div classname='container py-4 mx-auto'>
        <div className='flex flex-wrap -m-4'>
          {articleContent.map((article, index) => (
            <div key={index}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlesList;
