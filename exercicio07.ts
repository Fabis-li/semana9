import { Pessoa } from "./exercicio08";


class Aluno implements Pessoa {
    nome: string;
    idade: number;
    rua: string;
    matricula: number;
    cadeiras: [];

    constructor(nome: string, idade: number, rua: string, matricula: number, cadeiras:any ){
        this.nome = nome;
        this.idade = idade;
        this.rua = rua;
        this.matricula = matricula;
        this.cadeiras = cadeiras;
    }

    cadastrar(): void {
        console.log(`O aluno ${this.nome} tem ${this.idade}, mora na rua ${this.rua},
         possui a matricula: ${this.matricula} senta na cadeira ${this.cadeiras}.`);
    }
}
const aluno = new Aluno("Fabiano", 39, "ola", 35624, 7);

aluno.cadastrar();

class Funcionario implements Pessoa {
    nome: string;
    idade: number;
    rua: string;
    identificador: number;
    setor: string;

    constructor(nome: string, idade: number, rua: string, identificador: number, setor: string){
        this.nome = nome;
        this.idade = idade;
        this.rua = rua;
        this.identificador = identificador;
        this.setor = setor
    }

    cadastrar(): void {
        console.log(`O funcionario ${this.nome} tem ${this.idade}, mora na rua ${this.rua},
        possui a identificação: ${this.identificador}, pertence ao setor ${this.setor}.`);
    }
}

const funcionario = new Funcionario("Fabio", 27, "ali", 3665, "almoxarife");

funcionario.cadastrar();
// O exercício consiste em implementar o método requerido pela interface 
// Pessoa às classes Aluno e Funcionario. O método deverá imprimir em um 
// console.log todas as informações sobre o aluno e funcionário cadastrado.