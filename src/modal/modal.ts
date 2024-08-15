export interface IAppState {
  title: string,
  zone: string,
  arrayClock: ({
    title: string,
    zone: string,
  })[],
}

export interface IClockProps {
  list: ({
    title: string,
    zone: string,
  })[],
  callback: (event: React.ChangeEvent<HTMLDivElement>) => void,
}

export interface IItemClockProps {
  title: string,
  zone: string,
  callback: (event: React.ChangeEvent<HTMLDivElement>) => void,
}

export interface IFormProps {
  title: string,
  zone: string,
  submit: (event: React.ChangeEvent<HTMLFormElement>) => void,
  change: (event: React.ChangeEvent<HTMLInputElement>) => void,
}
