import { CloudflareLogpushEntityBase } from '../CloudflareLogpushEntityBase';
import type { CloudflareLogpushSDK } from '../CloudflareLogpushSDK';
import type { Control } from '../types';
import type { AaaAuditLogsV2ProductCategoriesResponseCollection, AaaAuditLogsV2ProductCategoriesResponseCollectionListMatch } from '../CloudflareLogpushTypes';
declare class AaaAuditLogsV2ProductCategoriesResponseCollectionEntity extends CloudflareLogpushEntityBase<AaaAuditLogsV2ProductCategoriesResponseCollection> {
    constructor(client: CloudflareLogpushSDK, entopts: any);
    make(this: AaaAuditLogsV2ProductCategoriesResponseCollectionEntity): AaaAuditLogsV2ProductCategoriesResponseCollectionEntity;
    list(this: any, reqmatch?: AaaAuditLogsV2ProductCategoriesResponseCollectionListMatch, ctrl?: Control): Promise<AaaAuditLogsV2ProductCategoriesResponseCollectionEntity[]>;
}
export { AaaAuditLogsV2ProductCategoriesResponseCollectionEntity };
