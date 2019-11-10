import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { HealthCheckService } from './app.health-check.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Module({
  imports: [TerminusModule.forRootAsync({
    useClass: HealthCheckService,
  }),
  TypeOrmModule.forRoot()],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
