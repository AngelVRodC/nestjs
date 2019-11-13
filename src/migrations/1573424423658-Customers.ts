import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { TableOptions } from 'typeorm/schema-builder/options/TableOptions';

const options: TableOptions = {
  name: 'customers',
  columns: [
    {
      name: 'id',
      type: 'int',
      isPrimary: true,
      isGenerated: true,
      generationStrategy: 'increment'
    },
    {
      name: 'name',
      type: 'varchar',
      isUnique: false,
      isNullable: false
    },
    {
      name: 'phone',
      type: 'varchar',
      isUnique: false,
      isNullable: false
    },
    {
      name: 'email',
      type: 'varchar',
      isUnique: true,
      isNullable: false
    },
    {
      name: 'updated_at',
      type: 'timestamp with time zone',
      isUnique: true,
      isNullable: true,
      default: 'now()'
    },
    {
      name: 'created_at',
      type: 'timestamp with time zone',
      isUnique: true,
      isNullable: false,
      default: 'now()'
    }
  ]
};

const customer = new Table(options)

export class Customers1573424423658 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(customer, true)

  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('customers')
  }

}
