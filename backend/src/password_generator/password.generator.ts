import { passwordRules } from "./rules/rules";
import { randomInt } from "crypto";
import { fakerEN as faker } from "@faker-js/faker"
const CHARACTERS_DATA = {
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "!@#$%&*()"
};

function generateWordPassword(): string {
    // Lista de possíveis categorias do faker para aumentar a aleatoriedade
    const categories = [
        () => faker.animal.type(),
        () => faker.commerce.productAdjective(),
        () => faker.color.human(),
        () => faker.music.genre(),
        () => faker.hacker.adjective(),
        () => faker.commerce.department()
    ];

    let passwordWords: string[] = [];

    for (let i = 0; i < 2; i++) {
        // Sorteia uma categoria aleatória da lista acima
        const randomIndex = Math.floor(Math.random() * categories.length);
        const word = categories[randomIndex]();

        // Limpa a string: minúsculas e remove caracteres especiais/espaços
        passwordWords.push(word.toLowerCase().replace(/[^a-z]/g, ""));
    }

    return passwordWords.join("-");
}


export function generateStructuredPassword(): string {
    const lettersPool = CHARACTERS_DATA.lowerCase + CHARACTERS_DATA.upperCase;
    const numbersPool = CHARACTERS_DATA.numbers;
    const symbolsPool = CHARACTERS_DATA.symbols;

    let password = "";

    // 4 letras (lowercase + uppercase)
    for (let i = 0; i < 4; i++) {
        const randomIndex = randomInt(0, lettersPool.length);
        password += lettersPool.charAt(randomIndex);
    }

    // 1 números aleatórios
    const randomIndex = randomInt(0, numbersPool.length);
    password += numbersPool.charAt(randomIndex);

    // 1 símbolo
    const randomSymbolIndex = randomInt(0, symbolsPool.length);
    password += symbolsPool.charAt(randomSymbolIndex);

    return password;
}

export function generatePassword(
    passwordLevel: number,
): string {
    if (passwordLevel == 4) {
        return generateWordPassword();
    } else if (passwordLevel == 5) {
        return generateStructuredPassword();
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
