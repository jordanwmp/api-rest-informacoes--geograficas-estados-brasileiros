```markdown
# API de Estados Brasileiros 🇧🇷

Esta é uma API REST construída com **Node.js**, **Express** e **TypeScript**, que fornece informações geográficas detalhadas sobre os estados do Brasil.

## 🔍 Funcionalidades

A API oferece informações sobre cada estado brasileiro, incluindo:

- **Nome**
- **Sigla**
- **Capital**
- **População**
- **Produto Interno Bruto (PIB)**
- **Principais Atividades Econômicas**
- **Informações Geográficas**
  - Área total
  - Fronteiras com outros estados
- **Região (NORTE, NORDESTE, CENTRO-OESTE, SUDESTE, SUL)**
- **Bandeira (link para imagem)**

## 📦 Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no lado do servidor.
- **Express**: Framework web para criação de APIs REST.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.

## 📡 Endpoints

### 1. `GET /estados`

Retorna uma lista de estados com suporte a **filtros** e **paginação**.

#### Parâmetros de Query:

| Parâmetro     | Tipo     | Descrição                                                             | Exemplo                  |
|---------------|----------|----------------------------------------------------------------------|--------------------------|
| `nome`        | string   | Filtra os estados que contenham o nome informado (parcial ou total) | `?nome=paulo`            |
| `regiao`      | string   | Filtra por região (NORTE, NORDESTE, CENTRO-OESTE, SUDESTE, SUL)      | `?regiao=SUL`            |
| `pibMin`      | number   | Filtra estados com PIB maior ou igual ao valor informado             | `?pibMin=300000`         |
| `pibMax`      | number   | Filtra estados com PIB menor ou igual ao valor informado             | `?pibMax=900000`         |
| `pagina`      | number   | Página de resultados (default: 1)                                    | `?pagina=2`              |
| `limite`      | number   | Número de estados por página (default: 10)                           | `?limite=5`              |

#### Exemplo:

```

GET /estados?regiao=SUDESTE\&nome=rio\&limite=2

````

#### Resposta:

```json
{
  "pagina": 1,
  "limite": 2,
  "total": 1,
  "resultados": [
    {
      "nome": "Rio de Janeiro",
      "sigla": "RJ",
      "capital": "Rio de Janeiro",
      "populacao": 17264943,
      "pib": 798000,
      "regiao": "SUDESTE",
      "atividadesEconomicas": ["Turismo", "Petróleo", "Serviços"],
      "informacoesGeograficas": {
        "area": 43696,
        "fronteiras": ["MG", "SP", "ES"]
      },
      "bandeira": "http://localhost:3000/static/bandeiras/RJ.png"
    }
  ]
}
````

### 2. `GET /estados/:sigla`

Retorna os detalhes de um estado com base na sigla fornecida (ex: `SP`, `RJ`, `BA`).

#### Parâmetro de Rota:

| Parâmetro | Tipo   | Descrição                          |
| --------- | ------ | ---------------------------------- |
| `sigla`   | string | Sigla do estado (em qualquer caso) |

#### Exemplo:

```
GET /estados/SP
```

#### Resposta:

```json
{
  "nome": "São Paulo",
  "sigla": "SP",
  "capital": "São Paulo",
  "populacao": 46649132,
  "pib": 2400000,
  "regiao": "SUDESTE",
  "atividadesEconomicas": ["Indústria", "Serviços", "Agronegócio"],
  "informacoesGeograficas": {
    "area": 248209,
    "fronteiras": ["RJ", "MG", "PR", "MS"]
  },
  "bandeira": "http://localhost:3000/static/bandeiras/SP.png"
}
```

#### Erro:

```json
{
  "mensagem": "Estado não encontrado"
}
```

## 🔗 Links

* 🌐 Site pessoal: [https://jordanwmp.github.io/](https://jordanwmp.github.io/)

## 🚀 Como executar o projeto

```bash
# Clone o repositório
git clone https://github.com/jordanwmp/api-rest-informacoes--geograficas-estados-brasileiros

# Instale as dependências
npm install

# Rode o servidor em modo de desenvolvimento
npm run dev

# Acesse a API em:
http://localhost:3000/estados
```

## 📌 Observações

Este projeto está em desenvolvimento contínuo. Novas funcionalidades como criação, atualização e exclusão de estados poderão ser incluídas no futuro.


