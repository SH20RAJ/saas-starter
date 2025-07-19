#!/usr/bin/env node

const { execSync } = require('child_process');

console.log('🗄️  Setting up Cloudflare D1 Database...\n');

try {
  // Create the database
  console.log('1. Creating D1 database...');
  const createResult = execSync('npx wrangler d1 create saas-starter-db', { encoding: 'utf8' });
  console.log(createResult);

  // Extract database ID from the output
  const dbIdMatch = createResult.match(/database_id = "([^"]+)"/);
  if (dbIdMatch) {
    const databaseId = dbIdMatch[1];
    console.log(`✅ Database created with ID: ${databaseId}`);
    console.log('\n📝 Please update your wrangler.jsonc file:');
    console.log(`   Replace "your-database-id" with "${databaseId}"`);
  }

  console.log('\n2. Generating migration files...');
  execSync('npm run db:generate', { stdio: 'inherit' });

  console.log('\n3. To apply migrations, run:');
  console.log('   npm run db:migrate');
  
  console.log('\n4. To open Drizzle Studio, run:');
  console.log('   npm run db:studio');

  console.log('\n🎉 Database setup complete!');
  
} catch (error) {
  console.error('❌ Error setting up database:', error.message);
  console.log('\n💡 Make sure you have:');
  console.log('   - Cloudflare account set up');
  console.log('   - Wrangler CLI authenticated (wrangler login)');
  console.log('   - CLOUDFLARE_API_TOKEN environment variable set');
}