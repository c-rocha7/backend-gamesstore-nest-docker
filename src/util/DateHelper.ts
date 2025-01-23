import { Injectable } from '@nestjs/common';
import { differenceInYears } from 'date-fns';

@Injectable()
export class DateHelper {
  isMaiorDeIdade(dataNascimento: Date): boolean {
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);

    let idade = differenceInYears(hoje.getFullYear(), nascimento.getFullYear());

    const mesAtual = hoje.getMonth();
    const diaAtual = hoje.getDate();
    const mesNascimento = nascimento.getMonth();
    const diaNascimento = nascimento.getDate();

    if (
      mesAtual < mesNascimento ||
      (mesAtual === mesNascimento && diaAtual < diaNascimento)
    ) {
      idade--;
    }

    return idade >= 18;
  }
}
