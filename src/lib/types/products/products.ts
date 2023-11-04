import type { PictogramCode } from "./pictograms"
import type { ProtectiveCode } from "./protection"

export const enum ProductTypeCode {
    Reactive = 1,
    Solution = 2,
}

export interface Product {
    id: number
    code: string
    name: string
    type: ProductTypeCode
    location: string
    brand: string
    pictograms: PictogramCode[]
    supplier: string
    protections: ProtectiveCode[]
}