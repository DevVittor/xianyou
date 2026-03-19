
![Node+Typescript](https://i.imgur.com/yrV7Go3.jpeg)

# 🏷️ Sistema de Leilão em Tempo Real

Estou desenvolvendo um sistema de **Leilão em Tempo Real** utilizando a stack:

- **Node.js**
- **TypeScript**
- **Express**
- **Mongoose (MongoDB)**
- **React**
- **Socket.io**

---

## 📌 Regras de Negócio Principais

### ⏳ Sistema de "Overtime" (Anti-Sniping)

Se um lance for feito **nos últimos 10 segundos**, o cronômetro do leilão deve **resetar para 10 segundos restantes**.

- Essa regra pode acontecer **sucessivamente**.
- Deve ser validada **no backend**.
- A atualização deve ser enviada para todos os clientes via **Socket.io**.

---

### 💰 Preço Inicial

- O leilão deve começar obrigatoriamente pelo `initialPrice` definido pelo dono do item.
- Nenhum lance pode ser menor que o valor atual.
- O primeiro lance válido deve respeitar o `initialPrice`.

---

### 🔨 Sistema de Lances

O sistema deve aceitar:

- Botões de incremento fixo:
  - `+5`
  - `+10`
  - `+50`
- Campo de **Lance Personalizado (input)**

Regras:

- O valor do lance deve ser **maior que o lance atual**
- Validação deve acontecer **no backend**
- Nunca confiar apenas na validação do frontend

---

### ⚡ Atualização em Tempo Real

Deve utilizar **Socket.io** para:

- Atualizar o cronômetro para todos os usuários
- Atualizar o valor atual do lance
- Notificar quando houver novo maior lance
- Notificar quando o leilão finalizar

---

## 🎯 O Que Eu Preciso Agora

[INSIRA AQUI O QUE VOCÊ QUER, EX:  
"Crie o AuctionSchema e o evento do Socket.io que escuta o lance, valida o valor mínimo e aplica a regra de extensão de 10 segundos."  
OU  
"Crie um componente React chamado BidPanel que receba o lance atual via props, tenha os botões de incremento e um input para lance personalizado com validação."  
OU  
"Mostre como sincronizar o relógio do servidor com o componente de Countdown do React para evitar atrasos."]

---

## 📌 Requisitos Técnicos

- Utilizar **boas práticas de TypeScript**
- Separar interfaces
- Garantir segurança dos dados no lado do servidor
- Nunca confiar apenas na validação do frontend
- Aplicar tipagem forte nos eventos do Socket.io
- Manter o código organizado por responsabilidade

---

## 💡 Dicas de Como Usar Esse Prompt

### 🔹 Para o Backend

No campo final entre colchetes, peça:

> "Crie o AuctionSchema e o evento do Socket.io que escuta o lance, valida o valor mínimo e aplica a regra de extensão de 10 segundos."

---

### 🔹 Para o Frontend

Peça:

> "Crie um componente React chamado BidPanel que receba o lance atual via props, tenha os botões de incremento e um input para lance personalizado com validação."

---

### 🔹 Para Sincronização de Tempo

Peça:

> "Mostre como sincronizar o relógio do servidor com o componente de Countdown do React para evitar atrasos."

---

🚀 Objetivo: Construir um sistema de leilão profissional, seguro, escalável e 100% sincronizado em tempo real.
