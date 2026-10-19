// 0005 · Texto (string)
// Exercício E009
//
// Pergunte o nome do usuário e mostre quantas letras ele tem. Quem tem o maior
// nome da turma?
//
// Dicas:
// 1. Guarde o nome que a pessoa digitou.
// 2. Toda string tem a propriedade `length`, sem parênteses.
// 3. Teste com e sem sobrenome: o espaço também conta.
//
// Para ler dados do teclado use:
import { input } from '#core/input.ts'

// Escreva sua resposta abaixo:
const nome = input("Qual o seu nome? ")
const quantidade = nome.length
console.log(`${nome}, seu nome possui ${quantidade} caracteres`)

// Execute com:
// tsx ~/LPPOO/15102026/0005-texto/E009.ts
