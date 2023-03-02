import { Injectable } from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';
import { User } from '../entities/User';

@Injectable()
export class UsersService {
  users: createUserDto[] = [];
  findAll() {
    return this.users;
  }
  async create(user: createUserDto) {
    const { username, description, price } = user;
    const createdUser = new User();
    createdUser.username = username;
    createdUser.description = description;
    createdUser.price = price;
    console.log(createdUser, '作成');
    return await createdUser.save();
  }
}
