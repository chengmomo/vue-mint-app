import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Category from '@/views/more/Category';

Vue.use(Router);
// 需要返回按钮动画的路由用this.$router.goBack()，返回上一个路由
Router.prototype.goBack = function () {
  this.isLeft = false;
  this.isRight = true;
  this.go(-1);
};
// 需要左方向动画的路由用this.$router.to('****')
Router.prototype.togo = function (path) {
  this.isLeft = true;
  this.isRight = false;
  this.push(path);
};
// 需要右方向动画的路由用this.$router.goRight('****')
Router.prototype.goRight = function (path) {
  this.isRight = true;
  this.isLeft = false;
  this.push(path);
};
// 点击浏览器返回按钮执行，此时不需要路由回退
Router.prototype.togoback = function () {
  this.isright = true;
  this.isleft = false;
};
// 点击浏览器前进按钮执行
Router.prototype.togoin = function () {
  this.isright = false;
  this.isleft = true;
};
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: { index: 0 }, // meta对象的index用来定义当前路由的层级,由小到大,由低到高
      component: Home,
    },
    {
      path: '/category',
      name: 'Category',
      meta: { index: 1 },
      component: Category,
    },
  ],
});

