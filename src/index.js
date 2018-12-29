import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import registerServiceWorker from './registerServiceWorker';
import { shuffle, sample } from 'underscore';

const authors = [
  {
    name: 'Mark Twain',
    imageUrl: 'images/authors/marktwains.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['The adventures of Huckleberry Finn',
            'Life in Abuja',
            'Things fall aparts']
  },
  {
    name: 'Chalse Dickens',
    imageUrl: 'images/authors/charlesdickens.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['The adventures of Chalse Finn',
            'Monkey poke',
            'Widelife of man']
  },
  {
    name: 'JK Rowling',
    imageUrl: 'images/authors/jkrowling.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['TRowling kinf',
            'Knight of the poke land',
            'King landing of man']
  },
  {
    name: 'Joseph Conrad',
    imageUrl: 'images/authors/josephconrad.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['Bowling kingdom of peace',
            'Holy city of sin',
            'Heart of Darkness']
  },
  {
    name: 'Stephen King',
    imageUrl: 'images/authors/stephenking.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['Bathing rules of the kingdom',
            'The beast of no seen',
            'Harvest of shame']
  },
  {
    name: 'William Shakspeare',
    imageUrl: 'images/authors/williamshakespeare.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['Heart of a king',
            'The lost city of gold',
            'The mad king of the west']
  }
];

function getTurnData(authors) {
  const allBooks = authors.reduce(function (p, c, i) {
    return p.concat(c.books);
  }, [])
  const fourRandomBooks = shuffle(allBooks).slice(0,4);
  const  answer = sample(fourRandomBooks)
  return {
    books: fourRandomBooks,
    author: authors.find((author) =>
            author.books.some((title) =>
            title === answer))
  }
}

const state = {
  turnData: getTurnData(authors)
}

ReactDOM.render(<AuthorQuiz {...state} />, document.getElementById('root'));
registerServiceWorker();
