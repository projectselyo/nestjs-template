import { Module } from '@nestjs/common';
import { OrganizationController } from './organization.controller';
import { OrganizationService } from './organization.service';
import { OrganizationRepository } from './organization.repository';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [OrganizationService, OrganizationRepository, PrismaService],
  controllers: [OrganizationController],
})
export class OrganizationModule { }
