import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import {
  OrganizationCreateParams,
  OrganizationUpdateParams,
} from './organization.interface';

@Injectable()
export class OrganizationRepository {
  constructor(private readonly prismaService: PrismaService) { }

  async create(params: OrganizationCreateParams) {
    return await this.prismaService.organization.create({
      data: {
        name: params.name,
      },
    });
  }

  async all() {
    return await this.prismaService.organization.findMany({});
  }

  async update(organizationId: number, updates: OrganizationUpdateParams) {
    return await this.prismaService.organization.update({
      where: {
        id: organizationId,
      },
      data: updates,
    });
  }

  async delete(organizationId: number) {
    return await this.prismaService.organization.delete({
      where: {
        id: organizationId,
      },
    });
  }
}
