class RandomExtension {
  getInfo() {
    return {
      id: 'random',
      name: 'Random Extension',
      blocks: [
        {
          opcode: 'getRandomNumber',
          blockType: Scratch.BlockType.REPORTER,
          text: 'random number',
        },
      ],
    };
  }

  getRandomNumber() {
    return Math.floor(Math.random() * 100); // Change the range as needed
  }
}

Scratch.extensions.register(new RandomExtension());
