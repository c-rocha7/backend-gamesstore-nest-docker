import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { UsuarioService } from './services/usuario.service';
import { UsuarioController } from './controllers/usuario.controller';
import { AuthModule } from '../auth/auth.module';
import { DateHelper } from '../util/DateHelper';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario]), forwardRef(() => AuthModule)],
  providers: [UsuarioService, DateHelper],
  controllers: [UsuarioController],
  exports: [UsuarioService],
})
export class UsuarioModule {}
