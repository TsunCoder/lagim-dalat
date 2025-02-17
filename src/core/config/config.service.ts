import { Injectable } from '@nestjs/common';
import { ConfigService as AppConfigService } from '@nestjs/config';

@Injectable()
export class ConfigService {
  constructor(private readonly configService: AppConfigService) {}

  get nodeEnv(): string {
    return this.configService.get<string>('NODE_ENV', 'development');
  }

  get port(): number {
    return this.configService.get<number>('PORT', 3000);
  }
}
