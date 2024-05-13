test('the data is peanut butter', () => {
    return new Promise((resolve, reject) => resolve("peanut butter")).then(data => {
      expect(data).toBe('peanut butter');
    });
  });