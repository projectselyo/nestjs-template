import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { EventModule } from './event/event.module';
import { OrganizationModule } from './organization/organization.module';
import { EventConfigModule } from './event_config/event_config.module';
import { BoothModule } from './booth/booth.module';
import { BadgeModule } from './badge/badge.module';
import { QuestModule } from './quest/quest.module';
import { CollectionModule } from './collection/collection.module';
import { MintModule } from './mint/mint.module';
import { UserModule } from './user/user.module';
import { BlockchainModule } from './blockchain/blockchain.module';
import { WalletModule } from './wallet/wallet.module';

@Module({
  imports: [
    EventModule,
    OrganizationModule,
    EventConfigModule,
    BoothModule,
    BadgeModule,
    QuestModule,
    CollectionModule,
    MintModule,
    UserModule,
    BlockchainModule,
    WalletModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
