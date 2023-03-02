import {
  Body,
  Controller,
  Get,
  Header,
  Post,
  Redirect,
  ValidationPipe,
  Query
} from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  findAll() {
    return this.usersService.findAll();
  }
  @Post()
  create(@Body(ValidationPipe) createUser: createUserDto) {
    return this.usersService.create(createUser);
  }
  @Get('a*')
  wildcard() {
    return 'wildcard';
  }
  @Post('/header')
  @Header('Cache-Control', 'none')
  setHeader() {
    return 'set header';
  }
  @Get('/red')
  @Redirect('localhost:3000/users', 200)
  redirect() {
    return 'redirect';
  }
  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    // console.log(@Query,'afafafa')
    console.log(Query('version'), 'sdddddddddd');
    console.log(Query('version'), 'sdddddddddd');
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }
}
