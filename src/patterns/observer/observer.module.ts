import { Module } from '@nestjs/common';
import { ObserverController } from './observer.controller';

@Module({
  controllers: [ObserverController],
})
export class ObserverModule {}
