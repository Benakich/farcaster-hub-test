import { getSSLHubRpcClient } from "@farcaster/hub-nodejs";

// Public user FID — change this to any valid FID
const fid = 2;

const client = getSSLHubRpcClient("foss.farchiver.xyz");

const main = async () => {
  try {
    const result = await client.getCastsByFid({ fid });
    console.log("Casts for FID", fid, ":", result.messages);
  } catch (error) {
    console.error("Error fetching casts:", error);
  }
};

main();
