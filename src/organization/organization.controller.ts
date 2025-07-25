import { Controller, Get } from '@nestjs/common';
import { OrganizationService } from './organization.service';

@Controller('organization')
export class OrganizationController {
  constructor(private readonly organizationService: OrganizationService) {}

  @Get()
  async get() {
    await this.organizationService.create();
    return await this.organizationService.getAll();
  }
}
