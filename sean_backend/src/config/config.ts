import dotenv from "dotenv";
dotenv.config({ path: ".env" });
import { Dialect } from "sequelize";
export const dbConfig: {
  host: string;
  port: number;
  dialect: Dialect;
  database: string;
  username: string;
  password: string;
} = {
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  dialect: process.env.DB_TYPE as Dialect,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
};

export const jwtConfig: {
  secret: string;
  expiry: string;
  saltRound: number;
} = {
  secret: process.env.SECRET,
  expiry: process.env.TOKEN_EXPIRY_HOUR,
  saltRound: 3,
};

export const emailConfig: {
  emailService: string;
  emailUser: string;
  emailPassword: string;
  emailFrom: string;
} = {
  emailService: process.env.EMAIL_SERVICE,
  emailUser: process.env.EMAIL_USER,
  emailPassword: process.env.EMAIL_PASS,
  emailFrom: process.env.EMAIL_FROM,
};

export const otpConfig: {
  otpExpiry: string;
  otpSecret: string;
} = {
  otpExpiry: process.env.OTP_EXPIRY_MIN,
  otpSecret: process.env.OTP_SECRET,
};
