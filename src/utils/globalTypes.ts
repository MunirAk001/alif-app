export type TFilter = {
  date: Date;
  'start_date': Date;
  'end_date': Date;
  count: number
}

export type NasaImage = {
  id: number,
  camera: any,
  rover: any,
  name: string,
  'img_src': string
}
