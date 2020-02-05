var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];

/* EJERCICIO 1 - ¿Cómo harías print/log de la edad de John?*/

for (var i=0;i<users.length;i++){
  if (users[i].name == "John"){
    console.log(users[i].age);
  }
}

/* EJERCICIO 2 - ¿Cómo harías print/log del nombre del primer objeto?*/

	console.log(users[0].name)

/* EJERCICIO 3 - ¿Cómo harías print/log del nombre y la edad de cada usuario utilizando un for loop? Tu output debería verse algo como esto

Michael - 37
John - 30
David - 27*/

for (var i=0;i<users.length;i++){

	console.log((users[i].name)+(users[i].age));

    }

/*

<!-- Respuesta 1 -->
OUTPUT: 30

<!-- Respuesta 2 -->
OUTPUT: "Michael"

<!-- Respuesta 3 -->
OUTPUT: 

Michael 37
John 30
David 27

*/