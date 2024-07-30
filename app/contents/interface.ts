export interface Contents {
  headline: string | React.ReactNode;
  subheadline?: string | React.ReactNode;
  main?: string | React.ReactNode;
  cta?: string | React.ReactNode | React.ReactNode[];
  footer?: string | React.ReactNode;
}
