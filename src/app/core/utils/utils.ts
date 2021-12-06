function updateItemInList<T>(payload: {id: number, prop: string}, array: T[]): T[] {
    const { id, prop } = payload;
    const index = array.findIndex(item => item[prop] === id);
    const newItem = {
        ...array[index],
        isFavorite: !array[index]['isFavorite']
    };
    const newArray = array.slice();
    newArray[index] = newItem;
    return newArray;
  }

  export {
    updateItemInList
  }