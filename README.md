# PROJETO WEB COMPLETO BBB23
## HTML, CSS e JS

Salve Devs,

Este é um projeto web completo de html, css e js sobre o tema BBB23.

![BBB23](https://i.ibb.co/BPyMWhB/bbb23a.png)

Vamos fazer passo a passo a construção da aplicação.
E, ir acrescentando novas funcionalidades ao longo de cada aula.

### Link da fonte usada no projeto
~~~html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
~~~

### Códigos html usados para gerar símbolos
~~~html
&copy;
&uparrow;
~~~

## Aula 02 - JavaScript JS

Na aula 02 fizemos cada card dos participantes utilizando o JavaScript.

Criamos o arquivo script.js dentro da pasta js do nosso projeto.

Pegamos os dados que estão no arquivo 'participantes-bbb23.json' utilizando a api fetch.

Pegamos a resposta (promise) do fetch e usando o then (pegar da response) em um formato json legível o que vem no body da requisição.

Neste ponto teremos um array de objetos com o formato json.

Depois, ainda com o then pegar somente os dados (data) da resposta que foram 'convertidos' e fazer as manipulações desejadas.

No caso, usamos um map para percorrer o array e a cada iteração:
1. Criamos um card (div)
2. Atribuímos as classes 'card' e 'camarote' ou 'pipoca'
3. Colocamos dentro do card a img e span
4. Mudamos a class do span para 'fundoCamarote' ou 'fundoPipoca' de acordo com o grupo do participante
5. Por fim, usamos o appendChild para colocar cada card como filho da section cards

Ao final da aula 02 automatizamos o processo de criação dos cards, usando o JavaScript.
