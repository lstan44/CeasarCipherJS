const isUpperCase = (c) => c === c.toUpperCase();

const shiftCipher = {
  encrypt(text, key){
    var cipherText = ""
    for(var i = 0; i < text.length; i++){ 
      var letterCode;
      if(text[i] == " "){
        cipherText += " ";
      }
      else if(! isUpperCase(text[i])){
        letterCode = text.charCodeAt(i)- 97;
        cipherText += String.fromCharCode( ( (letterCode + key) % 26 ) + 97);
      }
      else{
        letterCode = text.charCodeAt(i)- 65;
        cipherText += String.fromCharCode( ( (letterCode + key) % 26 ) + 65);
      }
    }
    return cipherText;
  },

  decrypt(text, key){
    var decryptedText = ""
    for(var i = 0; i < text.length; i++){
      var letterCode;
      if(text[i] == " "){
        decryptedText += " ";
      }
      else if(! isUpperCase(text[i])){
        letterCode = text.charCodeAt(i) - 97;
        decryptedText += String.fromCharCode( (26 + ( (letterCode - key) %26 ) )%26 + 97); 
      }
      else{
        letterCode = text.charCodeAt(i) - 65;
        decryptedText += String.fromCharCode( (26 + ( (letterCode - key) %26 ) )%26 + 65); 
      }
    }
    return decryptedText;
  }
};

let name = "Stanley Lalanne";
let key = 100000;
let encyptedName = shiftCipher.encrypt(name,key);
let decryptedName = shiftCipher.decrypt(encyptedName,key);

console.log(encyptedName);
console.log(decryptedName);
