import { getSSLHubRpcClient } from "@farcaster/hub-nodejs";

const fid = 254246; // You can change this to any valid FID

const client = getSSLHubRpcClient("foss.farchiver.xyz");

const main = async () => {
  try {
    const response = await client.getCastsByFid({ fid });

    console.log("Raw Response:", response);

    if (response && response.messages && response.messages.length > 0) {
      console.log(`Fetched ${response.messages.length} cast(s):`);
      response.messages.forEach((cast, i) => {
        console.log(`\n[${i + 1}] ${JSON.stringify(cast, null, 2)}`);
      });
    } else {
      console.log("No messages found for this FID.");
    }
  } catch (error) {
    console.error("Error fetching casts:", error);
  }
};

main();
