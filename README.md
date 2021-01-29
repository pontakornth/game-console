# game-console
Game console with using mobile device. Powered by Socket.IO

# Concept
It will use a mobile phone as controller and use PC similar way to console (PS5, XBox, etc)

# How to run?

You must run server before client. Because server is seperated from client, you need to replace `localhost` with ip address or domain (The proper solution is WIP).

1. In server directory, you can run `yarn build` and `yarn serve` for production. Or `yarn dev` for development.
2. In client directory, you can use same instruction from preact-cli to run the code.

# How to use

Assumming the client run on localhost:8080
1. Open /game on your PC for game
2. Open /controller on your mobile for controller
3. There should be buttons to send commmand to the game.

# TODO
- [ ] Make it usable with other device
- [ ] Room Support
- [ ] Multiplayer Support

