import { CloudflareLogpushEntityBase } from '../CloudflareLogpushEntityBase';
import type { CloudflareLogpushSDK } from '../CloudflareLogpushSDK';
import type { Control } from '../types';
import type { LexAvailableDestinationList, LexAvailableDestinationListListMatch } from '../CloudflareLogpushTypes';
declare class LexAvailableDestinationListEntity extends CloudflareLogpushEntityBase<LexAvailableDestinationList> {
    constructor(client: CloudflareLogpushSDK, entopts: any);
    make(this: LexAvailableDestinationListEntity): LexAvailableDestinationListEntity;
    list(this: any, reqmatch?: LexAvailableDestinationListListMatch, ctrl?: Control): Promise<LexAvailableDestinationListEntity[]>;
}
export { LexAvailableDestinationListEntity };
