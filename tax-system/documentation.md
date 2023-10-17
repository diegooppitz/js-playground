[Notion Page with Documentation](https://insidious-debt-983.notion.site/Diagrama-146c66b842674dc0bf4579eb2d309843)

# Tax System Docs

Este sistema tem como objetivo calcular impostos de produtos com flexibilidade e baseado nos critérios de estado fiscal**, ano de venda e o produto. 

É necessário objetos e classes:

- **Estado fiscal**:**
    - Classe que vai montar objetos taxState
    - Design Pattern:  Algum de construção
    - O que é necessário: nome, id, regras fiscais.
    - a ideia é: ter um objeto com vários estados fiscais** e será necessário poder cadastrar mais estados fiscais** ou exclui-los.
- **Ano:**
    - Classe que vai montar objetos Ano
    - Design Pattern: Algum de construção
    - Será necessário: id, regras fiscais.
    - A ideia é : ter um objeto com vários anos podendo exclui-los ou adicionar novos
- **Produtos personalizados:**
    - Classe que vai montar objetos Product
    - Design Pattern: Algum de construção
    - Será necessário: nome, estado fiscal**,  ano e preço.
    - A ideia é : ter um objeto com vários produtos, podendo exclui-los ou adicionar novos
- **Calcular valor de imposto:**
    - Classe que vai calcular impostos dos produtos
    - Design pattern:  Strategy
    - Infos que vai receber: Receberá informações dos objetos de estado fiscal**,  ano e de produto.
    - A ideia é: Vai calcular o imposto de um produto a partir das as informações que receber.

### O sistema utiliza dois design patterns:

- **Factory Method Pattern**: Para criar produtos personalizados com base nos parâmetros fornecidos (estado fiscal**, ano, preço).
- **State Pattern**: Para gerenciar os diferentes estados fiscais** em conjunto com anos e calcular os impostos de acordo com regras referentes a eles, garantindo uma implementação flexível e com possiblidade de extender a novas regras ou produtos sem grandes dificuldades.

### Resumo

O sistema fornece uma solução para calcular impostos de produtos de forma dinâmica, levando em consideração os critérios de estado fiscal** e ano, enquanto adota boas práticas de design pattern por meio dos padrões Factory Method e State.

### **Factory Method Pattern**:

- **Creator (ProductFactory)**: Essa é uma classe abstrata que define um método chamado "createProduct". O método "createProduct" aceita quatro parâmetros. Essa classe é responsável por criar objetos da classe "Product" com base nos parâmetros recebidos.
    
    **Propriedades:**
    
    - **`name`**
    - **`state`** (estado fiscal **l)
    - **`year`**
    - **`price`**
    
    **Métodos:**
    
    - `createProduct(name, state, year, price)`:  Retorna um objeto de "Product" a partir dos valores recebidos.
    
- **Concrete Creator (ConcreteProductFactory)**: Esta é uma classe concreta que herda da classe abstrata. A classe "ConcreteProductFactory" fornece uma implementação concreta para o método "createProduct". Ela cria e retorna instâncias de produtos com todas as propriedades preenchidas, como nome, preço, estado fiscal** e ano.
    
    **Params recebidos:**
    
    - **`name`**
    - **`state`** (estado fiscal **l)
    - **`year`**
    - **`price`**
    
    **Métodos:**
    
    - `createProduct(name, state, year, price)`:  Retorna um objeto de "Product" a partir dos valores recebidos.

### **State Pattern**:

- **Context (TaxCalculator)**: É responsável por gerenciar o cálculo de impostos. Através do estado fiscal** atual e do produto, a classe determina qual classe concreta (por exemplo, "LowTax", "MediumTax", "HighTax") deve ser usada para calcular o imposto para o produto.
    
    **Params recebidos:**
    
    - `Product`
    
    **Métodos:**
    
    - **`calculateTax(Product)`**: Retorna o valor calculado com base no estado fiscal** e no ano do produto.

- **State (TaxState)**: Esta é uma classe abstrata que representa um estado fiscal. Cada classe concreta, como "LowTaxState" ou "MediumTaxState", herda dessa classe e implementa seu próprio método "calculateTax".
    
    **herdado:**
    
    - Recebe o metodo **`calculateTax(Product)`**
    
- **Concrete States (LowTaxState, MediumTaxState, HighTaxState)**: Essas são classes concretas que herdam da classe "TaxState". Cada classe concreta implementa o método "calculateTax" de acordo com as regras fiscais específicas para esse estado. Elas calculam o imposto com base nas propriedades do produto, como no ano e no estado fiscal atual.
    
    **Herdado:**
    
    - Recebe o método **`calculateTax(Product)`**

### p**roduct**:

- **Product (Product)** :Esta é uma classe que representa os produtos. Ela contém todas as propriedades necessárias, como nome, preço, etc.

**Relacionamentos**:

- A classe "TaxCalculator" deve ter associações com as classes "Product" e "TaxState" para gerenciar o cálculo de impostos.
- O método "createProduct" da classe "ConcreteProductFactory" cria produtos com todas as propriedades e os retorna.
- O método "calculateTax" da classe "TaxState" recebe um objeto "Product" e calcula os impostos com base no estado fiscal atual.

## Legenda:

**Estado fiscal**: Isso significa que o sistema permite indicar em qual estado(UF) uma venda está ocorrendo

**Classe Abstrata**:  é uma classe que não pode ser instanciada diretamente. Ela serve como um modelo para outras classes derivadas (subclasses) que estendem seu comportamento

**Método Abstrato**: Método com declaração na classe abstrata mas com implementação concreta nas subclasses

## Diagrama(Ver pelo Notion)
