const recipes = { prop: 1};
function updateObjectWithKeyAndValue(object, key, value){ var newOb = Object.assign(recipes, { [key] : value}); return newOb}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){ Object.assign(recipes, { [key] : value}); return recipes}
