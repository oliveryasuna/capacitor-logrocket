import type {Configuration, WebOptions} from '../../logrocket';

type InitOptions = {
  configuration: Configuration,
  webOptions?: Omit<WebOptions, 'serverURL'>
};

export type {
  InitOptions
};
