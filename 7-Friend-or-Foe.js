const friend = friends => {
  //your code here
  //Loop through array
  //Check the length  each item
  //Return array with items 4 letter long
   return friends.filter( item => item.length === 4);
}

friend(["Ryan", "Kieran", "Mark"]);
friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]);
