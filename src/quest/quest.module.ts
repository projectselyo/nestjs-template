import { Module } from '@nestjs/common';
import { QuestService } from './quest.service';
import { QuestController } from './quest.controller';
import { QuestRepository } from './quest.repository';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [QuestService, QuestRepository, PrismaService],
  controllers: [QuestController]
})
export class QuestModule {}
