const fs = require('fs');

const configData = fs.readFileSync("/home/ubuntu/Desktop/PRIVATE-LEARNINGv2/PROJECTS/LEARNING/SERVER-PORTS.json", 'utf-8');
const config = JSON.parse(configData);
console.log("PORT: ", config.NODE_APP_PRIVILEGEPASS_BACKEND);

export function getPort() {
    return config.NODE_APP_PRIVILEGEPASS_BACKEND;
}
