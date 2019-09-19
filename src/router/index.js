/* eslint-disable import/no-dynamic-require */
import Vue from 'vue';
import Router from 'vue-router';
import Category from '@/views/more/Category';
import ScrollContent from '@/views/study/ScrollContent';
import IndexList from '@/views/study/mint/IndexList';

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
      meta: { keepAlive: true, index: 0 }, // meta对象的index用来定义当前路由的层级,由小到大,由低到高
      component: resolve => require(['@/views/home/Home'], resolve),
      children: []
    },
    {
      path: '/study',
      name: 'Study',
      meta: { keepAlive: true, index: 1 },
      component: resolve => require(['@/views/study/study'], resolve),
      children: [{
        path: '/mintDemo',
        name: 'MintDemo',
        component: resolve => require(['@/views/study/MintDemo'], resolve)
      }, {
        path: '/sliderDemo',
        name: 'SliderDemo',
        component: resolve => require(['@/views/study/SliderDemo'], resolve)
      }]
    },
    {
      path: '/find',
      name: 'Find',
      meta: { keepAlive: true, index: 1 },
      component: resolve => require(['@/views/find/Find'], resolve),
      children: []
    },
    {
      path: '/message',
      name: 'Message',
      meta: { keepAlive: true, index: 1 },
      component: resolve => require(['@/views/message/Message'], resolve),
      children: []
    },
    {
      path: '/mine',
      name: 'Mine',
      meta: { keepAlive: true, index: 1 },
      component: resolve => require(['@/views/mine/Mine'], resolve),
      children: []
    },
    {
      path: '/category',
      name: 'Category',
      meta: { keepAlive: false, index: 1 },
      component: Category
    },
    {
      path: '/indexList',
      name: 'IndexList',
      meta: { keepAlive: false, index: 1 },
      component: IndexList
    },
    {
      path: '/scroll',
      name: 'Scroll',
      meta: { keepAlive: false, index: 1 },
      component: ScrollContent
    }
  ]
});

