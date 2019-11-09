import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { HealthCheckService } from './app.health-check.service';

@Module({
  imports: [TerminusModule.forRootAsync({
    useClass: HealthCheckService,
  })],
})
export class AppModule {}
