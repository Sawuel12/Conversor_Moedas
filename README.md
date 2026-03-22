# 💱 Conversor de Moedas - React Native

## ⚙️ Funcionalidades
- Conversão dinâmica e bidirecional entre três moedas: **Dólar (USD)**, **Real (BRL)** e **Kwanza (AOA)**.
- Interface intuitiva com seletores suspensos (Dropdown/Picker).
- Tratamento de entrada de dados (teclado numérico otimizado e substituição de vírgulas por pontos).
- Atualização de estado em tempo real com React Hooks (`useState`).

## 🧠 O Algoritmo Estruturado
O núcleo de conversão do aplicativo foi projetado com foco em escalabilidade e manutenção simplificada, separando estritamente a regra de negócio da interface de usuário (conceito fundamental em padrões de projeto de software). 

A lógica matemática, localizada em `src/utils/conversor.js`, utiliza a estratégia de **Moeda Base**. Em vez de mapear fórmulas individuais para cada combinação possível de moedas (o que geraria um código complexo e repetitivo), o algoritmo opera em duas etapas contínuas:

1. **Normalização:** O valor inserido pelo usuário na moeda de origem é dividido pela sua respectiva taxa de câmbio, convertendo-o para a "moeda base" do sistema (neste caso, o Dólar, com peso `1.00`).
2. **Conversão Final:** O valor normalizado (em Dólares) é então multiplicado pela taxa de câmbio da moeda de destino escolhida, retornando o resultado formatado em até duas casas decimais.

## 🏗️ Estrutura Visual e Estilização
Diferente do desenvolvimento web tradicional, este projeto mobile não utiliza arquivos `.html` ou `.css`. A interface foi construída seguindo a arquitetura padrão do React Native:

- **Estrutura (JSX/TSX):** A construção visual utiliza componentes nativos do framework (como `<View>`, `<Text>` e `<TextInput>`), que substituem as tags HTML tradicionais. Esses componentes são compilados diretamente para os elementos de interface nativos do iOS e Android.
- **Estilização (StyleSheet):** As regras de design e estilização, localizadas no final do arquivo principal em `app/(tabs)/index.tsx`, foram implementadas utilizando objetos via API `StyleSheet`. O design segue a lógica do CSS-in-JS, mantendo a estilização encapsulada e organizada no próprio componente.

## 🛠️ Tecnologias e Ferramentas
- **React Native** (Framework base)
- **Expo** (Build e testes)
- **JavaScript** (Lógica e algoritmo)
- **@react-native-picker/picker** (Componente de seleção)
- **JSDoc** (Documentação interna do código-fonte)
