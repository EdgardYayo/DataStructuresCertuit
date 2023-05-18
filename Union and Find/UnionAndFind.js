class UnionFind {
  constructor(size) {
    this.parent = new Array(size);
    this.rank = new Array(size);

    // Inicializar cada elemento como su propio conjunto
    for (let i = 0; i < size; i++) {
      this.parent[i] = i;
      this.rank[i] = 0;
    }
  }

  // Buscar el representante (raíz) del conjunto al que pertenece el elemento
  find(x) {
    if (this.parent[x] !== x) {
      // Aplicar compresión de camino (path compression)
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  // Unir (fusionar) dos conjuntos en uno solo
  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX !== rootY) {
      if (this.rank[rootX] < this.rank[rootY]) {
        this.parent[rootX] = rootY;
      } else if (this.rank[rootX] > this.rank[rootY]) {
        this.parent[rootY] = rootX;
      } else {
        this.parent[rootY] = rootX;
        this.rank[rootX]++;
      }
    }
  }

  // Comprobar si dos elementos pertenecen al mismo conjunto
  isConnected(x, y) {
    return this.find(x) === this.find(y);
  }
}

// Ejemplo de uso
const uf = new UnionFind(6);

uf.union(0, 1);
uf.union(1, 2);
uf.union(3, 4);

console.log(uf.isConnected(0, 2)); // Imprime true, ya que 0, 1 y 2 pertenecen al mismo conjunto
console.log(uf.isConnected(0, 3)); // Imprime false, ya que 0 y 3 pertenecen a conjuntos diferentes
console.log(uf.isConnected(3, 4)); // Imprime true, ya que 3 y 4 pertenecen al mismo conjunto
