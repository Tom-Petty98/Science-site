import React, {useState, useEffect} from 'react'; 
import Intro from './Intro';
import TypedAnswer from '../general/TypedAnswer';
// const baseUrl = process.env.API_URL + "/TypedQuestions/";

export default function Index() {

  let page = -1;
  let typedQuestions = [];


  fetch('http://localhost:3001/TypedQuestions/')
    .then(response => response.json())
    .then(data => typedQuestions = data);

  console.log(page);
  console.log(typedQuestions);

  function handleNextPage(){
     page += 1;
  }

  function handlePreviousPage(){
    page -= 1;
  }
  
  if (page === -1) {
    return (
      <div>
        <Intro/>
        <button onClick={page = 0}></button>
      </div>
    )
  } else if (typedQuestions.length > 0 && page >= 0){
    // display question page here 
    let content = typedQuestions[page];
    console.log(content)

      return (  
        <div>    
          <TypedAnswer content={content}/>
          <button onClick={handlePreviousPage}></button>
          <button onClick={handleNextPage}></button>
        </div> 
      )
  }
}
