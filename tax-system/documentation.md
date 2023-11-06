[Pagina no Notion com Docs e Diagrama completo](https://insidious-debt-983.notion.site/Diagrama-146c66b842674dc0bf4579eb2d309843)

# Tax System Docs

## Problema a ser resolvido pelo sistema:

É necessário um sistema o qual deverá possibilitar o cadastro de diferente produtos, em diferentes estados fiscais e anos, as alíquotas de impostos para cada produto deverão mudar conforme o seu valor, seu estado fiscal e seu ano.

## Apresentação do sistema:

Basicamente o sistema recebe informações de um produto, monta seu objeto e com base em diferentes critérios realiza o cálculo fiscal do valor deste produto retornando assim o valor total do produto com impostos.

É projetado para lidar com cálculos fiscais relacionados ao produto com base em critérios como o estado fiscal, o ano de venda e o valor do produto. Utilizara as seguintes classes:

1. **TaxSystem:** Está é a classe de controle, coordena a interação entre as classes do sistema, Inicializando o app, recebendo um produto, calculando o valor dos impostos deste determinado produto e retornando o valor total com impostos.
2. **TaxState:** Esta classe permite acessar informações sobre estados fiscais, incluindo nome, ID e taxas de ICMS e IPI. Dentro dela haverá métodos para anos.
3. **Product:** Esta classe permite criar um objeto de produto personalizado.

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

- **Design Pattern:**  Padrão **Singleton** para garantir que exista apenas uma instância da classe representando todos os estados fiscais. (CONFERIR ESTE PATTERN, talvez usar o factory method, tendo as subclasses como concrete classes)
- Tipo: Classe Abstrata.
- **Campos:**
    - (REVER os campos)
    - Nome
    - ID
    - Ano
- Responsabilidade e f**uncionalidades:**
    - Deve ser uma classe Abstrata a qual vai servir como base e ser extendida pelas subclasses de estados fiscais.
    - Acionar a subclasse do estado fiscal para o produto.
    - esta classe precisa ter subclasses para estados fiscais e será necessário ter uma classe para cada estado fiscal.
    - (REVER as responsabilidades que estão daqui pra frente)
    - Retornar as alíquotas de ICMS e/ou IPI a partir da combinação de estado fiscal e ano que um produto em específico vai precisar.
    - A classe terá um método que retornará as alíquotas de impost do produto, o qual poderá durante a execução do sistema ser chamado pela classe Product, como a Instância desta classe é única, a classe Product utilizara a instância que estará na classe TaxSystem, a qual naturalmente deve gerenciar o sistema, incluindo as instancias.

### Sub classe Estado fiscal

- **Design Pattern:**  ?? (talvez concrete classes da classe TaxState)
- Tipo: Classe
- **Campos:**
    - (REVER os campos)
    - Nome
    - ID
    - Ano
    - **objeto de anos:**
        - aliquota do imposto ICMS →  para cada ano
        - aliquota do imposto IPI → para cada ano
        - id → para cada ano
- Responsabilidade e f**uncionalidades:**
    - Será uma classe de um estado fiscal.
    - Terá métodos para cada ano deste estado fiscal que deverão retornar as alíquotas de ICMS e/ou IPI a partir do ano do produto.

### **Classe Product:**

- (REVER as responsabilidades, funcionalidades e os campos da classes)
- **Design Pattern:** **Builder** para criar objetos **`Produto`** com configurações flexíveis e mais complexas.
- **Campos:**
    - Nome
    - Estado Fiscal
    - Valor do Produto (sem impostos)
    - ID do Produto.
- **Funcionalidades:**
    - Adicionar ou remover produtos.
    - Modificar os detalhes de um produto.
    - Calcular o valor do imposto com base nas aliquotas de cada estado fiscal e ano.
- **Responsabilidades:** Criar objetos de produto configuráveis e calcular impostos com base nas informações recebidas.

## Fluxo:

- (REVER o fluxo)
- Deve ser inicializada a classe de TaxSystem
    - esta classe será responsável por gerenciar as outras classes.
    - uma ideia é(verificar se é possível fazer isso neste design pattern):
        - Na classe TaxSystem, através da classe TaxStates ter um cadastro para o usuário poder adicionar as infos do produto que devera ser calculado e vai ser possível alterar as infos de estados fiscais e anos.
        - Uma API ligada a um BD com uma tabela para estados fiscais e dentro de cada estado fiscal também precisamos ter os anos com alíquotas de impostos para cada estado fiscal naquele determinado ano.
- Deve ser inicializada a classe de estado fiscal(TaxStates).
    - Ela vai retornar as alíquotas de impostos(ICMS/IPI) referente a um determinado estado fiscal em um determinado ano.
    - Nela que vai estar o método que se comunica com a API para fazer o crud de estado fiscal, podendo adicionar, modificar e remover estados fiscais e os respectivos anos para cada estado fiscal.
- Deve ser inicializada a classe de produto
    - Onde deverá ser calculado o valor do produto com base nas aliquotas de ICMS e/ou IPI retornadas da classe de estado fiscal.

## Legenda:

**Estado fiscal**: Isso significa que o sistema permite indicar em qual estado(UF) uma venda está ocorrendo.

**Classe Abstrata**:  é uma classe que não pode ser instanciada diretamente. Ela serve como um modelo para outras classes derivadas (subclasses) que estendem seu comportamento

**Método Abstrato**: Método com declaração na classe abstrata mas com implementação concreta nas subclasses

## Diagrama(Em desenvolvimento)


[Pagina no Notion com Docs e Diagrama completo](https://insidious-debt-983.notion.site/Diagrama-146c66b842674dc0bf4579eb2d309843)

[Por que usei cada design pattern](https://www.notion.so/Por-que-usei-cada-design-pattern-d3dc4c940428417880dbdaeb723030a3?pvs=21)

[UML](https://www.notion.so/UML-ddaa94d1ee4442fe92b616b37a6c6620?pvs=4) 
