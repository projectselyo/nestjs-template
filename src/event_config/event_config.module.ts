import { Module } from '@nestjs/common';
import { EventConfigService } from './event_config.service';
import { EventConfigController } from './event_config.controller';
import { EventConfigRepository } from './event_config.repository';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [EventConfigService, EventConfigRepository, PrismaService],
  controllers: [EventConfigController]
})
export class EventConfigModule {}
