//Variaveis em JavaScript
/*No JavaScript, temos 6 tipos de variáveis, que são:
    - Var
    - Let
    - Const
    - Function
    - Arrow Function
    - Template String
*/

var nome = "Fulano"; // Var - Variável global ou local
let sobrenome = "Silva"; // Let - Variável local ou de bloco de código (escopo) mutável
const idade = 30; // Const - Variável local ou de bloco de código (escopo) imutável
function saudacao() {
    console.log("Olá, " + nome + " " + sobrenome + ", você tem " + idade + " anos.");
}
saudacao();
const saudacao2 = () => {
    console.log("Olá, " + nome + " " + sobrenome + ", você tem " + idade + " anos.");
}
saudacao2();

console.log("Olá, " + nome + " " + sobrenome + ", você tem " + idade + " anos."); // Template String
console.log(`Olá, ${nome} ${sobrenome}, você tem ${idade} anos.`); // Template String