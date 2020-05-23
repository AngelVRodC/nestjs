import { Module, Logger } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { HealthCheckService } from './app.health-check.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { CustomersModule } from './customers-module/customers.module';
import { postgresConfig } from './typeorm/postgres-connection';
import * as dotenv from 'dotenv';

dotenv.config();
@Module({
  imports: [
    TerminusModule.forRootAsync({
      useClass: HealthCheckService
    }),
    TypeOrmModule.forRoot(postgresConfig),
    CustomersModule
  ]
})
export class AppModule {
  constructor(private connection: Connection) {
    const { RUN_MIGRATIONS } =  process.env;
    if (RUN_MIGRATIONS) {
      this.runMigrations();
    }
  }

  public runMigrations = async () => {
    Logger.log(`Run Migrations`);
    const migrationsPending = await this.connection.showMigrations();
    if (migrationsPending) {
      const migrations = await this.connection.runMigrations({ transaction: 'all' });
      migrations.forEach((migration) => {
        Logger.log(`Migration ${migration.name} success`);
      });
    } else {
      Logger.log('No migrations pending');
    }
  }
}
