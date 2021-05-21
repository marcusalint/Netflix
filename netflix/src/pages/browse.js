import React from 'react';
import {useContent} from '../hooks';
import {selectionFilter} from '../utils';
import {BrowseContainer} from '../containers/browse';

export default function Browse() {
  // we need series and films
  const { series }  = useContent('series');
  const { films }  = useContent('films');
  const slides = selectionFilter({series, films});
  console.log(slides, 'this is slides')
  // pass it to the browser container
  
  return(
    <BrowseContainer slides={slides} />
  )
}