import { Test, TestingModule } from '@nestjs/testing';
import { TodosController } from './todos.controller';
import { TodosServiceNest } from './todos.service';

describe('TodosController', () => {
    let controller: TodosController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [TodosController],
            providers: [TodosServiceNest],
        }).compile();

        controller = module.get<TodosController>(TodosController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
