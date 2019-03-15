import React from 'react'
import XLSX from 'xlsx'
import  styled  from 'styled-components'
import moment from 'moment'


const writeTheFile = () => {
  let table = document.querySelector('#article_table')
  console.log(table)
  let wb = XLSX.utils.table_to_book(table)
  XLSX.writeFile(wb, 'articles.xlsx')
  
}

const ExportTable = ({articles, onRemove}) => (
  <div style={{paddingTop: '2em'}}>
    <table id='article_table'>
    <tbody>
    <tr style={{textAlign: 'left'}}>
      <th>Date</th>
      <th>Title</th>
      <th> Description </th>
      <th> Hyperlink </th>
    </tr>
  
    {articles.map((article, index) => (
      <tr style={{textAlign: 'left'}} key={article.title + index}>
        <td style={{width: '12%'}}> {(article.date) ? moment(article.date).format('D/M/Y') : new Date().toUTCString()}</td>
        <td style={{width: '30%', valign: 'top'}}> {article.title}</td>
        <td style={{width: '50%'}}> {article.description}</td>
        <td style={{width: '8%'}}> {article.href}</td>
        <td><button onClick={() => onRemove(article.id)}>Remove</button></td>
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