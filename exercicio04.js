// Crie um arquivo typescript com o nome exercicio04.ts, 
// nele crie uma classe chamada Filme com os atributos nome do tipo string, 
// anoDeLancamento do tipo number e diretor do tipo string. Fora do escopo dessa classe, 
// instancie ela e preencha os campos acessando seus atributos por meio do ponto (.).
var Filme = /** @class */ (function () {
    function Filme() {
    }
    return Filme;
}());
var colecao = new Filme;
colecao.nome = "Harry Potter";
colecao.anoDeLancamento = 2003;
colecao.diretor = "Fabiano Lima";
console.log(colecao.nome);
