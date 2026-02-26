import { passwordRules } from "./rules/rules";
import { randomInt } from "crypto";
import { fakerEN as faker } from "@faker-js/faker"
const CHARACTERS_DATA = {
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "!@#$%&*()_+-=[]{}|;:.<>?"
};

function generateWordPassword(): string {
    let passwordWords: string[] = [];

    for (let i = 0; i < 4; i++) {
        const word = i % 2 === 0
            ? faker.animal.type()
            : faker.commerce.productAdjective();

        passwordWords.push(word.toLowerCase().replace(/[^a-z]/g, ""));
    }

    return passwordWords.join("-");
}

export function generatePassword(
    passwordLevel: number,
): string {
    if (passwordLevel == 4) {
        return generateWordPassword();
    }
    const rules = passwordRules.get(passwordLevel);
    if (!rules) throw new Error("nível invalido")

    let pool = "";
    if (rules?.includeLowerCase) pool += CHARACTERS_DATA.lowerCase;
    if (rules?.includeUpperCase) pool += CHARACTERS_DATA.upperCase;
    if (rules?.includeNumbers) pool += CHARACTERS_DATA.numbers;
    if (rules?.includeSymbols) pool += CHARACTERS_DATA.symbols;

    let randomPassword = "";
    const iteration = rules.numberType === 'sequencial' ?
        rules.minSize - 3 : rules.minSize;

    for (let i = 0; i < iteration; i++) {
        const randomIndex = randomInt(0, pool.length);
        randomPassword += pool.charAt(randomIndex);
    }

    if (rules.numberType === 'sequencial') {
        const randomNum = randomInt(0, 7);;
        randomPassword += `${randomNum}${randomNum + 1}${randomNum + 2}`;
    }
    return randomPassword;
}
