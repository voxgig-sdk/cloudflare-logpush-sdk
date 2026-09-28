import { CloudflareLogpushEntityBase } from '../CloudflareLogpushEntityBase';
import type { CloudflareLogpushSDK } from '../CloudflareLogpushSDK';
import type { Control } from '../types';
import type { LogpushDestinationExist, LogpushDestinationExistCreateData } from '../CloudflareLogpushTypes';
declare class LogpushDestinationExistEntity extends CloudflareLogpushEntityBase<LogpushDestinationExist> {
    constructor(client: CloudflareLogpushSDK, entopts: any);
    make(this: LogpushDestinationExistEntity): LogpushDestinationExistEntity;
    create(this: any, reqdata?: LogpushDestinationExistCreateData, ctrl?: Control): Promise<LogpushDestinationExistEntity>;
}
export { LogpushDestinationExistEntity };
