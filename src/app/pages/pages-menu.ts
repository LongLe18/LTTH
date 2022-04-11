import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Quản lý thiết bị',
    icon: 'eye-outline',
    link: '/pages/device',
    home: true,
  },
  {
    title: 'Quản lý mượn trả',
    icon: 'file-text-outline',
    link: '/pages/lend',
  },
  {
    title: 'Quản lý bài thí nghiệm',
    icon: 'layers-outline',
    link: '/pages/experiment',
  },
  // {
  //   title: 'Auth',
  //   icon: 'lock-outline',
  //   children: [
  //     {
  //       title: 'Login',
  //       link: '/auth/login',
  //     },
  //     {
  //       title: 'Register',
  //       link: '/auth/register',
  //     },
  //     {
  //       title: 'Request Password',
  //       link: '/auth/request-password',
  //     },
  //     {
  //       title: 'Reset Password',
  //       link: '/auth/reset-password',
  //     },
  //   ],
  // },
];
