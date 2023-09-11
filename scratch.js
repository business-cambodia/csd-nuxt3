if (!process.server) {
  var num = Math.floor(Math.random() * 2);
  const vouchersImg = ['Vouchers-3.jpg', 'Vouchers-2.jpg'];
  var voucher = useVoucher();
  voucher.value = {
    id: 'V-00' + (num + 1),
    image: vouchersImg[0],
    // type: num == 0 ? '35$ OFF' : '1 Free Room',
    type: '35$ OFF',
  };

  $('#card').wScratchPad({
    size: 40, // The size of the brush/scratch.
    bg: vouchersImg[0], // Background (image path or hex color).
    fg: `/scratch.jpg`, // Foreground (image path or hex color).
    cursor: 'pointer', // Set cursor.
  });
}
