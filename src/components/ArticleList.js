import React from "react";
import Article from './Article'

import blogData from "../data/blog"



function ArticleList(){


    const articleLists = blogData.posts.map(article=>{
        return <Article key ={article.title} minutes={article.minutes} title = {article.title} date ={article.date} preview={article.preview}/>
    })
    
 
    return(
        <main>
            {articleLists}
        </main>
    )
};

export default ArticleList;
  