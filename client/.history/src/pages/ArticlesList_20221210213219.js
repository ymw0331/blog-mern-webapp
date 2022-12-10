import React from 'react';
import articleContent from './article-content';
import { Link } from 'react-router-dom';
import Articles from '../components/Articles';

const ArticlesList = () => {
  return (
    <div>
      <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>
        Articles
      </h1>
      <div classname='container py-4 mx-auto'>
        <div className='flex flex-wrap -m-4'>
          <Articles articles=/>
        </div>
      </div>
    </div>
  );
};

export default ArticlesList;
