[Pagina no Notion com Docs e Diagrama](https://insidious-debt-983.notion.site/Diagrama-146c66b842674dc0bf4579eb2d309843)
# Tax System Docs
A ideia deste sistema é permitir que o usuário crie produtos e tenha um calculo automatizado de impostos baseado em critérios de estado fiscal e ano do produto.

Basicamente o sistema permite a criação e configuração flexível de produtos com base em diferentes critérios fiscais que deverá receber e então realiza o cálculo de impostos com base nas aliquotas de impostos definidas para os estados e anos correspondentes. Isso torna o gerenciamento de informações fiscais mais organizado e facilita a criação e modificação de produtos tendo os impostos calculados de forma precisa.

É projetado para lidar com cálculos fiscais relacionados a produtos com base em critérios como o estado fiscal, o ano de venda e o valor do produto. Ele fornece as seguintes classes:

1. **Classe "Estado Fiscal":** Permite gerenciar informações sobre estados fiscais, incluindo nome, ID e taxas de ICMS e IPI. Os usuários podem adicionar, remover ou modificar estados fiscais.
2. **Classe Produto:** Permite criar objetos de produto personalizados. Calcula o valor do imposto com base na aliquota de impostos que receber.
3. **Classe de controle do sistema:** Coordena a interação entre as classes do sistema. Ela inicializa o sistema e garante o uso correto das taxas no cálculo de impostos dos produtos.

### 1**. Classe TaxState:**

- **Design Pattern:**  Padrão **Singleton** para garantir que exista apenas uma instância da classe representando todos os estados fiscais.
- **Campos:**
    - Nome
    - ID
    - Ano
    - **objeto de anos:**
        - aliquota do imposto ICMS →  para cada ano
        - aliquota do imposto IPI → para cada ano
        - id → para cada ano
- **Funcionalidades:**
    - Adicionar ou remover estados fiscais.
    - Modificar as aliquotas de ICMS e/ou IPI para cada estado fiscal.
    - Deve retornar as aliquotas de impostos(ICMS/IPI) do estado fiscal para um determinado ano.
- **Responsabilidades:** Gerenciar e fornecer informações sobre estados fiscais como nome, ID e aliquota de impostos(ICMS/IPI) em cada ano.

### 2**. Classe Product:**

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

### 3**. Classe TaxSystem:**

- **Design Pattern: Facade**, interface unificada, o sistema fica mais centralizado e fácil de usar.
- **Responsabilidades:** Responsável por gerenciar a interação entre as classes, por exemplo: vai chamar primeiro a classe de Estado Fiscal para monta-la, após isso deve chamar a classe de produto.
- **Funcionalidades**:
    - Inicializar o sistema de estados fiscais com instâncias dos estados.
    - Coordenar a criação, modificação e remoção de estados, anos e produtos.
    - Garantir que as aliquotas apropriadas sejam usadas no cálculo de impostos dos produtos.

## Fluxo:

- Deve ser inicializada a classe de TaxSystem
    - esta classe sera responsavel por gerenciar as outras classes.
    - uma ideia é: na classe TaxSystem, adicionar um cadastro para o usuário adicionar as infos de estado fiscal, ano e produto(verificar se é possível fazer isso neste design pattern)
- Deve ser inicializada a classe de estado fiscal.
    - Ela vai retornar as aliquotas de impostos(ICMS/IPI) referente a um determinado estado fiscal em um determinado ano.
- Deve ser inicializada a classe de produto
    - Onde devera ser calculado o valor do produto com base nas aliquotas de ICMS e/ou IPI retornadas da classe de estado fiscal.

## Legenda:

**Estado fiscal**: Isso significa que o sistema permite indicar em qual estado(UF) uma venda está ocorrendo

**Classe Abstrata**:  é uma classe que não pode ser instanciada diretamente. Ela serve como um modelo para outras classes derivadas (subclasses) que estendem seu comportamento

**Método Abstrato**: Método com declaração na classe abstrata mas com implementação concreta nas subclasses

## Diagrama(Em desenvolvimento)

[Por que usei cada design pattern](https://www.notion.so/Por-que-usei-cada-design-pattern-d3dc4c940428417880dbdaeb723030a3?pvs=21)
