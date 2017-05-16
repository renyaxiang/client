import $ from 'jquery'
export default {
  install(Vue, options) {
    let timer = null
    Vue.prototype.$alert = (msg) => {
      $('#alertWeek').remove()
      let $alert = $('<div class="alert alert-danger" id="alertWeek"></div>')
      $('body').append($alert)
      $alert.html(msg)
      $alert.addClass('alert-show')
      clearTimeout(timer)
      timer = setTimeout(() => {
        $alert.remove()
      }, 2000)
    }
  }
}
