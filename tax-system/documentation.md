[Pagina no Notion com Docs e Diagrama completo](https://insidious-debt-983.notion.site/Diagrama-146c66b842674dc0bf4579eb2d309843)

# Tax System Docs
## Problema a ser resolvido pelo sistema:

É necessário um sistema o qual deverá possibilitar o cadastro de diferente produtos, em diferentes estados fiscais e anos, as alíquotas de impostos para cada produto, devera mudar conforme o seu valor, seu estado fiscal e seu ano.

## Apresentação do sistema:

A ideia é permitir que o usuário crie produtos e tenha um calculo automatizado de impostos baseado em critérios de estado fiscal e ano do produto.

Basicamente o sistema permite a criação e configuração flexível de produtos com base em diferentes critérios fiscais que deverá receber e então realiza o cálculo de impostos com base nas alíquotas de impostos definidas para os estados e anos correspondentes. Isso torna o gerenciamento de informações fiscais mais organizado e facilita a criação e modificação de produtos tendo os impostos calculados de forma precisa.

É projetado para lidar com cálculos fiscais relacionados a produtos com base em critérios como o estado fiscal, o ano de venda e o valor do produto. Utilizara as seguintes classes:

1. **TaxSystem:** Está é a classe classe de controle, coordena a interação entre as classes do sistema, Inicializando ele e colabora com o uso correto das taxas no cálculo de impostos dos produtos.
2. **TaxState:** Esta classe permite gerenciar informações sobre estados fiscais, incluindo nome, ID e taxas de ICMS e IPI. Os usuários podem adicionar, remover ou modificar estados fiscais.
3. **Product:** Esta classe permite criar objetos de produtos personalizados. Calcula o valor do imposto com base na alíquota de impostos que receber.

### **Classe TaxSystem:**

- **Design Pattern: Facade**, interface unificada, o sistema fica mais centralizado e fácil de usar.
- **Responsabilidades:** Responsável por gerenciar a interação entre as classes, por exemplo: vai chamar primeiro a classe de Estado Fiscal para monta-la, após isso deve chamar a classe de produto.
- **Funcionalidades**:
    - Inicializar o sistema de estados fiscais com instâncias dos estados.
    - Coordenar a criação, modificação e remoção de estados, anos e produtos.
    - Garantir que as alíquotas apropriadas sejam usadas no cálculo de impostos dos produtos.

### **Classe TaxStates:**

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
    - Adicionar, editar e remover estados fiscais.
    - Adicionar, editar e remover anos que estão dentro de um determinado estado fiscal.
    - Retornar as alíquotas de ICMS e/ou IPI a partir da combinação de estado fiscal e ano que um produto em específico vai precisar.
    - A classe terá um método que retornará as alíquotas de impost do produto, o qual poderá durante a execução do sistema ser chamado pela classe Product, como a Instância desta classe é única, a classe Product utilizara a instância que estará na classe TaxSystem, a qual naturalmente deve gerenciar o sistema, incluindo as instancias.
- **Responsabilidades:** Gerenciar e fornecer informações sobre estados fiscais como nome, ID e alíquota de impostos(ICMS/IPI) para cada ano.

### **Classe Product:**

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
- Deve ser inicializada a classe de TaxSystem
    - esta classe será responsável por gerenciar as outras classes.
    - uma ideia é(verificar se é possível fazer isso neste design pattern):
        - Na classe TaxSystem, adicionar um cadastro para o usuário poder adicionar as infos do produto que devera ser calculado e vai ser possível alterar a de estado fiscais e anos.
        - Uma API ligada a um BD com uma tabela para estados fiscais e dentro de cada estado fiscal também precisamos ter os anos com alíquotas de impostos para cada estado fiscal naquele determinado ano.
- Deve ser inicializada a classe de estado fiscal.
    - Ela vai retornar as alíquotas de impostos(ICMS/IPI) referente a um determinado estado fiscal em um determinado ano.
- Deve ser inicializada a classe de produto
    - Onde devera ser calculado o valor do produto com base nas aliquotas de ICMS e/ou IPI retornadas da classe de estado fiscal.

## Diagrama(acessando pelo Notion está melhor)
<img width="1414" alt="Screenshot 2023-11-03 at 11 28 19 AM" src="https://github.com/diegooppitz/javascript-codes-playground/assets/25592813/159a71ae-596e-4c66-a839-06b29563fa38">


## Legenda:

**Estado fiscal**: Isso significa que o sistema permite indicar em qual estado(UF) uma venda está ocorrendo.

**Classe Abstrata**:  é uma classe que não pode ser instanciada diretamente. Ela serve como um modelo para outras classes derivadas (subclasses) que estendem seu comportamento

**Método Abstrato**: Método com declaração na classe abstrata mas com implementação concreta nas subclasses

[Pagina no Notion com Docs e Diagrama completo](https://insidious-debt-983.notion.site/Diagrama-146c66b842674dc0bf4579eb2d309843)

[Por que usei cada design pattern](https://www.notion.so/Por-que-usei-cada-design-pattern-d3dc4c940428417880dbdaeb723030a3?pvs=21)

[UML](https://www.notion.so/UML-ddaa94d1ee4442fe92b616b37a6c6620?pvs=4) 
