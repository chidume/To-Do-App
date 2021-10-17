import React from 'react';

function Joke(props) {
  const question = props.question;

  const punchLine = props.punchLine;

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