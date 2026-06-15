// app.module.ts

// アプリケーション全体の設定を各ファイル


import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

// // ✅ NestJSでGraphQLサーバーを起動するための設定
@Module({
  imports: [
    // GraphQLを有効化
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver, // GraphQLサーバーとして、Apolloサーバーを使うという意味
      playground: true, // GraphQL Playgroundが開く
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      // → NestJSがGraphQLのスキーマを自動生成して、src/schema.gql に保存する
      // process.cwd() → 現在のプロジェクトのルート
      // joinで、例えば、backend/src/schema.gql を作る
      // cors: {
      //   origin: '*', // → main.tsに記述
      // },
    }),
  ],
})

export class AppModule {}
