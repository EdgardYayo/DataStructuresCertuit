class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

// El arbol AVL es un tipo de Binary Balanced Search Tree (BBST)
class AVLTree {
    constructor() {
        this.root = null;
    }

    // Obtiene la altura de un nodo
    getHeight(node) {
        if (node === null) {
            return 0;
        }
        return node.height;
    }

    // Obtiene el factor de equilibrio de un nodo
    getBalanceFactor(node) {
        if (node === null) {
            return 0;
        }
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    // Realiza una rotación hacia la derecha sobre un nodo
    rotateRight(y) {
        const x = y.left;
        const T2 = x.right;

        // Realiza la rotación
        x.right = y;
        y.left = T2;

        // Actualiza las alturas
        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;

        return x;
    }

    // Realiza una rotación hacia la izquierda sobre un nodo
    rotateLeft(x) {
        const y = x.right;
        const T2 = y.left;

        // Realiza la rotación
        y.left = x;
        x.right = T2;

        // Actualiza las alturas
        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;

        return y;
    }

    // Inserta un valor en el árbol AVL
    insert(value) {
        this.root = this.insertNode(this.root, value);
    }

    // Función auxiliar para insertar un nodo en el árbol AVL
    insertNode(node, value) {
        if (node === null) {
            return new Node(value);
        }

        if (value < node.value) {
            node.left = this.insertNode(node.left, value);
        } else if (value > node.value) {
            node.right = this.insertNode(node.right, value);
        } else {
            return node; // No se permiten valores duplicados
        }

        // Actualiza la altura del nodo actual
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

        // Realiza el balanceo del árbol si es necesario
        const balanceFactor = this.getBalanceFactor(node);
        if (balanceFactor > 1 && value < node.left.value) {
            // Rotación hacia la derecha
            return this.rotateRight(node);
        }
        if (balanceFactor < -1 && value > node.right.value) {
            // Rotación hacia la izquierda
            return this.rotateLeft(node);
        }
        if (balanceFactor > 1 && value > node.left.value) {
            // Rotación izquierda-derecha
            node.left = this.rotateLeft(node.left);
            return this.rotateRight(node);
        }
        if (balanceFactor < -1 && value < node.right.value) {
            // Rotación derecha-izquierda
            node.right = this.rotateRight(node.right);
            return this.rotateLeft(node);
        }

        return node;
    }

    // Realiza un recorrido en orden (in-order traversal) del árbol AVL
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
const avl = new AVLTree();
avl.insert(10);
avl.insert(20);
avl.insert(30);
avl.insert(40);
avl.insert(50);

avl.inOrderTraversal(value => {
    console.log(value);
});

/* Resultado del recorrido en orden:
10
20
30
40
50
*/
