import type {AndroidLogLevel} from './android-log-level';
import type {AndroidSanitizerType} from './android-sanitizer-type';

type AndroidConfiguration = {
  allowTags?: any[],
  appId: string,
  bufferTimeoutSeconds?: number,
  dashboardUrl?: string,
  jetpackComposeEnabled?: boolean,
  logLevel?: AndroidLogLevel,
  persistenceEnabled?: boolean,
  redactionTags?: any[],
  sanitizerType?: AndroidSanitizerType
  serverUrl?: string,
  shouldDetectExceptions?: boolean,
  shouldSendCrashReport?: boolean,
  uploaderEnabled?: boolean,
  uploadIntervalMs?: number,
  viewScanIntervalSeconds?: number,
  viewScanningEnabled?: boolean
};

export type {
  AndroidConfiguration
};
