import { parentPort } from "worker_threads";
import { seedPasswordTask } from "./passwordSeeder";

parentPort?.on("message", ({ passwordLevel, quantity }) => {
    try {
        const result = seedPasswordTask(passwordLevel, quantity);
        parentPort?.postMessage(result);
    } catch (error) {
        parentPort?.postMessage({ error: String(error) });
    }
})