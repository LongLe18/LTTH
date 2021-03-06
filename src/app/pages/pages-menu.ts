import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Quản lý thiết bị',
    icon: 'eye-outline',
    link: '/pages/dashboard',
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
  {
    title: 'Báo cáo',
    icon: 'file-outline',
    link: '/pages/report',
  },
];
