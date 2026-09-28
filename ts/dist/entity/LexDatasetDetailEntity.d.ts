import { CloudflareLogpushEntityBase } from '../CloudflareLogpushEntityBase';
import type { CloudflareLogpushSDK } from '../CloudflareLogpushSDK';
import type { Control } from '../types';
import type { LexDatasetDetail, LexDatasetDetailLoadMatch, LexDatasetDetailCreateData, LexDatasetDetailUpdateData } from '../CloudflareLogpushTypes';
declare class LexDatasetDetailEntity extends CloudflareLogpushEntityBase<LexDatasetDetail> {
    constructor(client: CloudflareLogpushSDK, entopts: any);
    make(this: LexDatasetDetailEntity): LexDatasetDetailEntity;
    load(this: any, reqmatch?: LexDatasetDetailLoadMatch, ctrl?: Control): Promise<LexDatasetDetailEntity>;
    create(this: any, reqdata?: LexDatasetDetailCreateData, ctrl?: Control): Promise<LexDatasetDetailEntity>;
    update(this: any, reqdata?: LexDatasetDetailUpdateData, ctrl?: Control): Promise<LexDatasetDetailEntity>;
}
export { LexDatasetDetailEntity };
