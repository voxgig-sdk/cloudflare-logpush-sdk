import { CloudflareLogpushEntityBase } from '../CloudflareLogpushEntityBase';
import type { CloudflareLogpushSDK } from '../CloudflareLogpushSDK';
import type { Control } from '../types';
import type { LogpushLogpushJobResponseSingle, LogpushLogpushJobResponseSingleLoadMatch, LogpushLogpushJobResponseSingleCreateData, LogpushLogpushJobResponseSingleUpdateData } from '../CloudflareLogpushTypes';
declare class LogpushLogpushJobResponseSingleEntity extends CloudflareLogpushEntityBase<LogpushLogpushJobResponseSingle> {
    constructor(client: CloudflareLogpushSDK, entopts: any);
    make(this: LogpushLogpushJobResponseSingleEntity): LogpushLogpushJobResponseSingleEntity;
    load(this: any, reqmatch?: LogpushLogpushJobResponseSingleLoadMatch, ctrl?: Control): Promise<LogpushLogpushJobResponseSingleEntity>;
    create(this: any, reqdata?: LogpushLogpushJobResponseSingleCreateData, ctrl?: Control): Promise<LogpushLogpushJobResponseSingleEntity>;
    update(this: any, reqdata?: LogpushLogpushJobResponseSingleUpdateData, ctrl?: Control): Promise<LogpushLogpushJobResponseSingleEntity>;
}
export { LogpushLogpushJobResponseSingleEntity };
