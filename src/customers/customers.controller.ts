import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Customer } from './customers.model';
import { CustomersService } from './customers.service';

@Crud({
  model: {
    type: Customer
  }
})
@Controller('customers')
export class CustomersController {
  constructor(public service: CustomersService) {}
}
