# 🧾 ListTask

Aplicativo para **gerenciar tarefas** de forma simples e rápida.  
Abaixo está a explicação da função de cada tela do projeto.

---

## 🏠 `Inicio.js`
Tela de boas-vindas (**Splash Screen**).  
Apresenta a proposta do aplicativo e permite a navegação para a tela de **Login** através de um botão (`TouchableOpacity`).

---

## 📝 `Login.js`
Tela responsável por capturar o **apelido do usuário**.  
Possui validação para garantir que o campo não esteja vazio e, ao continuar, leva o usuário para a tela **ListTask**, enviando o apelido como parâmetro.

---

## 📋 `ListTask.js`
Tela principal do aplicativo.  
Permite **criar, listar, marcar como concluídas e remover tarefas**.  
Também exibe uma saudação personalizada usando o apelido informado na tela de Login.  
Utiliza **estados (`useState`)** para controlar as tarefas e o **`FlatList`** para exibir a lista dinamicamente.

---

## Equipe 
- Anna Luiza Gomes Sobral
- Eychila Meirelle da Silva
- Maria Clara Matos Duarte
- Isis Marieli da Silva Moura 
- Kledson Tenório dos Santos 
- Wiviam Eshley Anacleto da Silva

---
