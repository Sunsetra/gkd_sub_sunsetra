import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.twitter.android',
  name: 'X(推特)',
  groups: [
    {
      key: 0,
      name: '分段广告-主页',
      desc: '点击右上角三点，点击我不喜欢',
      activityIds: 'com.twitter.app.main.MainActivity',
      actionCd: 3000, // 解决问题https://github.com/gkd-kit/subscription/issues/832
      quickFind: true,
      rules: [
        {
          key: 0,
          name: '视频广告',
          matches:
            '@[id="com.twitter.android:id/tweet_curation_action"] <2 LinearLayout + LinearLayout >n [id="com.twitter.android:id/upper_video_attribution"][text="视频将在广告后播放"]',
          snapshotUrls: 'https://i.gkd.li/import/12798795',
        },
        {
          key: 1,
          name: '推荐广告',
          matches:
            '@[id="com.twitter.android:id/tweet_curation_action"] <2 * + [id="com.twitter.android:id/tweet_auto_playable_content_parent"] > [id="com.twitter.android:id/tweet_promoted_badge_bottom"][text$="推荐"]',
          snapshotUrls: 'https://i.gkd.li/import/12813235',
        },
        {
          preKeys: [0, 1],
          key: 10,
          name: '点击[我不喜欢这个广告]',
          matches:
            '@ViewGroup > [id="com.twitter.android:id/action_sheet_item_title"][text="我不喜欢这个广告"]',
          snapshotUrls: 'https://i.gkd.li/import/12798810',
        },
      ],
    },
    {
      key: 1,
      name: '分段广告-帖子详情页',
      desc: '点击右上角三点，点击屏蔽用户，确认屏蔽。点击[我不喜欢]会返回主页，因此点击[屏蔽]',
      quickFind: true,
      activityIds: 'com.twitter.tweetdetail.TweetDetailActivity',
      actionCd: 3000,
      rules: [
        {
          name: '点击右上角三点',
          key: 0,
          matches:
            '@[id="com.twitter.android:id/tweet_curation_action"] <2 * + [id="com.twitter.android:id/tweet_auto_playable_content_parent"] > [id="com.twitter.android:id/tweet_promoted_badge_bottom"][text$="推荐"]',
          snapshotUrls: 'https://i.gkd.li/import/12882676',
        },
        {
          preKeys: 0,
          key: 10,
          name: '点击[屏蔽]',
          matches:
            '@ViewGroup > [id="com.twitter.android:id/action_sheet_item_title"][text^="屏蔽"]',
          snapshotUrls: 'https://i.gkd.li/import/12828815',
        },
        {
          preKeys: 10,
          key: 11,
          name: '二次确认-点击[屏蔽]',
          matches: '[text="取消"] + [text="屏蔽"]',
          snapshotUrls: 'https://i.gkd.li/import/12828832',
        },
      ],
    },
    {
      key: 2,
      name: '占位消息-关闭推荐',
      desc: '点击右上角三点，点击[减少看到的频率]',
      quickFind: true,
      activityIds: 'com.twitter.app.main.MainActivity',
      actionCd: 3000,
      rules: [
        {
          name: '联系人推荐',
          key: 0,
          matches:
            '@[id="com.twitter.android:id/caret"][clickable=true][desc="忽略"] - LinearLayout > TextView[id="com.twitter.android:id/body"][text="查看你的联系人。"]',
          snapshotUrls: 'https://i.gkd.li/import/15049983',
        },
        {
          name: '推荐关注',
          key: 1,
          matches:
            '@[id="com.twitter.android:id/module_caret"][clickable=true][desc="推荐选项"] - LinearLayout[id="com.twitter.android:id/list_row_header"] >2 TextView[id="com.twitter.android:id/title"][text="Who to follow"]',
          snapshotUrls: 'https://i.gkd.li/import/14711940',
        },
        {
          preKeys: [0, 1],
          key: 10,
          name: '点击[减少看到的频率]',
          matches:
            '@ViewGroup > [id="com.twitter.android:id/action_sheet_item_title"][text="减少看到的频率"]',
          snapshotUrls: 'https://i.gkd.li/import/14711942',
        },
      ],
    },
    {
      key: 3,
      name: '弹窗提示-关闭通知提示',
      desc: '点击[暂时不用]',
      quickFind: true,
      activityIds: 'com.twitter.app.main.MainActivity',
      actionCd: 3000,
      rules:
        '@ViewGroup[id="com.twitter.android:id/secondary_button"] >3 TextView[text="暂时不用"]',
      snapshotUrls: 'https://i.gkd.li/import/15003664',
    },
  ],
});
