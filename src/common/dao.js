import axios from "axios"
import C from "./cfg"
import testData from './data'

const api = axios.create({
    baseURL: C.baseURL,
    headers: {
        "Content-type": "application/json;charset=UTF-8"
    },
    auth: {
        username: "sdf",
        password: "sdfsdff"
    },
    withCredentials: true
});
class Dao {
    constructor(data) {
        this.data = data
    }
    async vpost(url, body = {}) {
        if (testData) return testData(url)
        return api.post(url, body)
    }
    vget(url, body = {}) {
        if (testData) return testData(url)
        let p = []
        for (let key in body) {
            p.push(`${key}=${body[key]}`)
        }
        let p2 = p.join('&')
        return api.get(`${url}?${p2}`)
    }
    logcheck(body) {
        return this.vpost('nhrmp/personmanage/emply/logcheck', body)
    }
    empinfo(body) {
        return this.vget('nhrmp/personmanage/emply/empinfo', body)
    }
    addper(body) {
        return this.vpost('nhrmp/personmanage/emply/addper', body)
    }
    delper(body) {
        return this.vpost('nhrmp/personmanage/emply/delper', body)
    }
    backper(body) {
        return this.vpost('nhrmp/personmanage/emply/backper', body)
    }
    perlist(body) {
        return this.vget('nhrmp/personmanage/emply/perlist', body)
    }
    perdetail(body) {
        return this.vget('nhrmp/personmanage/emply/perdetail', body)
    }
}
export default new Dao()
