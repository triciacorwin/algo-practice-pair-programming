// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }


// iterative using queue
const breadthFirstValues = (root) => {
  // todo
  if (!root) return [];
  const valArray = [];
  const queue = [ root ];
  
  while (queue.length > 0) {
    valArray.push(queue[0].val);
    if (queue[0].left) queue.push(queue[0].left);
    if (queue[0].right) queue.push(queue[0].right);
    queue.shift();
  }
  
  return valArray;
};

module.exports = {
  breadthFirstValues,
};
