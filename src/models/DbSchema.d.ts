import { InMemoryDBEntity } from "@nestjs-addons/in-memory-db";


export interface TimeTableI{
  start: string;
  end: string;
}

export interface DbSchema extends InMemoryDBEntity{
  id: number;
  name: string;
  description: string;
  img: string[];
  price: number;
  availableHours: TimeTableI[];
}