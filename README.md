# Mars Rovers - Clean Architecture Solution 🚀

Este projeto implementa a solução para o problema dos **Mars Rovers** utilizando os princípios da **Clean Architecture**, com camadas bem definidas para melhorar a organização, modularidade e escalabilidade do código.

---

## **Tecnologias Utilizadas**

- **Node.js** v22
- **TypeScript** v5.x
- **Vitest** (para testes automatizados)

---

## **Estrutura do Projeto**

O projeto segue a Clean Architecture e está organizado em camadas:

- **Domain**:
  - Contém as entidades principais (`Rover` e `Plateau`) e suas regras de negócio.
- **Application**:
  - Implementa os casos de uso, como o comando `MoveRoverCommand`, que coordena a movimentação do rover.
- **Infrastructure**:
  - Gerencia a entrada e saída (`Handler`).
- **Tests**:
  - Inclui testes automatizados para validar a funcionalidade das diferentes camadas.

---

## **Por que usamos TypeScript?**

### **1. Tipagem Estática**

O TypeScript ajuda a evitar erros comuns durante o desenvolvimento, pois permite que definamos os tipos de variáveis, funções e objetos. Isso traz mais segurança ao código.

Por exemplo:

- Garantimos que os comandos (`L`, `R`, `M`) sejam sempre válidos.
- Definimos que o rover só pode ter orientações cardeais (`'N' | 'E' | 'S' | 'W'`).

```typescript
type Direction = "N" | "E" | "S" | "W";
```

### **2. Melhor Documentação**

Com o TypeScript, o próprio código serve como documentação. Por exemplo, as interfaces Rover e Plateau deixam claro quais atributos e métodos essas entidades possuem.

```typescript
export class Plateau {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  public isWithinBounds(x: number, y: number): boolean {
    return x >= 0 && y >= 0 && x <= this.width && y <= this.height;
  }
}
```

### **3. Melhor Refatoração**

Ao modificar o código, o TypeScript avisa imediatamente quais partes do sistema precisam ser atualizadas. Isso reduz o risco de introduzir bugs durante a manutenção ou evolução do projeto.

### **4. Compatibilidade com o JavaScript**

O TypeScript é transpilado para JavaScript padrão, garantindo compatibilidade com qualquer ambiente que suporte Node.js.

### **5. Ferramentas Avançadas**

O TypeScript melhora a experiência de desenvolvimento com ferramentas como:

Autocompletar: Melhora a produtividade ao sugerir métodos e propriedades disponíveis.
Linting: Ajuda a encontrar erros no código antes mesmo de executá-lo.

### **6. Integração com Testes**

A tipagem clara do TypeScript facilita a escrita de testes automatizados. Por exemplo, os testes podem verificar diretamente os atributos e métodos tipados do Rover e Plateau.

---

## **Como Instalar e Executar o Projeto**

Siga as instruções abaixo para configurar e executar o projeto:

### **1. Pré-requisitos**

- **Node.js**: Certifique-se de que o Node.js (v22 ou superior) está instalado na sua máquina.
- **npm**: Geralmente instalado com o Node.js.

### **2. Clonar o Repositório**

Clone o repositório do projeto:

```bash
git clone https://github.com/LandimTiago/test-rover
cd test-rover
```

### **3. Instalar as Dependências**

Instale as dependências necessárias:

```bash
npm install
```

### **4. Fornecer o arquivo de entrada**

Crie na raiz do projeto um arquivo chamado `input.txt`. Este arquivo deve conter os dados de entrada como no exemplo a baixo:

```plaintext
5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM
```

### **6. Executar o projeto**

Após a instalação e criação do arquivo de entrada de dados execute o programa com o comando:

```bash
npm start
```

A saída esperada para o arquivo de entrada acima será:

```plaintext
1 3 N
5 1 E
```

---

## **Rodando os Testes**

O Projeto inclui testes automatizados para validar as funcionalidades. Para executar utilize o comando:

```bash
npm run test
```

O comando ja contempla o modo 'watch' para reiniciar a cada alteração do codigo, garantindo assim a confiabilidade em tempo de desenvolvimento.
