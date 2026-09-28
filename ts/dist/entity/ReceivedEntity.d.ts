import { CloudflareLogpushEntityBase } from '../CloudflareLogpushEntityBase';
import type { CloudflareLogpushSDK } from '../CloudflareLogpushSDK';
import type { Control } from '../types';
import type { Received, ReceivedLoadMatch } from '../CloudflareLogpushTypes';
declare class ReceivedEntity extends CloudflareLogpushEntityBase<Received> {
    constructor(client: CloudflareLogpushSDK, entopts: any);
    make(this: ReceivedEntity): ReceivedEntity;
    load(this: any, reqmatch?: ReceivedLoadMatch, ctrl?: Control): Promise<ReceivedEntity>;
}
export { ReceivedEntity };
