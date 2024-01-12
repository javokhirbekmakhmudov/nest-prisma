import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/common/database/prisma.service';
import { users } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    return this.prisma.users.create({ data: createUserDto });
  }

  async findAll(): Promise<users[] | []> {
    return await this.prisma.users.findMany();
  }

  async findOne(id: string): Promise<users | void> {
    return await this.prisma.users.findFirst({ where: { id } });
  }

  remove(id: string) {
    return this.prisma.users.delete({ where: { id } });
  }
}
