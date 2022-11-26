export const redacted = "[REDACTED]";

export function isDevtEnv()
{
    return !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
}

export function redact(originalText : string, redactedText : string)
{
    if(isDevtEnv()) return originalText; else return redactedText;
}