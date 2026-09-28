import { CloudflareLogpushEntityBase } from '../CloudflareLogpushEntityBase';
import type { CloudflareLogpushSDK } from '../CloudflareLogpushSDK';
import type { Control } from '../types';
import type { LogpushTransformerResponseSingle, LogpushTransformerResponseSingleLoadMatch, LogpushTransformerResponseSingleCreateData, LogpushTransformerResponseSingleUpdateData } from '../CloudflareLogpushTypes';
declare class LogpushTransformerResponseSingleEntity extends CloudflareLogpushEntityBase<LogpushTransformerResponseSingle> {
    constructor(client: CloudflareLogpushSDK, entopts: any);
    make(this: LogpushTransformerResponseSingleEntity): LogpushTransformerResponseSingleEntity;
    load(this: any, reqmatch?: LogpushTransformerResponseSingleLoadMatch, ctrl?: Control): Promise<LogpushTransformerResponseSingleEntity>;
    create(this: any, reqdata?: LogpushTransformerResponseSingleCreateData, ctrl?: Control): Promise<LogpushTransformerResponseSingleEntity>;
    update(this: any, reqdata?: LogpushTransformerResponseSingleUpdateData, ctrl?: Control): Promise<LogpushTransformerResponseSingleEntity>;
}
export { LogpushTransformerResponseSingleEntity };
