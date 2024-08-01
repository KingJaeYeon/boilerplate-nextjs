export default function swapArray<T>(
  array: T[],
  moveIndex: number,
  toIndex: number,
): T[] {
  const newArray = array.slice(); // Create a shallow copy of the array
  const item = newArray.splice(moveIndex, 1)[0]; // Remove the item from the original position
  newArray.splice(toIndex, 0, item); // Insert the item at the new position
  return newArray;
}
