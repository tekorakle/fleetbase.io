import { docs } from './.source/index.ts';

console.log('docs type:', typeof docs);
console.log('docs keys:', Object.keys(docs));
console.log('docs methods:', Object.getOwnPropertyNames(Object.getPrototypeOf(docs)));
console.log('has toFumadocsSource:', typeof docs.toFumadocsSource);
