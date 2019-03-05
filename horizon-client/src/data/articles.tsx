import faker from 'faker'

function articles(times: number) {
    let list: string[] = []
    for (let i = 0; i < times; i++) {
        list.push(faker.lorem.sentence())
    }
    return list
}

export const list = articles(10)