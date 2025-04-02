// Logging a message when the module is loaded
console.log('Logger module loaded.');

export function log(message) {
    console.log(`[LOG] ${message}`);
}