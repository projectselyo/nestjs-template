import { Injectable } from '@nestjs/common';
import { OrganizationRepository } from './organization.repository';

@Injectable()
export class OrganizationService {
  constructor(
    private readonly organizationRepository: OrganizationRepository,
  ) {}

  async create() {
    return await this.organizationRepository.create({
      name: 'test',
    });
  }

  async getAll() {
    return await this.organizationRepository.all();
  }
}
