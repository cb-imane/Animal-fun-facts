import { animals } from './animals';
import React from 'react';
import ReactDom from 'react-dom';


const title = 'Another title';
const showBackground = true;

//Add a title
const background  = (
    <img 
  className = 'background'
  alt ='ocean'
  src = '/images/ocean.jpg'  />
)

//Add an array of images
const listImg = [];
for (const animal in animals) {
 
listImg.push( <img
key ={animal}
className = 'animal'
alt = {animal}
src ={animals[animal].image}
role = 'button'
onClick = {displayFact} /> )
}


function displayFact(e)  {
  const selectedAnimal = e.target.alt;
  const animalInfo = animals[selectedAnimal];
  const randomIndex =  Math.floor(Math.random() * animalInfo.facts.length);
const animalFact = animalInfo.facts[randomIndex];
document.getElementById('fact').innerHTML = animalFact;
  } 


// <h1> {(title === '') ? "Click an animal for a fun fact" : title} </h1>
const animalFacts = (
  <div>
      <h1> 
        {title || "Click an animal for a fun fact"}
      </h1>
   {showBackground && background}
    <p id="fact" > </p>
    <div className = "animals">
      {listImg}
    </div>
      
 </div>
 
    )
    
ReactDom.render(animalFacts, document.getElementById("root"))