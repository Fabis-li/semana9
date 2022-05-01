var Aluno = /** @class */ (function () {
    function Aluno(nome, idade, rua, matricula, cadeiras) {
        this.nome = nome;
        this.idade = idade;
        this.rua = rua;
        this.matricula = matricula;
        this.cadeiras = cadeiras;
    }
    Aluno.prototype.cadastrar = function () {
        console.log("O aluno ".concat(this.nome, " tem ").concat(this.idade, ", mora na rua ").concat(this.rua, ",\n         possui a matricula: ").concat(this.matricula, " senta na cadeira ").concat(this.cadeiras, "."));
    };
    return Aluno;
}());
var aluno = new Aluno("Fabiano", 39, "ola", 35624, 7);
aluno.cadastrar();
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, idade, rua, identificador, setor) {
        this.nome = nome;
        this.idade = idade;
        this.rua = rua;
        this.identificador = identificador;
        this.setor = setor;
    }
    Funcionario.prototype.cadastrar = function () {
        console.log("O funcionario ".concat(this.nome, " tem ").concat(this.idade, ", mora na rua ").concat(this.rua, ",\n        possui a identifica\u00E7\u00E3o: ").concat(this.identificador, ", pertence ao setor ").concat(this.setor, "."));
    };
    return Funcionario;
}());
var funcionario = new Funcionario("Fabio", 27, "ali", 3665, "almoxarife");
funcionario.cadastrar();
// O exercício consiste em implementar o método requerido pela interface 
// Pessoa às classes Aluno e Funcionario. O método deverá imprimir em um 
// console.log todas as informações sobre o aluno e funcionário cadastrado.
