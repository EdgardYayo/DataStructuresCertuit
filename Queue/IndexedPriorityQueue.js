class IndexedPriorityQueue {
    constructor() {
      this.values = [];
      this.indices = new Map();
    }
  
    isEmpty() {
      return this.values.length === 0;
    }
  
    contains(index) {
      return this.indices.has(index);
    }
  
    size() {
      return this.values.length;
    }
  
    insert(index, priority) {
      this.indices.set(index, this.values.length);
      this.values.push({ index, priority });
      this.swim(this.values.length - 1);
    }
  
    delete(index) {
      const i = this.indices.get(index);
      this.exchange(i, this.values.length - 1);
      this.values.pop();
      this.sink(i);
      this.indices.delete(index);
    }
  
    changePriority(index, priority) {
      const i = this.indices.get(index);
      this.values[i].priority = priority;
      this.swim(i);
      this.sink(i);
    }
  
    swim(i) {
      while (i > 0 && this.less(Math.floor((i - 1) / 2), i)) {
        this.exchange(i, Math.floor((i - 1) / 2));
        i = Math.floor((i - 1) / 2);
      }
    }
  
    sink(i) {
      while (2 * i + 1 < this.values.length) {
        let j = 2 * i + 1;
        if (j + 1 < this.values.length && this.less(j, j + 1)) j++;
        if (!this.less(i, j)) break;
        this.exchange(i, j);
        i = j;
      }
    }
  
    less(i, j) {
      return this.values[i].priority < this.values[j].priority;
    }
  
    exchange(i, j) {
      [this.values[i], this.values[j]] = [this.values[j], this.values[i]];
      this.indices.set(this.values[i].index, i);
      this.indices.set(this.values[j].index, j);
    }
  
    getPriority(index) {
      const i = this.indices.get(index);
      return this.values[i].priority;
    }
  
    getMinIndex() {
      return this.values[0].index;
    }
  
    getMaxIndex() {
      let maxIndex = this.values[0].index;
      for (let i = 1; i < this.values.length; i++) {
        if (this.values[i].index > maxIndex) {
          maxIndex = this.values[i].index;
        }
      }
      return maxIndex;
    }
  }
  
  // Ejemplo de uso
  const pq = new IndexedPriorityQueue();
  pq.insert(1, 5);
  pq.insert(2, 3);
  pq.insert(3, 7);
  pq.insert(4, 1);
  
  console.log(pq.getMinIndex()); // Imprime 4
  console.log(pq.getPriority(2)); // Imprime 3
  
  pq.changePriority(3, 2);
  console.log(pq.getMinIndex()); // Imprime 3
  
  pq.delete(4);
  console.log(pq.getMinIndex()); // Imprime 2
  