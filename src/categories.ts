import { defineGkdCategories } from '@gkd-kit/define';

export default defineGkdCategories([
  {
    key: 0,
    name: '开屏广告',
  },
  {
    key: 1,
    name: '全屏广告',
    // 不关闭广告就无法进行其它操作的广告弹窗, 它阻碍用户操作
    // 一般是刚进入APP时显示的全屏弹窗
  },
  {
    key: 2,
    name: '局部广告',
    // 不影响使用的广告, 所有的广告卡片及悬浮广告按钮
  },
  {
    key: 3,
    name: '分段广告',
    // 需要分阶段多步操作才能关闭, 会造成屏幕略微闪烁, 稍微影响用户体验
  },
  {
    key: 4,
    name: '提示信息',
    // 包括更新提示、评价提示、通知提示、权限提示等
  },
  {
    key: 9,
    name: '功能类',
    // 非广告, 为了实现某些特定功能而制订的规则
  },
]);
