初回migrationを作成
```
npx typeorm-ts-node-commonjs migration:generate src/migration/CommentMigration -d src/data-source.ts
```
migration実行
```
npx typeorm-ts-node-commonjs migration:run -d src/data-source.ts
```