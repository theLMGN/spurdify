;(() => {
    const SPURDIFICATION = {
        // extras
        "ro": "ru",
        "pu": "bu",
        " ex": "sex",
        "please": "plz",
        "sir": "sar",
        "ga": "gay",
        "ix": "ics",
        "he": "ha",
        "know": "no",
        "i": "ai",
        "po": "bo",



        "spurdo": "spurdo",
        "sparde": "spärde",
        "kek": "geg",
        "epic": "ebin",
        "right": "rite",
        "your": "ur",
        "god": "dog",
        "linux": "linugs",
        "fucking": "fuggin",
        "are": "r",
        "you": "u",
        "wh": "w",
        "th": "d",
        "af": "ab",
        "ap": "ab",
        "ca": "ga",
        "ck": "gg",
        "co": "go",
        "ev": "eb",
        "ex": "egz",
        "et": "ed",
        "iv": "ib",
        "it": "id",
        "ke": "ge",
        "nt": "nd",
        "op": "ob",
        "ot": "od",
        "po": "bo",
        "pe": "be",
        "pi": "bi",
        "up": "ub",
        "va": "ba",
        "ck": "gg",
        "cr": "gr",
        "kn": "gn",
        "lt": "ld",
        "mm": "m",
        "pr": "br",
        "ts": "dz",
        "tr": "dr",
        "bs": "bz",
        "ds": "dz",
        "es": "es",
        "fs": "fz",
        "gs": "gz",
        "is": "iz",
        "as": "az",
        "ls": "lz",
        "ms": "mz",
        "ns": "nz",
        "rs": "rz",
        "ss": "sz",
        "ts": "tz",
        "us": "uz",
        "ws": "wz",
        "ys": "yz",
        "alk": "olk",
        "ing": "ign",
        "ic": "ig",
        "ng": "nk",
        "p": "b",
    }
    const SPURDGEX = new RegExp("(" + Object.keys(SPURDIFICATION).join("|") + ")", "g")

    const sillyOs = ["ö", "ø", "0"]
    const spurdReplace = (string) => 
        string.replace(SPURDGEX, (match) => SPURDIFICATION[match] || match)
    
    /**
     * @param {string} string 
     * @returns {string}
     */
    const mangleOs = (string) =>
        string.replace(/o/g, (match,i) => sillyOs[i % sillyOs.length])
    
    const bigEmote = (string) =>
        string.replace(/[.,;]/g, (match,i) => {
            let leader = "",
            mouth = "D"
            switch (match) {
                case ".": leader = ":"; break
                case ",": leader = "X"; break
                case ";": leader = ":"; mouth = "O"; break
                default: return match;
            }
            return `${leader}${mouth.repeat(i % 4 + 1)}`
        })
    
    const spurdify = (string) =>
        mangleOs(bigEmote(spurdReplace(string.toLowerCase())))

    
    ;(typeof module != "undefined" ? module.exports : window).spurdify = spurdify;
})()