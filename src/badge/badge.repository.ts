import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { BadgeCreateParams, BadgeUpdateParams } from './badge.interface';

@Injectable()
export class BadgeRepository {
  constructor(private readonly prismaService: PrismaService) { }

  async create(params: BadgeCreateParams) {
    return await this.prismaService.badge.create({
      data: {
        name: params.name,
      },
    });
  }

  async all() {
    return await this.prismaService.blockchain.findMany({});
  }

  async update(badgeId: number, updates: BadgeUpdateParams) {
    return await this.prismaService.badge.update({
      where: {
        id: badgeId,
      },
      data: updates,
    });
  }

  async delete(badgeId: number) {
    return await this.prismaService.badge.delete({
      where: {
        id: badgeId,
      },
    });
  }
}
