import { CloudflareLogpushEntityBase } from '../CloudflareLogpushEntityBase';
import type { CloudflareLogpushSDK } from '../CloudflareLogpushSDK';
import type { Control } from '../types';
import type { LogpushJobsForAZone, LogpushJobsForAZoneRemoveMatch } from '../CloudflareLogpushTypes';
declare class LogpushJobsForAZoneEntity extends CloudflareLogpushEntityBase<LogpushJobsForAZone> {
    constructor(client: CloudflareLogpushSDK, entopts: any);
    make(this: LogpushJobsForAZoneEntity): LogpushJobsForAZoneEntity;
    remove(this: any, reqmatch?: LogpushJobsForAZoneRemoveMatch, ctrl?: Control): Promise<LogpushJobsForAZoneEntity>;
}
export { LogpushJobsForAZoneEntity };
