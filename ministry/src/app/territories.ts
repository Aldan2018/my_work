export class Terr {
  constructor (
    public name: string,
    public own: string,
    public pct: number,
    public appartaments?) { }
};

export class Appart {
  constructor (
    public num: number,
    public sex?: string,
    public age?: number,
    public description?: string,
    public color?: any) { }
}

export class Indexes {
  constructor(
    public terrIndex?:number,
    public appIndex?:number
  ) { }
}
