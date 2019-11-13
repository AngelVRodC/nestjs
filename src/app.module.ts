import { Module, Logger } from '@nestjs/common';
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
  constructor(private connection: Connection) {
    // Automatic migrations
    // this.runMigrations();
  }

  public runMigrations = async () => {
    const migrationsPending = await this.connection.showMigrations();
    if (migrationsPending) {
      await this.connection.runMigrations({ transaction: 'all'  });
    } else {
      Logger.log('No migrations pending');
    }
  }
}
