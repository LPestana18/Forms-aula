import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../model/pessoa';



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  pessoa: Pessoa = new Pessoa();

  profissoes = ['Engenheiro', 'Professor', 'Químico', 'Zoólogo'];

  constructor() { }

  ngOnInit(): void {
  }

  salvar (pessoaForm): void {
    const nome = pessoaForm.value.nome;
    const fone = pessoaForm.value.fone;
    const email = pessoaForm.value.email;
    const profissao = pessoaForm.value.profissao;
    console.log(`Nome: ${nome}, Fone: ${fone}, Email: ${email}, Profissão: ${profissao}`)
  }
}
