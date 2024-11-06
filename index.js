class novaPessoa {
    constructor(nome, anoNascimento, cidadeNascimento) {
    this.nome = nome;
    this.anoNascimento = anoNascimento;
    this.cidadeNascimento = cidadeNascimento;
}
apresentar() {
    var idade = 2024 - this.anoNascimento;
    console.log("O(a) " + this.nome + " é de " + this.cidadeNascimento + " e tem " + idade + " anos")
}
    }

    let nome = prompt("Digite o seu nome");
    let anoNascimento = parseInt(prompt("Digite o seu ano de nascimento:"));
    let cidadeNascimento = prompt("Digite a sua idade de nascimento:"); 
   
    let pessoa = new novaPessoa(nome, anoNascimento, cidadeNascimento);

   pessoa.apresentar()