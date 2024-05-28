import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './schemas/todo.schema';

@Controller('todo')
export class TodoController {
    constructor(private readonly todoService: TodoService) { }

    @Post()
    create(@Body('task') task: string): Promise<Todo> {
        return this.todoService.create(task);
    }

    @Get()
    findAll(): Promise<Todo[]> {
        return this.todoService.findAll();
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateTodoDto: Partial<Todo>): Promise<Todo> {
        return this.todoService.update(id, updateTodoDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<any> {
        return this.todoService.remove(id);
    }
}
