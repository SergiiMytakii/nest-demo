// src/users/users.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    const users = await this.usersRepository.find();
    return users;
  }

  async findOne(id: number): Promise<User> {
    return await this.usersRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
