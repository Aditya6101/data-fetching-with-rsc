import { faker } from "@faker-js/faker";
import "dotenv/config";
import { drizzle } from "drizzle-orm/libsql";
import { usersTable } from "./schema";

function generateFakeUsers(numberOfUsers: number) {
  const users = [];

  for (let i = 0; i < numberOfUsers; i++) {
    const name = faker.person.fullName();
    const email = faker.internet.email() + i.toString();

    users.push({ id: i + 1, name, email });
  }

  return users;
}

function seed() {
  const fakeUsers = generateFakeUsers(2305);
  const db = drizzle(process.env.DB_FILE_NAME!);
  db.insert(usersTable).values(fakeUsers).execute();
}

seed();
