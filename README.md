# Conversor de algarismos romanos para arábicos (e vice-versa) v.1.0.0

**Esta biblioteca se destina à conversão de algarismos romanos para arábicos (e vice-versa) para uso em aplicações web.**
Na versão atual é capaz de converter um número arábico digitado para número romano, e vice-versa, conferindo no caso dos arábicos se estão sendo digitados apenas números (sem letras, outros dígitos ou um número menor ou igual a zero) ou no caso dos romanos se estão sendo digitados apenas letras dos números romanos e aceitando apenas letras maiúsculas, aparecendo a mensagem "Número não válido" nesses casos.

## Como instalar:

```shell

$  npm install lib-into-roman

```

## Como utilizar:

```node

> const intoToRoman = require("lib-into-roman");
> console.log(intoToRoman(112))
> // returns 'CXII'
> console.log(intoToRoman('aaa'))
> // returns 'Número não válido'
> console.log(intoToRoman(0))
> // returns 'Número não válido'

> const romanToInt = require("lib-into-roman");
> console.log(romanToInt('CXII'))
> // returns 112
> console.log(romanToInt('xv'))
> // returns "Número não válido"
> console.log(romanToInt('aaa'))
> // returns "Número não válido"


```

#### versão 2.0.0 (sem previsão)
- reconhecer letras minúsculas dos números romanos;