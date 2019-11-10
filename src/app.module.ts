import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { HealthCheckService } from './app.health-check.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [TerminusModule.forRootAsync({
    useClass: HealthCheckService,
  }),
  TypeOrmModule.forRoot(),
    CustomersModule],
})
export class AppModule {
  constructor(private readonly connection: Connection) { }
}
