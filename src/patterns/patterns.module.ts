import { Module } from '@nestjs/common';
import { BuilderModule } from './builder/builder.module';

@Module({
  controllers: [],
  imports: [BuilderModule],
})
export class PatternsModule {}
