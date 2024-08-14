export interface ITitleProps {
  title: string | ({
    text: string,
    link: string,
  })[],
  active?: number | boolean,
  curentClass?: string,
  children?: React.ReactNode,
  link?: string,
}

export interface IWidgetSearchProps {
  menu: string | ({
    text: string,
    link: string,
  })[],
}

export interface ICloudProps {
  children?: React.ReactNode, 
  icon: string,
  degree: string, 
  morning: string, 
  day: string,
}

export interface IItemListProps {
  text: string,
  icon?: string,
  children?: React.ReactNode,
  weigth?: number,
  nextTxt?: string,
  color?: string,
}

export interface IItemRatesProps {
  item: {
    label: string,
    price: string,
    increment: string,
  }
}

export interface IWidgetAdvertisingProps {
  img: string,
  text: string,
  info: string,
}

export interface IWidgetExchangeRatesProps {
  list: ({
    label: string,
    price: string,
    increment: string,
  })[]
}

export interface IWidgetListProps {
  list: ({
    body: string,
    icon?: string,
    info?: string,
    color?: string,
  })[],
  children?: React.ReactNode,
  weigth?: number,
}
