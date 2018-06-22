// 本地数据
let data = {
  // 登录
  "nhrmp/personmanage/emply/logcheck": {
    data: {
      resCode: 200,
      resMsg: '登录成功！'
    },
    success: true
  },
  // 个人信息
  "nhrmp/personmanage/emply/empinfo": {
    data: {
      resCode: 200,
      resMsg: '成功',
      data: {
        personName: '张三',
        personUid: 'ZH123',
        personId: '123',
        birthday: '1991-07-01',
        nation: '汉族',
        hometown: '江西',
        homeplace: '江西',
        householderPlace: '江西',
        marriageStatus: '1',
        politics: '03',
        jobDate: '2013-01-02',
        inbankDate: '2011-04-08',
        inbankDateSz: '2012-05-01',
        educationalBackground: '21',
        degree: '2',
        deptName: '深圳市分行',
        position_name: '工程师',
        fwDate: '2015-09-21',
        dutyName: '101',
        workPhone: '0755-00000000',
        mobilePhone: '13500000000'
      }
    },
    success: true
  }
};

export default async key => {
  return data[key]
};
