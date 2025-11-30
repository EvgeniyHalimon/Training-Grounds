import { Module } from '@nestjs/common';
import { AdapterController } from './adapter.controller';

@Module({
  controllers: [AdapterController],
})
export class AdapterModule {}
