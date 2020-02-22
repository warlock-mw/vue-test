import axios from 'axios'

export default class Qiita {

    constructor() {
        this.url  = "https://qiita.com/api/v2/items"
    }

    async get() {
        const res = await axios.get(this.url)

        return res.data.map(val => {
            return {
                user:  val.user.id,
                title: val.title,
                url:   val.url,
            }
        })
    }

}
