import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from './produto/entities/produto.entity';
import { ProdutoModule } from './produto/produto.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql',
      port: 3306,
      username: 'app_user',
      password: 'app_password',
      database: 'db_gamesstore',
      entities: [Produto],
      synchronize: true,
    }),
    ProdutoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
