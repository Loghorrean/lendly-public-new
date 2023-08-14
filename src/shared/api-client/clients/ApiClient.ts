import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { ApiClientInterface } from "./ApiClientInterface";
import { HttpHeaders } from "@/src/shared/utils/types";
import { HttpError, ValidationError, PropertyError, Unauthorized, Forbidden } from "@/src/shared/models/errors";

export class ApiClient implements ApiClientInterface {
    constructor(
        private readonly baseUrl: string,
        private readonly headers: HttpHeaders,
        private readonly authToken: string = ""
    ) {}

    public async get(endpoint = "", params?: object, signal?: AbortSignal): Promise<any> {
        try {
            const client = this.createClient(params);
            const response = await client.get(endpoint, { signal });
            return response.data;
        } catch (error: any) {
            this.handleError(error);
        }
    }

    public async post(endpoint = "", data?: object, signal?: AbortSignal): Promise<any> {
        try {
            const client = this.createClient();
            const response = await client.post(endpoint, data, { signal });
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    public async uploadFile(endpoint = "", formData: FormData): Promise<any> {
        try {
            const client = this.createClient();
            const response = await client.post(endpoint, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    private createClient(params: object = {}): AxiosInstance {
        const config: AxiosRequestConfig<any> = {
            baseURL: this.baseUrl,
            headers: { ...this.headers, "Content-Type": "application/json" },
            params: params,
        };
        if (this.authToken) {
            config.headers = {
                Authorization: `Bearer ${this.authToken}`,
            };
        }
        return axios.create(config);
    }

    private handleError(error: any): never {
        if (!error.response) {
            throw new HttpError(error.message);
        } else if (error.response.status === 400) {
            const errors: Array<any> = error.response.data.errors instanceof Array ? error.response.data.errors : [];
            throw new ValidationError(
                error.response.data.message,
                errors
                    .filter(item => item && item.propertyPath && item.message)
                    .map(item => new PropertyError(item.propertyPath, item.message))
            );
        } else if (error.response.status === 401) {
            throw new Unauthorized(error.response.data);
        } else if (error.response.status === 403) {
            throw new Forbidden(error.response.data);
        } else {
            throw error;
        }
    }
}
