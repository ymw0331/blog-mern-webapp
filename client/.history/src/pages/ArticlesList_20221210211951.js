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
            <div key={index} className='p-4 md:w-1/2'>
              <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                <Link to={`/article/`}></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlesList;
