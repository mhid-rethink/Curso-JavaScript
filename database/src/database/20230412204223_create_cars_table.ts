import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("cars", function (table) {
    table.increments();
    table.string("name").notNullable();
    table.string("model").notNullable();
    table.string("color").notNullable();
    table.integer("brand_id");
    table.foreign("brand_id").references("brands.id");
  });
}

export async function down(knex: Knex): Promise<void> {
  knex.schema.dropTable("cars");
}
