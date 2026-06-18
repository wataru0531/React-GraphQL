
// /task/task.service.ts

// ✅ Service → アプリケーションの処理を書く場所。
//             ビジネスロジック。
// → ユーザー作成、バリデーション、ログイン処理、計算

import { Injectable } from '@nestjs/common';
import { Task } from './models/task.model';

// このクラスはDI(依存性注入)の対象だとNextJSに伝えるでコレーた
// → TaskResolverで使用。
@Injectable()
export class TaskService {
  tasks: Task[] = []; // Taskの配列

  // ✅ データを取得
  getTasks(): Task[] {
    const task1 = new Task(); // Taskのインスタンス生成
    task1.id = 1;
    task1.name = 'task1';
    task1.dueDate = '20260617';
    task1.status = 'NOT_STARTED';
    this.tasks.push(task1);

    return this.tasks;
  }

  // ✅ データを追加
  createTask(name: string, dueDate, description?: string): Task {
    const newTask = new Task();
    newTask.id = this.tasks.length + 1;
    newTask.name = name;
    newTask.dueDate = dueDate;
    newTask.status = 'NOT_STARTED';
    newTask.description = description;

    this.tasks.push(newTask);
  }


}
