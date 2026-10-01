# Guía desde cero: subir el proyecto y crear el Kanban en GitHub

Esta guía está escrita para una persona que está comenzando.

## PARTE 1 — Abrir el proyecto en Visual Studio Code

1. Descomprime el archivo ZIP.
2. Abre Visual Studio Code.
3. Pulsa **File > Open Folder**.
4. Selecciona la carpeta `Tablero_Kanban_Joan_Solano`.
5. Verás `index.html`, `css`, `js`, `docs` e `issues`.
6. Puedes abrir `index.html` con Live Server para comprobar que funciona.

## PARTE 2 — Crear el repositorio en GitHub

1. Entra a GitHub e inicia sesión.
2. Pulsa el botón **+** de la parte superior.
3. Selecciona **New repository**.
4. Nombre recomendado del repositorio: `tablero-kanban-joan-solano`.
5. Descripción: `Práctica de planificación de proyecto con tablero Kanban en GitHub Projects.`
6. Marca **Public**.
7. No agregues README, .gitignore ni licencia desde GitHub porque ya están dentro de la carpeta.
8. Pulsa **Create repository**.
9. Deja abierta la página que GitHub te muestra porque allí aparecerá la dirección de tu repositorio.

## PARTE 3 — Subir los archivos desde VS Code

En Visual Studio Code abre **Terminal > New Terminal** y ejecuta, uno por uno:

```bash
git init
git add .
git commit -m "Proyecto inicial del tablero Kanban"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/tablero-kanban-joan-solano.git
git push -u origin main
```

Cambia `TU-USUARIO` por tu usuario real de GitHub.

Si Git te pide nombre y correo por primera vez, ejecuta:

```bash
git config --global user.name "Joan Solano"
git config --global user.email "TU-CORREO-DE-GITHUB"
```

Después vuelve a ejecutar el `git commit` y continúa.

## PARTE 4 — Crear el Project de GitHub

1. En GitHub pulsa tu foto de perfil.
2. Entra a **Your profile**.
3. Abre la pestaña **Projects**.
4. Pulsa **New project**.
5. Elige la plantilla **Board** o empieza desde un Board vacío.
6. Escribe exactamente como nombre: **Tablero Kanban Joan Solano**.
7. Pulsa **Create project**.

## PARTE 5 — Preparar las columnas

Queremos cuatro columnas:

- Por hacer
- En proceso
- En revisión
- Finalizado

GitHub normalmente utiliza el campo **Status** para organizar las columnas del Board. Si aparecen nombres predeterminados como Todo, In Progress y Done, puedes editar las opciones del campo Status y adaptarlas a los cuatro nombres anteriores.

## PARTE 6 — Agregar las tareas

Abre `docs/TAREAS_PARA_GITHUB_PROJECTS.md`.

Crea las ocho tareas en el Project. Puedes agregarlas como **draft issues** directamente desde el tablero. Copia el título y la descripción correspondiente.

Después mueve cada tarjeta a la columna indicada en el documento.

## PARTE 7 — Vincular el repositorio

Dentro del Project abre el menú de configuración y busca la opción para administrar repositorios o el repositorio predeterminado. Agrega `tablero-kanban-joan-solano` cuando GitHub te lo permita.

También puedes convertir posteriormente los draft issues en issues del repositorio si deseas que el tablero quede más completo.

## PARTE 8 — Hacer público el Project

1. Dentro de tu Project abre el menú de la parte superior derecha.
2. Entra a **Settings**.
3. Busca **Visibility**.
4. Selecciona **Public**.
5. Confirma el cambio si GitHub lo solicita.

Esto es indispensable porque la tarea pide pegar una URL pública.

## PARTE 9 — Copiar el enlace para entregar

1. Regresa a la vista Board.
2. Copia la URL del navegador.
3. Debe parecerse a:

```text
https://github.com/users/TU-USUARIO/projects/NUMERO/views/NUMERO
```

4. Abre ese enlace en una ventana de incógnito para comprobar que otra persona puede verlo sin iniciar sesión.
5. Si se abre correctamente, ese es el enlace que debes pegar en la plataforma de la tarea.

## Checklist antes de entregar

- [ ] Repositorio público creado.
- [ ] Archivos del proyecto subidos.
- [ ] Project llamado `Tablero Kanban Joan Solano`.
- [ ] Vista configurada como Board/Kanban.
- [ ] Varias tareas agregadas.
- [ ] Tareas distribuidas entre diferentes estados.
- [ ] Project configurado como público.
- [ ] URL probada en incógnito.
- [ ] URL pública pegada en la tarea.
