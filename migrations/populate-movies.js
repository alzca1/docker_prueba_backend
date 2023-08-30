export async function up(db, client) {
  await db
    .collection("movies")
    .insertMany([
      { title: "Avatar" },
      { title: "Star Wars" },
      { title: "Terminator" },
      { title: "Titanic" },
    ]);
}

export async function down(db, client) {
  await db.collection("movies").deleteMany({
    title: {
      $in: ["Avatar", "Star Wars", "Terminator", "Titanic"],
    },
  });
}
