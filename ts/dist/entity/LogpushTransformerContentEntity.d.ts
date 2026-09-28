import { CloudflareLogpushEntityBase } from '../CloudflareLogpushEntityBase';
import type { CloudflareLogpushSDK } from '../CloudflareLogpushSDK';
import type { Control } from '../types';
import type { LogpushTransformerContent, LogpushTransformerContentLoadMatch } from '../CloudflareLogpushTypes';
declare class LogpushTransformerContentEntity extends CloudflareLogpushEntityBase<LogpushTransformerContent> {
    constructor(client: CloudflareLogpushSDK, entopts: any);
    make(this: LogpushTransformerContentEntity): LogpushTransformerContentEntity;
    load(this: any, reqmatch?: LogpushTransformerContentLoadMatch, ctrl?: Control): Promise<LogpushTransformerContentEntity>;
}
export { LogpushTransformerContentEntity };
