"use strict";

/*2. Generowanie listy tytulów*/
const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list';

function generateTitleLinks(){

    /* [Done] remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    console.log (titleList);

	titleList.innerHTML = ' ';

    /* [Done] for each article */
    const articles = document.querySelectorAll(optArticleSelector);
    console.log (articles);
     
    let html = '';

    for(let article of articles){
        console.log(article);
        /* [Done] get the article id */
        const articleId = article.getAttribute('id');
        console.log(articleId);
        /* find the title element */
        const articleTitle = article.querySelector(optTitleSelector).innerHTML;
        /* create HTML of the link */
        const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';   
        console.log(linkHTML);
        /* insert link into titleList */
        titleList.insertAdjacentHTML('beforeend', linkHTML);
        html = html + linkHTML;
    }
    titleList.innerHTML = html;
}

/* Wykonanie funkcji generateTitleLinks*/
generateTitleLinks();

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

/*3. Dodajemy tagi do artykułu*/
function generateTags(){
    /* find all articles */
    const articles = document.querySelectorAll(optArticleSelector);
    console.log (articles);
    /* START LOOP: for every article: */
    for(let article of articles){
        console.log(article);
        /* find tags wrapper */
        const tagsList = article.querySelector(optArticleTagsSelector);
        console.log (tagsList);
        /* make html variable with empty string */
        let html = '';
        /* get tags from data-tags attribute */
        const articleTags = article.getAttribute('data-tags');
        console.log (articleTags);
        /* split tags into array */
        const articleTagsArray = articleTags.split(' ');
        console.log(articleTagsArray);
        /* START LOOP: for each tag */
        for(let tag of articleTagsArray){
            /* generate HTML of the link */
            let tagHTML = '<li><a href="#tag-' + tag + ' "><span>' + tag +'</span></a></li>';
            console.log(tagHTML);
            /* add generated code to html variable */
            html += tagHTML;
        }
        /* END LOOP: for each tag */
        
        /* insert HTML of all the links into the tags wrapper */
        tagsList.innerHTML = html;
        }
    /* END LOOP: for every article: */
  }
  
  generateTags();