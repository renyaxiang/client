import messagesCN from './messageCN'
const config = {
  API: {
    SITE_URL: 'http://127.0.0.1:3000/api/',
    CNODE_URL: 'https://cnodejs.org/api/v1/'
  },
  veeConfig: {
    delay: 0.5,
    locale: 'zh_CN',
    dictionary: {
      zh_CN: {
        messages: messagesCN
      }
    }
  }
}

export default config
