import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.bilibili.app.in',
  name: 'bilibili',
  groups: [
    {
      key: 0,
      name: '弹窗提示-关闭推送通知弹窗',
      desc: '自动点击[暂不]',
      fastQuery: true,
      rules:
        '[text="打开推送通知"] +2 LinearLayout > [id="com.bilibili.app.in:id/close"]',
      snapshotUrls: 'https://i.gkd.li/import/13600976',
    },
    {
      key: 1,
      name: '弹窗提示-关闭订阅通知弹窗',
      desc: '自动点击[暂不开启]',
      fastQuery: true,
      rules: '[text="暂不开启"][id="com.bilibili.app.in:id/close"]',
      snapshotUrls: 'https://i.gkd.li/import/17378428',
    },
  ],
});
