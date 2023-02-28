class Ejercicio {
    ejerc1() {
        let num1 = Math.floor(Math.random() * 10)
        let num2 = Math.floor(Math.random() * 10)
        let r = 0
        console.log("1) Sumar dos numeros siempre cuando el primero sea mayor al segundo")
        console.log("Numero 1 : ", num1)
        console.log("Numero 2 : ", num2)
        if (num1 > num2) {
            r = num1 + num2
            console.log("El resultado es : " + r)
        } else {
            console.log("La suma no se puede realizar")
        }
    }

    ejerc2() {

        let num1 = Math.floor(Math.random() * 10)
        let num2 = Math.floor(Math.random() * 10)
        let resul = 0
        console.log("2) Realizar una operacion segun el operador(+,-,*,/,%) realizar la suma, resta, multiplicacion, division y reciduo")
        var mensajes = [
            "+",
            "-",
            "*",
            "/",
            "%",
        ];
        var numeroAleatorio = Math.floor(Math.random() * mensajes.length);
        switch (numeroAleatorio) {
            case 0:
                resul = num1 + num2
                console.log(num1, "+", num2, "=", resul)
                break
            case 1:
                resul = num1 - num2
                console.log(num1, "-", num2, "=", resul)
                break
            case 2:
                resul = num1 * num2
                console.log(num1, "*", num2, "=", resul)
                break
            case 3:
                resul = num1 / num2
                console.log(num1, "/", num2, "=", resul)
                break
            case 4:
                resul = num1 % num2
                console.log(num1, "%", num2, "=", resul)
                break
        }
    }


    ejerc3() {

        let num1 = Math.floor(Math.random() * 10)
        let num2 = Math.floor(Math.random() * 10)
        console.log("3) Presentar el mayor de dos numeros")
        console.log("Numero 1" + num1)
        console.log("Numero 2" + num2)
        if (num1 > num2) {
            console.log(num1 + " es mayor que " + num2)
        } else {
            if (num1 == num2) {
                console.log(num1 + " es igual " + num2)
            } else {
                console.log(num2 + " es mayor que " + num1)
            }

        }
    }

    ejerc4() {

        console.log("4) Dado un nombre presentarlo n veces ")
        var nombre = "ayrton"
        let n = Math.floor(Math.random() * 10)
        for (let index = 0; index < n; index++) {
            console.log(nombre)
        }


    }
    ejerc5() {

        console.log("5) Dado un valor de compra presentar el total considerando un 12% de iva")
        let num1 = Math.floor(Math.random() * 10)
        let resul = 0
        let Total = 0
        var compras = [
            "Tomates",
            "Huevos",
            "Papas",
            "Limones",
            "Cebolla",
            "Pollo",
            "Manzanas",
            "Peras"
        ];
        var numeroAleatorio = Math.floor(Math.random() * compras.length);
        switch (numeroAleatorio) {
            case 0:
                resul = num1 * 0.12
                Total = num1 + resul
                console.log(compras[0], "= $", num1, " Mas el iva el total es: ", Total)
                break
            case 1:
                resul = num1 * 0.12
                Total = num1 + resul
                console.log(compras[1], "= $", num1, " Mas el iva el total es: ", Total)
                break
            case 2:
                resul = num1 * 0.12
                Total = num1 + resul
                console.log(compras[2], "= $", num1, " Mas el iva el total es: ", Total)
                break
            case 3:
                resul = num1 * 0.12
                Total = num1 + resul
                console.log(compras[3], "= $", num1, " Mas el iva el total es: ", Total)
                break
            case 4:
                resul = num1 * 0.12
                Total = num1 + resul
                console.log(compras[4], "= $", num1, " Mas el iva el total es: ", Total)
                break
            case 5:
                resul = num1 * 0.12
                Total = num1 + resul
                console.log(compras[5], "= $", num1, " Mas el iva el total es: ", Total)
                break
            case 6:
                resul = num1 * 0.12
                Total = num1 + resul
                console.log(compras[6], "= $", num1, " Mas el iva el total es: ", Total)
                break
            case 7:
                resul = num1 * 0.12
                Total = num1 + resul
                console.log(compras[7], "= $", num1, " Mas el iva el total es: ", Total)
                break
        }

    }
    ejerc6() {

        console.log("6) Presentar 5 veces un nombre")
        let nombre="adriana"
        let c=0
        while(c<5){
            console.log(nombre)
            c++
       }
}

    ejerc7() {

        console.log("7) Presentar los numeros multiplos de 3 del 3 al 21")
        for (let i = 1; i < 22; i++) {
            if (i % 3 === 0) {
                console.log(i)
            }


        }

    }
    ejerc8() {

        console.log("8) Presentar los numeros multiplos de 3 del 21 al 3")
        for (let i = 21; i >= 3; i--) {
            if (i % 3 === 0) {
                console.log(i)
            }
        }


    }

    ejerc9() {

        console.log("9) Dados dos nombres indicar si son iguales o diferentes")
        let n1="AYrTon",n2="ayrton"
        if(n1.toLowerCase()==n2.toLowerCase()){
            console.log(n1 + " es igual a " + n2)
        }else{
            console.log(n1 + " es diferente " + n2)
        }
        

    }
    ejerc10() {

        console.log("10) Dado diez numeros en un arreglo presentar los que tengan menos de 5 caracteres")
        var num = [
            Math.floor(Math.random() * 1000),
            Math.floor(Math.random() * 100000),
            Math.floor(Math.random() * 10000),
            Math.floor(Math.random() * 10),
            Math.floor(Math.random() * 1000)
        ]
        console.log("Arreglo[")
        for (let i = 0; i < num.length; i++) {
            console.log(num[i])
        }
        console.log("]")
        console.log("Los numeros menores a 5 digitos son:")
        for (let i = 0; i < num.length; i++) {

            if (num[i].toString().length < 5) {

                console.log(num[i])
            }


        }

    }
    ejerc11() {
        console.log("11) Dado un arreglo presentar sus elementos")
        console.log("[ayrton,Elias,adriana,david,saul]")
        var nom = [
            "ayrton",
            "Elias",
            "adriana",
            "david",
            "saul"
        ]
        for (let i = 0; i < nom.length; i++) {
            console.log(nom[i])

        }
    }
    ejerc12() {

        console.log("12) Dado un arreglo de numeros presentar los menores a 10")

        var nombre = [
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 10),
            Math.floor(Math.random() * 10),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 10)
        ]
        console.log("Arreglo[")
        for (let i = 0; i < nombre.length; i++) {
            console.log(nombre[i])
        }
        console.log("]")
        console.log("Los numeros menores a 10 son:")
        for (let i = 0; i < nombre.length; i++) {

            if (nombre[i] < 10) {

                console.log(nombre[i])
            }


        }

    }
    ejerc13() {

        console.log("13) Dado un arreglo de numeros presentar los impares y al final la suma de los pares")
        let s = 0
        var nombre = [
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 10),
            Math.floor(Math.random() * 100)
        ]
        console.log("Arreglo[")
        for (let i = 0; i < nombre.length; i++) {
            console.log(nombre[i])
        }
        console.log("]")
        console.log("Los numeros impares son")
        for (let i = 0; i < nombre.length; i++) {
            if (nombre[i] % 2 !== 0) {
                console.log(nombre[i])
            } else {
                s = nombre[i] + s
            }

        }
        console.log("La suma de los pares es: " + s)

    }
    ejerc14() {

        console.log("14) Presentar el primero el medio y el ultimo valor de un arreglo")
        var n = [
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100)
        ]
        console.log("Arreglo[")
        for (let i = 0; i < n.length; i++) {
            console.log(n[i])
        }
        console.log("]")
        console.log("El primer elemento es : " + n[0])
        let medio = n[Math.floor(n.length / 2)]
        console.log("El elemento medio es : " + medio)
        console.log("El ultimo elemento es : " + n[n.length - 1])

    }
    ejerc15() {

        console.log("15)Calcular el vuelto de un a compra dado el costo y el pago")
        let costo = Math.floor(Math.random() * 10)
        let pago = Math.floor(Math.random() * 100)
        let vuel = 0
        if (costo < pago) {
            vuel = pago - costo
            console.log("Tu vuelto es de : $", vuel)
        } else {
            console.log("El Pago es insuficiente")
        }

    }
    ejerc16() {
        console.log("16) Presentar la tabla de multiplicar de cualquier numero del 1 al 12")
        let num = Math.floor(Math.random() * 10)
        let resul = 0
        console.log("Tabla de multiplicar del: " + num)
        for (let i = 1; i <= 12; i++) {
            resul = num * i
            console.log(num + "*" + i + "=" + resul)
        }

    }
    ejerc17() {
        console.log("17) Realizar la multiplicacion de dos numeros por medio de sumas sucesivas")
        let num1 = Math.floor(Math.random() * 10)
        let num2 = Math.floor(Math.random() * 10)
        let resul = 0
        let suma = 0
        console.log(num1 + " X " + num2)
        for (let i = 0; i < num2; i++) {
            suma = resul + num1
            console.log(resul + "+" + num1 + "=" + suma)
            resul = resul + num1
        }
        console.log("El resultado de " + num1 + " X " + num2 + " = " + suma)
    }
    ejerc18() {
        console.log("18)Realizar la division de dos numeros por medio de restas sucesivas")
        let num1 = Math.floor(Math.random() * 10) + 1
        let num2 = Math.floor(Math.random() * 10) + 1
     
        let c = 0
        if (num1 >= num2) {
            let acu = num1
            let acu1 = num1
            console.log(num1, "/", num2, ":")
            while (acu1 >0) {
                
                acu1 = acu1 - num2
                if(acu1>=0){
                    console.log(acu, "-", num2, "=", acu1)
                    acu = acu - num2
                    c = c + 1
                }
                
            }
            console.log("La division de: ", num1, "/", num2, "=", c," y su residuo es:",acu)
        } else {
            let acu = num2
            let acu1 = num2
            console.log(num2, "/", num1, ":")
            while (acu1 >0) {
                
                acu1 = acu1 - num1
                if(acu1>=0){
                console.log(acu, "-", num1, "=", acu1)
                acu = acu - num1
                c = c+ 1
                }
                
            }
            console.log("La division de: ", num2, "/", num1, "=", c," y su residuo es:",acu)
        }
    }
    ejerc19() {
        console.log("19)Calcular el factorial de un numero")
        let n = Math.floor(Math.random() * 10)
        let product = 1
        console.log("Los factoriales de " + n + " son: ")
        for (let i = n; i > 0; i--) {
            console.log(i)
            product = product * i
        }
        console.log("La multiplicacion de los factoriales es: " + product)
    }
    ejerc20() {
        console.log("20)Calcular el exponente de un numero")
        let n1 = Math.floor(Math.random() * 10)
        let ex = Math.floor(Math.random() * 6)
        let c = 1
        let product = 1
        console.log("Calcular " + n1 + "^" + ex)
        while (c <= ex) {
            product = product * n1
            c++

        }
        console.log(product)
    }
    ejerc21() {
        console.log("21) Calcular la serie de fibonacci dado un numero")
        let a = 0, b = 1, c = 1, cont = 3, n = Math.floor(Math.random() * 10)
        console.log("Serie de fibonacci dado un numero: " + n)
        console.log(a)
        console.log(b)
        console.log(c)
        while (cont < n) {
            a = b; b = c; c = a + b
            console.log(c)
            cont++
        }
    }
    ejerc22() {
        console.log("22) Dado un numero invertirlo")
        let n = Math.floor(Math.random() * 1000)
        console.log(n)
        let digito = 0
        console.log("El numero invertido es: ")
        while (n > 0) {
            digito = n % 10
            console.log(digito)
            n = Math.floor(n / 10)
        }
    }
    ejerc23() {
        console.log("23) Presentar los divisores de un numero")
        let n = Math.floor(Math.random() * 10)
        console.log("Los divisores de " + n + " son los siguientes: ")
        for (let i = 1; i <= n; i++) {
            if (n % i === 0) {
                console.log(i)
            }
        }
    }
    ejerc24() {
        console.log("24) Presentar si un numero es perfecto o no (Perfecto:cuando la suma de los divisores incluidos el 1 y excluido el propio numero dada igual al numero")
        let n = Math.floor(Math.random() * 10)
        let s = 0
        console.log("Los divisores de " + n + " son: ")
        for (let i = 1; i < n; i++) {
            if (n % i === 0) {
                s = s + i
                console.log(i)
            }
        }
        if (s == n) {
            console.log("Numero perfecto")
        } else {
            console.log("El numero no es perfecto")
        }
    }
    ejerc25(){
        console.log("25) Verfificar si un numero es primo o no(Primo cuando solo es divsivible para 1 y el propio numero, es decir no tenga divisores)")
        let num=Math.floor (Math.random() *50), i=1, c=0
        for (i=1;i<=num;i++){
            if (num%i==0){
                c=c+1
            }
        }
        if (c==2){
            console.log("El numero ", num, " es primo ")
        }else{
            console.log("El numero ", num, " no es primo ")
        }
    }

}
let ejer = new Ejercicio()
//ejer.ejerc1()
//ejer.ejerc2()
//ejer.ejerc3()
//ejer.ejerc4()
//ejer.ejerc5()
//ejer.ejerc6()
//ejer.ejerc7()
//ejer.ejerc8()
//ejer.ejerc9()
//ejer.ejerc10()
//ejer.ejerc11()
//ejer.ejerc12()
//ejer.ejerc13()
//ejer.ejerc14()
//ejer.ejerc15()
//ejer.ejerc16()
//ejer.ejerc17()
//ejer.ejerc18()
//ejer.ejerc19()
//ejer.ejerc20()
//ejer.ejerc21()
//ejer.ejerc22()
//ejer.ejerc23()
//ejer.ejerc24()
ejer.ejerc25()




