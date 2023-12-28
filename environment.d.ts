declare namespace NodeJS {
  export interface ProcessEnv {
    readonly APP_ENV: 'development' | 'production';
  }
}
