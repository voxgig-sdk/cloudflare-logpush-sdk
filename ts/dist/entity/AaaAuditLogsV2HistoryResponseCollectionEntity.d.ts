import { CloudflareLogpushEntityBase } from '../CloudflareLogpushEntityBase';
import type { CloudflareLogpushSDK } from '../CloudflareLogpushSDK';
import type { Control } from '../types';
import type { AaaAuditLogsV2HistoryResponseCollection, AaaAuditLogsV2HistoryResponseCollectionListMatch } from '../CloudflareLogpushTypes';
declare class AaaAuditLogsV2HistoryResponseCollectionEntity extends CloudflareLogpushEntityBase<AaaAuditLogsV2HistoryResponseCollection> {
    constructor(client: CloudflareLogpushSDK, entopts: any);
    make(this: AaaAuditLogsV2HistoryResponseCollectionEntity): AaaAuditLogsV2HistoryResponseCollectionEntity;
    list(this: any, reqmatch?: AaaAuditLogsV2HistoryResponseCollectionListMatch, ctrl?: Control): Promise<AaaAuditLogsV2HistoryResponseCollectionEntity[]>;
}
export { AaaAuditLogsV2HistoryResponseCollectionEntity };
