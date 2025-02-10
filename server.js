app.get('/check-live', async (req, res) => {
    try {
        const liveStatus = await TikTokLive.checkLive(rararotherichest);
        console.log('Live Status:', liveStatus); // Log the response for debugging
        if (liveStatus) {
            res.json({ live: true });
        } else {
            res.json({ live: false });
        }
    } catch (error) {
        console.error('Error fetching live status:', error); // Log errors for debugging
        res.status(500).json({ live: false, error: 'Failed to fetch live status' });
    }
});