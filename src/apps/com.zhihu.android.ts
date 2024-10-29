import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zhihu.android',
  name: '知乎',
  groups: [
    {
      key: 0,
      name: '全屏广告-开屏广告',
      desc: '点击右上[关闭]',
      fastQuery: true,
      matchTime: 5000,
      activityIds: '.app.ui.activity.AdAlphaVideoActivity',
      rules: '[id="com.zhihu.android:id/tv_ad_close"&&text$="关闭"]',
      snapshotUrls: 'https://i.gkd.li/import/17556066',
    },
    {
      key: 1,
      name: '全屏广告-会员页面-广告弹窗',
      desc: '点击下方[X]',
      fastQuery: true,
      activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
      rules:
        '[id="com.zhihu.android:id/image"] < RelativeLayout + [id="com.zhihu.android:id/dismiss"]',
      snapshotUrls: 'https://i.gkd.li/import/17352576',
    },
    {
      key: 2,
      name: '局部广告-推荐页-顶部广告',
      desc: '点击角落位置[X]',
      fastQuery: true,
      activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
      rules: [
        {
          key: 0,
          name: '顶部广告',
          matches: '[id="com.zhihu.android:id/img_close_focus"]',
          snapshotUrls: 'https://i.gkd.li/import/12707676',
        },
        {
          key: 1,
          name: '侧边广告',
          matches:
            '@ImageView[clickable=true] + RelativeLayout >2 [id="com.zhihu.android:id/tv_ad_tag"][text="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/15520691',
        },
      ],
    },
    {
      key: 3,
      name: '分段广告-推荐页-问题广告卡片',
      desc: '点击角落[X]，再点击[不感兴趣]跳过',
      activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
      fastQuery: true,
      rules: [
        {
          key: 1,
          matches:
            '@ImageView[id=`com.zhihu.android:id/menu`] < FrameLayout - * > TextView[text^=`广告`]',
          snapshotUrls: 'https://i.gkd.li/import/14881985',
        },
        {
          key: 2,
          matches:
            '@ViewGroup[clickable=true] <<n ViewGroup -n ViewGroup > ViewGroup > TextView[text$="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/import/14731141',
            'https://i.gkd.li/import/15384942',
          ],
        },
        {
          key: 3,
          matches:
            '@ImageView[parent.childCount=1] < ViewGroup[index=parent.childCount.minus(1)] <n ViewGroup <<n ViewGroup < FrameLayout <n RecyclerView[id="com.zhihu.android:id/recycler"]',
          snapshotUrls: [
            'https://i.gkd.li/import/15445780', // 无任何广告提示的卡片广告
            'https://i.gkd.li/import/15445858', // 无图广告卡片
            'https://i.gkd.li/import/15445859', // 带图广告卡片
          ],
        },
        {
          key: 90,
          name: '点击[不感兴趣]',
          preKeys: [0, 1, 2, 3],
          matches: '@TextView[text$="不感兴趣"]',
        },
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
          matches: '@ImageView[clickable=true] -n TextView[text$="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/14664795',
        },
        {
          key: 1,
          matches:
            '@ImageView[clickable=true] <n ViewGroup -n ViewGroup > TextView[text$="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/15384691',
        },
        {
          key: 2,
          name: '来自其他文章或回答中的卡片',
          actionCd: 2000, // 增加冷却，否则易点击多次
          matches:
            '@FrameLayout[index=parent.childCount.minus(1)] <n LinearLayout[id="com.zhihu.android:id/rightLayout_inner"] <<n ViewGroup - TextView[text^="来自"]',
          snapshotUrls: 'https://i.gkd.li/import/15385023',
        },
        {
          key: 3,
          matches:
            '@ImageView[index=parent.childCount.minus(1)] <2 ViewGroup <<n FrameLayout <n RecyclerView[id="com.zhihu.android:id/recycler"]',
          snapshotUrls: [
            'https://i.gkd.li/import/15484808',
            'https://i.gkd.li/import/15603459',
            'https://i.gkd.li/import/15486346',
          ],
        },
        {
          key: 4,
          matches: '@ImageView -2 ViewGroup > TextView[text$=`的广告`]',
          snapshotUrls: 'https://i.gkd.li/import/17555999',
        },
        {
          key: 90,
          name: '点击[不感兴趣]或[屏蔽]',
          preKeys: [0, 1, 3],
          matches: '@TextView[text$="不感兴趣"||text="屏蔽该内容"]',
        },
        {
          key: 91,
          name: '点击[内容反馈]',
          preKeys: [2],
          matches:
            '@TextView[id="com.zhihu.android:id/title"&&text="内容反馈"]',
          snapshotUrls: 'https://i.gkd.li/import/15385053',
        },
        {
          key: 92, // TODO: 90,92是否可合并？
          name: '点击按钮删除内容',
          preKeys: [91],
          matches: '@TextView[text$="不感兴趣"||text="内容质量差"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13849689',
            'https://i.gkd.li/import/14652100',
          ],
        },
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
        {
          key: 1,
          matches:
            '@ImageView + ViewGroup[index=parent.childCount.minus(1)] > TextView[text$=`的广告`]',
          snapshotUrls: 'https://i.gkd.li/import/14664654',
        },
        {
          key: 2,
          matches:
            '@ImageView[index=parent.childCount.minus(1)] -n TextView[text=null] <3 ViewGroup',
          snapshotUrls: [
            'https://i.gkd.li/import/15484608',
            'https://i.gkd.li/import/15484611',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '弹窗提示-关闭推送',
      desc: '自动点击[X]',
      activityIds: ['.MainActivity', '.HostActivity'],
      fastQuery: true,
      rules:
        '@[id="com.zhihu.android:id/btn_close"] +4 [id="com.zhihu.android:id/btn_open_push"]',
      snapshotUrls: 'https://i.gkd.li/import/14918186',
    },
  ],
});
