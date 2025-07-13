//08 configuration files

import { PlaywrightTestConfig } from "@playwright/test"

const config: PlaywrightTestConfig = {
    timeout: 60000,      //how much delay each test will have, this is 60 seconds, but can leave at 0
    retries: 0,        //times to retry test upon failure
    use: {
        headless: true,    // or false
        viewport: { width: 1280, height: 720},
        actionTimeout: 15000,    //typical 10 - 20 seconds, time until attempt errors and times out
        ignoreHTTPSErrors: true,
        video: "off",       //playwright can automatically take videos and screenshots of tests
        screenshot: 'off', 
    },      //in use we specify browser-specific options 

    projects: [
        {
            name: "Chromium",
            use: {browserName: "chromium"}
        },
        {
            name: "Firefox",
            use: {browserName: "firefox"}
        },
        {
            name: "Webkit",
            use: {browserName: "webkit"}
        }
    ]

}

export default config