import { Module } from '@nestjs/common';
import { FlyweightController } from './flyweight.controller';

@Module({
  controllers: [FlyweightController],
})
export class FlyweightModule {}
