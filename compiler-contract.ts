export type CompileRequest={language:'c'|'cpp'|'java';version:string;source:string;stdin?:string};
export type CompileResponse={status:'queued'|'running'|'accepted'|'compile_error'|'runtime_error'|'timeout'|'resource_limit';output?:string;error?:string;executionMs?:number;memoryKb?:number};
/** Backend boundary: submit to an isolated execution service, never child_process on the web server. */
export async function submitCompileJob(input:CompileRequest):Promise<CompileResponse>{throw new Error('Connect COMPILER_API_URL to an isolated sandbox execution service.');}
