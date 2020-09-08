/**
 *   Create 'user_todos' table
 *
 * @param knex
 */
export function up(knex) {
  return knex.schema.createTable("user_todos", (table) => {
    table.increments("id");
    table.integer("user_id").notNull().references("id").inTable("users");
    table.string("todo_text", 500).notNull();
    table.boolean("is_completed").notNull().defaultTo(false);
    table.boolean("is_active").notNull().defaultTo(true);
    table.timestamp("created_at").defaultTo(knex.raw("now()"));
  });
}

/**
 *   Drop 'user_todos' table
 *
 * @param knex
 */
export function down(knex) {
  return knex.schema.dropTable("user_todos");
}
