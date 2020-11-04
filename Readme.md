1.  按需引入vant  yarn add babel-plugin-import -D 加入babel.config.js

2.  lib-flexible 是网页做 html 的 font-size 适配用的，安装到 dependencies，在main.js中引入使用，postcss-pxtorem 是在编译的时候对 px 单位转换为 rem 单位时使用，安装到 devDependencies，需要加入postcss.config.js配置