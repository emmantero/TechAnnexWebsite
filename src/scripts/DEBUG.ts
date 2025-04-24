let isDebugging: boolean = false;
// Calculate milliseconds in a year
const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;


export function AllowDebugging() {
    isDebugging = true;
}

export function DebuggingLog(s: string) {
    const d = new Date();
    if (isDebugging) {
        console.log("-")
        console.log("   <================               ===============>")
        console.log('   Message: ' + s)
        console.log(`   Timeline: 
            ${Math.round(d.getTime() / hour)} : 
            ${Math.round(d.getTime() / minute)} `)
        console.log("   <================               ===============>")
        console.log("-")
    }
}