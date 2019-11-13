import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

// Customer Data Transfer Object
export class CustomerDto {

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  phone: string;
}