import {CapacitorLogRocket} from '../../../src';

(window as any).initialize = (async(): Promise<void> => {
  await CapacitorLogRocket.init({
    configuration: {
      appId: 'planglobal-systems/planglobal'
    }
  });
});
