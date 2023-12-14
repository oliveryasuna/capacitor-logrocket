import {registerPlugin} from '@capacitor/core';
import type {CapacitorLogRocketPlugin} from './plugin';
import {CapacitorLogRocketNative, CapacitorLogRocketWeb} from './plugin';

const CapacitorLogRocket: CapacitorLogRocketPlugin = registerPlugin<CapacitorLogRocketPlugin>(
    'CapacitorLogRocket',
    {
      android: (async(): (Promise<CapacitorLogRocketPlugin | CapacitorLogRocketNative>) =>
          import('./plugin/impl/native').then(module => (new module.CapacitorLogRocketNative(CapacitorLogRocket as CapacitorLogRocketNative)))),
      ios: (async(): (Promise<CapacitorLogRocketPlugin | CapacitorLogRocketNative>) =>
          import('./plugin/impl/native').then(module => (new module.CapacitorLogRocketNative(CapacitorLogRocket as CapacitorLogRocketNative)))),
      web: (async(): (Promise<CapacitorLogRocketPlugin | CapacitorLogRocketWeb>) =>
          import('./plugin/impl/web').then(module => (new module.CapacitorLogRocketWeb())))
    }
);

export * from './logrocket';
export * from './plugin';
export {
  CapacitorLogRocket
};
export default CapacitorLogRocket;
