import { Prisma } from 'generated/prisma';

export type EventConfigCreateParams = Omit<
  Prisma.event_configUncheckedCreateInput,
  'booth' | 'badge' | 'quest'
>;

export type EventConfigUpdateParams = Omit<
  Prisma.event_configUncheckedUpdateInput,
  'booth' | 'badge' | 'quest'
>;
