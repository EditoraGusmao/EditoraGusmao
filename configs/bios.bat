@echo off
:: Abre o editor de código na pasta atual
start code .

:: Inicia uma API em segundo plano (Node.js como exemplo)
start cmd /k "npm run dev"

:: Abre a documentação ou a página local no navegador
start chrome http://localhost:3000

exit