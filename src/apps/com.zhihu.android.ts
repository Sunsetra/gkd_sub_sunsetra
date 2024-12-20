import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zhihu.android',
  name: '知乎',
  groups: [
    {
      key: 0,
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
      ],
    },
  ],
});
