import React from "react";
import Article from './Article'

const posts = [
    {
      id: 1,
      title: "Components 101",
      date: "December 15, 2020",
      preview: "Setting up the building blocks of your site",
    },
    {
      id: 2,
      title: "React Data Flow",
      date: "December 11, 2020",
      preview: "Passing props is never passé",
    },
    {
      id: 3,
      title: "Function Components vs Class Components",
      date: "December 10, 2020",
      preview: "React, meet OOJS.",
    },
  ];

function ArticleList({articles}) {
    console.log(articles)
    const articleItems = articles.map((article)=>{
        return(
            <Article key ={article.id} title= {article.title} date= {article.date} preview={article.preview}></Article>
        )
    })
  return (
<main>
<div>{articleItems}</div>
</main>
  );
}

export default ArticleList;
  