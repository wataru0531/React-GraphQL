
// /task/task.resolver.ts

// Resolver → GraphQLのリクエストを受け取る窓口
// GraphQLからの依頼を受ける
// ↓
// Serviceにお願いする
// ↓
// 結果を返す
// これだけ

import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TaskService } from './task.service';
import { Task } from './models/task.model';
import { CreateTaskInput } from './dto/createTask.input';

@Resolver()
export class TaskResolver {
  // ✅ DI(Dependency Injection)
  // → コンストラクタに依存先のクラスを渡すことで、NestJSが自動的に、
  //   TaskServiceのインスタンスを作成しコンストラクタに渡してくれる
  constructor(private readonly taskService: TaskService) {}

  // ✅ task一覧を取得する
  @Query(() => [Task], { nullable: 'items' }) // ここはGraphQLの型
  getTasks(): Task[] {
    return this.taskService.getTasks(); // 👉 サービスがTask一覧を返す
  }

  // ✅ 更新処理 
  @Mutation(() => Task) // 戻り値はTask型
  createTask(
    // @Args("name") name: string,  // ⭐️ @Args → GraphQLのクエリ文字列やミューテーションで渡された引数を受け取るためのデコレーター
    // @Args("dueDate") dueDate: string, 
    // @Args("description", { nullable: true }) description?: string, // nullable → 省略してもOK
    
    // 👉 GraphQLから送られてきた入力データを、CreateTaskInputという形で受け取る → 1行でOK
    @Args("createTaskInput") createTaskInput: CreateTaskInput
  ): Task {
    // return this.taskService.createTask(name, dueDate, description);
    // → ⭐️ サービスのビジネスロジックを呼ぶ

    return this.taskService.createTask(createTaskInput);
  }
}