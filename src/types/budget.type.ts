export interface Budget {
  id: string;
  client: string;
  title: string;
  items: Item[];
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Item {
  id: string;
  description: string;
  qty: number;
  price: number;
}
