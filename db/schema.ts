import { sqliteTable, text } from "drizzle-orm/sqlite-core";
import { integer } from "drizzle-orm/sqlite-core";

export const usersTable = sqliteTable("users_table", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
});
