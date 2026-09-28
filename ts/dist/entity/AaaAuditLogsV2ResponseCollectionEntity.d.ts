import { CloudflareLogpushEntityBase } from '../CloudflareLogpushEntityBase';
import type { CloudflareLogpushSDK } from '../CloudflareLogpushSDK';
import type { Control } from '../types';
import type { AaaAuditLogsV2ResponseCollection, AaaAuditLogsV2ResponseCollectionListMatch } from '../CloudflareLogpushTypes';
declare class AaaAuditLogsV2ResponseCollectionEntity extends CloudflareLogpushEntityBase<AaaAuditLogsV2ResponseCollection> {
    constructor(client: CloudflareLogpushSDK, entopts: any);
    make(this: AaaAuditLogsV2ResponseCollectionEntity): AaaAuditLogsV2ResponseCollectionEntity;
    list(this: any, reqmatch?: AaaAuditLogsV2ResponseCollectionListMatch, ctrl?: Control): Promise<AaaAuditLogsV2ResponseCollectionEntity[]>;
}
export { AaaAuditLogsV2ResponseCollectionEntity };
