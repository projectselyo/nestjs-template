import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import {
  CollectionCreateParams,
  CollectionUpdateParams,
} from './collection.interface';

@Injectable()
export class CollectionRepository {
  constructor(private readonly prismaService: PrismaService) { }

  async create(params: CollectionCreateParams) {
    return await this.prismaService.collection.create({
      data: {
        ...params,
      },
    });
  }

  async all() {
    return await this.prismaService.collection.findMany({});
  }

  async update(entityId: number, updates: CollectionUpdateParams) {
    return await this.prismaService.collection.update({
      where: {
        id: entityId,
      },
      data: updates,
    });
  }

  async delete(entityId: number) {
    return await this.prismaService.collection.delete({
      where: {
        id: entityId,
      },
    });
  }
}
