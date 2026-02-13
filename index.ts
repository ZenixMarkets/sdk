import { runCommand } from "./cli/command";
import { loadEnv } from "./config/env";

loadEnv();
runCommand(process.argv.slice(2));
