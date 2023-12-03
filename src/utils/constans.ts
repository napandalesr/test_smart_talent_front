export const _Routes = {
  home: '/',
  hotel: '/hotel',
  room: '/room',
  booking: '/booking'
};

export enum RoleEnum {
  AGENCY = 'AGENCY',
  TRAVELER = 'TRAVELER'
};

export enum RoomEnum {
  DOUBLE = 'DOUBLE',
  SIMPLE = 'SIMPLE'
};

export enum RoomEnumValue {
  DOUBLE = 'Doble',
  SIMPLE = 'Sencilla'
};

export type ColumnTableType = {
  title: string
  dataIndex?: string
  key: string
  render?: (_: any, record: any) => void
}

export type typeDataHotels = {
  id: number
  name: string
  direction: string
  city: string
  status: string
  rooms: RoomType[]
}

export type RoomType = {
  id: number
  price: string
  type: string
  tax: string
  amountPerson: number
  entryDate: string
  dapartureDate: string
}

export type selectType = {
  label: string
  value: string
}
