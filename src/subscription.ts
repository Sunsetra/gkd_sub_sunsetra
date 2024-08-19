import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 202405281509,
  name: 'GKDSunsetra',
  version: 6,
  author: 'Sunsetra',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/Sunsetra/gkd_sub_sunsetra/issues',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
