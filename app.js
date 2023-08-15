// function foo(){            function
//   return "test"

// }
// var abc=foo("Hello","world")
// console.log(abc)
// // 
// var xyz = "ghous"  ///  global
// function foo(){
//     var xyz = "smit"   /// local
//     xyz= "danyal"
//     console.log(xyz)
//      //return test
//   }
//   foo()
//   console.log(xyz)

  var xyz = "ghous"  ///  global
  var xyz = "smit"  
function foo(){
    xyz= "danyal"
    console.log(xyz)
     //return test
  }
  foo()
  console.log(xyz)