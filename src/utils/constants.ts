export const STATUS_CODES = {
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
    BAD_REQUEST: 400,
}

export type Lead = {
    name: string;
    phoneNumber: string;
    email: string;
    status: string;
  }