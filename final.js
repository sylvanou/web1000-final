//1 What are the four steps of mergesort?
/*A.
0. Recognize base case
1. Divide: break problem down during each call
2. Conquer: do work on each subset
3. Combine: solutions
 */

//2 Using Javascript, generate a random between 50 and 100.
// A.
console.log(Math.round(Math.random()* 50 + 50));

//3. Using Javascript, generate a random number between -100 and 100.
// A
console.log(Math.round(Math.random() * 100 - 100));

// 4. Write a coin flip function. It should return the string "heads" half the time
// and the string "tails" the other half
// A.
function coinFlip() {
    return ((Math.round(Math.random()) * 1) < 1) ? 'heads' : 'tails';
}
// coinFlip called 10x
for (let i = 0; i < 10; i++) {
    console.log(coinFlip());
}

// 5. Re-state the following expression without using negation:
//   !(10 > x)
// A. (10 <= x)

// 6. Re-state the following expression without using negation:
//   !(a > 10 && b <= 5)
// A. (a <= 10 || b > 5)

// 7. Re-state the following expression without repeating variable a:
//   (a && x <= 10) || (a && y < 0)
// A. (a || x <= 10 && y < 0)

// 8. Re-state the following expression without negations:
//   !( (a > 10) || (b > 10) || (c > 10) || (isAdmin) )
// A. (a <= 10) && (b <= 10) && (c <= 10) && (isAdmin)

// 9. Write a function which, given a 2-d array of strings, returns the concatenation of all the strings.
// A.
function twodconcat(arr) {
    let str = '';
    for(let i = 0; i < arr.length; i++){
        for(let r = 0; r < arr[1].length; r++){
            str+=arr[i][r]
        }
    }
    return str;
}
let arr = [['apple', 'bananas', 'mango'], ['pen', 'pineapple', 'avocado']];
console.log(twodconcat(arr))

// 10. Write a function which, given a 2-d array and another value x, returns true if x is present in the 2-d array, and false otherwise.
// A.
function containsElement(arr, x) {
    for(let i = 0; i < arr.length; i++){
        for(let r = 0; r < arr[1].length; r++){
            if(arr[i][r] === x){
                return true
            }
        }
    }
    return false;
}
console.log(containsElement(arr, 'pen')); // True


// 11. Write a function which, given an two sorted arrays of sizes m and n, returns a larger sorted array of size m+n. This function must work in O(m+n) time.
// A.
function larger(m,n){
    return `${m},${n}`; // Or return m+","+n;
}

// 12. Given the following edge list, draw the graph. Use MS Paint and include the file in your repo.

// ```javascript
// E = [[1,2], [2,3], [4,5], [2,4], [1,5]  ]
// ```

// 13. Given the following adjacency Matrix, determine whether the graph is directed or undirected and draw it.

// ```javascript
// M = [
//   [0,0,1,0,1],
//   [0,0,0,0,1],
//   [0,1,0,0,0],
//   [0,1,0,0,0],
//   [0,0,0,0,1],
// ]
// ```

// 14. For exercises 9 and 10, if you assume that n is the size of one side of the matrix, what is the time complexity (Big Oh) of the algorithms you wrote?
// A. 9 Is O(N^2) and 10 is also O(N^2)

// 15. What is the time complexity of the following function?
// A.  thugPop has a time complexity of O(N)

// ```javascript
//   function thugPop(arr){
//     var ret = [];                                    O(1)
//     for (var i === 0; i < arr.length; i++){          O(N2)
//       if (arr[i] % 15 == 0) ret.push('thugPop');     O(1)
//       else if (arr[i] % 5 == 0) ret.push('thug');    O(1)
//       else if (arr[i] %3 == 0 ) ret.push('pop');     O(1)
//       else ret.push(arr[i]);                         O(1)
//     }
//     return ret;                                      O(1)
//   }
// ```

// 16. What is the time complexity of the following function?
// A. thugify has a time complexity of 0(N^2)

// ```javascript
//   function thugify(schoolList){
//     return schoolList.map(function(schoolObj){               O(N)
//       var school = Object.assign({}, schoolObj);             O(1)
//       school.students.forEach(function(student){             O(N)
//         if (Math.random() > 0.5){
//           student.lastName += 'dogg';                        O(1)
//         }
//         else {
//           student.firstName = "lil' "+ student.firstName;    O(1)
//         }
//       });
//     });
//   }
// ```

// 17. What is the time complexity of the following function?
// A. countRepeats has a time complexity of O(N^2)

// ```javascript
//   function countRepeats(strArr){
//     var repeats = 0;                                                 0(1)
//     strArr.forEach(function(str, index){                             0(N)
//       var currentRepeats = strArr.filter(function(innerStr, idx){    0(N)
//         return (innerStr === str && index != idx)                    0(1)
//       });
//       if (currentRepeats.length > 0){                                
//         repeats++;                                                   0(1)
//       }
//     });
//     return repeats;                                                  0(1)
//   }
// ```

// 18. What are the main operations of a stack?
// A. LIFO The Last item added Into the stack will be the First one taken Out of the stack.
// Stack uses the push method to add an item to the back of the storage and uses the
// pop to remove the last item added into the storage.

// 19. What are the main operations of a queue?
// A. FIFO The First item added Into the queue will be the First one taken Out of the queue.
// Queue uses the enqueue method to add to the tail and push an item into the storage. The
// dequeue method is used to add to to the head and remove the first item added.

// 20. What is the runtime of bubblesort? How does it work?
// A. Bubblesort has a time complexity of O(n^2)
// 1. Bubblesort loops through a list comparing adjacent elements and swaps higher item towards the end 

// 21. Create a personal website and upload it so that it is accessible at yourdomain.fvi-grad.com.  
//     1. The website must have your name, contact information, skills, and at least two links to portfolio items you are hosting on fvi-grad.
//     2. The website must not be in a subdirectory of the document root. ie. It needs to be accessible by going to yourusername.fvi-grad.com/ without anything after the slash.
//     3. You can and should use a template
//     4. Include the link to your website in your answers document
// LINK: http://sumbac.fvi-grad.com/