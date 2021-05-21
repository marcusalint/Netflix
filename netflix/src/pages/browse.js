import React from 'react';
import {useContent} from '../hooks';

export default function Browse() {
  // we need series and films
  const { series }  = useContent('series');
  const { films }  = useContent('films');
  

  // we need slides
  // pass it to the browser container
  


  return(
    <p>Hello from the Browse</p>
  )
}