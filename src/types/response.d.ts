export enum Status {
    OK = 200,
    Created = 202,
    NotFound = 404,
    BadRequest = 400,
    TooManyRequest = 429,
    InternalError = 500,
}

export enum Method {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
    OPTIONS = "OPTIONS",
    HEAD = "HEAD"
}

export interface Options {
    method: Method[] | string[], 
}