import { Test, TestingModule } from '@nestjs/testing';
import { SService } from './s.service';

describe('SService', () => {
  let service: SService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SService],
    }).compile();

    service = module.get<SService>(SService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
