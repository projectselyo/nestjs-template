import { Module } from '@nestjs/common';
import { BadgeService } from './badge.service';
import { BadgeController } from './badge.controller';
import { BadgeRepository } from './badge.repository';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [BadgeService, BadgeRepository, PrismaService],
  controllers: [BadgeController],
})
export class BadgeModule {}
