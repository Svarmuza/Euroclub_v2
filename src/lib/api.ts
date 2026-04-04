const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export async function fetchApi<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;

    const defaultHeaders = {
        'Content-Type': 'application/json',
    };

    const response = await fetch(url, {
        ...options,
        headers: {
            ...defaultHeaders,
            ...options.headers,
        },
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`API Error ${response.status}: ${errorText}`);
    }

    // Not all responses will be JSON (e.g., empty 204), handle gracefully
    if (response.status === 204) {
        return {} as T;
    }

    return response.json();
}

/**
 * Common API functions mapping to existing Express endpoints
 */
export const api = {
    // Example for galleries, based on existing client codebase
    galleries: {
        getAll: () => fetchApi('/galleries'),
        getById: (id: number) => fetchApi(`/galleries/${id}`),
    },

    // Example for reservations
    reservations: {
        create: (data: any) => fetchApi('/reservations', {
            method: 'POST',
            body: JSON.stringify(data),
        }),
        saveStep1: (data: any) => fetchApi('/reservations/page1', {
            method: 'POST',
            body: JSON.stringify(data),
        }),
    }
};
