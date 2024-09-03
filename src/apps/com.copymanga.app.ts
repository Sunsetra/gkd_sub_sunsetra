import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.copymanga.app',
  name: '拷貝漫畫',
  groups: [
    {
      key: 0,
      name: '全屏广告-关闭开屏广告',
      desc: '自动点击[跳过]',
      fastQuery: true,
      actionMaximum: 1,
      rules: [
        {
          key: 0,
          activityIds: 'com.copymanga.app.MainActivity',
          matches: '@TextView[text^=`跳过`]',
          snapshotUrls: 'https://i.gkd.li/import/16848788',
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-随机广告卡片',
      desc: '自动点击右上角[X]',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: '.MainActivity',
          matches:
            '@ImageView < FrameLayout[childCount=1] <<n FrameLayout[id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/import/16849464',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-详情页中部广告',
      desc: '点击右下角[X]',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: '.MainActivity',
          matches:
            '@ImageView < FrameLayout[childCount=1][index=parent.childCount.minus(1)] <<n FrameLayout[id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/import/16849588',
        },
      ],
    },
    {
      key: 3,
      name: '弹窗提示-关闭系统提示',
      desc: '自动点击[确定]',
      fastQuery: true,
      actionMaximum: 1,
      activityIds: '.MainActivity',
      rules: '@Button[desc=`确定`]',
      snapshotUrls: [
        'https://i.gkd.li/import/16848892',
        'https://i.gkd.li/import/16849476',
      ],
    },
    {
      key: 4,
      name: '功能类-跳过线路选择',
      desc: '自动点击[进入]',
      fastQuery: true,
      actionMaximum: 1,
      activityIds: '.MainActivity',
      rules: '@Button[desc=`进入拷贝漫画`]',
      snapshotUrls: 'https://i.gkd.li/import/16848870',
    },
    {
      key: 5,
      name: '功能类-网络错误自动重试',
      desc: '自动点击屏幕',
      fastQuery: true,
      activityIds: '.MainActivity',
      rules: '@View[desc^=`网络出问题了`]',
      snapshotUrls: 'https://i.gkd.li/import/16849630',
    },
  ],
});