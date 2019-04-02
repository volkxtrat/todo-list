export function getSortedKeysItemOrder(object) {
  return getSortedKeysByObject(object, "itemOrder")
}

export function getSortedKeysByObject(object, item) {
  return Object.keys(object).sort((a, b) => {
    return object[a][item] > object[b][item]
      ? 1
      : object[a][item] < object[b][item]
      ? -1
      : null;
  });
}

export function getSortedObjectByKeys(object, keys, item) {
  keys.forEach((id, index) => {
    if (object[id][item] !== index) {
      object[id][item] = index;
    }
  });
  return object;
}

export function getProjectsName(projects) {
  return Object.keys(projects).map(key => projects[key].name);
}

export function uniqueId() {
  return Math.random()
    .toString(36)
    .substr(2, 16);
}
