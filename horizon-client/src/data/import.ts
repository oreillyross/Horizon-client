import { list } from './articles'
import cheerio from 'cheerio'

interface Article {
    date: string,
    title: string,
    description: string,
    hyperlink: string
}

function getCurrentData() {
    
    const $ = cheerio.load('http://nna-leb.gov.lb/en')
    

   return list
}

export { getCurrentData }