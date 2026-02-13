import { startEngine } from "../engine/percolator";
import { verify } from "../security/verifier";
import { analyticsModule } from "../modules/analytics";
import { log } from "../utils/logger";

export function execute() {
  log("Initializing Percolator Engine...");
  startEngine();

  log("Running Formal Verification...");
  const verified = verify();

  if (!verified) {
    log("Verification failed.");
    return;
  }

  log("Executing analytics module...");
  analyticsModule();

  log("Execution completed.");
}
