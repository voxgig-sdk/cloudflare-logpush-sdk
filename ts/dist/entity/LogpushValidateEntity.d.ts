import { CloudflareLogpushEntityBase } from '../CloudflareLogpushEntityBase';
import type { CloudflareLogpushSDK } from '../CloudflareLogpushSDK';
import type { Control } from '../types';
import type { LogpushValidate, LogpushValidateCreateData } from '../CloudflareLogpushTypes';
declare class LogpushValidateEntity extends CloudflareLogpushEntityBase<LogpushValidate> {
    constructor(client: CloudflareLogpushSDK, entopts: any);
    make(this: LogpushValidateEntity): LogpushValidateEntity;
    create(this: any, reqdata?: LogpushValidateCreateData, ctrl?: Control): Promise<LogpushValidateEntity>;
}
export { LogpushValidateEntity };
