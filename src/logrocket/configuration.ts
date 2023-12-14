import type {AndroidConfiguration} from './android';
import type {IosConfiguration} from './ios';
import type {SanitizerType} from './sanitizer-type';

type CommonConfiguration = {
  allowTags?: any[],
  appId: string,
  bufferTimeoutSeconds?: number,
  persistenceEnabled?: boolean,
  redactionTags?: any[],
  sanitizerType?: SanitizerType,
  serverUrl?: string,
  uploadIntervalMs?: number,
  viewScanningEnabled?: boolean
};

type Configuration = (CommonConfiguration & {
  android?: Omit<AndroidConfiguration, (keyof CommonConfiguration)>,
  ios?: Omit<IosConfiguration, (keyof CommonConfiguration)>
});

export type {
  CommonConfiguration,
  Configuration
};
