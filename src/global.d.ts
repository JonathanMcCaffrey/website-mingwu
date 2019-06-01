declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}

declare module '*.yml' {
  const content: { data: any };
  export = content;
}
