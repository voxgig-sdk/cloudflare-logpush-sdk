import { CloudflareLogpushEntityBase } from '../CloudflareLogpushEntityBase';
import type { CloudflareLogpushSDK } from '../CloudflareLogpushSDK';
import type { Control } from '../types';
import type { LogpushLogpushFieldResponseCollection, LogpushLogpushFieldResponseCollectionListMatch } from '../CloudflareLogpushTypes';
declare class LogpushLogpushFieldResponseCollectionEntity extends CloudflareLogpushEntityBase<LogpushLogpushFieldResponseCollection> {
    constructor(client: CloudflareLogpushSDK, entopts: any);
    make(this: LogpushLogpushFieldResponseCollectionEntity): LogpushLogpushFieldResponseCollectionEntity;
    list(this: any, reqmatch?: LogpushLogpushFieldResponseCollectionListMatch, ctrl?: Control): Promise<LogpushLogpushFieldResponseCollectionEntity[]>;
}
export { LogpushLogpushFieldResponseCollectionEntity };
