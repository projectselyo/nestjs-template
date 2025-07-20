import { Module } from '@nestjs/common';
import { BlockchainService } from './blockchain.service';
import { BlockchainController } from './blockchain.controller';
import { BlockchainRepository } from './blockchain.repository';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [BlockchainService, BlockchainRepository, PrismaService],
  controllers: [BlockchainController],
})
export class BlockchainModule {}
