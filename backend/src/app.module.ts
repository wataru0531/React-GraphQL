
// app.module.ts

// ✅ NestJSアプリ全体の入口となるモジュール で、
// ・GraphQLを使う設定
// ・アプリで使う各機能モジュールの登録
// を行う

import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { TaskModule } from './task/task.module';

// ✅ NestJSでGraphQLサーバーを起動するための設定
// 👉 AppModuleに設定情報を付与している
@Module({
  // imports ... GraphQLを使う、TaskModuleを使う、とNestJSに通知する
  imports: [
    // GraphQLを使う設定
    GraphQLModule.forRoot<ApolloDriverConfig>({ // 👉 GraphQLサーバーの設定
      driver: ApolloDriver, // Apolloサーバーを起動
                            // → HTTPで届いたクエリ文字列を解釈して、対応するResolverを呼び出すこと
      playground: true, // GraphQL Playgroundが開く
                        // → http://localhost:3000/graphql で操作する
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // GraphQLのエンドポイント
      // 👉 NestJSがGraphQLのスキーマを自動生成して、src/schema.gql に保存する
      // process.cwd() → 現在のプロジェクトのルート。join → 例: backend/src/schema.gql を作る
      // cors: {
      //   origin: '*', // → main.tsに記述
      // },
    }),
    TaskModule,
  ],
})
export class AppModule {}


// ✅ 内部では、
// Module({
//   imports: [GraphQLModule],
// })(AppModule);
