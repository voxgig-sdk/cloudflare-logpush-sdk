import { CloudflareLogpushEntityBase } from '../CloudflareLogpushEntityBase';
import type { CloudflareLogpushSDK } from '../CloudflareLogpushSDK';
import type { Control } from '../types';
import type { LogpushTransformerDelete, LogpushTransformerDeleteRemoveMatch } from '../CloudflareLogpushTypes';
declare class LogpushTransformerDeleteEntity extends CloudflareLogpushEntityBase<LogpushTransformerDelete> {
    constructor(client: CloudflareLogpushSDK, entopts: any);
    make(this: LogpushTransformerDeleteEntity): LogpushTransformerDeleteEntity;
    remove(this: any, reqmatch?: LogpushTransformerDeleteRemoveMatch, ctrl?: Control): Promise<LogpushTransformerDeleteEntity>;
}
export { LogpushTransformerDeleteEntity };
