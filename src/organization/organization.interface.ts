import { Prisma } from 'generated/prisma';

export type OrganizationCreateParams = Omit<
  Prisma.organizationUncheckedCreateInput,
  'events' | 'user_membership'
>;

export type OrganizationUpdateParams = Omit<
  Prisma.organizationUncheckedUpdateInput,
  'events' | 'user_membership'
>;
