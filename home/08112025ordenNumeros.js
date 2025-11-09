function ordenarNumeros(num1, num2, num3) {
    // Crear un array con los números
    let numeros = [num1, num2, num3];
    
    // Ordenar el array de mayor a menor
    numeros.sort((a, b) => b - a);
    
    // Retornar los números ordenados
    return numeros;
}

// Ejemplo de uso dinámico: pedir 3 valores (pueden ser números o letras) y procesarlos
function pedirValor(mensaje) {
    while (true) {
        let entrada = prompt(mensaje);
        if (entrada === null) {
            alert("Operación cancelada por el usuario.");
            return null;
        }
        entrada = entrada.trim();
        if (entrada === "") {
            alert("No se ingresó ningún valor. Intenta de nuevo.");
            continue;
        }
        return entrada;
    }
}

// Pedimos los tres valores (como cadenas) y determinamos si son numéricos o no
let v1 = pedirValor("Ingresa el número 1 (puede ser letra o número):");
if (v1 !== null) {
    let v2 = pedirValor("Ingresa el número 2 (puede ser letra o número):");
    if (v2 !== null) {
        let v3 = pedirValor("Ingresa el número 3 (puede ser letra o número):");
        if (v3 !== null) {
            // Determinar si los tres son valores numéricos
            const esNum1 = !Number.isNaN(Number(v1));
            const esNum2 = !Number.isNaN(Number(v2));
            const esNum3 = !Number.isNaN(Number(v3));
            const todosNumeros = esNum1 && esNum2 && esNum3;

            let valores;
            if (todosNumeros) {
                // Convertir a números y ordenar de mayor a menor
                valores = [Number(v1), Number(v2), Number(v3)];
                valores.sort((a, b) => b - a);

                // Contar repeticiones
                const counts = {};
                valores.forEach(x => { counts[x] = (counts[x] || 0) + 1; });
                const repeticiones = Object.entries(counts).map(([val, cnt]) => ({ val, cnt }));

                if (repeticiones.length === 1) {
                    // Todos iguales
                    alert("Los números son iguales.");
                } else if (repeticiones.some(r => r.cnt === 2)) {
                    // Hay exactamente dos iguales (o más en un caso raro)
                    const pares = repeticiones.filter(r => r.cnt >= 2);
                    // Mostrar cada par encontrado (normalmente será uno)
                    pares.forEach(p => {
                        alert('Los números "' + p.val + '" y "' + p.val + '" son iguales.');
                    });
                }

                console.log("Números ordenados de mayor a menor:", valores);
                alert("Números ordenados de mayor a menor: " + valores.join(", "));
                alert(
                    "Primer número (mayor): " + valores[0] +
                    "\nSegundo número: " + valores[1] +
                    "\nTercer número (menor): " + valores[2]
                );
            } else {
                // Al menos uno no es numérico: ordenar alfabéticamente (case-insensitive)
                valores = [v1, v2, v3];
                valores.sort((a, b) => a.toString().toLowerCase().localeCompare(b.toString().toLowerCase()));

                // Comprobación de igualdad entre cadenas
                const counts = {};
                valores.forEach(x => { const key = x.toString(); counts[key] = (counts[key] || 0) + 1; });
                const repeticiones = Object.entries(counts).map(([val, cnt]) => ({ val, cnt }));
                if (repeticiones.length === 1) {
                    alert("Los valores son iguales.");
                } else if (repeticiones.some(r => r.cnt === 2)) {
                    const pares = repeticiones.filter(r => r.cnt >= 2);
                    pares.forEach(p => {
                        alert('Los valores "' + p.val + '" y "' + p.val + '" son iguales.');
                    });
                }

                console.log("Valores ordenados alfabéticamente:", valores);
                alert("Valores ordenados (a -> z): " + valores.join(", "));
                alert(
                    "Primero: " + valores[0] +
                    "\nSegundo: " + valores[1] +
                    "\nTercero: " + valores[2]
                );
            }
        }
    }
}
