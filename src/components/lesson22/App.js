import React from 'react';
import Joke from './Joke';
import './styles.css';

function App() {
  return (
    <div class="joke-list">
      <h1 className="joke-title">Jokes</h1>
      <Joke 
        joke={{
          question: "Why did David Hasselhoff change his name to 'The Hoff?'",
          punchLine: "It’s less hassle.",
        }}
      />

      <Joke 
        joke={{
          question: "Why does Waldo wear stripes?",
          punchLine: "Because he doesn’t want to be spotted.",
        }}
      />

      <Joke 
        joke={{
          question: "Why did the chicken go to prison?",
          punchLine: "Crimes.",
        }}
      />

      <Joke 
        joke={{
          question: "Why do ducks have feathers?",
          punchLine: "To cover their butt quacks.",
        }}
      />

      <Joke 
        joke={{
          punchLine: "A plateau is the highest form of flattery.",
        }}
      />
    </div>
  );
}

export default App;