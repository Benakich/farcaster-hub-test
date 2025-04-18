import { getSSLHubRpcClient } from "@farcaster/hub-nodejs";

const client = getSSLHubRpcClient("foss.farchiver.xyz");

const main = async () => {
  try {
    const response = await client.getInfo({});
    console.log("Hub Info:", response);
  } catch (error) {
    console.error("Failed to connect to Hub:", error);
  }
};

main();
