import { MigrationInterface, QueryRunner, Table } from 'typeorm';

const customer = new Table({
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
      name: 'is_enabled',
      type: 'boolean',
      isNullable: false,
      default: true
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
});

export class Customers1573424423658 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(customer, true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('customers');
  }
}
