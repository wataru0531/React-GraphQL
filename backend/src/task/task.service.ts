
// /task/task.service.ts

// ✅ Service → アプリケーションの処理を書く場所。
//             ビジネスロジック。
// → ユーザー作成、バリデーション、ログイン処理、計算

import { Injectable } from '@nestjs/common';
import { Task } from './models/task.model';


@Injectable()
export class TaskService {
  tasks: Task[] = []; // Taskの配列

  getTasks(): Task[] {
    const task1 = new Task(); // Taskのインスタンス生成
    task1.id = 1;
    task1.name = 'task1';
    task1.dueDate = '20260617';
    task1.status = 'NOT_STARTED';
    this.tasks.push(task1);

    return this.tasks;
  }


}
