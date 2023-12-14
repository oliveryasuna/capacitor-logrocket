import type {IdentifyOptions, InitOptions} from '../options';
import type {Configuration} from '../../logrocket';
import LogRocket from 'logrocket';
import type {CapacitorLogRocketPlugin} from '../plugin';

type NativeIdentifyOptions = {
  userId: string,
  userInfo?: Record<string, string>
};

type NativeGetSessionUrlResult = {
  sessionUrl: string
};

class CapacitorLogRocketNative implements CapacitorLogRocketPlugin {

  public constructor(proxy: CapacitorLogRocketNative) {
    // TODO: Does `Capacitor.getPlatform()` work here?
    //       If so, I can have separate native methods.

    this._nativeInit = proxy._nativeInit;
    this._nativeIdentify = proxy._nativeIdentify;
    this._nativeGetSessionUrl = proxy._nativeGetSessionUrl;
  }

  public async init(options: InitOptions): Promise<void> {
    if(options.webOptions) {
      LogRocket.init(
          options.configuration.appId,
          {
            ...options.webOptions,
            ...(options.configuration.serverUrl && {serverURL: options.configuration.serverUrl})
          }
      );
    } else {
      LogRocket.init(options.configuration.appId);
    }

    return this._nativeInit(options.configuration);
  }

  // @native
  protected async _nativeInit(_configuration: Configuration): Promise<void> {
    return Promise.resolve();
  }

  public async identify(options: IdentifyOptions): Promise<void> {
    if(options.userId === undefined) {
      return Promise.reject(new Error('`options.userId` is required.'));
    }

    return this._nativeIdentify({
      userId: options.userId,
      ...(options.userInfo && {
        userInfo: Object.entries(options.userInfo)
            .reduce(
                ((acc: Record<string, string>, [key, value]: [string, (string | number | boolean)]): Record<string, string> =>
                    ({...acc, [key]: value.toString()})),
                {}
            )
      })
    });
  }

  // @native
  protected async _nativeIdentify(_options: NativeIdentifyOptions): Promise<void> {
    return Promise.resolve();
  }

  public async getSessionUrl(): Promise<string> {
    return this._nativeGetSessionUrl()
        .then((result: NativeGetSessionUrlResult): string => result.sessionUrl);
  }

  // @native
  protected async _nativeGetSessionUrl(): Promise<NativeGetSessionUrlResult> {
    return Promise.resolve({sessionUrl: ''});
  }

}

export {
  CapacitorLogRocketNative
};
