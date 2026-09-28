import { CloudflareLogpushEntityBase } from '../CloudflareLogpushEntityBase';
import type { CloudflareLogpushSDK } from '../CloudflareLogpushSDK';
import type { Control } from '../types';
import type { Rayid, RayidLoadMatch } from '../CloudflareLogpushTypes';
declare class RayidEntity extends CloudflareLogpushEntityBase<Rayid> {
    constructor(client: CloudflareLogpushSDK, entopts: any);
    make(this: RayidEntity): RayidEntity;
    load(this: any, reqmatch?: RayidLoadMatch, ctrl?: Control): Promise<RayidEntity>;
}
export { RayidEntity };
