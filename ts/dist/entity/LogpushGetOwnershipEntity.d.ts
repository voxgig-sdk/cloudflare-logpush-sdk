import { CloudflareLogpushEntityBase } from '../CloudflareLogpushEntityBase';
import type { CloudflareLogpushSDK } from '../CloudflareLogpushSDK';
import type { Control } from '../types';
import type { LogpushGetOwnership, LogpushGetOwnershipCreateData } from '../CloudflareLogpushTypes';
declare class LogpushGetOwnershipEntity extends CloudflareLogpushEntityBase<LogpushGetOwnership> {
    constructor(client: CloudflareLogpushSDK, entopts: any);
    make(this: LogpushGetOwnershipEntity): LogpushGetOwnershipEntity;
    create(this: any, reqdata?: LogpushGetOwnershipCreateData, ctrl?: Control): Promise<LogpushGetOwnershipEntity>;
}
export { LogpushGetOwnershipEntity };
