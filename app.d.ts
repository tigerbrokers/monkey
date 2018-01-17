declare module 'koa-ejs'
declare module 'require.dir'
declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare var require : (filename:any,resolve:any)=>any;
declare module 'iview' {
  const iview: any;
  export default iview;
}
