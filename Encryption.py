from Crypto.Cipher import PKCS1_OAEP
from Crypto.PublicKey import RSA

key = RSA.generate(1024)
privatekey = key.exportKey()
publickey = key.publickey().exportKey()

with open("publicKey.txt", "w") as pb: 
	pb.write(publickey)
	
with open("privateKey.txt", "w") as pb: 
	pb.write(privatekey)

#print privatekey
#print publickey

privKeyObj = RSA.importKey(privatekey)
pubKeyObj = RSA.importKey(publickey)

cipher = PKCS1_OAEP.new(pubKeyObj)

msg = "bangladesh"

emsg =  cipher.encrypt(msg.encode())

plain = PKCS1_OAEP.new(privKeyObj)

plainText = plain.decrypt(emsg).decode()

with open("encrypted.txt", "w") as pb: 
	pb.write(emsg)

print emsg
print plainText
