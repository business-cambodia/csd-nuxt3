if (!process.server) {
  var num = Math.floor(Math.random() * 2);
  const vouchersImg = ['Vouchers.jpg', 'Vouchers-2.jpg'];
  var voucher = useVoucher();
  voucher.value = {
    id: 'V-00' + (num + 1),
    image: vouchersImg[num],
    type: num == 0 ? '50$ OFF' : '1 Free Room',
  };

  $('#card').wScratchPad({
    size: 40, // The size of the brush/scratch.
    bg: vouchersImg[num], // Background (image path or hex color).
    fg: `/scratch.jpg`, // Foreground (image path or hex color).
    cursor: 'pointer', // Set cursor.
  });
}
