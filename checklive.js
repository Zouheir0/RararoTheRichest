const { WebcastPushConnection } = require('tiktok-live-connector');

const username = 'rararotherichest'; // Replace with the TikTok username

const tiktokLiveConnection = new WebcastPushConnection(username);

async function checkIfLive() {
    try {
        const roomInfo = await tiktokLiveConnection.getRoomInfo();
        if (roomInfo && roomInfo.status === 4) {
            console.log(`${username} is currently LIVE on TikTok!`);
        } else {
            console.log(`${username} is not live.`);
        }
    } catch (error) {
        console.error('Error checking live status:', error);
    }
}

// Run the check
checkIfLive();