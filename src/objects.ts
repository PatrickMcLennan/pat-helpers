export function deepClone(object: object): object {
  let clonedObject;

  if (object == null || typeof object !== "object") {
    return object;
  }

  if (object instanceof Array) {
    clonedObject = [];
    for (let i in object) {
      clonedObject[i] = deepClone(object[i]);
    }
    return clonedObject;
  }

  if (object instanceof Date) {
    clonedObject = new Date();
    clonedObject.setDate(object.getDate());

    return clonedObject;
  }

  if (object instanceof Object) {
    clonedObject = {};

    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        clonedObject[key] = deepClone(object[key]);
      }
    }

    return clonedObject;
  }

  throw new Error("Object not cloned.");
}
