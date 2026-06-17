// app.module.ts

// アプリケーション全体の設定を各ファイル

import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { TaskModule } from './task/task.module';

// ✅ NestJSでGraphQLサーバーを起動するための設定
// 👉 AppModuleに設定情報を付与している
@Module({
  // imports ... 他のモジュールを使う、という意味
  imports: [ 
    // GraphQLを起動
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver, // Apolloサーバーを起動
      playground: true, // GraphQL Playgroundが開く
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // GraphQLのエンドポイント
      // → NestJSがGraphQLのスキーマを自動生成して、src/schema.gql に保存する
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
