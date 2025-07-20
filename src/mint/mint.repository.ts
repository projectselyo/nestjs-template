import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { MintCreateParams, MintUpdateParams } from './mint.interface';

@Injectable()
export class MintRepository {
  constructor(private readonly prismaService: PrismaService) { }

  async create(params: MintCreateParams) {
    return await this.prismaService.mint.create({
      data: {
        ...params,
      },
    });
  }

  async all() {
    return await this.prismaService.mint.findMany({});
  }

  async update(entityId: number, updates: MintUpdateParams) {
    return await this.prismaService.mint.update({
      where: {
        id: entityId,
      },
      data: updates,
    });
  }

  async delete(entityId: number) {
    return await this.prismaService.mint.delete({
      where: {
        id: entityId,
      },
    });
  }
}
