
const fs = require('fs');
const path = './banned.json';

// Helper function to read banned users from the JSON file
function readBannedUsers() {
    if (fs.existsSync(path)) {
        const data = fs.readFileSync(path, 'utf8');
        return JSON.parse(data);
    } else {
        return [];
    }
}

// Helper function to write banned users to the JSON file
function writeBannedUsers(bannedUsers) {
    fs.writeFileSync(path, JSON.stringify(bannedUsers, null, 2));
}

// Function to add a user to the banned list
function addBannedUser(jid) {
    const bannedUsers = readBannedUsers();
    if (!bannedUsers.includes(jid)) {
        bannedUsers.push(jid);
        writeBannedUsers(bannedUsers);
    }
}

// Function to remove a user from the banned list
function removeBannedUser(jid) {
    let bannedUsers = readBannedUsers();
    bannedUsers = bannedUsers.filter(user => user !== jid);
    writeBannedUsers(bannedUsers);
}

// Function to check if a user is banned
function isUserBanned(jid) {
    const bannedUsers = readBannedUsers();
    return bannedUsers.includes(jid);
}

module.exports = {
    addBannedUser,
    removeBannedUser,
    isUserBanned
};
