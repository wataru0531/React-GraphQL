
// /task/models/task.module.ts

// taskのモデルとなるクラス
// taskの型として使うのではなく、typescriptからgraph qlの型を
// 生成するのに役にたつ

import { Field, ObjectType } from "@nestjs/graphql";

// TypeScriptのクラスを、GraphQLの型（スキーマ）として定義、公開するための設定
@ObjectType()

export class Task{
  @Field(() => Int) // NestJSはIntかFloatなのかわからないために記述
  id: number;

  @Field()
  name: string; // 👉 name: String! にしている。
                // TypeScriptから、GraphQLで使える型に変換している

  @Field()
  dueDate: string;

  @Field()
  status: 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED';

  @Field({ nullable: true }) // description省略でもエラーが出なくなる
  description: string;
}
