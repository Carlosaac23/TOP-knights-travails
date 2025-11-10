import { tupleToString } from './helpers';

export default function knightsMoves(start, end) {
  // Each knight move is represented as a tuple [x, y]
  const queue = [{ position: start, path: [start] }];
  const visited = new Set();
  const movements = [
    [+2, +1],
    [+2, -1],
    [-2, +1],
    [-2, -1],
    [+1, +2],
    [+1, -2],
    [-1, +2],
    [-1, -2],
  ];

  while (queue.length > 0) {
    const currentPosition = queue[0].position;
    const currentPath = queue[0].path;

    if (tupleToString(currentPosition) === tupleToString(end)) {
      return currentPath;
    }

    for (const [dx, dy] of movements) {
      const newX = currentPosition[0] + dx;
      const newY = currentPosition[1] + dy;

      if (newX > 7 || newX < 0) {
        continue;
      }

      if (newY > 7 || newY < 0) {
        continue;
      }

      if (visited.has(tupleToString([newX, newY]))) {
        continue;
      }

      visited.add(tupleToString([newX, newY]));
      queue.push({
        position: [newX, newY],
        path: [...currentPath, [newX, newY]],
      });
    }

    queue.shift();
  }
}
