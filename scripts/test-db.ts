import {connectToDatabase} from "@/DATABASE/mongoose";

async function main() {
    try {
        await connectToDatabase();
        console.log("Connected to Database");
        process.exit(0);
    }catch(err) {
        console.error("ERROR: ");
        console.error(err);
        process.exit(1);
    }
}

main();