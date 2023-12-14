import type {IdentifyOptions, InitOptions} from './options';

interface CapacitorLogRocketPlugin {
  init: ((options: InitOptions) => Promise<void>),
  identify: ((options: IdentifyOptions) => Promise<void>),
  getSessionUrl: (() => Promise<string>),
  // TODO: The rest.
}

export type {
  CapacitorLogRocketPlugin
};
