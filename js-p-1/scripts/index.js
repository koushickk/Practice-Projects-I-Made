let articleDetails = [];

function getArticle(){
    let article=document.getElementsByClassName('article').textContent;
    let articleContent=document.getElementsByClassName('articlecontent');
    alert(article)
}

document.getElementsByClassName('addbtn').addEventListener('click',addArticle);


function addArticle(e){
    alert('hi')
}
