import { EnvConfig, EnvConstants } from '../../../../../tools/env/env-config.interface';

export const Config: EnvConfig = JSON.parse('<%= ENV_CONFIG %>');

export const CommonConstants: EnvConstants = new EnvConstants();
