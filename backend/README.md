
## Dockerの立ち上げ
PostgreSQL使用
 ・docker desktop 起動
 ・docker-compose up -d
 ・docker exec -it postgres psql -U udemy_user udemydb

 ・起動しているかどうか確認
   docker ps 
   → CONTAINER ID  IMAGE  COMMAND  CREATED  STATUS  PORTS  NAMES などが表示される
  
 ・DBから出る
  \q
 ・作業終了 → dockerを停止する。これをしないと動いたまま
  docker compose down


## バックエンド立ち上げ
・/backendに移動、npm run dev

## フロントエンド立ち上げ


