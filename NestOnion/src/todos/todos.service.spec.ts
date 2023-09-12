import { Test, TestingModule } from '@nestjs/testing';
import { TodosServiceNest } from './todos.service';

describe('TodosService', () => {
  let service: TodosServiceNest;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodosServiceNest],
    }).compile();

    service = module.get<TodosServiceNest>(TodosServiceNest);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
