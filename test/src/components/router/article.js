import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import ArticleDetail from './articleDetail';
import ArticleList from './articleList';

const articles= [
    {id: 1, title:'Article 1', content: 'Content of the article 1'},
    {id: 2, title:'Article 2', content: 'Content of the article 2'},
    {id: 3, title:'Article 3', content: 'Content of the article 3'},
  ];
  
 const Article=() =>{
  return (
    <Router>
    <div>
      <h1>Article viewer app</h1>
      <Routes>
        <Route path="/articles/:id" element={<ArticleDetail articles = {articles}/>}/>
        <Route path="*" element={<ArticleList articles = {articles}/>}/>
      </Routes>
    </div>
  </Router>
  );
};


export default Article;