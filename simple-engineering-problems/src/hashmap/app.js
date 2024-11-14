const HashMap = require('./HashMap');

const map = new HashMap();

map.put("name", "John");
map.put("age", 30);

console.log("get name:", map.get("name"));

console.log("has age:", map.has("age"));

console.log("size:", map.size());

map.delete("age");

console.log("size after remove age:", map.size());

map.clear();
console.log("size after clear", map.size());
