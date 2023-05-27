import { PropertyError } from "./PropertyError";

export class ValidationError {
    constructor(readonly message: string, readonly errors: Array<PropertyError>) {}
}
