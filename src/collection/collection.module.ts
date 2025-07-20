import { Module } from '@nestjs/common';
import { CollectionService } from './collection.service';
import { CollectionController } from './collection.controller';
import { CollectionRepository } from './collection.repository';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [CollectionService, CollectionRepository, PrismaService],
  controllers: [CollectionController]
})
export class CollectionModule {}
