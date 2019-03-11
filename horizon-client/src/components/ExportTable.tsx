import React from 'react'
import { list } from '../data/articles'
import XLSX from 'xlsx'




const writeTheFile = () => {
  let table = document.querySelector('#article_table')
  console.log(table)
  let wb = XLSX.utils.table_to_book(table)
  XLSX.writeFile(wb, 'articles.xlsx')
  
}

const ExportTable = () => (
  <div>
    <table id='article_table'>
    <tbody>
    <tr>
      <th>Date</th>
      <th>Title</th>
    </tr>
    
    {list.map(article => (
      <tr key={article.title}>
        <td> {article.date}</td>
        <td> {article.title}</td>
      </tr>
    )) }
    </tbody>
    </table>
  <div> 
  <button onClick={writeTheFile}>Export Data</button> 
  </div>
  </div>
  
);

export default ExportTable