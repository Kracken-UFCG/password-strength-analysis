export interface Rules {
    minSize: number;
    includeLowerCase: boolean;
    includeUpperCase: boolean;
    includeNumbers: boolean;
    includeSymbols: boolean;
    numberType: 'sequencial' | 'random' | 'none';
}

const FirstLevel = () => {
    const rules: Rules = {
        minSize: 8,
        includeLowerCase: true,
        includeUpperCase: false,
        includeNumbers: false,
        includeSymbols: false,
        numberType: 'none',
    }
    return rules;
}

const SecondLevel = () => {
    const rules: Rules = {
        minSize: 8,
        includeLowerCase: true,
        includeUpperCase: true,
        includeNumbers: false,
        includeSymbols: false,
        numberType: 'none',
    }
    return rules;
}

const ThirdLevel = () => {
    const rules: Rules = {
        minSize: 8,
        includeLowerCase: true,
        includeUpperCase: true,
        includeNumbers: true,
        includeSymbols: false,
        numberType: 'sequencial',
    }
    return rules;
}

const FourthLevel = () => {
    const rules: Rules = {
        minSize: 10,
        includeLowerCase: true,
        includeUpperCase: true,
        includeNumbers: true,
        includeSymbols: true,
        numberType: 'random',
    }
    return rules;
}

const FifthLevel = () => {
    const rules: Rules = {
        minSize: 12,
        includeLowerCase: true,
        includeUpperCase: true,
        includeNumbers: true,
        includeSymbols: true,
        numberType: 'random',
    }
    return rules;
}

export const passwordRules = new Map<number, Rules>([
    [1, FirstLevel()],
    [2, SecondLevel()],
    [3, ThirdLevel()],
    [4, FourthLevel()],
    [5, FifthLevel()],
]);