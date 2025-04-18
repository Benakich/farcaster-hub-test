import { getSSLHubRpcClient } from "@farcaster/hub-nodejs";

const hub = getSSLHubRpcClient("nemes.farcaster.xyz");

// You can change this to match another channel URL
const parentUrl = "https://warpcast.com/~/channel/nouns-draws";

const fetchCastsFromChannel = async () => {
  try {
    const result = await hub.getCastsByParent({ parentUrl });

    if (result.isOk() && result.value.messages.length > 0) {
      const casts = result.value.messages.slice(0, 10); // limit to 10
      console.log(`✅ Fetched ${casts.length} casts:\n`);
      casts.forEach((msg, i) => {
        const text = msg.data?.castAddBody?.text || "(no text)";
        console.log(`[${i + 1}] ${text}`);
      });
    } else {
      console.log("No casts found or result not OK.");
    }
  } catch (err) {
    console.error("❌ Error fetching channel casts:", err);
  }
};

fetchCastsFromChannel();
