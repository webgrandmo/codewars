const friend = friends => {
  //your code here
  //Loop through array
  //Convert item each item to string
  //Check the length  each item
  //Return array with items 4 letter long
  
  return friends.filter( item => {
    return item.toString().length === 4;
  });
}

friend(["Ryan", "Kieran", "Mark"]);
friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]);
