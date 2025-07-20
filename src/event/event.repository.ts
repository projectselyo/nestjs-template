import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { EventCreateParams, EventUpdateParams } from './event.interface';

@Injectable()
export class EventRepository {
  constructor(private readonly prismaService: PrismaService) { }

  async create(params: EventCreateParams) {
    return await this.prismaService.event.create({
      data: {
        ...params,
      },
    });
  }

  async all() {
    return await this.prismaService.event.findMany({});
  }

  async update(entityId: number, updates: EventUpdateParams) {
    return await this.prismaService.event.update({
      where: {
        id: entityId,
      },
      data: updates,
    });
  }

  async delete(entityId: number) {
    return await this.prismaService.event.delete({
      where: {
        id: entityId,
      },
    });
  }
}
