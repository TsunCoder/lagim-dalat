import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
  constructor(private readonly configService: ConfigService) {}

  get nodeEnv(): string {
    return this.configService.get<string>('NODE_ENV', 'development');
  }

  get port(): number {
    return this.configService.get<number>('PORT', 3000);
  }

  get databaseType(): string {
    return this.configService.get<string>('DB_TYPE', 'postgres');
  }

  get databaseHost(): string {
    return this.configService.get<string>('DB_HOST', 'localhost');
  }

  get databasePort(): number {
    return this.configService.get<number>('DB_PORT', 5432);
  }

  get databaseUser(): string {
    return this.configService.get<string>('DB_USERNAME', 'root');
  }

  get databasePassword(): string {
    return this.configService.get<string>('DB_PASSWORD', 'root');
  }

  get databaseName(): string {
    return this.configService.get<string>('DB_NAME', 'test');
  }
}
