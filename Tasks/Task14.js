function inArray(text, arr) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == text) 
      return true;
    }
    return false;
  }
   
  console.log(inArray('elem_two', ['elem_one', 'elem_two', 'elem_three']));