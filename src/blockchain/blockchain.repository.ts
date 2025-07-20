import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import {
  BlockchainCreateParams,
  BlockchainUpdateParams,
} from './blockchain.interface';

@Injectable()
export class BlockchainRepository {
  constructor(private readonly prismaService: PrismaService) { }

  async create(params: BlockchainCreateParams) {
    return await this.prismaService.blockchain.create({
      data: {
        ...params,
      },
    });
  }

  async all() {
    return await this.prismaService.blockchain.findMany({});
  }

  async update(blockchainId: number, updates: BlockchainUpdateParams) {
    return await this.prismaService.blockchain.update({
      where: {
        id: blockchainId,
      },
      data: updates,
    });
  }

  async delete(blockchainId: number) {
    return await this.prismaService.blockchain.delete({
      where: {
        id: blockchainId,
      },
    });
  }
}
