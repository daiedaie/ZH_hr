class BaseCfg {
    constructor(data) {
        this.data = data
        // 是否启动测试数据
        this.testData = true
        this.baseURL = 'http://22.145.31.55:8080/NHRMP/'
        this.marriageStatus = {
            '0': '未婚',
            '1': '已婚'
        }
        this.politics = {
            "01": "中共党员",
            "02": "中共预备党员",
            "03": "共青团员",
            "04": "民革党员",
            "05": "民盟盟员",
            "06": "民建会员",
            "07": "民进会员",
            "08": "农工党党员",
            "09": "致公党党员",
            "10": "九三学社社员",
            "11": "台盟盟员",
            "12": "无党派民主人士",
            "13": "群众"
        }
        this.educationalBackground = {
            "11": "研究生",
            "13": "党校研究生",
            "21": "大学本科",
            "22": "大学普通班",
            "23": "党校本科",
            "31": "大专",
            "33": "党校大专",
            "41": "中专",
            "51": "技校",
            "61": "高中",
            "62": "职高",
            "71": "初中",
            "81": "小学",
            "90": "文盲"
        }
        this.degree = {
            "0": "博士后",
            "1": "名誉博士",
            "2": "博士",
            "3": "硕士",
            "4": "学士"
        }
        this.dutyName = {
            "01": "分行行长",
            "02": "分行副行长",
            "03": "分行副行级",
            "04": "行长助理",
            "05": "资深经理",
            "10": "总经理",
            "101": "副总经理(主持工作)",
            "11": "副总经理",
            "12": "副总经理(删)",
            "16": "中心主任",
            "17": "高级经理",
            "18": "高级经理(删)"
        }
        this.trnasactionType = {
            "01": "收入证明",
            "02": "工作证明",
            "03": "亲属关系证明",
            "04": "小孩读书证明",
            "05": "工作（证）临时证明"
        }
        this.applyUse = {
            "01": "贷款购房",
            "02": "自费旅游"
        }
        this.receiveWay = {
            "01": "本人自取",
            "02": "委托他人",
            "03": "放单位信箱"
        }
        this.dealStatus = {
            "10": "待审核",
            "11": "待审批",
            "12": "结束",
            "21": "审核退回",
            "22": "审批退回"
        }
    }
}
class DevCfg extends BaseCfg {
    constructor(data) {
        super(data)
        this.env = 'development'
    }
}
class PordCfg extends BaseCfg {
    constructor(data) {
        super(data)
        this.env = 'production'
    }
}
export default (process.env.NODE_ENV === 'development') ? new DevCfg() : new PordCfg()
