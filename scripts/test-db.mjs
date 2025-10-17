import 'dotenv/config';
import mongoose from 'mongoose';

async function main (){
    const uri = process.env.MONGODB_URI;
    if(!uri) {
        console.error('ERROR: MongoDB URI must be set in .env');
        process.exit(1);
    }

    try {
        const startedAt = Date.now();
        await mongoose.connect(uri, {bufferCommands: false});
        const elapsed = Date.now() - startedAt;

        const dbName = mongoose.connection?.name || '(unknown)';
        const host = mongoose.connection?.host || '(unknown)';

        console.log(`OK: Connected to MongoDB [db="${dbName}", host="${host}", time=${elapsed}"]`);
        await mongoose.connection.close();
        process.exit(0);
    }catch(err) {
        console.error(err);
    }
}

main();