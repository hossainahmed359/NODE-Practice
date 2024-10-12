/*
    Title: Last Day Of War
 */

// Dependencies
const warPlans = require("./lib/warPlans");
const math = require("./lib/math/index");

// App object - Module scaffolding
const app = {};

// Configuration
app.config = {
    initials: "Last Day Of War",
};

app.initProcess = function initProcess() {
    let index = 0;
    const allPlans = warPlans.allPlans();

    function typeText(prefix, text, callback) {
        let charIndex = 0;

        // First, write the prefix '[SYS] ' without typing animation
        process.stdout.write(prefix);

        // Typing effect function to print one character at a time after the prefix
        const typingInterval = setInterval(() => {
            process.stdout.write(text[charIndex]);
            charIndex++;

            // Once the text is fully typed, stop and call the callback
            if (charIndex === text.length) {
                clearInterval(typingInterval);
                process.stdout.write("\n"); // Move to the next line
                callback(); // Trigger the next step (e.g., execute command)
            }
        }, 100); // Delay between each character (100ms)
    }

    function startLoader(duration, callback) {
        const loaderChars = ["|", "/", "-", "\\"];
        let loaderIndex = 0;

        // Simulate the loader with rotating characters, prefixed by [SYS]
        const loaderIntervalId = setInterval(() => {
            process.stdout.write(`\r[SYS] ${loaderChars[loaderIndex]}`);
            loaderIndex = (loaderIndex + 1) % loaderChars.length; // Rotate loader characters
        }, 100); // Rotate every 100ms

        // Stop the loader after the specified duration and execute the callback
        setTimeout(() => {
            clearInterval(loaderIntervalId);
            process.stdout.write("\r"); // Clear the loader line
            callback(); // Continue execution
        }, duration); // Loader runs for the specified duration
    }

    function executeCommand() {
        if (index < allPlans.length) {
            // Generate a new random interval for the next command
            const nextInterval = math.getRandomNumber(1500, 5000);

            // Start the loader for the duration of the random interval
            startLoader(nextInterval, () => {
                const commandText = allPlans[index].toLocaleUpperCase();

                // Start typing the command after the loader finishes
                typeText("[SYS] ", commandText, () => {
                    index++;

                    // Call the next command after a short delay to simulate processing
                    setTimeout(executeCommand, 0);
                });
            });
        } else {
            // When all plans are executed, display a final message or end
            console.log("[SYS] ALL SYSTEMS TERMINATED");
        }
    }

    // Start the first command execution
    executeCommand();
};

app.run = function run() {
    app.initProcess();
};

app.run();
