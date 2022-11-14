import './styles/main.scss'
import generateJoke from './generateJoke'
import laughing from './assets/laughing.svg'

const laughImg = document.getElementById('laughImg')
laughImg.src = laughing

console.log("something is happening");

const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', generateJoke)

generateJoke()