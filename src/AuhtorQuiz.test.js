import React from 'react';
import ReactDOM from 'react-dom';
import AuthorQuiz from './AuthorQuiz';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AuthorQuiz />, div);
});

describe("when things work", ()=> {
  it("should pass", () => {
    expect(1+1).toEqual(4)
  })
})
