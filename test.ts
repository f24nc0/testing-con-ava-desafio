import test from "ava";
import {User, Product} from './index'

test("Testeo la clase User", (t) => {
  const user = new User("franco")
  user.addProduct({name:"zapatilla", price:500})
  t.is(user.name, "franco")
  t.deepEqual(user.products,[{name:"zapatilla", price:500}]) 
});
test("Testeo la clase Product y sus métodos", (t) => {
  const product = new Product("zapatilla", 500)
  t.is(product.name, "zapatilla")
  t.is(product.price, 500)
});
