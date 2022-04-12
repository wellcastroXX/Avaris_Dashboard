export class IConfiguration {
  baseUrl: string;
  /** @Ignore */
  api: string;
  /** @Ignore */
  production?: boolean;
  /** @Ignore */
  publicKey?: string;
  /** @Ignore */
  routerLogin?: string;
  /** @Ignore */
  routerDashboard?: string;
  /** @Ignore */
  enablePreRender?: boolean;
  /** @Ignore */
  enableServerSideRender?: boolean;
  /** @Ignore */
  plugins?: Array<any>;
}