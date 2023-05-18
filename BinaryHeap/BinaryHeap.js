class BinaryHeap {
    constructor() {
      this.heap = [];
    }
  
    // Devuelve el índice del padre de un nodo en el montículo binario
    parentIndex(index) {
      return Math.floor((index - 1) / 2);
    }
  
    // Devuelve el índice del hijo izquierdo de un nodo en el montículo binario
    leftChildIndex(index) {
      return 2 * index + 1;
    }
  
    // Devuelve el índice del hijo derecho de un nodo en el montículo binario
    rightChildIndex(index) {
      return 2 * index + 2;
    }
  
    // Intercambia dos elementos en el montículo binario
    swap(index1, index2) {
      [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }
  
    // Inserta un elemento en el montículo binario
    insert(value) {
      this.heap.push(value); // Agrega el valor al final del array
  
      let currentIndex = this.heap.length - 1; // Índice del nuevo elemento
      let parentIndex = this.parentIndex(currentIndex); // Índice del padre del nuevo elemento
  
      // Realiza un "up-heap" (flotar) hasta que se cumpla la propiedad del montículo
      while (currentIndex > 0 && this.heap[currentIndex] < this.heap[parentIndex]) {
        this.swap(currentIndex, parentIndex); // Intercambia el elemento con su padre
        currentIndex = parentIndex; // Actualiza el índice del elemento al índice del padre
        parentIndex = this.parentIndex(currentIndex); // Actualiza el índice del padre al nuevo índice del padre
      }
    }
  
    // Elimina y devuelve el elemento mínimo del montículo binario (raíz)
    extractMin() {
      if (this.isEmpty()) {
        return null; // Si el montículo está vacío, devuelve null
      }
  
      const min = this.heap[0]; // Elemento mínimo (raíz)
      const lastElement = this.heap.pop(); // Último elemento del array
      this.heap[0] = lastElement; // Reemplaza la raíz con el último elemento
  
      this.heapify(0); // Realiza un "down-heap" (hundir) para restaurar la propiedad del montículo
  
      return min; // Devuelve el elemento mínimo
    }
  
    // Realiza un "down-heap" (hundir) para restaurar la propiedad del montículo
    heapify(index) {
      const leftChildIndex = this.leftChildIndex(index); // Índice del hijo izquierdo
      const rightChildIndex = this.rightChildIndex(index); // Índice del hijo derecho
      let smallestIndex = index; // Índice del elemento más pequeño entre el padre y los hijos
  
      // Compara el elemento actual con su hijo izquierdo y actualiza el índice del elemento más pequeño si es necesario
      if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallestIndex]) {
        smallestIndex = leftChildIndex;
      }
  
      // Compara el elemento actual con su hijo derecho y actualiza el índice del elemento más pequeño si es necesario
      if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallestIndex]) {
        smallestIndex = rightChildIndex
    }

    // Si el índice del elemento más pequeño ha cambiado, intercambia el elemento actual con el más pequeño y continúa el "down-heap"
    if (smallestIndex !== index) {
      this.swap(index, smallestIndex);
      this.heapify(smallestIndex);
    }
  }

  // Devuelve el elemento mínimo del montículo binario (raíz) sin eliminarlo
  peekMin() {
    if (this.isEmpty()) {
      return null; // Si el montículo está vacío, devuelve null
    }
    return this.heap[0]; // Devuelve el elemento mínimo (raíz)
  }

  // Verifica si el montículo binario está vacío
  isEmpty() {
    return this.heap.length === 0;
  }

  // Devuelve el tamaño del montículo binario
  size() {
    return this.heap.length;
  }
}

// Ejemplo de uso
const heap = new BinaryHeap();
heap.insert(5);
heap.insert(3);
heap.insert(8);
heap.insert(1);

console.log(heap.peekMin()); // Imprime 1

console.log(heap.extractMin()); // Imprime 1

console.log(heap.size()); // Imprime 3

console.log(heap.isEmpty()); // Imprime false
  