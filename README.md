# Cotações Deploy
Projeto cotações | estudo NodeJS
<br><br>
# Deploy realizado no Heroku 
## Gerando nova chave 
`ssh-keygen -t rsa -b 4096 -C "loginGit"`
## Capturar informações da chave 
`cat ~/.ssh/id_rsa.pub`

## Comandos heroku
`heroku keys:add` <br>
`heroku git:remote -a cotacoes-nodejs-pradella`

## Acesse http://cotacoes-nodejs-pradella.herokuapp.com/

<br><br><br><br>

# Para executar local
## depois configure as dependencias 
`npm i`

### depois execute 
`npm start`

