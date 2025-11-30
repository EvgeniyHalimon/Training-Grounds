import { Module } from '@nestjs/common';
import { InterpreterController } from './interpreter.controller';

@Module({
  controllers: [InterpreterController],
})
export class InterpreterModule {}
