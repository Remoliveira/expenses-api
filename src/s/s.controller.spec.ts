import { Test, TestingModule } from '@nestjs/testing';
import { SController } from './s.controller';
import { SService } from './s.service';

describe('SController', () => {
  let controller: SController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SController],
      providers: [SService],
    }).compile();

    controller = module.get<SController>(SController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
