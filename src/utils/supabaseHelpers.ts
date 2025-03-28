
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
export function unwrapResult<T>(result: unknown): T[] {
  if (!result || isError(result)) {
    return [];
  }
  
  // Handle case where result is an array
  if (Array.isArray(result)) {
    return result as T[];
  }
  
  return [];
}

/**
 * Safe object accessor that prevents TypeScript errors when accessing properties
 * Use this for single objects (not arrays)
 */
export function safeObject<T extends object>(obj: unknown, defaultValue: T): T {
  if (!obj || isError(obj) || typeof obj !== 'object') {
    return defaultValue;
  }
  return obj as T;
}

/**
 * Map unknown objects to proper types while preventing errors
 * Useful for mapping through database results
 */
export function mapSafely<T, R>(items: unknown, mapFn: (item: T) => R, defaultValue: R[] = []): R[] {
  if (!items || isError(items)) {
    return defaultValue;
  }
  
  if (!Array.isArray(items)) {
    return defaultValue;
  }
  
  return items.map((item) => mapFn(item as T));
}

/**
 * Type guard to check if an object has a specific property
 */
export function hasProperty<K extends string>(obj: unknown, prop: K): obj is { [key in K]: unknown } {
  return obj !== null && typeof obj === 'object' && prop in obj;
}
