export interface HashStrategy {
  hash(password: string): Promise<string>;
}
