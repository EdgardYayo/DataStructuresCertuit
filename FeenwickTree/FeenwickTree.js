class FenwickTree {
    constructor(size) {
      this.tree = new Array(size + 1).fill(0);
    }
  
    // Incrementa el valor de un elemento en la posición index
    update(index, delta) {
      while (index < this.tree.length) {
        this.tree[index] += delta;
        index += this.lowestSetBit(index);
      }
    }
  
    // Obtiene la suma acumulada hasta la posición index
    query(index) {
      let sum = 0;
      while (index > 0) {
        sum += this.tree[index];
        index -= this.lowestSetBit(index);
      }
      return sum;
    }
  
    // Obtiene el bit más bajo encendido (1) en la representación binaria de un número
    lowestSetBit(number) {
      return number & -number;
    }
  }
  
  // Ejemplo de uso
  const ft = new FenwickTree(6);
  
  ft.update(1, 3);
  ft.update(2, 2);
  ft.update(3, 5);
  
  console.log(ft.query(3)); // Imprime 10, que es la suma acumulada hasta la posición 3
  console.log(ft.query(6)); // Imprime 10, ya que la suma acumulada hasta la posición 6 es la suma total de los elementos agregados
  console.log(ft.query(2)); // Imprime 5, que es la suma acumulada hasta la posición 2
  