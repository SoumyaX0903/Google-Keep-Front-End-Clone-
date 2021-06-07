import React from "react"
function foot()
{
    const d= new Date();
    const year= d.getFullYear();
    return (
    <footer>
    <p>Copyright © {year}</p>
    </footer>
    );
}
export default foot;