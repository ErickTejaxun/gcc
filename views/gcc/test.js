importar ("/ruta/archivo_importado.gcc"); 

clase miClase{
    Entero Identificador; 
    //si se desea inicializar una variable 
    Entero numero = 10;
    publico entero atributo1 = 0;
    publico caracter atributo_cadena[25] = "este es un ejemplo de cadena"; 
    //este es un comentario
    /* Este es un comentario
    que lleva mas de una linea*/
    
    resultado_op = 5 - (9 + cualquiervariable)*14;
    miClase(entero param1, cadena param2){         
        este.atributo1 = param1;         
        este.atributo_cadena = param2;     
    } 

    //ACEESO A POSICIONES DENTRO DEL ARREGLO
    arreglo[4][3] = 1; 
 
    caracter cadena[10]; 
    //Esta asignación solamente será válida con los arreglos de caracteres. 
    cadena = "mi cadena"; 

    //TAMANIO DE UN VECTOR
    caracter cadena[10]; cadena = "mi cadena"; 
 
    imprimir(concatenar("salida ", cadena.tamanio)); 
    //salida: 10 
    //asignación de un nulo con la palabra reservada Nada. 
    Caracter persona[20] = Nada; 
    Caracter letra = Nada; 
 
    //asignación de un nulo con el valor {'\0'} 
    Caracter persona_2[10] = {"\0"}; 
    Caracter letra_2 = {"\0"}; 

    /* OBJETOS */
    Nombre_clase Nombre_instancia = nuevo Nombre_clase();
    Persona Jorge; 
    //en este punto se llama al constructor de persona 
    Jorge = nuevo Persona(); 
 
    //también es posible realizarlo en una misma línea 
    Persona Carlos = nuevo Persona(); 
 
    //Esta sería la forma en caso que la clase persona tuviera un constructor con un parámetro entero. 
    Persona Carlos = nuevo Persona(15);
    //ACCESO A PROCEDIMIENTOS
    Persona per = nuevo Persona(); 
    per.nombre = "miNombre"; 
    carlos.setEdad(22); 
    Entero var1; 
    //si se desea inicializar una variable 
    Caracter var2[15] = concatenar( concatenar( "cadena", "a"),"concatenar"); 

    caracter cadena[20]; 
    Entero miNumero = 10; 
 
    cadena = "convertir a cadena";   
 
    Concatena(cadena, convertirAcadena(miNumero) ); 
    //cadena = "convertir a cadena 10".

    Decimal miDecimal = 0.1; 
 
    Concatena(cadena,"Mi número es #E",miNumero); 
    //cadena = “Mi número es 1”. 
    Concatena(cadena,"Mi bandera es #B",miBandera); 
    //cadena = “Mi bandera es true”. 
    Concatena(cadena,"Mi número es #D",miDecimal); 
    //cadena = “Mi número es 0.1”. 
    caracter cadena[20]; 
    Entero miNumero = 1; 
    Booleano miBandera = true; 

    //DECLARACION DE arreglos
    Decimal arreglo[4][3]; 
    caracter cadena[10];
    //ASIGNAR POSICION DENTRO DE ARREGLO
    arreglo[4][3] = 1; 
 
    caracter cadena[10]; 
    //Esta asignación solamente será válida con los arreglos de caracteres. 
    cadena = "mi cadena"; 

    caracter cadena[10]; 
    cadena = "mi cadena"; 
    imprimir(concatenar("salida", cadena.tamanio)); 
    //salida: 10 

    Entero FuncionLlamada2(funcion param) 
    {      
        param = param + 500;  
        imprimir (concatenar("parametro: ", convertiracadena(param)));      
         
        retorno param;
    }
    Principal()
    {     
        Llamador(obtenerDireccion(FuncionLlamada)); 
        //la salida de esta llamada seria 1995      
        Llamador(obtenerDireccion(FuncionLlamada2)); 
        //la salida de esta llamada seria 2495 
        
    } 

    principal()
    {     
        imprimir ("/****inicializando variables****/");
        //se colocan los valores de op1 y op2     
        inicia_vars();      
        imprimir (concatenar("valor de la suma :", convertirAcadena(suma(este.op1, este.op2)))); 
    }


    //DECLARACION DE ARREGLOS
    Decimal arreglo[4][3] = {{1.1,2.1,3.1},{4.2,5.2,6.2},{7.2,8.2,9.2},{10.3,11.3,12.3}};
    arreglo[4][3] = 1;

    //ESTRUCTURAS
    Estructura Persona [ 
        Caracter nombre[25]; 
        Caracter genero[20] = Nada; // M -> masculino, F -> Femenino 
        Entero edad; 
        Entero posicion = 0; //se agrega que apunta a otra estructura 
        Persona amigo; 
    ];
    
    //Se reserva el espacio de memoria para la estructura persona 
    Persona usuario; 
    //Inicialización de la estructura usuario 
    Usuario.nombre = "Daniel";
    Usuario.genero = 'm'; 
    Usuario.edad = 23; 
    Usuario.posicion = 0; 

    Persona usuario_2; 
    //cambio de valor de una variable dentro de la estructura 
    usuario.nombre = "Maria Fernanda"; 
    usuario.edad = 25; 
    usuario.amigo = usuario_2; 
    //error para cambia variable sin inicialización  
    usuario_4.nombre = "Mario"; //esto es un error, no fue inicializado usuario_4 

    Entero ubicacion = 0;//ubicación guarda el valor de 0.   
    Caracter cad = "hola mundo"; 
    //PUNTEROSS
    crearPuntero(Entero, direccion) = obtenerDireccion(ubicacion); 
    //dirección almacenará la posición de memoria de ubicación. 
 
    crearPuntero(Caracter, c) = obtenerDireccion(cad);  
    //cadena apuntará a la dirección de memoria del caracter 'h'
    crearPuntero(persona, a) = Nada; 
    //puntero de tipo persona que apunta a nulo. 
 
    crearPuntero(persona, a) = reservarMemoria(conserguirTamanio(persona)); 

    //ASIGNACION DE UN VALOR A UN ELEMENTO DE UNA ESTRUCTURA TIPO PUNTERO
    //cambio de valor de una variable dentro de la estructura 
    crearPuntero(persona, usuario) = reservarMemoria (conserguirTamanio (persona)); 
    
    Usuario->nombre = nuevo d(); 
    destruirPuntero(Id1);
    //cadena de caracteres  
    crearPuntero(caracter, cad) =  "HOLA MUNDO"; 
    //se ejecuta mientras no sea fin de cadena 
    repetir_Mientras (cad > '0' )
    {   
        imprimir (cad); 
        //imprime el caracter actual   
        cad++; 
        //pasa a la siguiente direccion de memoria. 
    } 
    destruirPuntero(cad); 

    Repetir_Mientras( Persona.estado != 2){     
        imprimir (concatenar("Estado :", convertirAcadena(Persona.estado)));     
        actualizar_estado(Persona); 
    }

    hacer{     
        b++;     
        a = b + c; 
    }mientras( a < 100);

    //CICLO DOBLE CONDICION
    Ciclo_doble_condicion ( bandera == true , cont < 10 ) 
    {    
        imprimir("estoy dentro del ciclo-x");    
        cont++;
    }
             
    //REPETIR HASTA que
    Repetir{      
        imprimir (concatenar("Posición :", convertirAcadena(Persona.posicionX)));     
        Persona.mover(); 
    }hasta_que( Persona.posicionX > 100); 

    //REPETIR_CONTACTO
    Repetir_contando (variable: cont; desde: 0; hasta: 10)
    {
        imprimir (convertirAcadena(cont));     
        // salida: 0,1,2,3,4,5,6,7,8,9
    }       

    Enciclar ciclo_1 
    { 
        Enciclar ciclo_2 
        { 
            romper; 
        } 
        romper; 
    } 

    //CICLO CONTADOR
    Contador(5+5*5){ 
        
    }

    //ENTRADA Y LECTURA DEL TECLADO
    Entero  Id_1;  
    Caracter Id_2[20]; 
    Caracter Id_3; 
    Booleano Id_4; 
    Decimal Id_5; 
 
    Leer_Teclado ( "Ingrese un número", Id_1); 
    Leer_Teclado ( "Ingrese una Cadena", Id_2); 
    Leer_Teclado ( "Ingrese un carácter", Id_3); 
    Leer_Teclado ( "Ingrese un True o false", Id_4); 
    Leer_Teclado ( "Ingrese un número decimal", Id_5); 
 
 

} 