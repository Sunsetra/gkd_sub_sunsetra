import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zhihu.android',
  name: '知乎',
  groups: [
    /*{
      key: 0,
      name: '全屏广告-关闭首页广告',
      desc: '自动点击[跳过]',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: 'com.zhihu.android.app.ui.activity.LauncherActivity',
          matches: '[id="com.zhihu.android:id/btn_skip"]',
          snapshotUrls: 'https://i.gkd.li/import/15445818',
        },
        {
          key: 1,
          activityIds: 'com.zhihu.android.app.ui.activity.AdAlphaVideoActivity',
          matches: '[id="com.zhihu.android:id/tv_ad_close"]',
          snapshotUrls: 'https://i.gkd.li/import/15520687',
        },
      ],
    },*/
    {
      key: 1,
      name: '全屏广告-会员页面-广告弹窗',
      desc: '点击下方[X]',
      fastQuery: true,
      activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
      rules:
        '[id="com.zhihu.android:id/image"] < RelativeLayout + [id="com.zhihu.android:id/dismiss"]',
      snapshotUrls: 'https://i.gkd.li/import/12707676',
    },
    /*{
      key: 2,
      name: '局部广告-推荐页-顶部及侧边广告',
      desc: '点击角落位置[X]',
      fastQuery: true,
      activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
      rules: [
        {
          key: 0,
          name: '顶部广告',
          matches: '[id="com.zhihu.android:id/img_close_focus"]',
        },
        {
          key: 1,
          name: '侧边广告',
          matches:
            '@ImageView[clickable=true] + RelativeLayout >2 [id="com.zhihu.android:id/tv_ad_tag"][text="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/15520691',
        },
      ],
    },*/
    {
      key: 3,
      name: '分段广告-推荐页-问题广告卡片',
      desc: '点击角落[X]，再点击[不感兴趣]跳过',
      activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
      fastQuery: true,
      rules: [
        /*{
          key: 0,
          matches: '@ImageView < ViewGroup -3 TextView[text^=`广告`]',
          snapshotUrls: 'https://i.gkd.li/import/14852778',
        },*/
        {
          key: 1,
          matches:
            '@ImageView[id=`com.zhihu.android:id/menu`] < FrameLayout - * > TextView[text^=`广告`]',
          snapshotUrls: 'https://i.gkd.li/import/14881985',
        },
        /*{
          key: 2,
          matches:
            '@ViewGroup[clickable=true] <<n ViewGroup -n ViewGroup > ViewGroup > TextView[text$="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/import/14731141', // 一类广告
            'https://i.gkd.li/import/15384942', // 二类广告
          ],
        },
        {
          key: 3,
          matches:
            '@ViewGroup[clickable=true] - TextView <2 ViewGroup < ViewGroup - ViewGroup > FrameLayout',
          snapshotUrls: [
            'https://i.gkd.li/import/15445780', // 无任何广告提示的卡片广告
            'https://i.gkd.li/import/15445858', // 无图正常信息卡片
            'https://i.gkd.li/import/15445859', // 带图正常信息卡片
          ],
        },*/
        {
          key: 90,
          name: '点击[不感兴趣]',
          preKeys: [0, 1],
          matches:
            /*'@LinearLayout[clickable=true] >3 TextView[text$="不感兴趣"][id="com.zhihu.android:id/title"]',*/
            '@TextView[text$="不感兴趣"]',
        },
        /*{
          key: 91,
          name: '点击[屏蔽该内容]',
          preKeys: [1],
          matches:
            '@FrameLayout[clickable=true] >3 TextView[text="屏蔽该内容"][id="com.zhihu.android:id/tv_content"]',
          snapshotUrls: 'https://i.gkd.li/import/14758259',
        },
        {
          key: 92,
          name: '点击[内容不感兴趣]',
          preKeys: [2, 3],
          matches:
            '@FrameLayout > LinearLayoutCompat[id="com.zhihu.android:id/ll_container"] >2 TextView[id="com.zhihu.android:id/tv_content"][text="内容不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/import/14731153',
        },*/
      ],
    },
    {
      key: 4,
      name: '分段广告-问题回答列表-卡片广告',
      desc: '普通广告点击角落[X]，再点击[不感兴趣]跳过；特殊卡片则点击三点，再点击[内容反馈]跳过',
      activityIds: [
        'com.zhihu.android.ContentActivity',
        'com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity',
      ],
      fastQuery: true,
      rules: [
        {
          key: 0,
          matches:
            '@ImageView[id="com.zhihu.android:id/remove"] -n TextView[text$="广告"]',
          snapshotUrls: ['https://i.gkd.li/import/17004267'],
        },
        {
          key: 90,
          name: '点击[不感兴趣]',
          preKeys: [0],
          matches: '@TextView[text$="不感兴趣"]',
        },
        /*{
          key: 1,
          matches:
            '@ImageView[clickable=true] -n ViewGroup > TextView[text$="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/14664795',
        },
        {
          key: 2,
          matches:
            '@ImageView[clickable=true] <n ViewGroup -n ViewGroup > TextView[text$="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/15384691',
        },
        {
          key: 3,
          name: '来自其他文章或回答中的卡片',
          actionCd: 3000, // 增加冷却，否则易点击多次
          matches:
            '@FrameLayout[clickable=true] <4 LinearLayout[id="com.zhihu.android:id/rightLayout_inner"] <<n ViewGroup - TextView[text^="来自"]',
          snapshotUrls: 'https://i.gkd.li/import/15385023',
        },
        {
          key: 4, // TODO: Beta阶段，观察有无误触情况
          matches:
            '@ImageView[clickable=true] <2 ViewGroup -n TextView <n ViewGroup < FrameLayout',
          snapshotUrls: [
            'https://i.gkd.li/import/15484808',
            'https://i.gkd.li/import/15603459',
            'https://i.gkd.li/import/15486346',
          ],
        },
        {
          key: 90, // 内容反馈按钮可能超出可视区域导致无法点击，需手动拖动
          name: '点击[内容反馈]',
          preKeys: [3],
          matches:
            '@ViewGroup[clickable=true] > TextView[id="com.zhihu.android:id/title"&&text="内容反馈"]',
          snapshotUrls: 'https://i.gkd.li/import/15385053',
        },
        {
          key: 900,
          name: '点击[内容不感兴趣]',
          preKeys: [0, 1, 2, 4, 90],
          matches:
            '@[clickable=true] >(1,3) [text="内容不感兴趣"||text="内容质量差"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13849689',
            'https://i.gkd.li/import/14652100',
          ],
        },*/
      ],
    },
    {
      key: 5,
      name: '局部广告-回答底部评论顶部-任意广告推荐',
      desc: '直接点击[X]跳过',
      fastQuery: true,
      activityIds:
        'com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity',
      rules: [
        {
          key: 0,
          matches: '@ImageView -n TextView[text$=`的广告`]',
          snapshotUrls: 'https://i.gkd.li/import/17004262',
        },
        /*{
          key: 1,
          matches:
            '@ImageView[clickable=true] + ViewGroup > TextView[text$=`的广告`]',
          snapshotUrls: 'https://i.gkd.li/import/14664654',
        },
        {
          key: 2,
          matches:
            '@ImageView[clickable=true] -n TextView[text=null] <n ViewGroup',
          snapshotUrls: [
            'https://i.gkd.li/import/15484608',
            'https://i.gkd.li/import/15484611',
          ],
        },*/
      ],
    },
    {
      key: 6,
      name: '弹窗提示-关闭推送',
      desc: '自动点击[X]',
      activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
      fastQuery: true,
      rules:
        '@[id="com.zhihu.android:id/btn_close"] +4 [id="com.zhihu.android:id/btn_open_push"]',
      snapshotUrls: 'https://i.gkd.li/import/14918186',
    },
  ],
});
