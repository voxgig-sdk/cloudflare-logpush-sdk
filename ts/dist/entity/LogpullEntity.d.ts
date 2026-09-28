import { CloudflareLogpushEntityBase } from '../CloudflareLogpushEntityBase';
import type { CloudflareLogpushSDK } from '../CloudflareLogpushSDK';
import type { Control } from '../types';
import type { Logpull, LogpullLoadMatch, LogpullListMatch } from '../CloudflareLogpushTypes';
declare class LogpullEntity extends CloudflareLogpushEntityBase<Logpull> {
    constructor(client: CloudflareLogpushSDK, entopts: any);
    make(this: LogpullEntity): LogpullEntity;
    load(this: any, reqmatch?: LogpullLoadMatch, ctrl?: Control): Promise<LogpullEntity>;
    list(this: any, reqmatch?: LogpullListMatch, ctrl?: Control): Promise<LogpullEntity[]>;
}
export { LogpullEntity };
