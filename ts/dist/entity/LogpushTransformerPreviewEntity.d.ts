import { CloudflareLogpushEntityBase } from '../CloudflareLogpushEntityBase';
import type { CloudflareLogpushSDK } from '../CloudflareLogpushSDK';
import type { Control } from '../types';
import type { LogpushTransformerPreview, LogpushTransformerPreviewCreateData } from '../CloudflareLogpushTypes';
declare class LogpushTransformerPreviewEntity extends CloudflareLogpushEntityBase<LogpushTransformerPreview> {
    constructor(client: CloudflareLogpushSDK, entopts: any);
    make(this: LogpushTransformerPreviewEntity): LogpushTransformerPreviewEntity;
    create(this: any, reqdata?: LogpushTransformerPreviewCreateData, ctrl?: Control): Promise<LogpushTransformerPreviewEntity>;
}
export { LogpushTransformerPreviewEntity };
