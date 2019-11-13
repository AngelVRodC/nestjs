import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Customer } from './customers.model';
import { CustomerDto } from './customers.dto';

@Injectable()
export class CustomersService extends TypeOrmCrudService<Customer> {
  constructor(@InjectRepository(Customer) repo) {
    super(repo);
  }

  async create(newCustomer: CustomerDto) {
    const customer = new Customer(newCustomer);
    return customer.save();
  }

}
