/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Bucket = {
  name: string
  values: number[]
}[]
/**
 * Response shape for POST /api/representative_points/
 */
export type PostRepresentativePointsResponse = {
  county: string
  demographics?: {
    buckets: Bucket
    category: string
  }[]
  id: number
  lat: number
  lng: number
  population: number
  service_area_id: string
  zip: string
}[]

export type StaticRepresentativePointsResponse = {
  id: number
  lat: number
  lng: number
  population: number
  service_area_id: string
  county: string
  zip: string
}[]
