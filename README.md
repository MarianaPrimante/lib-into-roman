# Conversor de algarismos romanos para arábicos (e vice-versa)

**Esta biblioteca se destina à conversão de algarismos romanos para arábicos (e vice-versa) para uso em aplicações web.**
Na versão atual é capaz de converter um número arábico digitado para número romano, e vice-versa, conferindo no caso dos arábicos se estão sendo digitados apenas números (sem letras, outros dígitos ou um número menor ou igual a zero) ou no caso dos romanos se estão sendo digitados apenas letras dos números romanos e aceitando apenas letras maiúsculas, aparecendo a mensagem "Número não válido" nesses casos.

## Como instalar:

```shell

$  npm install lib-into-roman

```

## Como utilizar:

```node

> const testRoman = require("lib-into-roman");
> testRoman.intoToRoman(112)
> // returns "CXII"
> testRoman.intoToRoman("aaa")
> // returns "Número não válido"
> testRoman.intoToRoman(0)
> // returns "Número não válido"

> const testInt = require("lib-into-roman");
> testInt.romanToInt("CXII")
> // returns 112
> testInt.romanToInt("xv")
> // returns "Número não válido"
> testInt.romanToInt("aaa")
> // returns "Número não válido"


```

#### versão 2.0.0 (sem previsão)
- reconhecer letras minúsculas na conversão de algarismos romanos para arábicos;