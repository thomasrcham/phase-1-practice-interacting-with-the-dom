const timerNum = document.getElementById('counter')

const minusOneButton = document.querySelector('body button#minus')
const plusOneButton = document.querySelector('body button#plus')
const likeButton = document.querySelector('body button#heart')
const pauseButton = document.querySelector('body button#pause')

const commentBox = document.getElementById('comment-form')

minusOneButton.addEventListener('click', (e) => {
    timerMinusOne ();
})

plusOneButton.addEventListener('click', (e) => {
    timerPlusOne ();
})

likeButton.addEventListener('click', (e) => {
    document.querySelector('body ul').appendChild(counterLike(timerNum))
})


pauseButton.addEventListener('click', (e) => {
    if (pauseButton.hasAttribute('paused')) {
        pauseButton.removeAttribute('paused')
    } else {pauseButton.setAttribute('paused', '0')         
    }
})

commentBox.addEventListener('submit', (e) => {
    e.preventDefault();
    let input = e.target.comment.value
    document.querySelector('div#list').appendChild(newComment(input))
})

function timerPlusOne () {
    let timerParsed = parseInt(timerNum.textContent);
    let timerPlus = timerParsed + 1;
    timerNum.textContent = timerPlus;
    }

function timerMinusOne () {
    let timerParsed = parseInt(timerNum.textContent);
    let timerMinus = timerParsed - 1;
    timerNum.textContent = timerMinus;
    }    

function timerTick () {
    if (pauseButton.hasAttribute('paused')) {
        setTimeout(timerTick, 1000);
        } else {       
            timerPlusOne ();
            setTimeout(timerTick, 1000);}
}

function counterLike (timerNum) {
    const likeComment = document.createElement('li')
    likeComment.textContent = `${timerNum.innerText} has been liked.`
    return likeComment
}

function newComment (input) {
    const newComment = document.createElement('p')
    newComment.textContent = input
    return newComment   
}

setTimeout(timerTick, 1000)