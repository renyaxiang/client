## quick-start

> Simple CLI for scaffolding Vue.js projects

[https://github.com/vuejs/vue-cli](https://github.com/vuejs/vue-cli)

``` bash
npm install -g vue-cli
vue init vue-webpack project-name
cd project-name
npm install
npm run dev
```

## ui
[https://github.com/twbs/bootstrap](https://github.com/twbs/bootstrap)

## infinit-scroll
[https://github.com/ElemeFE/vue-infinite-scroll](https://github.com/ElemeFE/vue-infinite-scroll)

## form validation
[https://github.com/logaretm/vee-validate](https://github.com/logaretm/vee-validate)

[http://vee-validate.logaretm.com/](http://vee-validate.logaretm.com/)

## axios
> Promise based HTTP client for the browser and node.js

[https://github.com/mzabriskie/axios](https://github.com/mzabriskie/axios)

## webpack

### laoders

* eslint-loader
* vue-loader
* babel-loader
* url-loader
* style-loader
* css-loader
* sass-loader

### plugins

extract-text-webpack-plugin
> extract css into its own file

optimize-css-assets-webpack-plugin
> Compress extracted CSS. We are using this plugin so that possible, duplicated CSS from different components can be deduped.

html-webpack-plugin
> generate dist index.html with correct asset hash for caching,  you can customize output by editing /index.html

webpack.optimize.CommonsChunkPlugin
> split vendor js into its own file

webpack.optimize.UglifyJsPlugin
> uglify js

copy-webpack-plugin
> copy custom static assets

## 日志

2017-05-08

实现表单验证。利用vee-validate插件，并且实现提示消息的汉化。

2017-05-09

实现表格的状态管理。利用组件内的导航钩子：beforeRouteLeaver实例，结合vuex注入组件中的this.$store.dispatch('setPage', this.cur)赋值。