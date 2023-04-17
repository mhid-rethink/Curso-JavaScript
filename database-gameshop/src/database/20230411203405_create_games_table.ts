import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("games", function (table) {
    table.increments();
    table.string("name").notNullable();
    table.double("price").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("games");
}
