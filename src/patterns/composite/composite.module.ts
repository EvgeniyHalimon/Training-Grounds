import { Module } from '@nestjs/common';
import { CompositeController } from './composite.controller';

@Module({
  controllers: [CompositeController]
})
export class CompositeModule {}
