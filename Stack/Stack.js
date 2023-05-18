class Stack {
    constructor() {
      this.items = [];
    }
  
    // Agregar un elemento al tope de la pila
    push(element) {
      this.items.push(element);
    }
  
    // Remover y devolver el elemento en el tope de la pila
    pop() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items.pop();
    }
  
    // Devolver el elemento en el tope de la pila sin removerlo
    peek() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items[this.items.length - 1];
    }
  
    // Verificar si la pila está vacía
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Devolver el tamaño de la pila
    size() {
      return this.items.length;
    }
  
    // Vaciar la pila
    clear() {
      this.items = [];
    }
  }
  
  // Ejemplo de uso
  const stack = new Stack();
  
  stack.push(1);
  stack.push(2);
  stack.push(3);
  
  console.log(stack.size()); // Imprime 3
  console.log(stack.peek()); // Imprime 3
  
  console.log(stack.pop()); // Imprime 3
  console.log(stack.size()); // Imprime 2
  
  stack.clear();
  console.log(stack.isEmpty()); // Imprime true
  