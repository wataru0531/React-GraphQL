
// ✅ DTO → Data Transfer Object
// フロントから送られてくるデータの設計図
// バリデーションのために使う。
// → データの受けわしのためのオブジェクト。NestJS以外のソフトウェア開発でもよく使う

// ✅ バリデーションで使うライブラリ
// ① class-transformer → フロントからリクエストで飛んできたオブジェクトをクラスに変換する
//                        class-validatorがクラスでしか検証できないため。
//                        @isNotEmpty()などクラスの中で使われているので
// ② class-validator → 値が正しいかチェックする


// → この2つをValidationPipeがmain.tsでまとめる

// NestJSでバリデーションを有効にする → pipeを有効にする(main.tsで行う)

import { Field, InputType } from "@nestjs/graphql";
import { IsDateString, IsNotEmpty } from "class-validator";


@InputType() // クラスをmutationの引数に使うのであれば使う
export class CreateTaskInput {
  @Field() // GraphQLで使う項目です
  @IsNotEmpty() // 空文字は禁止
  name: string;

  @Field()
  @IsDateString() // 日付形式
  dueDate: string;

  @Field({ nullable: true }) // 省略してもOK
  description?: string;
}

