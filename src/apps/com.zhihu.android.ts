import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zhihu.android',
  name: '知乎',
  groups: [
    {
      key: 0,
      name: '全屏广告-开屏广告',
      desc: '点击[关闭]跳过',
      fastQuery: true,
      activityIds: '.app.ui.activity.AdAlphaVideoActivity',
      rules: [
        {
          key: 0,
          matches: '@TextView[text$=`关闭`]',
          snapshotUrls: 'https://i.gkd.li/i/18246302',
        },
      ],
    },
    {
      key: 1,
      name: '局部广告-推荐页',
      desc: '点击[X]跳过',
      fastQuery: true,
      activityIds: '.app.ui.activity.MainActivity',
      rules: [
        {
          key: 0,
          matches: '@ImageView[id="com.zhihu.android:id/img_close_focus"]',
          snapshotUrls: 'https://i.gkd.li/i/18279421',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-回答底部评论顶部-任意广告推荐',
      desc: '直接点击[X]跳过',
      fastQuery: true,
      activityIds:
        '.feature.short_container_feature.ui.ShortContainerHostActivity',
      rules: [
        {
          key: 0,
          matches: '@ImageView < ViewGroup -n TextView[text$=`的广告`]',
          snapshotUrls: 'https://i.gkd.li/i/18212166',
        },
        {
          key: 1,
          matches:
            '@ViewGroup[index=parent.childCount.minus(1)][clickable=true] <n ViewGroup[index=parent.childCount.minus(1)] <n ViewGroup < FrameLayout <n [id="com.zhihu.android:id/custom_recycler_view"]',
          snapshotUrls: 'https://i.gkd.li/i/18216929',
        },
      ],
    },
    {
      key: 3,
      name: '分段广告-推荐页-问题广告卡片',
      desc: '点击角落[X]，再点击[不感兴趣]跳过',
      activityIds: '.app.ui.activity.MainActivity',
      fastQuery: true,
      rules: [
        {
          key: 0,
          matches:
            '@ViewGroup[clickable=true] <<n ViewGroup[index=parent.childCount.minus(1)] -n ViewGroup >n ViewGroup >n TextView[text$=`的广告`]',
          snapshotUrls: [
            'https://i.gkd.li/i/18216441',
            'https://i.gkd.li/i/18279463',
          ],
        },
        {
          key: 1,
          matches:
            '@ImageView[id="com.zhihu.android:id/menu"] < FrameLayout - LinearLayoutCompat > TextView[text^=`广告`]',
          snapshotUrls: 'https://i.gkd.li/i/18239843',
        },
        {
          key: 90,
          preKeys: [0, 1],
          matches: '@TextView[text$=`内容不感兴趣`]',
          snapshotUrls: 'https://i.gkd.li/i/18216448',
        },
      ],
    },
    {
      key: 4,
      name: '分段广告-问题回答列表-卡片广告',
      desc: '普通广告点击角落[X]，再点击[不感兴趣]跳过；特殊卡片则点击三点，再点击[内容反馈]跳过',
      activityIds: [
        '.ContentActivity',
        '.feature.short_container_feature.ui.ShortContainerHostActivity',
      ],
      fastQuery: true,
      rules: [
        {
          key: 0,
          matches:
            '@ViewGroup[clickable=true] -n ViewGroup >n TextView[text$=`的广告`]',
          snapshotUrls: 'https://i.gkd.li/i/18216485',
        },
        {
          key: 1,
          matches: '@ViewGroup[clickable=true] -n TextView[text^=`广告`]',
          snapshotUrls: 'https://i.gkd.li/i/18246328',
        },
        {
          key: 2,
          matches: '@[id="com.zhihu.android:id/remove"]',
          snapshotUrls: 'https://i.gkd.li/i/18216895',
        },
        {
          key: 3,
          matches: '@ViewGroup[clickable=true] -n TextView[text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/18279429',
        },
        {
          key: 9,
          //actionCd: 2000, // 增加冷却，否则易点击多次
          matches:
            '@FrameLayout[index=parent.childCount.minus(1)] <n LinearLayout[id="com.zhihu.android:id/rightLayout_inner"] <<n ViewGroup - TextView[text^="来自"]',
          snapshotUrls: 'https://i.gkd.li/i/15385023',
        },
        {
          key: 10,
          preKeys: [9],
          matches:
            '@TextView[id="com.zhihu.android:id/title"&&text="内容反馈"]',
          snapshotUrls: 'https://i.gkd.li/i/15385053',
        },
        {
          key: 100,
          preKeys: [0, 1, 2, 3, 10],
          matches: '@TextView[text=`内容不感兴趣`||text=`内容质量差`]',
          snapshotUrls: [
            'https://i.gkd.li/i/18216487',
            'https://i.gkd.li/i/18243662',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '弹窗提示-关闭通知推送',
      desc: '自动点击[X]',
      activityIds: '.MainActivity',
      fastQuery: true,
      rules: '[id="com.zhihu.android:id/btn_close"]',
      snapshotUrls: 'https://i.gkd.li/i/18216506',
    },
  ],
});
