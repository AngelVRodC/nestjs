import { CustomerDto } from './customers.dto';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'customers' })
export class Customer extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column('varchar', { name: 'name' })
  public name: string;

  @Column('varchar', { name: 'email', unique: true })
  public email: string;

  @Column('varchar', { name: 'phone' })
  public phone: string;

  @CreateDateColumn({ type: 'timestamp with time zone', name: 'created_at' })
  public createdAt: string;

  @UpdateDateColumn({
    type: 'timestamp with time zone',
    name: 'updated_at',
    nullable: true,
  })
  public updatedAt: string;

  constructor(input: CustomerDto) {
    super()
    if (input) {
      this.setValues(input)
    }
  }

  setValues(input: CustomerDto) {
    Object.keys(input).forEach((key: string) => {
      this[key] = input[key];
    })
  }
}
