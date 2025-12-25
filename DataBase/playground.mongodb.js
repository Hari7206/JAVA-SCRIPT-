use("collegeDB");

// Clear old data (important, otherwise duplicates)
db.students.deleteMany({});

// Insert 10 documents
db.students.insertMany([
  { name: "Hari", rollNo: 249001, year: "2nd", branch: "BCA" },
  { name: "Ravi", rollNo: 249002, year: "1st", branch: "BCA" },
  { name: "Ankit", rollNo: 249003, year: "3rd", branch: "BCA" },
  { name: "Priya", rollNo: 249004, year: "2nd", branch: "BCA" },
  { name: "Neha", rollNo: 249005, year: "1st", branch: "BCA" },
  { name: "Aman", rollNo: 249006, year: "3rd", branch: "BCA" },
  { name: "Sahil", rollNo: 249007, year: "2nd", branch: "BCA" },
  { name: "Kiran", rollNo: 249008, year: "1st", branch: "BCA" },
  { name: "Pooja", rollNo: 249009, year: "3rd", branch: "BCA" },
  { name: "Rahul", rollNo: 249010, year: "2nd", branch: "BCA" }
]);

// Show all documents
db.students.find();

// Find one student
db.students.find({ name: "Hari" });

// Update one student
db.students.updateOne(
  { name: "Hari" },
  { $set: { year: "3rd" } }
);

// Delete one student
db.students.deleteOne({ name: "Rahul" });

// Final check (see remaining data)
db.students.find();
