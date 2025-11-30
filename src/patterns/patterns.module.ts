import { Module } from '@nestjs/common';
import { BuilderModule } from './builder/builder.module';
import { FactoryModule } from './factory/factory.module';

@Module({
  controllers: [],
  imports: [BuilderModule, FactoryModule],
})
export class PatternsModule {}
