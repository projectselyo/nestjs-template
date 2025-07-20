import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [UserService, UserRepository, PrismaService],
  controllers: [UserController]
})
export class UserModule {}
