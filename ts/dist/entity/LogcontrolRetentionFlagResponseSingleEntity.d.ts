import { CloudflareLogpushEntityBase } from '../CloudflareLogpushEntityBase';
import type { CloudflareLogpushSDK } from '../CloudflareLogpushSDK';
import type { Control } from '../types';
import type { LogcontrolRetentionFlagResponseSingle, LogcontrolRetentionFlagResponseSingleLoadMatch, LogcontrolRetentionFlagResponseSingleCreateData } from '../CloudflareLogpushTypes';
declare class LogcontrolRetentionFlagResponseSingleEntity extends CloudflareLogpushEntityBase<LogcontrolRetentionFlagResponseSingle> {
    constructor(client: CloudflareLogpushSDK, entopts: any);
    make(this: LogcontrolRetentionFlagResponseSingleEntity): LogcontrolRetentionFlagResponseSingleEntity;
    load(this: any, reqmatch?: LogcontrolRetentionFlagResponseSingleLoadMatch, ctrl?: Control): Promise<LogcontrolRetentionFlagResponseSingleEntity>;
    create(this: any, reqdata?: LogcontrolRetentionFlagResponseSingleCreateData, ctrl?: Control): Promise<LogcontrolRetentionFlagResponseSingleEntity>;
}
export { LogcontrolRetentionFlagResponseSingleEntity };
