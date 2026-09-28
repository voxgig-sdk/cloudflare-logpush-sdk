import { CloudflareLogpushEntityBase } from '../CloudflareLogpushEntityBase';
import type { CloudflareLogpushSDK } from '../CloudflareLogpushSDK';
import type { Control } from '../types';
import type { LogpushJobsForAnAccount, LogpushJobsForAnAccountRemoveMatch } from '../CloudflareLogpushTypes';
declare class LogpushJobsForAnAccountEntity extends CloudflareLogpushEntityBase<LogpushJobsForAnAccount> {
    constructor(client: CloudflareLogpushSDK, entopts: any);
    make(this: LogpushJobsForAnAccountEntity): LogpushJobsForAnAccountEntity;
    remove(this: any, reqmatch?: LogpushJobsForAnAccountRemoveMatch, ctrl?: Control): Promise<LogpushJobsForAnAccountEntity>;
}
export { LogpushJobsForAnAccountEntity };
