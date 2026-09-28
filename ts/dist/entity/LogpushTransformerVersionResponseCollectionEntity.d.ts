import { CloudflareLogpushEntityBase } from '../CloudflareLogpushEntityBase';
import type { CloudflareLogpushSDK } from '../CloudflareLogpushSDK';
import type { Control } from '../types';
import type { LogpushTransformerVersionResponseCollection, LogpushTransformerVersionResponseCollectionListMatch } from '../CloudflareLogpushTypes';
declare class LogpushTransformerVersionResponseCollectionEntity extends CloudflareLogpushEntityBase<LogpushTransformerVersionResponseCollection> {
    constructor(client: CloudflareLogpushSDK, entopts: any);
    make(this: LogpushTransformerVersionResponseCollectionEntity): LogpushTransformerVersionResponseCollectionEntity;
    list(this: any, reqmatch?: LogpushTransformerVersionResponseCollectionListMatch, ctrl?: Control): Promise<LogpushTransformerVersionResponseCollectionEntity[]>;
}
export { LogpushTransformerVersionResponseCollectionEntity };
