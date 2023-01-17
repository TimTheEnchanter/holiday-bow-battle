namespace SpriteKind {
    //% isKind
    export const Player1 = SpriteKind.create()
    //% isKind
    export const Player2 = SpriteKind.create()
    //% isKind
    export const Bow = SpriteKind.create()
}
//% color=#6d5ba4 icon="\uf0f2"
namespace bundles{
    /**
    * just run the code
    */
    //% block="create player 1"  weight=300
    //% handlerStatement=1
    export function wrap1(handler: () => void) {
        handler();
    }
    /**
    * just run the code
    */
    //% block="create player 2"  weight=200
    //% handlerStatement=1
    export function wrap2(handler: () => void) {
        handler();
    }
}
namespace sprites{
    /**
    * Launches a new bow either to
    * the right or to the left
    */
    //% block="launch new bow"  weight=200
    export function launchBow () {
        let bow = sprites.create(assets.image`bow`, SpriteKind.Bow)
        bow.setPosition(80, 90)
        bow.setVelocity([-150, 150]._pickRandom(), [75, -75]._pickRandom())
        bow.setBounceOnWall(true)
    }
}