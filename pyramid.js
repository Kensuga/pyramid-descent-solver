let target = 720;

let pyramid = [[2], [4, 3], [3, 2, 6], [2, 9, 5, 2], [10, 5, 2, 15, 5]];

class Node {
  constructor(data, array, index, direction, row) {
    if (index[0] < array.length - 1) {
      this.data = data;
      this.direction = direction;
      this.row = row;
      this.size = array.length;
      this.l = new Node(
        array[index[0] + 1][index[1]],
        array,
        [index[0] + 1, index[1]],
        "left",
        this.row + 1
      );

      this.r = new Node(
        array[index[0] + 1][index[1] + 1],
        array,
        [index[0] + 1, index[1] + 1],
        "right",
        this.row + 1
      );
    } else {
      this.data = data;
      this.direction = direction;
      this.row = row;
      this.size = array.length;
    }
  }
}

let taco = new Node(pyramid[0][0], pyramid, [0, 0], "root", 0);

console.log(taco);

// Target: 720
//      2
//     4,3
//    3,2,6
//   2,9,5,2
// 10,5,2,15,5
