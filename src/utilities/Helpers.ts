export const redacted = "[REDACTED]";

export function isDevelopmentEnviroment()
{
    return !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
}

export function redact(originalText : string, redactedText : string)
{
    if(isDevelopmentEnviroment()) return originalText; else return redactedText;
}