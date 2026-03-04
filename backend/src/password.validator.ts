export type LevelClassified = 1 | 2 | 3 | 4 | 5 | 6;

interface PasswordEvaluationResult {
    level: LevelClassified;
    classification: string;
}

export function evaluatePassword(password: string): PasswordEvaluationResult {
    const length = password.length;

    const hasLower = /[a-z]/.test(password);
    const hasUpper = /[A-Z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSymbols = /[!@#$%&*()_+\-=\[\]{}|;:,.<>?]/.test(password);

    const hasSequentialNumbers = /(012|123|234|345|456|567|678|789)/.test(password);

    // Level 6
    if (length >= 16) {
        return { level: 6, classification: "Impossible" };
    }

    // Level 5
    if (length >= 12 && hasLower && hasUpper && hasNumbers && hasSymbols) {
        return { level: 5, classification: "Very strong" };
    }

    // Level 4
    if (length >= 10 && hasLower && hasUpper && hasNumbers && hasSymbols) {
        return { level: 4, classification: "strong" };
    }

    // Level 3:
    if (length >= 8 && hasLower && hasUpper && (hasNumbers || hasSequentialNumbers)) {
        return { level: 3, classification: "moderate" };
    }

    // Level 2:
    if (hasLower && hasUpper) {
        return { level: 2, classification: "week" };
    }

    // Level 1:
    return { level: 1, classification: "Muito fraca" };
}