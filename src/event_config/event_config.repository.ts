import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import {
  EventConfigCreateParams,
  EventConfigUpdateParams,
} from './event_config.interface';

@Injectable()
export class EventConfigRepository {
  constructor(private readonly prismaService: PrismaService) { }

  async create(params: EventConfigCreateParams) {
    return await this.prismaService.event_config.create({
      data: {
        ...params,
      },
    });
  }

  async all() {
    return await this.prismaService.event_config.findMany({});
  }

  async update(entityId: number, updates: EventConfigUpdateParams) {
    return await this.prismaService.event_config.update({
      where: {
        id: entityId,
      },
      data: updates,
    });
  }

  async delete(entityId: number) {
    return await this.prismaService.event_config.delete({
      where: {
        id: entityId,
      },
    });
  }
}
