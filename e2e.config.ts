import { PlaywrightTestConfig } from "@playwright/test"
    
const config: PlaywrightTestConfig = {
    timeout: 100000,   
    retries: 0,    
    testDir: "01EndToEndTestingPrjcts/tests/e2e",
    use: {
        headless: true,   
        viewport: { width: 1280, height: 720},
        actionTimeout: 20000, 
        ignoreHTTPSErrors: true,
        video: "off", 
        screenshot: 'off', 
    }, 
    
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