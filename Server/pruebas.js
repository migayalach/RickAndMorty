let data = [{ email: "miguel@gmail.com", password: "10mike" }, { email: "om", password: "10" }, { email: "a", password: "b" }];
const nombre = "miguel@gmail.com";
const clave= "10mike";

console.log(data);
let array = data.filter((element)=> element.email !== "a");
data = [...array];
console.log(data);