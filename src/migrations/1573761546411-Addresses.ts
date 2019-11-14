import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

const addresses = new Table({
  name: 'addresses',
  columns: [
    {
      name: 'id',
      type: 'int',
      isPrimary: true,
      isGenerated: true,
      generationStrategy: 'increment'
    },
    {
      name: 'formatted_address',
      type: 'varchar',
      isNullable: false
    },
    {
      name: 'name',
      type: 'varchar',
      isNullable: false
    },
    {
      name: 'is_enabled',
      type: 'boolean',
      isNullable: false,
      default: true
    },
    {
      name: 'customer_id',
      type: 'int',
      isNullable: false
    },
    {
      name: 'latitude',
      type: 'float8',
      isNullable: false
    },
    {
      name: 'longitude',
      type: 'float8',
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
});

const foreignKey = new TableForeignKey({
  name: 'addresses',
  columnNames: [ 'customer_id' ],
  referencedTableName: 'customers',
  referencedColumnNames: [ 'id' ]
});

export class Addresses1573761546411 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(addresses, true);
    await queryRunner.createForeignKey(addresses, foreignKey);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropForeignKey(addresses, foreignKey);
    await queryRunner.dropTable(addresses);
  }
}
