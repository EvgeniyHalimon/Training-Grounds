import { Module } from '@nestjs/common';
import { MementoController } from './memento.controller';

@Module({
  controllers: [MementoController],
})
export class MementoModule {}
