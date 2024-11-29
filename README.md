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
  - Gerencia a entrada e saída, como o manipulador de CLI (`CLIHandler`).
- **Tests**:
  - Inclui testes automatizados para validar a funcionalidade das diferentes camadas.

---

## **Como Instalar e Executar o Projeto**

Siga as instruções abaixo para configurar e executar o projeto:

### **1. Pré-requisitos**

- **Node.js**: Certifique-se de que o Node.js (v22 ou superior) está instalado na sua máquina.
- **npm**: Geralmente instalado com o Node.js.

### **2. Clonar o Repositório**

Clone o repositório do projeto:

```bash
git clone https://github.com/seu-usuario/mars-rovers-clean-arch.git
cd mars-rovers-clean-arch
```
