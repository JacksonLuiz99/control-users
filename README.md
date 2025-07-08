# 📋 Control Users

Sistema web para **cadastro, listagem, edição e exclusão de usuários** desenvolvido com Angular 17, Angular Material e integração com Firebase. Ideal para empresas que precisam gerenciar informações de usuários de forma simples, eficiente e visualmente agradável.

## 🚀 Tecnologias Utilizadas

- [Angular 17](https://angular.io/)
- [Angular Material](https://material.angular.io/)
- [Firebase](https://firebase.google.com/)
- [Bootstrap 5](https://getbootstrap.com/)
- [RxJS](https://rxjs.dev/)

## 📦 Funcionalidades

- ✅ Cadastro de novos usuários
- ✅ Listagem de usuários com visual moderno
- ✅ Edição e exclusão com confirmação
- ✅ Integração com Firebase (autenticação, banco ou hosting)
- ✅ Componentes reutilizáveis com Angular Material
- ✅ Design responsivo com Bootstrap

## 📁 Estrutura do Projeto

```

src/
├── app/
│   ├── components/
│   │   ├── button/
│   │   ├── menu/
│   ├── app.module.ts
│   ├── app-routing.module.ts
│   └── app.component.\*
├── assets/
├── environments/
└── styles.scss

````

## 🛠️ Instalação e Execução

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/crud-usuarios.git
   cd crud-usuarios
````

2. **Instale as dependências**

   ```bash
   npm install
   ```

3. **Configure o Firebase**

   * Acesse o [Firebase Console](https://console.firebase.google.com/)
   * Crie um novo projeto
   * Habilite os serviços necessários (ex: Firestore, Auth)
   * Substitua as configurações em `environment.ts`

4. **Execute o servidor de desenvolvimento**

   ```bash
   ng serve
   ```

   Acesse: `http://localhost:4200`

## 🧪 Testes

Execute os testes unitários com:

```bash
ng test
```

## 📌 Requisitos

* Node.js 18 ou superior
* Angular CLI 17.3+
* Firebase CLI (opcional para deploy)

## 🌐 Deploy (Firebase Hosting)

```bash
firebase login
firebase init
firebase deploy
```

---

## 📄 Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 🙋‍♂️ Autor

Desenvolvido por **Jackson Luiz Domingos Silva**.
Contato: \[[jacksoncuiaba99@gmail.com](mailto:jacksoncuiaba99@gmail.com)]
GitHub: [@JacksonLuiz99](https://github.com/JacksonLuiz99)
