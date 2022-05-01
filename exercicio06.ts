class Conta{
    protected numero: number
    protected saldo: number
    protected estaAtiva: boolean
    protected dono: string

    constructor(numero: number, saldo: number, estaAtiva: boolean, dono: string){
        this.numero = numero
        this.saldo = saldo
        this.estaAtiva = estaAtiva
        this.dono = dono
    }
}

class ContaEmpresa extends Conta{
    private limiteDeDeposito: number = 1000;

    constructor(numero: number, saldo: number, estaAtiva: boolean, dono: string, limiteDeDeposito: number){
        super (numero, saldo, estaAtiva, dono);
        this.limiteDeDeposito = limiteDeDeposito
    }

    deposito(valor: number){
       if(valor <= this.limiteDeDeposito){
            this.saldo = valor + this.saldo
            return
       } else {
            console.log(`O limite máximo de depósito é 1000 reais`);
        }
    } 

    imprimiValorConta(): void{
        console.log(`O valor total é: ${this.saldo}`)
    }
}

const novoDeposito = new ContaEmpresa (25, 0, true, "Fabiano",1000);

novoDeposito.deposito(1000);
novoDeposito.deposito(1000);
novoDeposito.deposito(1000);
novoDeposito.deposito(500);
novoDeposito.imprimiValorConta()

