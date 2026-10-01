const STORAGE_KEY = "joan-solano-kanban";
const order = ["todo", "doing", "review", "done"];

const initialTasks = [
  {
    id: 1,
    title: "Definir objetivo del proyecto",
    description: "Establecer qué problema resuelve TaskFlow y qué funciones tendrá la primera versión.",
    tag: "Planificación",
    status: "done"
  },
  {
    id: 2,
    title: "Preparar estructura del repositorio",
    description: "Crear las carpetas principales, archivos base y documentación inicial.",
    tag: "Git",
    status: "done"
  },
  {
    id: 3,
    title: "Diseñar la interfaz del tablero",
    description: "Definir columnas, tarjetas, tipografía y comportamiento responsive.",
    tag: "Diseño",
    status: "review"
  },
  {
    id: 4,
    title: "Programar movimiento de tareas",
    description: "Permitir avanzar o retroceder tarjetas entre los estados del tablero.",
    tag: "JavaScript",
    status: "doing"
  },
  {
    id: 5,
    title: "Guardar tareas en el navegador",
    description: "Persistir el estado del tablero usando localStorage.",
    tag: "JavaScript",
    status: "doing"
  },
  {
    id: 6,
    title: "Validar diseño en móvil",
    description: "Revisar que el tablero sea legible y funcional en pantallas pequeñas.",
    tag: "Pruebas",
    status: "todo"
  },
  {
    id: 7,
    title: "Revisar documentación",
    description: "Comprobar que el README explique claramente el proyecto y su ejecución.",
    tag: "Documentación",
    status: "todo"
  },
  {
    id: 8,
    title: "Publicar repositorio y tablero",
    description: "Subir el código a GitHub y publicar el GitHub Project en modo público.",
    tag: "Entrega",
    status: "todo"
  }
];

function loadTasks() {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : structuredClone(initialTasks);
}

let tasks = loadTasks();

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function moveTask(id, direction) {
  const task = tasks.find(item => item.id === id);
  const currentIndex = order.indexOf(task.status);
  const nextIndex = currentIndex + direction;
  if (nextIndex < 0 || nextIndex >= order.length) return;
  task.status = order[nextIndex];
  saveTasks();
  render();
}

function taskCard(task) {
  const card = document.createElement("article");
  card.className = "task-card";

  const title = document.createElement("h3");
  title.textContent = task.title;

  const description = document.createElement("p");
  description.textContent = task.description;

  const meta = document.createElement("div");
  meta.className = "task-meta";

  const badge = document.createElement("span");
  badge.className = "badge";
  badge.textContent = task.tag;

  const actions = document.createElement("div");
  actions.className = "task-actions";

  const back = document.createElement("button");
  back.type = "button";
  back.textContent = "←";
  back.title = "Mover atrás";
  back.disabled = task.status === order[0];
  back.addEventListener("click", () => moveTask(task.id, -1));

  const next = document.createElement("button");
  next.type = "button";
  next.textContent = "→";
  next.title = "Mover adelante";
  next.disabled = task.status === order[order.length - 1];
  next.addEventListener("click", () => moveTask(task.id, 1));

  actions.append(back, next);
  meta.append(badge, actions);
  card.append(title, description, meta);
  return card;
}

function render() {
  order.forEach(status => {
    const list = document.querySelector(`[data-list="${status}"]`);
    const count = document.querySelector(`[data-count="${status}"]`);
    list.innerHTML = "";
    const filtered = tasks.filter(task => task.status === status);
    filtered.forEach(task => list.appendChild(taskCard(task)));
    count.textContent = filtered.length;
  });
}

document.getElementById("resetBoard").addEventListener("click", () => {
  tasks = structuredClone(initialTasks);
  saveTasks();
  render();
});

render();
