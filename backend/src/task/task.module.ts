
// /task/task.module.ts

// taskモジュールで使う、リゾルバー、サービスを設定

import { Module } from '@nestjs/common';
import { TaskResolver } from './task.resolver';
import { TaskService } from './task.service';

@Module({
  providers: [TaskResolver, TaskService]
})
export class TaskModule {}
