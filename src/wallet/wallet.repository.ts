import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { WalletCreateParams, WalletUpdateParams } from './wallet.interface';

@Injectable()
export class WalletRepository {
  constructor(private readonly prismaService: PrismaService) { }

  async create(params: WalletCreateParams) {
    return await this.prismaService.wallet.create({
      data: {
        ...params,
      },
    });
  }

  async all() {
    return await this.prismaService.wallet.findMany({});
  }

  async update(entityId: number, updates: WalletUpdateParams) {
    return await this.prismaService.wallet.update({
      where: {
        id: entityId,
      },
      data: updates,
    });
  }

  async delete(entityId: number) {
    return await this.prismaService.wallet.delete({
      where: {
        id: entityId,
      },
    });
  }
}
