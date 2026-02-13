import { execute } from "../core/executor";
import { log } from "../utils/logger";

export function runCommand(args: string[]) {
  const command = args[0];

  if (!command) {
    log("No command provided.");
    return;
  }

  if (command === "execute") {
    execute();
  } else {
    log(`Unknown command: ${command}`);
  }
}
