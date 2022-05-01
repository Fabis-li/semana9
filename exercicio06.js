var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Conta = /** @class */ (function () {
    function Conta(numero, saldo, estaAtiva, dono) {
        this.numero = numero;
        this.saldo = saldo;
        this.estaAtiva = estaAtiva;
        this.dono = dono;
    }
    return Conta;
}());
var ContaEmpresa = /** @class */ (function (_super) {
    __extends(ContaEmpresa, _super);
    function ContaEmpresa(numero, saldo, estaAtiva, dono, limiteDeDeposito) {
        var _this = _super.call(this, numero, saldo, estaAtiva, dono) || this;
        _this.limiteDeDeposito = 1000;
        _this.limiteDeDeposito = limiteDeDeposito;
        return _this;
    }
    ContaEmpresa.prototype.deposito = function (valor) {
        if (valor <= this.limiteDeDeposito) {
            this.saldo = valor + this.saldo;
            return;
        }
        else {
            console.log("O limite m\u00E1ximo de dep\u00F3sito \u00E9 1000 reais");
        }
    };
    ContaEmpresa.prototype.imprimiValorConta = function () {
        console.log("O valor total \u00E9: ".concat(this.saldo));
    };
    return ContaEmpresa;
}(Conta));
var novoDeposito = new ContaEmpresa(25, 0, true, "Fabiano", 1000);
novoDeposito.deposito(1000);
novoDeposito.deposito(1000);
novoDeposito.deposito(1000);
novoDeposito.deposito(500);
novoDeposito.imprimiValorConta();
