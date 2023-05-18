class Queue {
    constructor() {
      this.items = [];
    }
  
    // Agregar un elemento al final de la cola
    enqueue(element) {
      this.items.push(element);
    }
  
    // Remover y devolver el primer elemento de la cola
    dequeue() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items.shift();
    }
  
    // Devolver el primer elemento de la cola sin removerlo
    front() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items[0];
    }
  
    // Verificar si la cola está vacía
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Devolver el tamaño de la cola
    size() {
      return this.items.length;
    }
  
    // Vaciar la cola
    clear() {
      this.items = [];
    }
  }
  
  // Ejemplo de uso
  const queue = new Queue();
  
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  
  console.log(queue.size()); // Imprime 3
  console.log(queue.front()); // Imprime 1
  
  console.log(queue.dequeue()); // Imprime 1
  console.log(queue.size()); // Imprime 2
  
  queue.clear();
  console.log(queue.isEmpty()); // Imprime true
  