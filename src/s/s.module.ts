import { Module } from '@nestjs/common';
import { SService } from './s.service';
import { SController } from './s.controller';

@Module({
  controllers: [SController],
  providers: [SService]
})
export class SModule {}
