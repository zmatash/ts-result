export type Success<T> = { ok: true; value: T };
export type Failure = { ok: false; error: ResultError };
export type Result<T> = Success<T> | Failure;

interface ResultError {
	message: string;
	cause?: Error;
	status?: number;
}

export function ok<T>(value: T): Success<T> {
	return { ok: true, value };
}

export function err(error: ResultError): Failure {
	return { ok: false, error };
}
