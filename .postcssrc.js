// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
    "postcss-pxtorem": {
      // 换算的基数?
      // 37.5: iPhone 6 的设备独立像素(375 * 667) 375 除以 10 得到的
      // 32: 对应16px 适配移动端750px宽度 、 设计图750的根字体为32
      // 结果为：设计稿元素尺寸/37.5，比如元素宽375px,最终页面会换算成 10rem
      rootValue: 16,
      propList: ['*']
    }
  }
}
