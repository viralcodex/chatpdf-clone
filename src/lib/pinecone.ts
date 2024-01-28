import { PineconeClient } from "@pinecone-database/pinecone";

let pinecone: PineconeClient | null = null;

export default getPineconeClient = async () => {
    if(!pinecone){
        pinecone = new PineconeClient();
        await pinecone.init({
            environment : process.env.PINECONE_ENVIRONMENT!,
            apiKey: process.env.PINECONE_API_KEY
        })
    }
    return pinecone;
};

export async function loadS3IntoPinecone(fileKey:string){
    
}
