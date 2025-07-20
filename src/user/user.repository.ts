import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserCreateParams, UserUpdateParams } from './user.interface';

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) { }

  async create(params: UserCreateParams) {
    return await this.prismaService.user.create({
      data: {
        ...params,
      },
    });
  }

  async all() {
    return await this.prismaService.user.findMany({});
  }

  async update(entityId: number, updates: UserUpdateParams) {
    return await this.prismaService.user.update({
      where: {
        id: entityId,
      },
      data: updates,
    });
  }

  async delete(entityId: number) {
    return await this.prismaService.user.delete({
      where: {
        id: entityId,
      },
    });
  }
}
