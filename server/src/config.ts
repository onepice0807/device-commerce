import dotenv from "dotenv";
dotenv.config({});

class Config {
  public NODE_ENV: string | undefined;
  public DATABASE_URL: string | undefined;
  public JWT_TOKEN: string | undefined;
  public CLIENT_URL: string | undefined;

  constructor() {
    this.NODE_ENV = process.env.NODE_ENV || "";
    this.JWT_TOKEN = process.env.JWT_TOKEN || "";
    this.DATABASE_URL = process.env.DATABASE_URL || "";
    this.CLIENT_URL = process.env.CLIENT_URL || "";
  }
}

export const config: Config = new Config();
