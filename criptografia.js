const forge = require('node-forge');

// 1. Gerar o par de chaves (pública e privada)
const keypair = forge.pki.rsa.generateKeyPair({ bits: 2048 });
const publicKey = forge.pki.publicKeyToPem(keypair.publicKey);
const privateKey = forge.pki.privateKeyToPem(keypair.privateKey);

console.log("Chave Pública:\n", publicKey);
console.log("Chave Privada:\n", privateKey);

// 2. Texto a ser criptografado
const textoOriginal = "Trabalho final da disciplina de Segurança da Informação, explicações e exemplos de Criptografia Simetrica, Criptografia Assimétria, Vulnerabilidades em aplicações web, está disponivel no arquivo 'exemplos.txt'.";

// 3. Criptografar com a chave pública
const encrypted = keypair.publicKey.encrypt(textoOriginal, 'RSA-OAEP');
console.log("Texto Criptografado (em base64):\n", forge.util.encode64(encrypted));

// 4. Descriptografar com a chave privada
const decrypted = keypair.privateKey.decrypt(encrypted, 'RSA-OAEP');
console.log("Texto Descriptografado:\n", decrypted);
