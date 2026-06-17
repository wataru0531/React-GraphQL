
// /task/task.resolver.ts

// Resolver → GraphQLのリクエストを受け取る窓口
// GraphQLからの依頼を受ける
// ↓
// Serviceにお願いする
// ↓
// 結果を返す
// これだけ

import { Query, Resolver } from '@nestjs/graphql';
import { TaskService } from './task.service';
import { Task } from './models/task.model';

@Resolver()
export class TaskResolver {
  // DI(Dependency Injection)
  // → コンストラクタに依存先のクラスを渡すことで、NestJSが自動的に、
  //   TaskServiceのインスタンスを作成しコンストラクタに渡してくれる
  constructor(private readonly taskService: TaskService) {}

  // ✅ task一覧を取得する
  @Query(() => [Task], { nullable: 'items' }) // ここはGraphQLの型
  getTasks(): Task[] {
    return this.taskService.getTasks(); // 👉 サービスがTask一覧を返す
  }
}
