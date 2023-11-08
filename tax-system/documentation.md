[Pagina no Notion com Docs e Diagrama completo](https://insidious-debt-983.notion.site/Diagrama-146c66b842674dc0bf4579eb2d309843)

# Tax System Docs

## Problema a ser resolvido pelo sistema:

É necessário um sistema o qual deverá receber informações de um produto e então calcular e retornar o valor total deste produto com os impostos sendo que as alíquotas de impostos para cada produto deverão mudar a partir de critérios como o valor do produto, o estado fiscal do produto e o ano do produto. 

É necessário também que todos os dados de estado fiscais e anos já devem estar dentro do sistema.

## Apresentação do sistema:

Basicamente o sistema recebe informações de um produto, monta seu objeto e com base em diferentes critérios realiza o cálculo fiscal do valor deste produto retornando assim o produto com o seu valor total(com impostos).

É projetado para lidar com cálculos fiscais relacionados ao produto com base em critérios como o estado fiscal, o ano de venda e o valor do produto. Utilizara as seguintes classes:

1. **TaxSystem:** Está é a classe de controle, coordena a interação entre as classes do sistema, Inicializando o app, recebendo um produto, calculando o valor dos impostos deste determinado produto e retornando o valor total com impostos.
2. **TaxStates:** Esta classe permite acessar informações sobre estados fiscais, incluindo nome, ID e taxas de ICMS e IPI. 
    1. Subclasse de TaxState: Haverá uma subclasse de TaxStates para cada estado fiscal e dentro de cada uma deve ter métodos para cada ano e também retornar as alíquotas de impostos para um produto referente aquele estado fiscal num determinado ano.
3. **Product:** Esta classe permite criar um objeto de produto personalizado e posteriormente retornar o produto com os impostos calculados.

### **Classe TaxSystem:**

- **Design Pattern: Facade**, interface unificada, o sistema fica mais centralizado e fácil de usar.
- **Responsabilidades e funcionalidades:**
    - Inicializar e coordenar o sistema.
    - Receber informações do produto
    - Gerenciar a interação entre as classes
    - Acionar a classe **Product** para montar o objeto de produto.
    - Garantir que as os estados fiscais apropriados sejam utilizados no cálculo de impostos dos produtos.
    - Acionar a classe de taxState para obter as alíquotas de impostos de um produto.
    - Calcular e retornar o valor total do produto (com impostos).

## Classe CalcProductValue

(TO DO)

### Interface **TaxStates:**

- **Design Pattern:**  Uso do padrão ****************************Factory Method,****************************  acredito que esta classe precisa utilizar este pattern pois vai ser necessário ter uma subclasse para cada estado fiscal e dentro de cada classe de estado fiscal será necessário seus respectivos anos em métodos ou em mais subclasses, sendo cada ano um método ou subclasse.
- **Campos:**
    - Product
    - Name
    - Id
- Responsabilidade e f**uncionalidades:**
    - Servir como base e ser estendida pelas subclasses de estados fiscais.
    - Receber informações do produto, incluindo ano e estado fiscal.
    - Quando necessário, acionar a subclasse do estado fiscal apropriado para o produto.
    - Montar os estados fiscais do projeto.
    - Acionar a subclasse de estado fiscal para retornar as alíquotas de ICMS e/ou IPI com base na combinação de estado fiscal e ano do produto.

### Classe TaxStateConcrete:

- **Design Pattern:**  concreteClass de TaxState.
- **Campos:**
    - Product
    - Name
    - ID
- Responsabilidade e f**uncionalidades:**
    - Será uma subclasse de estado fiscal.
    - Receber informações do produto, incluindo ano e estado fiscal.
    - Ter métodos para cada ano deste estado fiscal que retornarão as alíquotas de ICMS e/ou IPI com base no ano do produto.

### **Classe Product:**

- **Design Pattern:** Nenhum padrão específico necessário no momento**.**
- **Campos:**
    - ID do Produto.
    - Nome
    - Ano
    - Estado Fiscal
    - Valor do Produto(sem impostos)
    - Valor total do produto
- Responsabilidades e **Funcionalidades:**
    - Criar objeto do produto para calcular impostos
    - Posteriormente o mesmo objeto pode ser utilizado para retorna o produto com os impostos calculados

## Fluxo:

1. A classe **`TaxSystem` deve ser inicializada**.
    - Ela será responsável por coordenar as outras classes.
    - Chame a classe **`Product`** para criar o objeto do produto e fornecer informações, como o ano, o estado fiscal e o valor sem impostos.
2. IA classe `Product` **deve ser inicializada**.
    - A classe **`Product`** criará um objeto de produto com as informações fornecidas, incluindo o ano e o estado fiscal.
3. A classe **`TaxSystem`** utilizará o objeto do produto e chamará a classe **`TaxStates`** para obter as alíquotas de impostos apropriadas com base nas informações do produto (ano e estado fiscal).
4. A classe **`TaxSystem`** calculará o valor total do produto com impostos usando as alíquotas obtidas do passo 4 e, em seguida, atualizará o objeto da classe **`Product`** com o valor total calculado.
5. A classe **`TaxSystem`** retornará o objeto da classe **`Product`** atualizado, concluindo o cálculo.

## Legenda:

**Estado fiscal**: Isso significa que o sistema permite indicar em qual estado(UF) uma venda está ocorrendo.

**Interface**: Uma interface é semelhante a uma classe abstrata, mas contém apenas declarações de métodos, sem implementações. As classes que implementam uma interface devem fornecer implementações para todos os métodos declarados na interface.

**Método Abstrato**: Método com declaração na classe abstrata mas com implementação concreta nas subclasses

## Diagrama(Em desenvolvimento)

- (Necessário indentar e revisar o diagrama)

[Pagina no Notion com Docs e Diagrama completo](https://insidious-debt-983.notion.site/Diagrama-146c66b842674dc0bf4579eb2d309843)

[Por que usei cada design pattern](https://www.notion.so/Por-que-usei-cada-design-pattern-d3dc4c940428417880dbdaeb723030a3?pvs=21)

[UML](https://www.notion.so/UML-ddaa94d1ee4442fe92b616b37a6c6620?pvs=4) 
