import { Module } from '@nestjs/common';
import { SingletonController } from './singleton.controller';

@Module({
  controllers: [SingletonController],
})
export class SingletonModule {}
