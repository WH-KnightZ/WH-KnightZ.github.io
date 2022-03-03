export const DEFAULT_PAGE_SIZE = 10;
export const DEFAULT_AVATAR = '/static/mock-images/avatars/avatar_default.jpg';

export const SCREENS = {
  AUTO_API: 'auto_api',
  LOGIN: 'login',
  AUTO_BOOK: 'auto_book',
  FAKE_TIME: 'fake_time',
  MORE: 'more',
};

const { AUTO_API, LOGIN, AUTO_BOOK, FAKE_TIME, MORE } = SCREENS;

export const SCREENS_TITLE: any = {
  [AUTO_API]: 'Gọi Api Tự Động',
  [LOGIN]: 'Đăng Nhập',
  [AUTO_BOOK]: 'Tự Động Book Lịch',
  [FAKE_TIME]: 'Fake Time Appointment',
  [MORE]: 'Chưa Nghĩ Ra Gì Mới',
};
