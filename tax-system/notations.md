## Factory Method Pattern:
Este pattern possui a interface creator na qual é declarado o método `factoryMethod`, ele tem o papel de criar objeto de classes `Product`, subclasses de Creator, como por exemplo `ConcreteCreator1`e `ConcreteCreator2` devem ser responsáveis por implementar o `factoryMethod` e também por instanciar as classes de produto, como por exemplo `ConcreteProduct1` e `ConcreteProduct2` que por sua vez devem retornar o valor de cada produto. 

A função `clientCode` então recebe um objeto do tipo `Creator` e retorna o valor que a classe de produto estiver retornando. desta forma se tem uma separação clara entre a criação do produto, o retorno dele e também da classe mãe(`Creator`), sendo assim é possível adicionar novos produtos, com regras independentes dentro de cada um(como por exemplo diferentes tipos de impostos ou estado ou ano) e sem afetar outros produtos ou a classe mãe e nem a função `clientCode`, também acredito que seja possível adicionar valores e regras que sejam genéricos através da classe mãe.

- **Vantagem:** O Factory Method é flexível e permite adicionar novos tipos de impostos facilmente.
- **Desvantagem:** Pode criar um grande número de classes e aumentar a complexidade do código quando novos tipos de impostos são adicionados, precisando ter a criação de subclasses específicas para cada um.

## Strategy Pattern: 
Este pattern permite que se tenha diferentes algoritmos para diferentes estratégias diferentes.
Consegui entender bem ele, me pareceu muito útil para executar diferentes validações ou execuções, posso utilizar ele facilmente para aplicar cálculos para regras do imposto e realizar isto de forma isolada, mantendo a classe de estratégia para cada imposto, estado e/ou ano isoladas, mas mantendo uma função `doSomeBusinessLogic` genérica e uma interface também genérica.

- **Vantagem:** Permite adicionar novas estratégias de cálculo de imposto sem alterar o código existente, bem flexível e fácil de extender.
- **Desvantagem:** Pode ter várias classes de estratégia, deixando o código complexo, principalmente se eu tiver muitas estratégias diferentes.

|  | Factory Method | Strategy |
| --- | --- | --- |
| Criar objeto de diferentes tipos de imposto | X  |  |
| Calcula o imposto, baseado em valores de estado e ano |  | X |
|  |  |  |
