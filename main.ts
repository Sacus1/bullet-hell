namespace SpriteKind {
    export const ProjEn = SpriteKind.create()
    export const Info = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.ProjEn, SpriteKind.Player, function (sprite, otherSprite) {
    Vie_1 = 1
})
function MouvementBoss () {
    if (Math.round(Temps) == 15) {
        myEnemy.setVelocity(-50, 5)
    }
    if (Math.round(Temps) == 17) {
        myEnemy.setVelocity(50, -5)
    }
    if (Math.round(Temps) == 20) {
        myEnemy.setVelocity(-50, 0)
    }
    if (Math.round(Temps) == 23) {
        myEnemy.setVelocity(50, -5)
    }
    if (Math.round(Temps) == 26) {
        myEnemy.setVelocity(-50, 5)
    }
    if (Math.round(Temps) == 28) {
        myEnemy.setVelocity(50, -5)
    }
}
info.onLifeZero(function () {
    game.over(false, effects.clouds)
})
let projectile2: Sprite = null
let Vie_1 = 0
let Temps = 0
let myEnemy: Sprite = null
scene.centerCameraAt(0, 0)
tiles.setTilemap(tiles.createTilemap(hex`0a000800040a0a0a0a0a0a0a0a050b0101010103020101090b0102030103010201090b0301010203030201090b0101030202030201090b0201020101030101090b01010101010301010906080808080808080807`, img`
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    `, [myTiles.transparency16,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.darkGroundNorthEast1,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundWest], TileScale.Sixteen))
info.setLife(10)
let mySprite = sprites.create(img`
    . . . . . f f f f . . . . . 
    . . . f f 5 5 5 5 f f . . . 
    . . f 5 5 5 5 5 5 5 5 f . . 
    . f 5 5 5 5 5 5 5 5 5 5 f . 
    . f 5 5 5 d b b d 5 5 5 f . 
    f 5 5 5 b 4 4 4 4 b 5 5 5 f 
    f 5 5 c c 4 4 4 4 c c 5 5 f 
    f b b f b f 4 4 f b f b b f 
    f b b 4 1 f d d f 1 4 b b f 
    . f b f d d d d d d f b f . 
    . f e f e 4 4 4 4 e f e f . 
    . e 4 f 6 9 9 9 9 6 f 4 e . 
    . 4 d c 9 9 9 9 9 9 c d 4 . 
    . 4 f b 3 b 3 b 3 b b f 4 . 
    . . f f 3 b 3 b 3 3 f f . . 
    . . . . f f b b f f . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(56, 55)
myEnemy = sprites.create(img`
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f1111111dbf......
    ......fd1111111ddf......
    ......fd111111dddf......
    ......fd111ddddddf......
    ......fd111ddddddf......
    ......fd1dddddddbf......
    ......fd1dfbddbbff......
    ......fbddfcdbbcf.......
    .....ffffccddbfff.......
    ....fcb1bbbfcffff.......
    ....f1b1dcffffffff......
    ....fdfdf..ffffffffff...
    .....f.f.....ffffff.....
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
myEnemy.setPosition(80, 5)
controller.moveSprite(mySprite, 100, 100)
Temps = 0
let index = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Info)
index.setPosition(148, 4)
game.onUpdateInterval(2000, function () {
    if (Vie_1) {
        Vie_1 = 0
        info.changeLifeBy(-1)
    }
})
game.onUpdateInterval(100, function () {
    index.say(convertToText(Math.round(Temps)))
    Temps += 0.1
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . 
        . 2 2 2 . 
        . 2 . 2 . 
        . 2 2 2 . 
        . . . . . 
        `, myEnemy, randint(-100, 100), randint(0, 100))
    projectile2.setKind(SpriteKind.ProjEn)
    if (Temps > 10) {
        projectile2 = sprites.createProjectileFromSprite(img`
            . . . . . 
            . 2 2 2 . 
            . 2 5 2 . 
            . 2 2 2 . 
            . . . . . 
            `, myEnemy, randint(-100, 100), randint(0, 100))
        projectile2.setKind(SpriteKind.ProjEn)
    }
    if (Temps > 15) {
        MouvementBoss()
    }
    if (Temps > 30) {
        game.over(true)
    }
})
