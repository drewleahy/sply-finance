
/**
 * Helper function to check if a result is an error object
 */
export function isError(data: any): boolean {
  return data && typeof data === 'object' && 'error' in data;
}

/**
 * Helper function to safely access data from Supabase responses
 * where the response could be an error or undefined
 */
export function safeDataAccess<T, K extends keyof T>(
  data: T | unknown,
  key: K,
  defaultValue: T[K]
): T[K] {
  if (!data || isError(data)) {
    return defaultValue;
  }
  return (data as T)[key];
}

/**
 * Unwraps Supabase query results for use with react-query
 * Guards against property access on error objects
 */
export function unwrapResult<T>(result: T[] | null | unknown): T[] {
  if (!result || isError(result)) {
    return [];
  }
  return result as T[];
}
