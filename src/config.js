import { config } from "dotenv";

config();

export const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb+srv://PieroFigeri:Hacking951.,@cluster0.j58hkbc.mongodb.net/dataBaseTasks?retryWrites=true&w=majority";
