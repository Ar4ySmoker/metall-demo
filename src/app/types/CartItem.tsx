export interface CartItem {
  unit: string
  _id: string
  id: string
  title: string
  price: number
  count: number
  length?: number
  weight?: number
  type: string
  fluidity: string
  size: string
  diameterMm?: number
  welded?: string
  total?: number
}
