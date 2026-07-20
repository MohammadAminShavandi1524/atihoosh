import { Service } from "../api/services";

export interface MergedService {
  id: number; // همیشه id انگلیسی
  faId: number;
  enId: number;
  name: {
    fa: string;
    en: string;
  };
  description: {
    fa: string;
    en: string;
  };
  image: string;
}

export function mergeServices(fa: Service[], en: Service[]): MergedService[] {
  return en.map((enItem, index) => {
    const faItem = fa[index];

    return {
      id: enItem.id,
      enId: enItem.id,
      faId: faItem.id,
      image: enItem.image,
      name: {
        fa: faItem.name,
        en: enItem.name,
      },
      description: {
        fa: faItem.description,
        en: enItem.description,
      },
    };
  });
}
