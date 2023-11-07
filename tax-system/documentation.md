[Pagina no Notion com Docs e Diagrama completo](https://insidious-debt-983.notion.site/Diagrama-146c66b842674dc0bf4579eb2d309843)

# Tax System Docs

## Problema a ser resolvido pelo sistema:

É necessário um sistema o qual deverá receber informações de um produto e então calcular e retornar o valor total deste produto com os impostos sendo que as alíquotas de impostos para cada produto deverão mudar a partir de critérios como o valor do produto, o estado fiscal do produto e o ano do produto.

## Apresentação do sistema:

Basicamente o sistema recebe informações de um produto, monta seu objeto e com base em diferentes critérios realiza o cálculo fiscal do valor deste produto retornando assim o valor total do produto com impostos.

É projetado para lidar com cálculos fiscais relacionados ao produto com base em critérios como o estado fiscal, o ano de venda e o valor do produto. Utilizara as seguintes classes:

1. **TaxSystem:** Está é a classe de controle, coordena a interação entre as classes do sistema, Inicializando o app, recebendo um produto, calculando o valor dos impostos deste determinado produto e retornando o valor total com impostos.
2. **TaxStates:** Esta classe permite acessar informações sobre estados fiscais, incluindo nome, ID e taxas de ICMS e IPI. Dentro dela haverá métodos para anos.
    1. Subclasse de TaxState: deve ter métodos para cada ano e também retornar as alíquotas de um produto referente aquele estado fiscal num determinado ano.
3. **Product:** Esta classe permite criar um objeto de produto personalizado e posteriormente retornar o produto com os impostos calculados.

### **Classe TaxSystem:**

- **Design Pattern: Facade**, interface unificada, o sistema fica mais centralizado e fácil de usar.
- **Responsabilidades e funcionalidades:**
    - Inicializar e coordenar o sistema.
    - Receber informações do produto
    - Gerenciar a interação entre as classes
    - Acionar a classe de Produto para montar o objeto de produto
    - Garantir que as os estados fiscais apropriados sejam utilizados no cálculo de impostos dos produtos.
    - Acionar a classe de taxState para puxar as alíquotas de impostos de um produto.
    - A própria classe TaxSystem deve calcular o valor total do produto(com impostos)
    - Sua última responsabilidade: retornar o valor total do produto(com impostos).

### **Classe TaxStates:**

- **Design Pattern:**  Uso do padrão ****************************Factory Method,****************************  acredito que esta classe precisa utilizar este pattern pois precisamos ter diferentes classes de ano aqui pois vai ser necessário ter uma classe concrete para cada estado fiscal e dentro de cada classe de estado fiscal será necessário seus respectivos anos, sendo cada ano um método.
- Tipo: Interface
- **Campos:**
    - Produto
    - Nome
    - Id
- Responsabilidade e f**uncionalidades:**
    - Vai servir como base e ser extendida pelas subclasses de estados fiscais.
    - Receberá o produto, com informações de ano e estado fiscal
    - Quando necessário, deve acionar a subclasse do estado fiscal referente ao produto.
    - Será necessário ter uma subclasse para cada estado fiscal.
    - Será responsável por montar os estados fiscais do projeto.
    - Acionando a sub classe de estado fiscal, deverá retornar as alíquotas de ICMS e/ou IPI a partir da combinação de estado fiscal e ano do produto.

### Classe TaxStateConcrete:

- **Design Pattern:**  concreteClass de TaxState.
- Tipo: Classe
- **Campos:**
    - Produto
    - Nome
    - ID
- Responsabilidade e f**uncionalidades:**
    - Será uma subclasse de estado fiscal.
    - Receberá o produto, com informações de ano e estado fiscal
    - Terá métodos para cada ano deste estado fiscal que vão retornar as alíquotas de ICMS e/ou IPI a partir do ano do produto.

### **Classe Product:**

- **Design Pattern:** **Builder** para criar objetos **`Produto`** com configurações flexíveis e mais complexas(Validar se este continua sendo melhor pattern).
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

- (DUVIDA, qual deve ser inicializada primeiro, a de product ou de TaxState? → DEFINIR FLUXO PRODUTO)
- Deve ser inicializada a classe de TaxSystem
    - esta classe será responsável por gerenciar as outras classes.
    - ela irá chamar a classe de TaxStates ou Product(DEFINIR ISTO → DEFINIR FLUXO PRODUTO)
- Quando inicializada a classe de estados fiscais(TaxStates) e sua respectiva subclasse:
    - Ela vai retornar as alíquotas de impostos(ICMS/IPI) referente a um determinado estado fiscal em um determinado ano.
- Quando inicializada a classe de produto:
    - (DEFINIR FLUXO PRODUTO)
        - Deverá ser montado o objeto de produto com o valor sem impostos e posteriormente o com valor total
        - Ou ser montado o objeto de produto apenas com valor sem impostos
        - Ou ser montado o objeto de produto apenas com valor total

## Legenda:

(adicionar outros itens)

**Estado fiscal**: Isso significa que o sistema permite indicar em qual estado(UF) uma venda está ocorrendo.

**Classe Abstrata**:  é uma classe que não pode ser instanciada diretamente. Ela serve como um modelo para outras classes derivadas (subclasses) que estendem seu comportamento

**Método Abstrato**: Método com declaração na classe abstrata mas com implementação concreta nas subclasses

## Diagrama(Em desenvolvimento)


[Pagina no Notion com Docs e Diagrama completo](https://insidious-debt-983.notion.site/Diagrama-146c66b842674dc0bf4579eb2d309843)

[Por que usei cada design pattern](https://www.notion.so/Por-que-usei-cada-design-pattern-d3dc4c940428417880dbdaeb723030a3?pvs=21)

[UML](https://www.notion.so/UML-ddaa94d1ee4442fe92b616b37a6c6620?pvs=4) 
