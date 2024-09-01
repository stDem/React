import React from 'react';
import {useParams} from 'react-router-dom';

 const ArticleDetail=({articles}) => {
    const {id} = useParams();
    const article = articles.find(article=> article.id === parseInt(id));

    if (!article){
        return <div>The page is not found</div>
    };
  
    return (
    <div>
        <h2>{article.title}</h2>
        <p>{article.content}</p>
    </div>
  );
};
export default ArticleDetail;