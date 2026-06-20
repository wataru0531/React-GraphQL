
// main.ts
// アプリのエントリーポイント

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ 全てのリクエストに対して入力値のバリデーション(検証)を行う
  // ✅ パイプ(pipe) → ResolverやControllerに渡す前に入力値をチェックしたり
  //                  変換したりする仕組み
  app.useGlobalPipes(new ValidationPipe()); 

  app.enableCors({
    origin: '*', // すべてのオリジンからのアクセスを許可。app.module.tsではなくここに記述
  });

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();


// # 起動
// docker compose up -d

// # DBに入る
// docker exec -it postgres psql -U udemy_user udemydb

// # DBから出る
// \q

// # 作業終了 → dockerを停止する。これをしないと動いたまま
// docker compose down

