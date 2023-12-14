import type {WebResponse} from './web-response';
import type {WebRequest} from './web-request';

type WebOptions = {
  browser?: {
    urlSanitizer?: ((url: string) => (string | null)),
  },
  childDomains?: (string[] | null),
  console?: {
    isEnabled?: (boolean | {
      log?: boolean,
      info?: boolean,
      debug?: boolean,
      warn?: boolean,
      error?: boolean
    }),
    shouldAggregateConsoleErrors?: boolean,
  },
  disableBusyFramesTracker?: boolean,
  dom?: {
    baseHref?: string,
    hiddenAttributes?: string[],
    inputSanitizer?: (boolean | string),
    isEnabled?: boolean,
    privateAttributeBlocklist?: string[],
    privateClassNameBlocklist?: string[],
    textSanitizer?: (boolean | string),
  },
  mergeIframes?: boolean,
  network?: {
    isEnabled?: boolean,
    responseSanitizer?: ((response: WebResponse) => (WebResponse | null)),
    requestSanitizer?: ((request: WebRequest) => (WebRequest | null)),
  },
  parentDomain?: (string | null),
  release?: string,
  rootHostname?: string,
  serverURL?: string,
  shouldAugmentNPS?: boolean,
  shouldCaptureIP?: boolean
  shouldDebugLog?: boolean,
  shouldDetectExceptions?: boolean,
  shouldParseXHRBlob?: boolean,
  shouldSendData: (() => boolean),
  uploadTimeInterval?: number
};

export type {
  WebOptions
};
