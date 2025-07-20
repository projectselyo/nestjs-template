import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { QuestCreateParams, QuestUpdateParams } from './quest.interface';

@Injectable()
export class QuestRepository {
  constructor(private readonly prismaService: PrismaService) { }

  async create(params: QuestCreateParams) {
    return await this.prismaService.quest.create({
      data: {
        ...params,
      },
    });
  }

  async all() {
    return await this.prismaService.quest.findMany({});
  }

  async update(entityId: number, updates: QuestUpdateParams) {
    return await this.prismaService.quest.update({
      where: {
        id: entityId,
      },
      data: updates,
    });
  }

  async delete(entityId: number) {
    return await this.prismaService.quest.delete({
      where: {
        id: entityId,
      },
    });
  }
}
