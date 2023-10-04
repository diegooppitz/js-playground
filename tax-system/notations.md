## Factory Method Pattern:
Este pattern possui a interface creator na qual é declarado o método `factoryMethod`, ele tem o papel de criar objeto de classes `Product`, subclasses de Creator, como por exemplo `ConcreteCreator1`e `ConcreteCreator2` devem ser responsáveis por implementar o `factoryMethod` e também por instanciar as classes de produto, como por exemplo `ConcreteProduct1` e `ConcreteProduct2` que por sua vez devem retornar o valor de cada produto. 

A função `clientCode` então recebe um objeto do tipo `Creator` e retorna o valor que a classe de produto estiver retornando. desta forma se tem uma separação clara entre a criação do produto, o retorno dele e também da classe mãe(`Creator`), sendo assim é possível adicionar novos produtos, com regras independentes dentro de cada um(como por exemplo diferentes tipos de impostos ou estado ou ano) e sem afetar outros produtos ou a classe mãe e nem a função `clientCode`, também acredito que seja possível adicionar valores e regras que sejam genéricos através da classe mãe.

## Strategy Pattern:
O Strategy Pattern pode ser útil para lidar com as diferentes taxas de imposto por estado. pode se criar uma estratégia de imposto para cada estado e, em seguida, selecionar a estratégia apropriada com base no estado atual do produto. Isso permite que eu altere dinamicamente a estratégia de cálculo de imposto sem alterar o código do produto.

## State Pattern:
 Se os impostos também variam de ano para ano e o comportamento do sistema muda com base no ano, o State Pattern pode ser útil para gerenciar os diferentes estados do sistema (ou seja, diferentes configurações de imposto por ano). Cada estado pode encapsular a lógica específica do imposto para um determinado ano.

## Template Method Pattern:
 Se houver uma estrutura comum para calcular impostos, mas com variações específicas para cada tipo de produto, posso usar o Template Method Pattern para definir um esqueleto de algoritmo de cálculo de imposto com partes específicas definidas por subclasses.
