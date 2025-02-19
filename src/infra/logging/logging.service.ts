import { Injectable, ConsoleLogger } from '@nestjs/common';

@Injectable()
export class LoggingService {
  private readonly logger = new ConsoleLogger('AppLogger');

  log(message: string) {
    this.logger.log(message);
  }

  warn(message: string) {
    this.logger.warn(message);
  }

  error(message: string, trace: string) {
    this.logger.error(message, trace);
  }

  debug(message: string) {
    this.logger.debug(message);
  }

  verbose(message: string) {
    this.logger.verbose(message);
  }
}
