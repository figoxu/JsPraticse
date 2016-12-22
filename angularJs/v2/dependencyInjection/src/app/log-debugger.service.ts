import { ConsoleService } from './console.service';
export class LogDebugger {
  constructor(private ConsoleService, private enabled: boolean) {}

  debug(message) {
    if (this.enabled) {
      this.ConsoleService.log(`DEBUG: ${message}`);
    }
  }
}
