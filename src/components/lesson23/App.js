import React from 'react';
import Joke from './Joke';
import './styles.css';
import jokeData from './jokeData';

function App() {
  const jokes = jokeData.map( joke => {
    return <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />
  });

  return (
    <div className="joke-list">
      <h1 className="joke-title">Jokes</h1>
      {jokes}
    </div>
  );
}

export default App;