import { CloudflareLogpushEntityBase } from '../CloudflareLogpushEntityBase';
import type { CloudflareLogpushSDK } from '../CloudflareLogpushSDK';
import type { Control } from '../types';
import type { LogpushLogpushJobResponseCollection, LogpushLogpushJobResponseCollectionListMatch } from '../CloudflareLogpushTypes';
declare class LogpushLogpushJobResponseCollectionEntity extends CloudflareLogpushEntityBase<LogpushLogpushJobResponseCollection> {
    constructor(client: CloudflareLogpushSDK, entopts: any);
    make(this: LogpushLogpushJobResponseCollectionEntity): LogpushLogpushJobResponseCollectionEntity;
    list(this: any, reqmatch?: LogpushLogpushJobResponseCollectionListMatch, ctrl?: Control): Promise<LogpushLogpushJobResponseCollectionEntity[]>;
}
export { LogpushLogpushJobResponseCollectionEntity };
