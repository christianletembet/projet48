bannissement(){
  let nb1 = 1;
  let nb2 = 0;
  let nbtours = 3;

  if(hash2 === hash1){
    nb1++;
  }
  else {
    nb2++;
  }

  if(hash3 === hash1){
    nb1++;
  }
  else {
    nb2++;
  }

  if(hash4 === hash1){
    nb1++;
  }
  else {
    nb2++;
  }

  if(hash5 === hash1){
    nb1++;
  }
  else {
    nb2++;
  }

console.log(nb1);
console.log(nb2);

 }

 bannissement();
