import faker from 'faker'
import moment from 'moment'

interface Article {
    date: string,
    title: string,
    description: string,
    hyperlink: string
}

function articles(times: number) {
    let list: Article[] = []
    for (let i = 0; i < times; i++) {
        let date = moment(faker.date.recent()).format('DD/MM/YYYY') + '\t'
        let title = faker.lorem.sentence() + '\t'
        let description = faker.lorem.sentences() + '\t'
        let hyperlink = faker.internet.url() + '\t'
        let article = {date, title, description, hyperlink} 
        list.push(article)
    }
    return list
}

export const list = articles(10)