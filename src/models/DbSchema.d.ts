import { InMemoryDBEntity } from "@nestjs-addons/in-memory-db";


export interface RangeI {
  start: string;
  end: string;
}
export interface TimeTableI {
  date: string;
  ranges: RangeI[];
}

export interface DbSchema extends InMemoryDBEntity {
  id: number;
  name: string;
  description: string;
  img: string[];
  price: number;
  availableHours: TimeTableI[];
}