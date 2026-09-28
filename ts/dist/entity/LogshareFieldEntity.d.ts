import { CloudflareLogpushEntityBase } from '../CloudflareLogpushEntityBase';
import type { CloudflareLogpushSDK } from '../CloudflareLogpushSDK';
import type { Control } from '../types';
import type { LogshareField, LogshareFieldLoadMatch } from '../CloudflareLogpushTypes';
declare class LogshareFieldEntity extends CloudflareLogpushEntityBase<LogshareField> {
    constructor(client: CloudflareLogpushSDK, entopts: any);
    make(this: LogshareFieldEntity): LogshareFieldEntity;
    load(this: any, reqmatch?: LogshareFieldLoadMatch, ctrl?: Control): Promise<LogshareFieldEntity>;
}
export { LogshareFieldEntity };
