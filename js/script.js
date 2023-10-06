"use strict";

/*2. Generowanie listy tytulów*/
const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles',
    optArticleTagsSelector = '.post-tags .list',
    optArticleAuthorSelector = '.post-author';

function generateTitleLinks(customSelector = '') {

    /* [Done] remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    console.log(titleList);

    titleList.innerHTML = ' ';

    /* [Done] for each article */
    const articles = document.querySelectorAll(optArticleSelector + customSelector);
    console.log(articles);

    let html = '';

    for (let article of articles) {
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
const titleClickHandler = function (event) {
    event.preventDefault();/* Dla pozostania na bieżącej części strony*/
    const clickedElement = this;
    console.log('Link was clicked!');

    /* [DONE] remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');

    for (let activeLink of activeLinks) {
        activeLink.classList.remove('active');
    }

    /* [DONE] add class 'active' to the clicked link */

    console.log('clickedElement:' + clickedElement);

    /* [DONE] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.post.active');

    for (let activeArticle of activeArticles) {
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

for (let link of links) {
    link.addEventListener('click', titleClickHandler);
}

/*3. Dodajemy tagi do artykułu*/
function generateTags() {
    /* find all articles */
    const articles = document.querySelectorAll(optArticleSelector);
    console.log(articles);
    /* START LOOP: for every article: */
    for (let article of articles) {
        console.log(article);
        /* find tags wrapper */
        const tagsList = article.querySelector(optArticleTagsSelector);
        console.log(tagsList);
        /* make html variable with empty string */
        let html = '';
        /* get tags from data-tags attribute */
        const articleTags = article.getAttribute('data-tags');
        console.log(articleTags);
        /* split tags into array */
        const articleTagsArray = articleTags.split(' ');
        console.log(articleTagsArray);
        /* START LOOP: for each tag */
        for (let tag of articleTagsArray) {
            /* generate HTML of the link */
            let tagHTML = '<li><a href="#tag-' + tag + '"><span>' + tag + '</span></a></li>';
            console.log(tagHTML);
            /* add generated code to html variable */
            html += tagHTML;
            /* END LOOP: for each tag */
        }
        /* insert HTML of all the links into the tags wrapper */
        tagsList.innerHTML = html;
    }
    /* END LOOP: for every article: */
}
generateTags();

/*4. Dodajemy akcje po kliknięciu w tag*/
function tagClickHandler(event) {
    /* prevent default action for this event */
    event.preventDefault();
    /* make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;
    /* make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href');
    /* make a new constant "tag" and extract tag from the "href" constant */
    const tag = href.replace('#tag-', '');
    /* find all tag links with class active */
    const activeTags = document.querySelectorAll('.active[href^="#tag-"]');
    /* START LOOP: for each active tag link */
    for (let activeTag of activeTags) {
        /* remove class active */
        activeTag.classList.remove('active');
        /* END LOOP: for each active tag link */
    }
    /* find all tag links with "href" attribute equal to the "href" constant */
    const tagLinks = document.querySelectorAll('a[href=" ' + href + ' "]'); /*lub 'a[href^="#tag-"]' */
    /* START LOOP: for each found tag link */
    for (let tagLink of tagLinks) {
        /* add class active */
        tagLink.classList.add('active');
        /* END LOOP: for each found tag link */
    }
    /* execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks('[data-tags~="' + tag + '"]');
}

/*5. Znajdujemy linki do tagów*/
function addClickListenersToTags() {
    /* find all links to tags */
    const tagLinks = document.querySelectorAll('a[href^="#tag-"]');
    /* START LOOP: for each link */
    for (let tagLink of tagLinks) {
        /* add tagClickHandler as event listener for that link */
        tagLink.addEventListener('click', tagClickHandler);
        /* END LOOP: for each link */
    }
}
addClickListenersToTags();

/*6 Zadanie: Dodanie autora */
function generateAuthors() {
    /*find all articles*/
    const articles = document.querySelectorAll(optArticleSelector);
    console.log(articles);
    /*START LOOP: for each article*/
    for (let article of articles) {
        console.log(article);
        /*find author wrapper*/
        const authorsList = article.querySelector(optArticleAuthorSelector);
        console.log(authorsList);
        /*get authors from data-author attribute */
        const articleAuthor = authorsList.getAttribute('data-author');
        console.log(articleAuthor);
        /*generate HTML of the link */
        let authorHTML = '<a href="#author-' + articleAuthor + '"><span>' + articleAuthor + '</span></a>';
        console.log(authorHTML);
        /*insert HTML of all the links into the data-author wrapper */
        authorsList.innerHTML = authorHTML;
    }
}
generateAuthors();

/*7 Wyświetlenie autora po kliknięciu w link*/
function authorClickHandler(event) {
    /* prevent default action for this event */
    event.preventDefault();
    /* make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;
    /*make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href');
    /* make a new constant "author" and extract name of the author from the "href" constant */
    const author = href.replace('#author-', '');
    /* find all author links with class active */
    const activeAuthors = document.querySelectorAll('a.active[href^="author-"]');
    /* START LOOP: for each found author link */
    for (let activeAuthor of activeAuthors) {
        /* remove class active */
        activeAuthor.classList.remove('active');
        /*END LOOP*/
    }
    /* find all tag links with "href" attribute equal to the "href" constant */
    const authorLinks = document.querySelectorAll('a[href^=" ' + href + ' "]');
    /* START LOOP: for each found author link */
    for (let authorLink of authorLinks) {
        /* add class active */
        authorLink.classList.add('active');
        /* END LOOP: for each found author link */
    }
    /* execute function "generateTitleLinks" with author selector as argument */
    generateTitleLinks('[data-authors="' + author + '"]');
}


/*8 Dodanie linków do autorów*/
function addClickListenersToAuthors() {
    /* find all links to authors */
    const authorLinks = document.querySelectorAll('a[href="#author-"]');
    /* START LOOP: for each link */
    for (let authorLink of authorLinks) {
        /* add authorClickHandler as event listener for that link */
        authorLink.addEventListener('click', authorClickHandler);
        /* END LOOP: for each link */
    }
}
addClickListenersToAuthors();

