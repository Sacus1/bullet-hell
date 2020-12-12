namespace SpriteKind {
    export const ProjEn = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.ProjEn, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    projectile2.destroy()
})
info.onLifeZero(function () {
    game.over(false, effects.clouds)
})
let projectile2: Sprite = null
scene.centerCameraAt(0, 0)
tiles.setTilemap(tiles.createTilemap(hex`1000100001010101010101010101010101010101010202020202020202020202020202010102010101010101010101010101020101020102020202020202020202010201010201020101010101010101020102010102010201020202020202010201020101020102010201010101020102010201010201020102010202010201020102010102010201020102020102010201020101020102010201010101020102010201010201020102020202020201020102010102010201010101010101010201020101020102020202020202020202010201010201010101010101010101010102010102020202020202020202020202020101010101010101010101010101010101`, img`
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
    `, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tileGrass1], TileScale.Sixteen))
info.setLife(20)
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
mySprite.setPosition(4, 50)
let myEnemy = sprites.create(img`
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
myEnemy.setPosition(132, 120)
controller.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
game.onUpdateInterval(500, function () {
    console.logValue("Mio", mySprite.y + mySprite.x)
    console.logValue("Ennemie", myEnemy.y + myEnemy.x)
    if (true) {
        projectile2 = sprites.createProjectileFromSprite(img`
            . . . . 2 2 2 2 2 2 2 . . . . 
            . . 2 2 8 8 8 8 8 8 8 2 2 . . 
            . 2 8 8 2 2 2 2 2 2 2 8 8 2 . 
            . 2 8 2 8 8 8 8 8 8 8 2 8 2 . 
            2 8 2 8 8 2 2 2 2 2 8 8 2 8 2 
            2 8 2 8 2 8 8 8 8 8 2 8 2 8 2 
            2 8 2 8 2 8 2 2 2 8 2 8 2 8 2 
            2 8 2 8 2 8 2 8 2 8 2 8 2 8 2 
            2 8 2 8 2 8 2 2 2 8 2 8 2 8 2 
            2 8 2 8 2 8 8 8 8 8 2 8 2 8 2 
            2 8 2 8 8 2 2 2 2 2 8 8 2 8 2 
            . 2 8 2 8 8 8 8 8 8 8 2 8 2 . 
            . 2 8 8 2 2 2 2 2 2 2 8 8 2 . 
            . . 2 2 8 8 8 8 8 8 8 2 2 . . 
            . . . . 2 2 2 2 2 2 2 . . . . 
            `, myEnemy, randint(-100, 100), randint(-100, 100))
        projectile2.setKind(SpriteKind.ProjEn)
    }
})
