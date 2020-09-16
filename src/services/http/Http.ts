export interface IHttpRequest {
    method: "get" | "GET" | "delete" | "DELETE" | "head" | "HEAD" | "options" | "OPTIONS" | "post" | "POST" | "put" | "PUT" | "patch" | "PATCH" | "purge" | "PURGE" | "link" | "LINK" | "unlink" | "UNLINK" | undefined,
    url: string,
    data?: any
}

interface IHttpRequesterConstructor {
    token?: string;
    refreshToken?: string;
    timeout?: number;
    requesterLibrary: any,
}

interface IHttpRequestExecuteResult {
    response: any,
    error: any,
    success: boolean
}

class HttpRequester {
    private static instance: HttpRequester;
    private token: string;
    private refreshToken: string;
    private timeout: number;
    private requesterLibrary: any

    constructor({ requesterLibrary, token = "", refreshToken = "", timeout = 10000 }: IHttpRequesterConstructor) {
        this.requesterLibrary = requesterLibrary;
        this.token = token;
        this.refreshToken = refreshToken;
        this.timeout = timeout
    }

    public setToken(token: string): void {
        this.token = token
    }

    public getToken(): string {
        return this.token
    }

    public setRefreshToken(refreshToken: string): void {
        this.refreshToken = refreshToken
    }

    public getRefreshToken(): string {
        return this.refreshToken
    }

    public setTimeout(timeout: number): void {
        this.timeout = timeout
    };

    public getTimeout(): number {
        return this.timeout
    }

    public async execute({ method, url, data }: IHttpRequest) {

        let result: IHttpRequestExecuteResult = {
            response: null,
            success: false,
            error: null
        }

        try {
            const res = await this.requesterLibrary.request({
                timeout: this.timeout,
                method,
                url,
                data
            });

            result = {
                ...result,
                response: res,
                success: res.status >= 200 && res.status < 300
            }

            return result
        } catch (e) {
            result = {
                ...result,
                error: e
            }

            return result
        }

    }
}

export default HttpRequester