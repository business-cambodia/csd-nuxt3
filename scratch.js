if (!process.server) {
  var num = Math.floor(Math.random() * 2);
  const vouchersImg = ['Vouchers.jpg', 'Vouchers-2.jpg'];

  $('#card').wScratchPad({
    size: 20, // The size of the brush/scratch.
    bg: vouchersImg[num], // Background (image path or hex color).
    fg: `/scratch.jpg`, // Foreground (image path or hex color).
    cursor: 'pointer', // Set cursor.
  });
}
