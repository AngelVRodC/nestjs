import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Customer } from './customers.model';

@Injectable()
export class CustomersService extends TypeOrmCrudService<Customer> {
  constructor(@InjectRepository(Customer) repo) {
    super(repo);
  }
}
