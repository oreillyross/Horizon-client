import React from 'react'
import {Table, Column, CellMeasurerCache} from 'react-virtualized'
import { list } from '../data/articles'

const cache = new CellMeasurerCache({
  defaultWidth: 100,
  minWidth: 75,
  fixedHeight: true
});

const Articles = () => (
  <div>
  <Table
    headerHeight={30}
    height={800}
    width={2500} //TODO add functions to calculate the correct height and widths
    rowCount={list.length}
    rowHeight={20}
    rowGetter={({index}) => {return list[index]}}
  >
    <Column 
      dataKey="date"
      width={160}
      label="Date"
    />  
    <Column 
      dataKey="title"
      width={800}
      label="Title"
    />  
    <Column 
      dataKey="description"
      width={800}
      label="Description"
    />
    <Column 
      dataKey="hyperlink"
      width={300}
      label="Hyperlink"
    />  
  </Table>
  
  </div>
);

export default Articles