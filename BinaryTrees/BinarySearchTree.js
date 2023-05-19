class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    // Inserta un valor en el árbol
    insert(value) {
      const newNode = new Node(value);
  
      if (this.root === null) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    // Función auxiliar para insertar un nodo en el árbol
    insertNode(node, newNode) {
      if (newNode.value < node.value) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }
  
    // Realiza una búsqueda de un valor en el árbol
    search(value) {
      return this.searchNode(this.root, value);
    }
  
    // Función auxiliar para buscar un valor en el árbol
    searchNode(node, value) {
      if (node === null) {
        return false;
      }
  
      if (value < node.value) {
        return this.searchNode(node.left, value);
      } else if (value > node.value) {
        return this.searchNode(node.right, value);
      } else {
        return true;
      }
    }
  
    // Realiza un recorrido en orden (in-order traversal) del árbol
    inOrderTraversal(callback) {
      this.inOrderTraversalNode(this.root, callback);
    }
  
    // Función auxiliar para recorrer el árbol en orden
    inOrderTraversalNode(node, callback) {
      if (node !== null) {
        this.inOrderTraversalNode(node.left, callback);
        callback(node.value);
        this.inOrderTraversalNode(node.right, callback);
      }
    }
  }
  
  // Ejemplo de uso
  const bst = new BinarySearchTree();
  bst.insert(8);
  bst.insert(3);
  bst.insert(10);
  bst.insert(1);
  bst.insert(6);
  
  bst.inOrderTraversal(value => {
    console.log(value);
  });
  
  console.log(bst.search(6)); // Imprime true
  console.log(bst.search(12)); // Imprime false
  