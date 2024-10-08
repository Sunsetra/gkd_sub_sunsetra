import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'gov.pianzong.androidnga',
  name: 'NGA玩家社区',
  groups: [
    {
      key: 0,
      name: '全屏广告-开屏广告',
      desc: '自动点击[跳过广告]',
      fastQuery: true,
      activityIds: '.activity.LoadingActivity',
      rules: '@ImageView[id="gov.pianzong.androidnga:id/iv_tg_ad"]',
    },
    {
      key: 1,
      name: '局部广告-推荐收藏顶部广告',
      desc: '自动点击[X]',
      fastQuery: true,
      activityIds: 'com.donews.nga.activitys.MainActivity',
      rules:
        '@ImageView[id="gov.pianzong.androidnga:id/iv_close_community_ad"]',
    },
    /*{
      key: 2,
      name: '局部广告-帖子回复底部广告',
      desc: '自动点击[X]',
      fastQuery: true,
      activityIds: '.activity.forumdetail.ArticleDetailActivity',
      rules: [
        {
          position: {
            right: 'width*0.0407',
            top: 'height*0.1809',
          },
          matches:
            '@TextView[index=parent.childCount.minus(1)&&text=""]',
        },
      ],
      snapshotUrls: 'https://i.gkd.li/import/17252248',
    },*/
    {
      key: 3,
      name: '局部广告-帖子列表广告',
      desc: '自动点击[X]',
      fastQuery: true,
      activityIds: '.activity.forumdetail.ForumDetailActivity',
      rules:
        '@ImageView[parent.childCount=1] < [index=parent.childCount.minus(1)] <<n FrameLayout <n RecyclerView[vid="rv_post_list"]',
      snapshotUrls: [
        'https://i.gkd.li/import/17252240',
        'https://i.gkd.li/import/17292987',
      ],
    },
  ],
});
