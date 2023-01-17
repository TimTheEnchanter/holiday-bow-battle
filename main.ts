sprites.onOverlap(SpriteKind.Player1, SpriteKind.Bow, function (sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 200)
    mp.changePlayerStateBy(mp.PlayerNumber.One, MultiplayerState.Score, 1)
    sprites.launchBow()
})
sprites.onOverlap(SpriteKind.Player2, SpriteKind.Bow, function (sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 200)
    mp.changePlayerStateBy(mp.PlayerNumber.Two, MultiplayerState.Score, 1)
    sprites.launchBow()
})
let player_2: Sprite = null
let player_1: Sprite = null
scene.setBackgroundImage(assets.image`background`)
bundles.wrap1(function () {
    player_1 = sprites.create(assets.image`p1`, SpriteKind.Player1)
    mp.moveWithButtons(mp.PlayerNumber.One, player_1, 0, 150)
    player_1.setStayInScreen(true)
    player_1.left = 15
})
bundles.wrap2(function () {
    player_2 = sprites.create(assets.image`p2`, SpriteKind.Player2)
    mp.moveWithButtons(mp.PlayerNumber.Two, player_2, 0, 150)
    player_2.setStayInScreen(true)
    player_2.right = 145
})
sprites.launchBow()
carnival.startCountdownGame(60, carnival.WinTypes.Multi)
