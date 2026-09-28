import { CloudflareLogpushEntityBase } from '../CloudflareLogpushEntityBase';
import type { CloudflareLogpushSDK } from '../CloudflareLogpushSDK';
import type { Control } from '../types';
import type { LogcontrolCmbConfigForAnAccount, LogcontrolCmbConfigForAnAccountRemoveMatch } from '../CloudflareLogpushTypes';
declare class LogcontrolCmbConfigForAnAccountEntity extends CloudflareLogpushEntityBase<LogcontrolCmbConfigForAnAccount> {
    constructor(client: CloudflareLogpushSDK, entopts: any);
    make(this: LogcontrolCmbConfigForAnAccountEntity): LogcontrolCmbConfigForAnAccountEntity;
    remove(this: any, reqmatch?: LogcontrolCmbConfigForAnAccountRemoveMatch, ctrl?: Control): Promise<LogcontrolCmbConfigForAnAccountEntity>;
}
export { LogcontrolCmbConfigForAnAccountEntity };
