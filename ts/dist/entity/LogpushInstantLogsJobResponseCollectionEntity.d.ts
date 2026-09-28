import { CloudflareLogpushEntityBase } from '../CloudflareLogpushEntityBase';
import type { CloudflareLogpushSDK } from '../CloudflareLogpushSDK';
import type { Control } from '../types';
import type { LogpushInstantLogsJobResponseCollection, LogpushInstantLogsJobResponseCollectionListMatch } from '../CloudflareLogpushTypes';
declare class LogpushInstantLogsJobResponseCollectionEntity extends CloudflareLogpushEntityBase<LogpushInstantLogsJobResponseCollection> {
    constructor(client: CloudflareLogpushSDK, entopts: any);
    make(this: LogpushInstantLogsJobResponseCollectionEntity): LogpushInstantLogsJobResponseCollectionEntity;
    list(this: any, reqmatch?: LogpushInstantLogsJobResponseCollectionListMatch, ctrl?: Control): Promise<LogpushInstantLogsJobResponseCollectionEntity[]>;
}
export { LogpushInstantLogsJobResponseCollectionEntity };
