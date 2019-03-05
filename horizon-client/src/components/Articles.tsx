import React from 'react'
import {List} from 'react-virtualized'
import { list } from '../data/articles'



function rowRenderer ({
  key,         // Unique key within array of rows
  index,       // Index of row within collection
  isScrolling, // The List is currently being scrolled
  isVisible,   // This row is visible within the List (eg it is not an overscanned row)
  style        // Style object to be applied to row (to position it)
}) {
  return (
    <div 
      key={key}
      style={{border: '1px solid black', textAlign: 'left'}}
    >
      {list[index]}
    </div>
  )
}
 

const Articles = () => (
  <div>
  <List
    height={480}
    width={640}
    rowHeight={25}
    rowCount={list.length}
    rowRenderer={rowRenderer}
  />
  
  </div>
);

export default Articles