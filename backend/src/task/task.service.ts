
// /task/task.service.ts

// ✅ Service → アプリケーションの処理を書く場所。
//             ビジネスロジック。
// → ユーザー作成、バリデーション、ログイン処理、計算

import { Injectable } from '@nestjs/common';
import { Task } from './models/task.model';
import { CreateTaskInput } from './dto/createTask.input';

// このクラスはDI(依存性注入)の対象だとNextJSに伝えるでコレーた
// → TaskResolverで使用。
@Injectable()
export class TaskService {
  tasks: Task[] = []; // 追加したデータの配列

  // ✅ データを取得
  getTasks(): Task[] {
    return this.tasks;
  }

  // ✅ データを追加
  // createTask(name: string, dueDate: string, description?: string): Task {
  createTask(createTaskInput: CreateTaskInput): Task {
    const { name, dueDate, description } = createTaskInput;
    
    const newTask = new Task();
    newTask.id = this.tasks.length + 1;
    newTask.name = name;
    newTask.dueDate = dueDate;
    newTask.status = 'NOT_STARTED';
    newTask.description = description;

    this.tasks.push(newTask);
    
    return newTask;
  }


}
