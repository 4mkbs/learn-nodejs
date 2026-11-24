require("dotenv").config();
const prisma = require("./lib/prisma");

async function testConnection() {
  console.log("🔄 Connecting to PostgreSQL database...");
  try {
    // 1. Check connection
    await prisma.$connect();
    console.log("✅ Database connection successful!");

    // 2. Insert test user
    const testEmail = `test_${Date.now()}@example.com`;
    const newUser = await prisma.user.create({
      data: {
        name: "Test User",
        email: testEmail,
      },
    });
    console.log("✅ Created user in DB:", newUser);

    // 3. Query users
    const allUsers = await prisma.user.findMany();
    console.log(`✅ Total users found in DB: ${allUsers.length}`);

    console.log("\n🎉 Prisma + PostgreSQL is working perfectly!");
  } catch (error) {
    console.error("❌ Database connection / query failed:");
    console.error(error.message);
  } finally {
    await prisma.$disconnect();
  }
}

testConnection();
