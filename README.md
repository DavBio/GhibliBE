# GhibliBE 
API do Ghibli Films, site que mostra com uma lista de filmes do studio Ghibli. :movie_camera:
![Screenshot from 2022-07-28 16-31-56](https://user-images.githubusercontent.com/63478613/181622132-ae9df505-8ff0-4c96-9d44-a3dc340f45ec.png)


Repositório front end: https://github.com/DavBio/GhibliFE

### Documentação da API
https://documenter.getpostman.com/view/13440665/UzXPxGRs

### Rodando localmente
- Clone o repositório
- `npm install`
- `npm run start` ou `npm run dev`

#### Testes
Exemple de teste unitário utilizando Jest.
`GhibliBE/src/utils/__tests__/paginationUtils.test.ts`

Rode localmente com:
- `npm run test`

### Deploy :rocket:
API: https://ghibli-be.herokuapp.com/
Site: https://ghibli-fe.vercel.app/ 
 
### Base de dados
A base de dados hospedada no MongoDB compas. 
Possui apenas uma collection: "films".

exemplo de documento:
```
{
  "_id": {"$oid":"62e2df6b7515610d447bc255"},
  "title": "Spirited Away",
  "original_title": "千と千尋の神隠し",
  "movie_banner": "https://image.tmdb.org/t/p/original/bSXfU4dwZyBA1vMmXvejdRXBvuF.jpg",
  "description": "Spirited Away is an Oscar winning Japanese animated film about a ten year old girl who wanders away from her parents along a path that leads to a world ruled by strange and unusual monster-like animals. Her parents have been changed into pigs along with others inside a bathhouse full of these creatures. Will she ever see the world how it once was?",
  "director": "Hayao Miyazaki", 
  "producer": "Toshio Suzuki", 
  "release_date":"2001"
}
```
