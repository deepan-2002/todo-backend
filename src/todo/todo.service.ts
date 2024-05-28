import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Todo } from './schemas/todo.schema';
import { Model } from 'mongoose';

@Injectable()
export class TodoService {
    constructor(@InjectModel(Todo.name) private todoModel: Model<Todo>) { }

    async create(task: string): Promise<Todo> {
        const newTodo = new this.todoModel({ task })
        return newTodo.save();
    }

    async findAll():Promise<Todo[]>{
        return this.todoModel.find().exec();
    }

    async remove(id:string):Promise<any>{
        return this.todoModel.findByIdAndDelete(id).exec();
    }

    async update(id:string,updateTodoDto:Partial<Todo>):Promise<Todo>{
        return this.todoModel.findByIdAndUpdate(id,updateTodoDto,{new:true}).exec()
    }
}
