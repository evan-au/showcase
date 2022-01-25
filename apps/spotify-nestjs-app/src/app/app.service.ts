import { Injectable } from '@nestjs/common';
export interface LocalTrack {
  id: number;
  name: string;
}

const tracks = [
  {
    id: 1,
    name: 'Local track one',
  },
  {
    id: 2,
    name: 'Local track two',
  },
  {
    id: 3,
    name: 'Local track three',
  },
  {
    id: 4,
    name: 'Local track four',
  },
  {
    id: 5,
    name: 'Local track five',
  },
  {
    id: 6,
    name: 'Local track six',
  },
  {
    id: 7,
    name: 'Local track seven',
  },
  {
    id: 8,
    name: 'Pierced Owl Rose Gold Plated Stainless Steel Double',
  },
  {
    id: 9,
    name: 'WD 2TB Elements Portable External Hard Drive - USB 3.0 ',
  },
  {
    id: 10,
    name: 'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s',
  },
];

@Injectable()
export class AppService {
  getData(): LocalTrack[] {
    return tracks;
  }
}
