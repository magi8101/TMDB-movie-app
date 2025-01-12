export const loadEnv = async () => {
    try {
        const response = await fetch('/env');
        const env = await response.json();
        return env;
    } catch (error) {
        console.error('Error loading environment variables:', error);
        return {};
    }
};