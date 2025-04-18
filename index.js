import { getSSLHubRpcClient } from "@farcaster/hub-nodejs";

// Try a smaller FID or different hub
const fid = 5650; // or 22656, etc.
const client = getSSLHubRpcClient("nemes.farcaster.xyz"); // switch hub here

const main = async () => {
  try {
    const result = await client.getAllCastMessagesByFid({ fid });

    if (result && result.messages?.length > 0) {
      console.log(`✅ Found ${result.messages.length} casts for FID ${fid}`);
      result.messages.forEach((msg, i) => {
        console.log(`[${i + 1}] ${msg.data?.castAddBody?.text}`);
      });
    } else {
      console.log(`❌ No casts found for FID ${fid} on this hub`);
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }
};

main();
