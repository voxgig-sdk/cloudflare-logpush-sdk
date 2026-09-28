import { CloudflareLogpushEntityBase } from '../CloudflareLogpushEntityBase';
import type { CloudflareLogpushSDK } from '../CloudflareLogpushSDK';
import type { Control } from '../types';
import type { LogpushInstantLogsJobResponseSingle, LogpushInstantLogsJobResponseSingleCreateData } from '../CloudflareLogpushTypes';
declare class LogpushInstantLogsJobResponseSingleEntity extends CloudflareLogpushEntityBase<LogpushInstantLogsJobResponseSingle> {
    constructor(client: CloudflareLogpushSDK, entopts: any);
    make(this: LogpushInstantLogsJobResponseSingleEntity): LogpushInstantLogsJobResponseSingleEntity;
    create(this: any, reqdata?: LogpushInstantLogsJobResponseSingleCreateData, ctrl?: Control): Promise<LogpushInstantLogsJobResponseSingleEntity>;
}
export { LogpushInstantLogsJobResponseSingleEntity };
