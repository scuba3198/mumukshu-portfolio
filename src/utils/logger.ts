export const logger = {
    info: (...args: unknown[]) => console.info("[INFO]", ...args),
    debug: (...args: unknown[]) => {
        if (import.meta.env.MODE === "development") {
            console.debug("[DEBUG]", ...args);
        }
    },
    error: (...args: unknown[]) => console.error("[ERROR]", ...args),
    warn: (...args: unknown[]) => console.warn("[WARN]", ...args),
};
