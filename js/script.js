"use strict";
/* 1. Wyświetłenie artykułu po kliknięciu*/
const titleClickHandler = function(event){
    event.preventDefault();/* Dla pozostania na bieżącej części strony*/
    const clickedElement = this;
    console.log('Link was clicked!');

    /* [DONE] remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks){
        activeLink.classList.remove('active');
    }

  /* [DONE] add class 'active' to the clicked link */
  
    console.log('clickedElement:' + clickedElement);

  /* [DONE] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.post.active');

    for(let activeArticle of activeArticles){
        activeArticle.classList.remove('active');
    }
  /* [DONE] get 'href' attribute from the clicked link */
    const articleSelector = clickedElement.getAttribute('href');
    
    console.log(articleSelector);

  /* [DONE] find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(articleSelector);
    console.log(targetArticle);

  /* [DONE] add class 'active' to the correct article */
    targetArticle.classList.add('active');
}
    const links = document.querySelectorAll('.titles a');
  
    for(let link of links){
        link.addEventListener('click', titleClickHandler);
    }

/*2. Generowanie listy tytulów*/
const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

function generateTitleLinks(){

  /* [Done] remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    console.log (titleList);

	titleList.innerHTML = ' ';

  /* [Done] for each article */
    const articles = document.querySelectorAll(optArticleSelector);
    console.log (articles);
  
    for(let article of articles){
    console.log(article);
  }

  /* [Done] get the article id */
    articles.forEach(article => {
        const articleId = article.getAttribute('id');
        console.log(articleId);
  });

    /* find the title element */
    
    /* get the title from the title element */

    /* create HTML of the link */

    /* insert link into titleList */

}
/* Wykonanie funkcji generateTitleLinks*/
generateTitleLinks();