import moment from 'moment'

moment.locale('zh-cn')

export default {
  'time': function (value, formatString, friendly) {
    formatString = formatString || 'YYYY-MM-DD HH:mm'
    if (friendly) {
      return moment(value.toString()).fromNow()
    }
    return moment(value).format(formatString)
  }
}
