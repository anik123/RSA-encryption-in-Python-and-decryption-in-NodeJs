const NodeRSA = require('node-rsa');
var fs = require("fs");

function print(msg){
    console.log(msg)
}

const key = new NodeRSA({b: 1024});

/*const text = 'Hello RSA!';
const encrypted = key.encrypt(text, 'buffer');
console.log('encrypted: ', encrypted);
const decrypted = key.decrypt(encrypted, 'utf8');
console.log('decrypted: ', decrypted);*/

const publicDer = key.exportKey('pkcs8-public-pem');
const privateDer = key.exportKey('pkcs1-pem');

const text = 'Hello RSA!';

const publicKey = new NodeRSA(publicDer);
const priKey = new NodeRSA(privateDer);
//console.log(publicKey);

const encrypted = publicKey.encrypt(text, 'buffer');
const decrypt = priKey.decrypt(encrypted, 'utf8');

var contents = fs.readFileSync("/home/anik/Desktop/Tutorial-Multi Node/Code/encrypted.txt");
print(contents);

var fsPri = fs.readFileSync("/home/anik/Desktop/Tutorial-Multi Node/Code/privateKey.txt",'utf8');
print(fsPri);

var fsPub = fs.readFileSync("/home/anik/Desktop/Tutorial-Multi Node/Code/publicKey.txt",'utf8');
print(fsPub)

const testPri = new NodeRSA(fsPri);

print(testPri);

const decrypt1 = testPri.decrypt(contents, 'utf8');

print(decrypt1)

//console.log(publicDer);
//console.log(encrypted);
//console.log(decrypt);