import { Module } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { WalletController } from './wallet.controller';
import { WalletRepository } from './wallet.repository';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [WalletService, WalletRepository, PrismaService],
  controllers: [WalletController]
})
export class WalletModule {}
