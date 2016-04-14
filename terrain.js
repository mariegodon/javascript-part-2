function Tile(x, y) {
    this.x = x;
    this.y = y;
    var randomNumberGen = (Math.floor(Math.random() * 3)) + 1;
    this.height = randomNumberGen;
    this.type = function(randomNumber) {
        switch (randomNumber) {
            case 1:
                return "grass";
                break;
            case 2:
                return "rocks";
                break;
            default:
                return "water";
        }
    }(randomNumberGen);
    this.condition = function(randomNumber) {
        switch (randomNumber) {
            case 1:
                return "burning";
                break;
            case 2:
                return "normal";
                break;
            default:
                return "frozen";
        }
    }(randomNumberGen);
}

Tile.prototype = {
    freeze: function() {
        if (this.condition === "burning") {
            this.condition = "normal";
        }
        else if (this.condition === "normal") {
            this.condition = "frozen";
        }
        else if (this.condition === "frozen") {
            this.height += 1;
        }
        return this;
    },
    burn: function() {
        if (this.condition === "burning") {
            if (this.height === 0) {
                this.height = 0;
            }
            else if (this.height > 0) {
                this.height -= 1;
            }
        }
        else if (this.condition === "normal") {
            this.condition = "burning";
        }
        else if (this.condition === "frozen") {
            this.condition = "normal";
        }
        return this;
    }
}

//create a map of tiles 20 by 20 with Tile creater function
function createTileMap(Tile) {
    var tileMap = [];
    for (var x = 0; x < 20; x++) {
        var tileMapRow = [];
        for (var y = 0; y < 20; y++) {
            var newTile = new Tile(x, y);
            tileMapRow.push(newTile);
        }
        tileMap.push(tileMapRow);
    }
    return tileMap;
}

var originalTileMap = createTileMap(Tile);
console.log(originalTileMap);

//transform an existing tile map into a map of icons
//icons are the height values
function iconMap(oldMap) {
    var iconMap = [];
    for (var x = 0; x < 20; x++) {
        var iconMapRow = [];
        for (var y = 0; y < 20; y++) {
            var currentTile = oldMap[x][y];
            iconMapRow.push(currentTile.height);
        }
        iconMap.push(iconMapRow);
    }
    return iconMap;
}

var iconMap = iconMap(originalTileMap);
console.log(iconMap);

//burn and freeze an existing tile map using Tile methods
//this will transform the heights
//output a new, burnt and frozen, icon map
function burntFrozenMap(oldMap) {
    var burntFrozenMap = [];
    for (var x = 0; x < 20; x++) {
        var burntFrozenRow = [];
        for (var y = 0; y < 20; y++) {
            var randomNumberGen = (Math.floor(Math.random() * 3)) + 1;
            var currentTile = oldMap[x][y];
            if (randomNumberGen === 1) {
                burntFrozenRow.push(((currentTile.freeze()).height));
            }
            else if (randomNumberGen === 2) {
                burntFrozenRow.push(((currentTile.burn()).height));
            }
            else {
                burntFrozenRow.push(currentTile.height);
            }
        }
        burntFrozenMap.push(burntFrozenRow);
    }
    return burntFrozenMap;
}

var newMap = burntFrozenMap(originalTileMap);
console.log(newMap);

//create a new map, display it immediatly as icon map
//    function iconMap(Tile) {
//        var iconMap = [];
//        for (var x = 0; x < 20; x++) {
//            var iconMapRow = [];
//            for (var y = 0; y < 20; y++) {
//                var newIconTile = new Tile(x, y);
//                iconMapRow.push(newIconTile.height);
//            }
//            iconMap.push(iconMapRow);
//        }
//        return iconMap;
//    }
//
//    var newIconMap = iconMap(Tile);
//    console.log(newIconMap);
