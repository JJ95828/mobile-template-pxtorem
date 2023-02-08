import { LocationQueryValue } from 'vue-router'
import { Component } from 'vue'
export type LocationValueType = LocationQueryValue | LocationQueryValue[]

export interface MiniCompDescInfoDesc {
  title: string
  desc: string | string[]
}
interface MiniCompDescInfo {
  images: string[]
  desc: MiniCompDescInfoDesc[]
}
export type MiniCompDesc = MiniCompDescInfo

export interface CityInfo {
  cityname: string
  cid: string | number
  parentCode: string
}

export interface ChangeProp {
  city: CityInfo
  type: string
}

export type Components = [string, Component]
