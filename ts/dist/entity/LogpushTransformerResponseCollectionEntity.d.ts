import { CloudflareLogpushEntityBase } from '../CloudflareLogpushEntityBase';
import type { CloudflareLogpushSDK } from '../CloudflareLogpushSDK';
import type { Control } from '../types';
import type { LogpushTransformerResponseCollection, LogpushTransformerResponseCollectionListMatch } from '../CloudflareLogpushTypes';
declare class LogpushTransformerResponseCollectionEntity extends CloudflareLogpushEntityBase<LogpushTransformerResponseCollection> {
    constructor(client: CloudflareLogpushSDK, entopts: any);
    make(this: LogpushTransformerResponseCollectionEntity): LogpushTransformerResponseCollectionEntity;
    list(this: any, reqmatch?: LogpushTransformerResponseCollectionListMatch, ctrl?: Control): Promise<LogpushTransformerResponseCollectionEntity[]>;
}
export { LogpushTransformerResponseCollectionEntity };
