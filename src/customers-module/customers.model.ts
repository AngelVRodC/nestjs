import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { BaseModel } from '../@shared/typeorm/base-model';
import { Column, Entity, Unique } from 'typeorm';

@Entity({ name: 'customers' })
@Unique(['email'])
export class Customer extends BaseModel {
  @IsNotEmpty()
  @IsString()
  @Column('varchar', { name: 'name' })
  public name: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @Column('varchar', { name: 'email', unique: true })
  public email: string;

  @IsNotEmpty()
  @IsString()
  @Column('varchar', { name: 'phone' })
  public phone: string;
}
