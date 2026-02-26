import { generatePassword } from "./password.generator";
import path from "path";
import { Worker } from "worker_threads";

export function seedPasswordTask(passwordLevel: number, quantity: number): string[] {
    let passwords: string[] = []

    for (let i = 0; i < quantity; i++) {
        passwords.push(generatePassword(passwordLevel));
    }

    return passwords;
}

export function runWorker(passwordLevel: number, quantity: number): Promise<string[]> {
    return new Promise((resolve, reject) => {

        const worker = new Worker(
            path.resolve(__dirname, "./password.worker.js")
        );

        worker.postMessage({ passwordLevel, quantity });
        worker.on("message", (data) => {
            if (data?.error) {
                reject(new Error(data.error));
            } else {
                resolve(data);
            }
        });

        worker.on("error", reject);

        worker.on("exit", (code) => {
            if (code !== 0) {
                reject(new Error(`Worker stopped with exit code ${code}`));
            }
        });
    })
}