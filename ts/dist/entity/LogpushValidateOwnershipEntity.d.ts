import { CloudflareLogpushEntityBase } from '../CloudflareLogpushEntityBase';
import type { CloudflareLogpushSDK } from '../CloudflareLogpushSDK';
import type { Control } from '../types';
import type { LogpushValidateOwnership, LogpushValidateOwnershipCreateData } from '../CloudflareLogpushTypes';
declare class LogpushValidateOwnershipEntity extends CloudflareLogpushEntityBase<LogpushValidateOwnership> {
    constructor(client: CloudflareLogpushSDK, entopts: any);
    make(this: LogpushValidateOwnershipEntity): LogpushValidateOwnershipEntity;
    create(this: any, reqdata?: LogpushValidateOwnershipCreateData, ctrl?: Control): Promise<LogpushValidateOwnershipEntity>;
}
export { LogpushValidateOwnershipEntity };
