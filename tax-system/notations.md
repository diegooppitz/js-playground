# Patterns

## **Factory Method Pattern**:

Este pattern possui a interface creator na qual é declarado o método `factoryMethod`, ele tem o papel de criar objeto de classes `Product`, subclasses de Creator, como por exemplo `ConcreteCreator1`e `ConcreteCreator2` devem ser responsáveis por implementar o `factoryMethod` e também por instanciar as classes de produto, como por exemplo `ConcreteProduct1` e `ConcreteProduct2` que por sua vez devem retornar o valor de cada produto. 

A função `clientCode` então recebe um objeto do tipo `Creator` e retorna o valor que a classe de produto estiver retornando. desta forma se tem uma separação clara entre a criação do produto, o retorno dele e também da classe mãe(`Creator`), sendo assim é possível adicionar novos produtos, com regras independentes dentro de cada um(como por exemplo diferentes tipos de impostos ou estado ou ano) e sem afetar outros produtos ou a classe mãe e nem a função `clientCode`, também acredito que seja possível adicionar valores e regras que sejam genéricos através da classe mãe.

- **Vantagem:** O Factory Method é flexível e permite adicionar novos tipos de produtos e impostos facilmente.
- **Desvantagem:** Pode criar um grande número de classes e aumentar a complexidade do código quando novos tipos de impostos são adicionados, precisando ter a criação de subclasses específicas para cada um.
- **Quando usar?**
    - Me parece muito util para criar objetos de imposto e de produto, para então os cálculos utilizando esses objetos serem realizado utilizando o Strategy pattern ou o State pattern.

## **Strategy Pattern**:

Este pattern permite que se tenha diferentes algoritmos para diferentes estratégias diferentes.

Consegui entender bem ele, me pareceu muito útil para executar diferentes validações ou execuções, posso utilizar ele facilmente para aplicar cálculos para regras do imposto e realizar isto de forma isolada, mantendo a classe de estratégia para cada imposto, estado e/ou ano isoladas, mas mantendo uma função `doSomeBusinessLogic` genérica e uma interface também genérica.

- **Vantagem:**
    - Permite adicionar novas estratégias de cálculo de imposto sem alterar o código existente e é fácil de extender.
- **Desvantagens:**
    - Pode ter várias classes de estratégia, deixando o código complexo, principalmente se eu tiver muitas estratégias diferentes.
    - A lógica de qual estratégia usar esta completamente fora das classes de estratégia, se eu precisar alterar a estratégia de um produto pode ser mais complicado
- **Quando usar?**
    - O Strategy Pattern é mais apropriado quando se tem diferentes algoritmos que podem ser escolhidos dinamicamente, acredito que este é o caso para quando for se manter fora das classes do Strategy pattern a lógica da qual se escolhe a estratégia que vai ser aplicada.
    - Deve ser utilizada junto com o Factory Method, pois iria receber dele os objetos de Produto e de Imposto.

## **State Pattern**:

Vejo que este pattern é muito semelhante ao Strategy pattern, mas ele possui a possibilidade da lógica de mudança de state está dentro do seus states enquanto no Strategy a lógica para gerenciar qual estratégia usar esta toda fora das classes de Estratégia.

Da mesma forma que o Strategy, me parece muito útil para mim conseguir aplicar cálculo relacionado a regras de imposto. Mas vejo que com este pattern teria mais facilidade para fazer mudanças significativas nos meus objetos de imposto, algo que faz sentido para um caso em que vou ter diferentes produtos com diferentes taxas de imposto e que ainda vão ter variações por estado e ano.

- **Vantagens:**
    - Permite adicionar estados para meu objeto de imposto do produto, é possível migrar para outros states sem dificuldade, pois a lógica pode estar dentro do state, além disso também permite cálculo de imposto sem alterar o código existente, bem flexível e fácil de extender.
- **Desvantagens:**
    - Pode ter várias classes de state, deixando o código complexo, principalmente se eu tiver muitos states diferentes.
    - Para mudança de state externa, ou principalmente alteração dinâmica da lógica dos cálculos, não é o ideal, pois neste caso a lógica de calculo está dentro de cada classe de state.
- **Quando usar?**
    - O State Pattern é mais adequado quando o comportamento do objeto de imposto muda de acordo com seu estado interno.
    - Deve ser utilizado junto com o Factory Method, pois iria receber dele os objetos de Produto e de Imposto.

## **Template Method**

Acho que é bem possível de trabalhar com este pattern para resolver o problema do tax system, mas acho que acho que os outros patterns sejam mais eficientes para implementação deste produto, pois acredito que terei muitas variações de cálculo de impostos e de produto, para trabalhar da forma como este pattern trabalha.

|  | Factory Method | Strategy | State |
| --- | --- | --- | --- |
| Criar objeto de diferentes produtos | X |  |  |
| Criar objeto(s) para states e anos | X |  |  |
| Calcula o imposto, baseado no produto e em valores de estado e ano |  | X | X |
| Lógica dentro da classe de state |  |  | X |
| A lógica de qual strategy vai ser utilizada está fora da class de strategy |  | X |  |
