export interface ApiClientInterface {
    get(endpoint: string, params?: object, signal?: AbortSignal): Promise<any>;
    post(endpoint: string, data?: object, signal?: AbortSignal): Promise<any>;
    uploadFile(endpoint: string, formData: FormData): Promise<any>;
}
