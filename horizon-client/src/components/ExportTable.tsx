import React from 'react'
import XLSX from 'xlsx'
import  styled  from 'styled-components'


const writeTheFile = () => {
  let table = document.querySelector('#article_table')
  console.log(table)
  let wb = XLSX.utils.table_to_book(table)
  XLSX.writeFile(wb, 'articles.xlsx')
  
}

const ExportTable = ({articles}) => (
  <div style={{paddingTop: '2em'}}>
    <table id='article_table'>
    <tbody>
    <tr style={{textAlign: 'left'}}>
      <th>Date</th>
      <th>Title</th>
      <th> Description </th>
      <th> Hyperlink </th>
    </tr>
  
    {articles.map(article => (
      <tr style={{textAlign: 'left'}} key={article.title}>
        <td> {article.date}</td>
        <td> {article.title}</td>
        <td> {article.description}</td>
        <td> {article.hyperlink}</td>
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