[Notion Page with Documentation](https://insidious-debt-983.notion.site/Diagrama-146c66b842674dc0bf4579eb2d309843)
# Tax System Docs

Este sistema tem como objetivo calcular impostos de produtos com flexibilidade e baseado nos critérios de estado fiscal**, ano de venda e do produto. 

É necessário objetos e classes:

### Resumo

O sistema permite a configuração flexível de produtos com base em diferentes critérios fiscais e automatiza o cálculo de impostos com base nas taxas definidas para os estados e anos correspondentes. Isso torna o gerenciamento de informações fiscais mais organizado e facilita a criação e modificação de produtos com impostos calculados de forma precisa.

O sistema é projetado para lidar com cálculos fiscais relacionados a produtos com base em critérios como o estado fiscal, o ano de venda e o valor do produto. Ele fornece as seguintes funcionalidades:

1. **Classe "Estado Fiscal":** Permite gerenciar informações sobre estados fiscais, incluindo nome, ID e taxas de ICMS e IPI. Os usuários podem adicionar, remover ou modificar estados fiscais.
2. **Classe Ano:** Gerencia informações sobre os anos fiscais, incluindo taxas de ICMS e IPI para cada ano. Os usuários podem adicionar, remover ou modificar anos fiscais.
3. **Classe Produto:** Permite criar objetos de produto personalizados. Calcula o valor do imposto com base nas taxas de estado e ano.
4. **Classe de controle do sistema:** Coordena a interação entre as classes do sistema. Ela inicializa o sistema e garante o uso correto das taxas no cálculo de impostos dos produtos.

### 1**. Classe de Estado Fiscal:**

- **Design Pattern:**  Padrão **Singleton** para garantir que exista apenas uma instância da classe representando todos os estados fiscais, pois cada estado é único.
- **Campos:** Nome, ID, ICMS (Imposto sobre Circulação de Mercadorias e Serviços), IPI (Imposto sobre Produtos Industrializados).
- **Funcionalidades:**
    - Adicionar ou remover estados fiscais.
    - Modificar as taxas de ICMS e/ou IPI para cada estado.
- **Responsabilidades:** Gerenciar e fornecer informações sobre estados fiscais, como nome, ID e taxas de impostos.

### **2. Classe de Ano:**

- **Design Pattern:** Singleton para garantir que haja apenas uma instância global de anos fiscais.
- **Campos:** ID do ano, taxas de ICMS e IPI.
- **Funcionalidades:**
    - Adicionar ou remover anos.
    - Modificar as taxas de ICMS e IPI para cada ano.
- **Responsabilidades:** Gerenciar informações sobre os anos e as taxas de impostos associadas a cada ano.

### **3. Classe de Produto:**

- **Design Pattern:** **Builder** para criar objetos **`Produto`** com configurações flexíveis e mais complexas.
- **Campos:** Nome, Estado Fiscal, Ano, Valor do Produto (sem impostos) e ID do Produto.
- **Funcionalidades:**
    - Adicionar ou remover produtos.
    - Modificar os detalhes de um produto.
    - Calcular o valor do imposto com base nas taxas de estado e ano.
- **Responsabilidades:** Criar objetos de produto configuráveis e calcular impostos com base nas informações fornecidas.

### **4. Classe de controle do sistema:**

- **Design Pattern: Facade**, interface unificada, o sistema fica mais centralizado e fácil de usar.
- Responsabilidades: Responsável por gerenciar a interação entre as classes, por exemplo: vai chamar primeiro as classes de Estado Fiscal e de ano, para monta-los, após isso deve chamar a classe de produto, para monta-lo.
- **Funcionalidades**:
    - Inicializar o sistema de estados fiscais com instâncias dos estados.
    - Inicializar o sistema de anos com informações de anos fiscais.
    - Coordenar a criação, modificação e remoção de estados, anos e produtos.
    - Garantir que as taxas apropriadas sejam usadas no cálculo de impostos dos produtos.

## Legenda:

**Estado fiscal**: Isso significa que o sistema permite indicar em qual estado(UF) uma venda está ocorrendo

**Classe Abstrata**:  é uma classe que não pode ser instanciada diretamente. Ela serve como um modelo para outras classes derivadas (subclasses) que estendem seu comportamento

**Método Abstrato**: Método com declaração na classe abstrata mas com implementação concreta nas subclasses

## Diagrama(Em desenvolvimento)

[Por que usei cada design pattern](https://www.notion.so/Por-que-usei-cada-design-pattern-d3dc4c940428417880dbdaeb723030a3?pvs=21)
