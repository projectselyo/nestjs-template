import { Module } from '@nestjs/common';
import { MintService } from './mint.service';
import { MintController } from './mint.controller';
import { MintRepository } from './mint.repository';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [MintService, MintRepository, PrismaService],
  controllers: [MintController]
})
export class MintModule {}
