import LogRocket from 'logrocket';
import type {IdentifyOptions, InitOptions} from '../options';
import {CapacitorLogRocketPlugin} from '../plugin';
import {WebPlugin} from '@capacitor/core';

class CapacitorLogRocketWeb extends WebPlugin implements CapacitorLogRocketPlugin {

  // @native
  public async init(options: InitOptions): Promise<void> {
    LogRocket.init(
        options.configuration.appId,
        {
          ...options.webOptions,
          ...(options.configuration.serverUrl && {serverURL: options.configuration.serverUrl})
        }
    );
  }

  // @native
  public async identify(options: IdentifyOptions): Promise<void> {
    if(options.userId !== undefined) {
      if(options.userInfo) {
        LogRocket.identify(options.userId, options.userInfo);
      } else {
        LogRocket.identify(options.userId);
      }
    }
  }

  // @native
  public async getSessionUrl(): Promise<string> {
    return (new Promise<string>((resolve: ((value: string) => void)): void => {
      LogRocket.getSessionURL((sessionUrl: string): void => {
        resolve(sessionUrl);
      });
    }));
  }

}

export {
  CapacitorLogRocketWeb
};
