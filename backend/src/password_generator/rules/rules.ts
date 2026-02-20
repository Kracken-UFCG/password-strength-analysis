export interface Rules {
    minSize: number;
    includeLowerCase: boolean;
    includeUpperCase: boolean;
    includeNumbers: boolean;
    includeSymbols: boolean;
    numberType: 'sequencial' | 'random' | 'none';

}

const RuleOne = () => {
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

const RuleTwo = () => {
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

const RuleThree = () => {
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

const RuleFour = () => {
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

const RuleFive = () => {
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
    [1, RuleOne()],
    [2, RuleTwo()],
    [3, RuleThree()],
    [4, RuleFour()],
    [5, RuleFive()],
]);