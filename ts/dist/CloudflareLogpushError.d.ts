import { Context } from './Context';
declare class CloudflareLogpushError extends Error {
    isCloudflareLogpushError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { CloudflareLogpushError };
