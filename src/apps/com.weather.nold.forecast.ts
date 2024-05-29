import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.weather.nold.forecast',
  name: '天气',
  groups: [
    {
      key: 0,
      quickFind: true,
      name: '全屏广告-会员推荐',
      desc: '点击右上角的[X]',
      activityIds: 'com.weather.nold.ui.secondary_pager.PremiumActivity',
      rules: '@ImageView[id="com.weather.nold.forecast:id/btn_close"]',
      snapshotUrls: 'https://i.gkd.li/import/15147969',
    },
    {
      key: 1,
      quickFind: true,
      name: '全屏广告-谷歌广告',
      desc: '点击[关闭]控件（控件不可见时依然有效）',
      activityIds: 'com.google.android.gms.ads.AdActivity',
      rules: '@FrameLayout[clickable=true]',
      snapshotUrls: 'https://i.gkd.li/import/15148006',
    },
  ],
});
