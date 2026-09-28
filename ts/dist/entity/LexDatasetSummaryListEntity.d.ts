import { CloudflareLogpushEntityBase } from '../CloudflareLogpushEntityBase';
import type { CloudflareLogpushSDK } from '../CloudflareLogpushSDK';
import type { Control } from '../types';
import type { LexDatasetSummaryList, LexDatasetSummaryListListMatch } from '../CloudflareLogpushTypes';
declare class LexDatasetSummaryListEntity extends CloudflareLogpushEntityBase<LexDatasetSummaryList> {
    constructor(client: CloudflareLogpushSDK, entopts: any);
    make(this: LexDatasetSummaryListEntity): LexDatasetSummaryListEntity;
    list(this: any, reqmatch?: LexDatasetSummaryListListMatch, ctrl?: Control): Promise<LexDatasetSummaryListEntity[]>;
}
export { LexDatasetSummaryListEntity };
