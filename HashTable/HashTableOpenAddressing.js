class HashTable {
    constructor(size = 10) {
      this.size = size;
      this.table = new Array(size);
    }
  
    // Función de hash simple
    hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
      }
      return hash % this.size;
    }
  
    // Método para insertar un valor en la tabla hash
    insert(key, value) {
      const index = this.hash(key);
      let currentIndex = index;
      let attempt = 0;
  
      while (this.table[currentIndex]) {
        attempt++;
        currentIndex = (index + attempt) % this.size;
      }
  
      this.table[currentIndex] = { key, value };
    }
  
    // Método para obtener un valor dado una clave
    get(key) {
      const index = this.hash(key);
      let currentIndex = index;
      let attempt = 0;
  
      while (this.table[currentIndex]) {
        if (this.table[currentIndex].key === key) {
          return this.table[currentIndex].value;
        }
        attempt++;
        currentIndex = (index + attempt) % this.size;
      }
  
      return undefined;
    }
  
    // Método para eliminar un valor dado una clave
    remove(key) {
      const index = this.hash(key);
      let currentIndex = index;
      let attempt = 0;
  
      while (this.table[currentIndex]) {
        if (this.table[currentIndex].key === key) {
          this.table[currentIndex] = undefined;
          return true;
        }
        attempt++;
        currentIndex = (index + attempt) % this.size;
      }
  
      return false;
    }
  }
  
  // Ejemplo de uso
  const hashTable = new HashTable();
  
  hashTable.insert('clave1', 'valor1');
  hashTable.insert('clave2', 'valor2');
  hashTable.insert('clave3', 'valor3');
  
  console.log(hashTable.get('clave1')); // Imprime 'valor1'
  console.log(hashTable.get('clave2')); // Imprime 'valor2'
  console.log(hashTable.get('clave3')); // Imprime 'valor3'
  
  hashTable.remove('clave2');
  console.log(hashTable.get('clave2')); // Imprime undefined, ya que se eliminó el valor correspondiente a 'clave2'
  