(function(){
	// The sprite to replace the Harpy with
	var replaceWith = ig.Image.cache["media/graphics/monsters/monster_eagle_scaled@4x.png"];
	var replaceWithPath = "media/graphics/monsters/monster_eagle_scaled@4x.png";
	var harpyPath = "media/graphics/monsters/monster_harpy_scaled@4x.png";
	// The new reference for the harpy sprite
	if (ig.Image.cache[harpyPath]){
		ig.Image.cache[harpyPath] = replaceWith;
		ig.Image.cache[harpyPath].path = replaceWithPath;
	}
	//
	console.log("'Harpy Remover' mod installed!", ig.Image.cache[harpyPath]);
})();