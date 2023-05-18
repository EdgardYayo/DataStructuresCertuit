// Función para construir un Suffix Array dado un texto
function buildSuffixArray(text) {
    const suffixes = [];
    
    // Generar todos los sufijos del texto
    for (let i = 0; i < text.length; i++) {
      suffixes.push(text.slice(i));
    }
    
    // Ordenar los sufijos lexicográficamente
    suffixes.sort();
    
    // Construir el Suffix Array a partir de los índices de inicio de cada sufijo en el texto original
    const suffixArray = suffixes.map(suffix => text.length - suffix.length);
    
    return suffixArray;
  }
  
  // Función para encontrar la Longest Repeated Substring (LRS)
  function findLRS(text) {
    // Construir el Suffix Array para el texto dado
    const suffixArray = buildSuffixArray(text);
    
    let lrs = ''; // Longest Repeated Substring
    let maxLength = 0; // Longitud máxima del LRS encontrada hasta ahora
    
    // Recorrer el Suffix Array
    for (let i = 0; i < text.length - 1; i++) {
      const suffix1 = text.slice(suffixArray[i]); // Sufijo actual
      const suffix2 = text.slice(suffixArray[i + 1]); // Sufijo siguiente
      
      // Obtener la longitud del prefijo común entre los dos sufijos
      const length = getCommonPrefixLength(suffix1, suffix2);
      
      // Actualizar el LRS si se encuentra un prefijo común más largo
      if (length > maxLength) {
        lrs = suffix1.slice(0, length);
        maxLength = length;
      }
    }
    
    return lrs; // Devolver el LRS encontrado
  }
  
  // Función para obtener la longitud del prefijo común entre dos cadenas
  function getCommonPrefixLength(str1, str2) {
    let length = 0;
    const minLength = Math.min(str1.length, str2.length);
    
    // Recorrer las cadenas hasta encontrar caracteres diferentes
    for (let i = 0; i < minLength; i++) {
      if (str1[i] === str2[i]) {
        length++;
      } else {
        break;
      }
    }
    
    return length; // Devolver la longitud del prefijo común
  }
  
  // Ejemplo de uso
  const text = 'ABRACADABRA';
  
  // Encontrar el Longest Repeated Substring (LRS) en el texto
  const lrs = findLRS(text);
  
  // Imprimir el LRS encontrado
  console.log(lrs); // Imprime 'ABRA'
  