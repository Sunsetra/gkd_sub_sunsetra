import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.bilibili.app.in',
  name: 'bilibili',
  groups: [
    {
      key: 0,
      name: '提示信息-关闭推送通知弹窗',
      desc: '自动点击“暂不”',
      quickFind: true,
      rules:
        '[text="打开推送通知"] +2 LinearLayout > [id="com.bilibili.app.in:id/close"]',
      snapshotUrls: 'https://i.gkd.li/import/13600976',
    },
  ],
});
