import { CloudflareLogpushEntityBase } from '../CloudflareLogpushEntityBase';
import type { CloudflareLogpushSDK } from '../CloudflareLogpushSDK';
import type { Control } from '../types';
import type { LogcontrolCmbConfigResponseSingle, LogcontrolCmbConfigResponseSingleLoadMatch, LogcontrolCmbConfigResponseSingleCreateData } from '../CloudflareLogpushTypes';
declare class LogcontrolCmbConfigResponseSingleEntity extends CloudflareLogpushEntityBase<LogcontrolCmbConfigResponseSingle> {
    constructor(client: CloudflareLogpushSDK, entopts: any);
    make(this: LogcontrolCmbConfigResponseSingleEntity): LogcontrolCmbConfigResponseSingleEntity;
    load(this: any, reqmatch?: LogcontrolCmbConfigResponseSingleLoadMatch, ctrl?: Control): Promise<LogcontrolCmbConfigResponseSingleEntity>;
    create(this: any, reqdata?: LogcontrolCmbConfigResponseSingleCreateData, ctrl?: Control): Promise<LogcontrolCmbConfigResponseSingleEntity>;
}
export { LogcontrolCmbConfigResponseSingleEntity };
