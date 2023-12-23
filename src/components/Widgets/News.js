import React from 'react'

const News = ({article}) => {
  return (
    <a href={article.url}>
      <div className="flex py-3 px-3 space-x-2">
        <div className="">
          <h4 className='font-semibold text-gray-800 text-[16px]'>{article.title}</h4>
          <p className='text-gray-500 text-sm'>-{article.source.name}</p>
        </div>
        <img className='rounded-xl' height='70px' width='70px' src={article.urlToImage}></img>
      </div>
    </a>
  );
}

export default News