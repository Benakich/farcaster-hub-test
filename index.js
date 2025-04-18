import { getSSLHubRpcClient } from "@farcaster/hub-nodejs";

const fid = 2; // Try with FID 2 (Farcaster team), or any user with a known cast history

const client = getSSLHubRpcClient("foss.farchiver.xyz");

const main = async () => {
  try {
    const result = await client.getAllCastMessagesByFid({ fid });

    if (result && result.messages && result.messages.length > 0) {
      console.log(`✅ Found ${result.messages.length} casts for FID ${fid}:`);
      result.messages.forEach((msg, i) => {
        const text = msg.data?.castAddBody?.text;
        console.log(`\n[${i + 1}] ${text}`);
      });
    } else {
      console.log(`No casts found for FID ${fid}.`);
    }
  } catch (error) {
    console.error("❌ Fetch error:", error);
  }
};

main();
