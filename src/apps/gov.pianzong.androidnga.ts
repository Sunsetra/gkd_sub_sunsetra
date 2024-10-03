import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'gov.pianzong.androidnga',
  name: 'NGA玩家社区',
  groups: [
    {
      key: 0,
      name: '全屏广告-关闭开屏广告',
      desc: '自动点击[跳过广告]',
      fastQuery: true,
      activityIds: '.activity.LoadingActivity',
      rules: '@ImageView[id="gov.pianzong.androidnga:id/iv_tg_ad"]',
    },
    {
      key: 1,
      name: '局部广告-关闭推荐收藏顶部广告',
      desc: '自动点击[X]',
      fastQuery: true,
      activityIds: 'com.donews.nga.activitys.MainActivity',
      rules:
        '@ImageView[id="gov.pianzong.androidnga:id/iv_close_community_ad"]',
    },
  ],
});
