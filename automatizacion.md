# Para la automatizacion necesitaremos correr el siguiente comando
npm i -D commitizen npm-run-all standard-version cz-conventional-changelog
* puede que se tenga que instalar global el commitizen

## Una vez instaladas todas las dependencias corremos el siguiente comando
* commitizen init cz-conventional-changelog --save-dev --save-exact

## ahora generamos los scripts en el package.json
    "commit": "git-cz",
    "update-version": "node version.ts && git add . && git commit -m updated-version",
    "prerelease": "git checkout master && git pull origin master",
    "release": "standard-version -a && npm run update-version",
    "postrelease": "run-s release:*",
    "release:tags": "git push --follow-tags origin master"

* version.ts es un archivo que generamos usando git-describe para obtener la informacion de nuevo repo y crear un archivo en envoments
## uso de los comandos

* se debe usar npm run <comando> 
    * agregamos todos los archivos al stage o los que vayamos a subir git add . | <file>
    * se debe usar npm run commit en vez de git commit, ya que nos dara opciones de commit que reconoce el stamdard-version
        * las palabras clave que reconoce la libreria standard-version para poder hacer el versionado automatico son:
            - git commit -m "fix: ..." para actualizaciones de parche(1.0.0 -> 1.0.1)
            - git commit -m "feat: ..." para actualizaciones de menores(1.0.0 -> 1.1.0)
            - git commit -m "Titulo" -m "BREAKING CHANGE: cuerpo del mensaje" para actualizaciones de mayores (1.0.0 -> 2.0.0)
        ** NOTA: sino se deja ninguna de las palabras claves en el commit por default se efectua la fix
    * una vez que termine ejecutamos npm run release y ejecutara las acciiones, cuando se tiene la palabra <pre> o <post> se ejecutan antes y despues del comando a ejecutar respectivamente