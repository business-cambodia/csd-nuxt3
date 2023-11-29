export const useVoucher = () => useState<any>('voucher', () => {});
export const useOtp = () => useState<any>('otp', () => {});
export const useLanguague = () => useState<any>('language', () => 'EN');
export const useCart = () =>
  useState<any>('cart', () => ({
    startDate: new Date(),
    endDate: new Date(new Date().setDate(new Date().getDate() + 1)),
    adults: 1,
    rooms: [],
    total: 0,
  }));
