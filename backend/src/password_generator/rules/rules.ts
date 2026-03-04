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
        minSize: 4,
        includeLowerCase: false,
        includeUpperCase: false,
        includeNumbers: true,
        includeSymbols: false,
        numberType: 'random',
    }
    return rules;
}

const SecondLevel = () => {
    const rules: Rules = {
        minSize: 6,
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
        minSize: 7,
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
]);