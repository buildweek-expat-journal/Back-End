exports.up = function(knex, Promise) {
	return knex.schema
		.createTable('users', tbl => {
			tbl.increments();
			tbl
				.string('username', 128)
				.notNullable()
				.unique();
			tbl.string('password', 128).notNullable();
			tbl.string('first_name', 128).notNullable();
			tbl.string('last_name', 128).notNullable();
			tbl.integer('age').unsigned();
			tbl.string('location', 256);
		})
		.createTable('photos', tbl => {
			tbl.increments();
			tbl
				.integer('user_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('users')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
			tbl.string('location', 128).notNullable();
			tbl.text('description');
			tbl.string('url', 256).notNullable();
		});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('photos').dropTableIfExists('users');
};
