import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { BoothCreateParams, BoothUpdateParams } from './booth.interface';

@Injectable()
export class BoothRepository {
  constructor(private readonly prismaService: PrismaService) { }

  async create(params: BoothCreateParams) {
    return await this.prismaService.booth.create({
      data: {
        ...params,
      },
    });
  }

  async all() {
    return await this.prismaService.booth.findMany({});
  }

  async update(entityId: number, updates: BoothUpdateParams) {
    return await this.prismaService.booth.update({
      where: {
        id: entityId,
      },
      data: updates,
    });
  }

  async delete(entityId: number) {
    return await this.prismaService.booth.delete({
      where: {
        id: entityId,
      },
    });
  }
}
