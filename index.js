const recipes = {};
function updateObjectWithKeyAndValue(object, key, value){ var newOb = Object.assign(recipes, object, { [key] : value}); return newOb}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){ Object.assign(object, { [key] : value}); return object}
