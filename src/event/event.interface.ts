import { Prisma } from 'generated/prisma';

export type EventCreateParams = Omit<
  Prisma.eventUncheckedCreateInput,
  'event_config'
>;

export type EventUpdateParams = Omit<
  Prisma.eventUncheckedUpdateInput,
  'event_config'
>;
