// will have a database that contains questions and awnsers I have come up with as well as hints.
// This page will load a page that has an image of an experiment. Then any key info.
// Then it will render balnk spaces based on he number of awnsers available.

import React, {useState} from 'react';


export default function TypedAnswer({content}) {
  let [hint, setHint] = useState(false) 

  function hintClick(){
    setHint(!hint);
  }

  return (
    <div>
      <h2>{content.title}</h2>
      <img src={content.img_url} alt=""/>
      <p>{content.details}</p>
      <h4>{content.question}</h4>

      {content.answers.map((answer) => {
        <div>
          <input/>
          <button onClick={hintClick}>Get Hint</button>
          {hint && 
          <p>{answer}</p>}
        </div>
      })}

    </div>
  )
}
