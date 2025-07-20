import { Module } from '@nestjs/common';
import { BoothService } from './booth.service';
import { BoothController } from './booth.controller';
import { BoothRepository } from './booth.repository';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [BoothService, BoothRepository, PrismaService],
  controllers: [BoothController]
})
export class BoothModule {}
