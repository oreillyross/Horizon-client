import { list } from './articles'
import cheerio from 'cheerio'
import request from 'request'

interface Article {
    date: string,
    title: string,
    description: string,
    hyperlink: string
}

function getCurrentData() {
    

    

   return list
}

export { getCurrentData }