import {IosSanitizerType} from './ios-sanitizer-type';

type IosConfiguration = {
  allowTags?: any[],
  appId: string,
  bufferTimeoutSeconds?: number,
  experimentalBidiCapture?: boolean,
  forceCleanStart?: boolean,
  inputRedactionTags?: any[],
  ipCaptureEnabled?: boolean,
  logCaptureEnabled?: boolean,
  networkCaptureEnabled?: boolean,
  persistenceEnabled?: boolean,
  // TODO: proxyConfiguration.
  redactionTags?: any[],
  redactMenus?: boolean,
  registerTouchHandlers?: boolean,
  // TODO: requestSanitizer.
  // TODO: responseSanitizer.
  scaleFactor?: number,
  scrollDelegateDisabled?: boolean,
  serverUrl?: string
  textSanitizer?: IosSanitizerType,
  uploadIntervalMs?: number,
  viewScanningEnabled?: boolean
};

export type {
  IosConfiguration
};
