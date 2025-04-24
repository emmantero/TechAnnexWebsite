import { DebuggingLog } from "./DEBUG";

function Activate(unique: HTMLSpanElement) {
    const line = unique
    if (line) {
        DebuggingLog(line.id + " has been set to active.")
        line.setAttribute('style', 'opacity: 1; background-position: center;')
    }
}

function Deact(unique: HTMLSpanElement) {
    const line = unique
    if (line) {
        if (line.style.opacity == "1") {
            DebuggingLog(line.id + " has been set to inactive.")

            line.setAttribute('style', 'background-position: left;')
            setTimeout(() => {
                line.setAttribute('style', 'opacity: 0; background-position: right;')
            }, 1000)
        }
    }
}

export function Toggle(set: string, unique: string) {
    const lines = document.querySelectorAll("#bar-line")
    if (lines) {
        lines.forEach(
            (line) => {
                const lin = line as HTMLSpanElement;
                if (line.className.replace(" s-mGLx0064dqnj", "").trim() == `${unique} ${set}`) Activate(lin)
                else Deact(lin)
            }
        )
    }
}

export interface Button {
    _text: string;
    _href: string;
    _id: string;
}

// header anchors
export const buttonsId = ["home", "abt", "serv", "events", "partners", "contact-us"];
// Add your normal nav buttons here
export let buttons: Button[] = [
    // { _text: "About Us", _href: "/about-us", _id: buttonsId[0] },
    // { _text: "Hotspot Partner", _href: "/hotspot-partner", _id: buttonsId[1]},
    // { _text: "Contact Us", _href: "/contact-us", _id: buttonsId[2] },
    { _text: "Home", _href: "/home", _id: buttonsId[0] },
    { _text: "About", _href: "/about", _id: buttonsId[1]},
    { _text: "Services", _href: "/services", _id: buttonsId[2] },
    { _text: "Events", _href: "/events", _id: buttonsId[3] },
    { _text: "Partnerships", _href: "/partnerships", _id: buttonsId[4]},
    { _text: "Contact Us", _href: "/contact-us", _id: buttonsId[5] },
];

export function toggleActive() {
    setTimeout(() => { // delay to give time
        let val = window.location.href; // website URL

        // looks up the URL to decide which button to activate
        // if (val.includes('about')) val = "abt";
        // else if (val.includes('products-and-services')) val = "prod";
        // else if (val.includes('clients')) val = "clnt";
        // else if (val.includes('media')) val = "mdia";
        // else if (val.includes('contact-us')) val = "contact-us";
        if (val.includes('home')) val = "home";
        else if (val.includes('about')) val = "abt";
        else if (val.includes('services')) val = "serv";
        else if (val.includes('events')) val = "events";
        else if (val.includes('partnerships')) val = "partners";
        else if (val.includes('contact-us')) val = "contact-us";
        else val = '';

        //#region Foreach function
        buttonsId.forEach((btn) => {
            let bt = document.querySelectorAll("#" + btn);

            if (bt) {
                bt.forEach(bt => {
                    if (btn == val) {
                        if (!bt.classList.contains("active")) {
                            bt.classList.toggle("active");
                            Toggle("top-nav",btn)
                        }
                    } else {
                        if (bt.classList.contains("active")) bt.classList.toggle("active");
                    }
                });
            }
        });
        //#endregion
    }, 80)
}