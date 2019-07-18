Array.prototype.myEach = function(cd){
  for (let i = 0; i < this.length; i++){
    cd(this[i]);
  }
}

function myEach(arr, cd){
  for (let i = 0; i < arr.length; i++){
    cd(arr[i]);

  }
}


Array.prototype.myMap = function(cd){
  let newArr = [];
    for (let i = 0; i < this.length; i++){
      if (cd(this[i]) != undefined && cd(this[i])!= null){
        newArr.push(cd(this[i]));
      }
    }
    return newArr;
  }

function myMap(arr, cd){
  let newArr = [];
  for (let i = 0; i < arr.length; i++){
    newArr.push(cd(arr[i]));
  }
  return newArr;
}


Array.prototype.myFilter = function(cd){
  let result = [];
  for (let i = 0; i < this.length; i++){
    if (cd(this[i])){
      result.push(this[i]);
    }
  }
  return result;
}

function myFilter(arr, cd){
  let result = [];
    for (let i = 0; i < arr.length; i++){
    if (cd(arr[i])){
      result.push(arr[i]);
    }
  }
  return result;
}


Array.prototype.mySome = function(cd){
  for (let i = 0; i < this.length; i++){
    if (cd(this[i])){
      return true;
    }
  }
  return false;
}

function mySome(arr, cd){
  for (let i = 0; i < arr.length; i++){
    if (cd(arr[i])){
      return true;
    }
  }
  return false;
}


Array.prototype.myEvery = function(cd){
  for (let i = 0; i < this.length; i++){
    if (!cd(this[i])){
      return false;
    }
  }
  return true;
}


function myEvery(arr, cd){
  for (let i = 0; i < arr.length; i++){
    if (!cd(arr[i])){
      return false;
    }
  }
  return true;
}


Array.prototype.myReduce = function(cd, res){
  for (let i = 0; i < this.length; i++){
    res = cd(this[i], res);
  }
  return res;
}

function myReduce(arr, cd, res){
  for (let i = 0; i < arr.length; i++){
    res = cd(arr[i], res);
  }
  return res;
}


Array.prototype.myIncludes = function (val){
  for (let i = 0; i < this.length; i++){
    if (this[i] === val){
      return true;
    }
  }
  return false;
}

function myIncludes(arr, val){
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === val){
      return true;
    }
  }
  return false;
}


Array.prototype.myIndexOf = function (val){
  for (let i = 0; i < this.length; i++){
    if (this[i] === val){
      return i;
    }
  }
  return -1;
}

function myIndexOf(arr, val){
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === val){
      return i;
    }
  }
  return -1;
}


Array.prototype.myPush = function(val){
  this.splice(this.length, 0, val);
}

function myPush(arr, val){
  arr.splice(arr.length, 0, val);
}


Array.prototype.myLastIndexOf = function (val){
  for (let i = this.length-1; i >= 0; i--){
    if (this[i] === val){
      return i;
    }
  }
  return -1;
}

function myLastIndexOf(arr, val){
  for (let i = arr.length-1; i >= 0; i--){
    if (arr[i] === val){
      return i;
    }
  }
  return -1;
}


Object.grabKeys = function(object){
  let keyArr = [];
  for (key in object){
      keyArr.push(key);
  }
  return keyArr;
}

function grabKeys(objects){
  let keyArr = [];
  for (key in objects){
    if (objects.hasOwnProperty(key)){
      keyArr.push(key);
    }
  }
  return keyArr;
}


Object.grabValues = function(object){
  let valArr = [];
  for (value in object){
    if (object.hasOwnProperty(value)){
      valArr.push(object[value]);
    }
  }
  return valArr;
}

function grabValues(objects){
  let valArr = [];
  for (value in objects){
    let val = objects[value];
    valArr.push(val);
  }
  return valArr;
}
