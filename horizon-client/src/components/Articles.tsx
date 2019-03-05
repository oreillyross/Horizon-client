import React from 'react'
import {List} from 'react-virtualized'

const list = [
  "One item",
  "Two Item",
  "three Item"
]

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
      style={style}
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
    rowHeight={20}
    rowCount={list.length}
    rowRenderer={rowRenderer}
  />
  
  </div>
);

export default Articles