import React from 'react';
import { useParams } from 'react-router-dom';

const Article = () => {
  const { name } = useParams; //name refered
  return (
    <div>
      <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>
        This is article
      </h1>
    </div>
  );
};

export default Article;
