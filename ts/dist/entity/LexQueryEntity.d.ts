import { CloudflareLogpushEntityBase } from '../CloudflareLogpushEntityBase';
import type { CloudflareLogpushSDK } from '../CloudflareLogpushSDK';
import type { Control } from '../types';
import type { LexQuery, LexQueryListMatch, LexQueryCreateData } from '../CloudflareLogpushTypes';
declare class LexQueryEntity extends CloudflareLogpushEntityBase<LexQuery> {
    constructor(client: CloudflareLogpushSDK, entopts: any);
    make(this: LexQueryEntity): LexQueryEntity;
    list(this: any, reqmatch?: LexQueryListMatch, ctrl?: Control): Promise<LexQueryEntity[]>;
    create(this: any, reqdata?: LexQueryCreateData, ctrl?: Control): Promise<LexQueryEntity>;
}
export { LexQueryEntity };
