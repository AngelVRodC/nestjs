import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { Crud } from '@nestjsx/crud';
import { Customer } from './customers.model';
import { CustomersService } from './customers.service';
import { CustomerDto } from './customers.dto';

@Crud({
  model: {
    type: Customer,
  },
})

@Controller('customers')
export class CustomersController {
  constructor(public service: CustomersService) { }

  @Post()
  async create(@Body() customer: CustomerDto, @Res() res: Response) {
    res.status(HttpStatus.CREATED).send(await this.service.create(customer))
  }
}
