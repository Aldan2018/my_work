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
    public description?,
    public color?: any) { }
};

export class Descr {
  constructor (
    public data,
    public sex,
    public age,
    public description) {}
};

export class Indexes {
  constructor(
    public terrIndex?:number,
    public appIndex?:number
  ) { }
};
