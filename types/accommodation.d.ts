export interface IAccommodation {
  name: string;
  title_kh: string;
  title_cn: string;
  date_created: Date;
  event_date: Date;
  price: number;
  pax: number;
  amenties: string[];
  slug: string;
  images: any;
  description: string;
  description_kh: string;
  description_cn: string;
}