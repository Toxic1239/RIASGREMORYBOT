const { isUserBanned } = require('./banManager');

// Example of a general command
async function someCommand(client, message) {
    const { remoteJid, participant } = message;
    if (isUserBanned(participant)) {
        await client.sendMessage(remoteJid, { text: 'You are banned from using this bot.' });
        return;
    }

    // Your command logic here
    await client.sendMessage(remoteJid, { text: 'Command executed successfully.' });
}

module.exports = someCommand;
