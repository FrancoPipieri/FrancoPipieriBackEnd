// 1) Declarar una clase Usuario

// 2) Hacer que Usuario cuente con los siguientes atributos:
// nombre: String
// apellido: String
// libros: Object[]
// mascotas: String[]

// Los valores de los atributos se deberán cargar a través del constructor, al momento de crear las instancias.

// 3) Hacer que Usuario cuente con los siguientes métodos:
// getFullName(): String. Retorna el completo del usuario. Utilizar template strings.
// addMascota(String): void. Recibe un nombre de mascota y lo agrega al array de mascotas.
// countMascotas(): Number. Retorna la cantidad de mascotas que tiene el usuario.
// addBook(String, String): void. Recibe un string 'nombre' y un string 'autor' y debe agregar un objeto: { nombre: String, autor: String } al array de libros.
// getBookNames(): String[]. Retorna un array con sólo los nombres del array de libros del usuario.


class Usuario {

    constructor(nombre, apellido){
            this.nombre = nombre;
            this.apellido = apellido;
            this.libros = [];
            this.mascotas = [];
    };

    getFullName(){
        console.log(`Hola Mi Nombre es ${this.nombre} ${this.apellido}`)
    };

    addMascota( petname ){
        this.mascotas.push(petname)
    };

    countMascotas(){
        console.log(`Tiene: ${this.mascotas.length} mascotas`)
    };

    getMascotas(){
        console.log(`Sus animales son: ${this.mascotas}`)
    }
    addBook(titulo, autor){
        this.libros.push({nombre: titulo, autor: autor})
    };

    getBooksName(){
        console.log("Libros:")
        for(let titulo of this.libros){
            
            console.log(titulo.nombre)
        }

    };
    }

const usuario = new Usuario ("franco", "pipieri");

usuario.getFullName()
usuario.addMascota("perro")
usuario.addMascota("gato")
usuario.countMascotas()
usuario.getMascotas()
usuario.addBook("The Lord of the Rings", "J.R.R. Tolkien")
usuario.addBook("El Libro de los Caidos", "Steven Erikson")
usuario.getBooksName()