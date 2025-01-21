import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './categoria/entities/categoria.entity';
import { CategoriaModule } from './categoria/categoria.module';
import { Produto } from './produto/entities/produto.entity';
import { ProdutoModule } from './produto/produto.module';
import { AuthModule } from './auth/auth.module';
import { Usuario } from './usuario/entities/usuario.entity';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql',
      port: 3306,
      username: 'app_user',
      password: 'app_password',
      database: 'db_gamesstore',
      entities: [Categoria, Produto, Usuario],
      synchronize: true,
    }),
    CategoriaModule,
    ProdutoModule,
    AuthModule,
    UsuarioModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
