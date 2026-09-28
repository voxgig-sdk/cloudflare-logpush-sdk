import { CloudflareLogpushEntityBase } from '../CloudflareLogpushEntityBase';
import type { CloudflareLogpushSDK } from '../CloudflareLogpushSDK';
import type { Control } from '../types';
import type { LogExplorerDataset, LogExplorerDatasetRemoveMatch } from '../CloudflareLogpushTypes';
declare class LogExplorerDatasetEntity extends CloudflareLogpushEntityBase<LogExplorerDataset> {
    constructor(client: CloudflareLogpushSDK, entopts: any);
    make(this: LogExplorerDatasetEntity): LogExplorerDatasetEntity;
    remove(this: any, reqmatch?: LogExplorerDatasetRemoveMatch, ctrl?: Control): Promise<LogExplorerDatasetEntity>;
}
export { LogExplorerDatasetEntity };
