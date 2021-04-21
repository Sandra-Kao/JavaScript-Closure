console.clear();

console.log("-------01--------");
function printConsole() {
  var arr = [];

  for (var i = 0; i < 3; i++) {
    arr.push(function () {
      console.log(i);
    });
  }
  return arr;
}

const fu = printConsole();
fu[0](); // return 3 not 0
fu[1](); // return 3 not 1
fu[2](); // return 3 not 2

console.log("-------02--------");

function printConsole2() {
  var arr = [];

  for (var i = 0; i < 3; i++) {
    arr.push(
      (function (y) {
        return function () {
          console.log(y);
        };
      })(i)
    );
  }
  return arr;
}

const fu2 = printConsole2();
fu2[0](); // return  0
fu2[1](); // return  1
fu2[2](); // return  2
