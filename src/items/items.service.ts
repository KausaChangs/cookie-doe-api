import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/items.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '342567794',
      name: 'My first Item',
      descriptiion: 'this is a really cool item',
      qty: 100,
    },
    {
      id: '342564572',
      name: 'My Second Item',
      descriptiion: 'this is also a really cool item',
      qty: 70,
    },
  ];
}
