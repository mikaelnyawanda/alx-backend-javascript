import { queryAPI, weakMap } from './100-weak.js';

const endpoint = { protocol: 'http', name: 'getUsers' };

console.log(weakMap.get(endpoint)); // Initially undefined

queryAPI(endpoint);
console.log(weakMap.get(endpoint)); // 1

queryAPI(endpoint);
console.log(weakMap.get(endpoint)); // 2

queryAPI(endpoint);
queryAPI(endpoint);
queryAPI(endpoint);
console.log(weakMap.get(endpoint)); // 5

// The next query will throw an error
try {
  queryAPI(endpoint);
} catch (error) {
  console.log(error.message); // Endpoint load is high
}

