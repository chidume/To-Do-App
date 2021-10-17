import React from 'react';

function Joke(props) {
  const {punchLine, question} = props.joke;

  return (
    <div className="joke">
      {question && 
        <p>
          <span>Question:</span> {question}
        </p>
      }
      <p>
        <span>Punchline:</span> {punchLine}
      </p>
    </div>
  );
}

export default Joke;