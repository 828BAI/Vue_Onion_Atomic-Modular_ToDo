
const url_base = '/i'


export const fetchResource = async <T>(url: string, options: RequestInit = {}): Promise<T> => {
    try {
        const response = await fetch(url_base + url, options);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const contentType = response.headers.get('Content-Type');

        if (contentType && contentType.includes('application/json')) {
            const data = await response.json();
            return data as T;
        } else {
            // If the response is not JSON, you can handle it differently here,
            // such as returning the response text directly or throwing an error.
            // For example, returning response.text():
            const data = await response.text();
            return data as T;
        }
    } catch (error: any) {
        throw new Error(`Fetch error: ${error.message}`);
    }
};
