class PriorityQueue {
    constructor() {
      this.elements = []; // Array para almacenar los elementos de la cola de prioridad
    }
  
    // Agrega un elemento a la cola de prioridad con la prioridad especificada
    enqueue(element, priority) {
      const queueElement = { element, priority }; // Crea un objeto con el elemento y su prioridad
      let added = false; // Bandera para indicar si el elemento ha sido agregado
  
      // Recorre los elementos existentes en la cola de prioridad
      for (let i = 0; i < this.elements.length; i++) {
        // Compara la prioridad del elemento actual con la prioridad del elemento a agregar
        if (queueElement.priority < this.elements[i].priority) {
          // Inserta el nuevo elemento en la posición adecuada para mantener el orden de prioridad
          this.elements.splice(i, 0, queueElement);
          added = true; // Marca que el elemento ha sido agregado
          break;
        }
      }
  
      // Si el elemento no ha sido agregado en ninguna posición, se agrega al final de la cola
      if (!added) {
        this.elements.push(queueElement);
      }
    }
  
    // Elimina y devuelve el elemento con la mayor prioridad de la cola de prioridad
    dequeue() {
      if (this.isEmpty()) {
        return null; // Si la cola de prioridad está vacía, devuelve null
      }
      // Elimina y devuelve el primer elemento de la cola (el de mayor prioridad)
      return this.elements.shift().element;
    }
  
    // Devuelve el elemento con la mayor prioridad de la cola de prioridad sin eliminarlo
    front() {
      if (this.isEmpty()) {
        return null; // Si la cola de prioridad está vacía, devuelve null
      }
      // Devuelve el elemento del primer elemento de la cola (el de mayor prioridad)
      return this.elements[0].element;
    }
  
    // Verifica si la cola de prioridad está vacía
    isEmpty() {
      return this.elements.length === 0;
    }
  
    // Devuelve la cantidad de elementos en la cola de prioridad
    size() {
      return this.elements.length;
    }
  }
  
  // Ejemplo de uso
  const pq = new PriorityQueue(); // Crear una instancia de PriorityQueue
  pq.enqueue("Task 1", 2); // Agregar un elemento con prioridad 2
  pq.enqueue("Task 2", 1); // Agregar un elemento con prioridad 1
  pq.enqueue("Task 3", 3); // Agregar un elemento con prioridad 3
  
  console.log(pq.front()); // Imprime "Task 2" (el elemento con mayor prioridad)
  
  console.log(pq.dequeue()); // Imprime "Task 2" (se elimina y devuelve el elemento con mayor prioridad)
  
  console.log(pq.size()); // Imprime 2 (la cantidad de elementos restantes en la cola)
  
  console.log(pq.isEmpty()); // Imprime false (la cola no está vacía)
  