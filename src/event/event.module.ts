import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { EventRepository } from './event.repository';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [EventService, EventRepository, PrismaService],
  controllers: [EventController]
})
export class EventModule {}
