let inFrame
// This code isnt mine obviously
// Original code comes from interstellar
// sorry for stealing code 
try {
    inFrame = window !== top
} catch (e) {
    inFrame = true
}

if (!inFrame && !navigator.userAgent.includes("Firefox")) {
    const popup = open("about:blank", "_blank")
    if (!popup || popup.closed) {
        alert(" The following tab shows in your history. Allow popups and redirects to hide this from showing up in your history. If you would like to emjoy the site without redirects, go to https://hell3.d3ch.repl.co")
    } else {
        const doc = popup.document
        const iframe = doc.createElement("iframe")
        const style = iframe.style
        const link = doc.createElement("link")

        const name = localStorage.getItem("name") || "Classes";
        const icon = localStorage.getItem("icon") || "https://upload.wikimedia.org/wikipedia/commons/5/59/Google_Classroom_Logo.png";
        
        doc.title = name;
        link.rel = "icon";
        link.href = icon;
        
        iframe.src = location.href
        style.position = "fixed"
        style.top = style.bottom = style.left = style.right = 0
        style.border = style.outline = "none"
        style.width = style.height = "100%"

        doc.head.appendChild(link);
        doc.body.appendChild(iframe)
        location.replace("https://google.com")
    }
}
