import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NodeModule } from './node/node.module';
import { PatternsModule } from './patterns/patterns.module';

@Module({
  imports: [NodeModule, PatternsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
