import React from 'react'
import {Table, Column} from 'react-virtualized'
import { list } from '../data/articles'

console.table(list)

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
      style={{border: '1px solid black', textAlign: 'left', padding: '1px'}}
    >
      {list[index]}
    </div>
  )
}
 

const Articles = () => (
  <div>
  <Table
    headerHeight={30}
    height={800}
    width={500} //TODO add functions to calculate the correct height and widths
    rowCount={list.length}
    rowHeight={20}
    rowGetter={(idx)=> {return "Some data"}}
  >
    <Column 
      dataKey="date"
      width={60}
      label="Date"
    />  
    <Column 
      dataKey="title"
      width={60}
      label="Title"
    />  
  </Table>
  
  </div>
);

export default Articles