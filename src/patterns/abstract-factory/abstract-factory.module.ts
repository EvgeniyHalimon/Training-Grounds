import { Module } from '@nestjs/common';
import { AbstractFactoryController } from './abstract-factory.controller';

@Module({
  controllers: [AbstractFactoryController]
})
export class AbstractFactoryModule {}
