import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.netease.nim.avic',
  name: '商网办公',
  groups: [
    {
      key: 0,
      name: '提示信息-关闭版本更新弹窗',
      desc: '自动点击“稍后再说”',
      quickFind: true,
      activityIds: 'com.netease.nim.avic.main.activity.MainActivity',
      rules: '@Button[id="com.netease.nim.avic:id/btn_left"][text="稍后再说"]',
    },
    {
      key: 1,
      name: '提示信息-关闭消息推送弹窗',
      desc: '自动点击“取消”',
      quickFind: true,
      activityIds: 'com.netease.nim.avic.main.activity.MainActivity',
      rules: '@Button[id="com.netease.nim.avic:id/btn_left"][text="取消"]',
    },
    {
      key: 2,
      name: '提示信息-关闭密码更新提醒',
      desc: '自动点击“稍后处理”',
      quickFind: true,
      activityIds: 'com.netease.nim.avic.main.activity.MainActivity',
      rules:
        '@TextView[id="com.netease.nim.avic:id/tv_cancel"][text="稍后处理"]',
    },
  ],
});
