interface Page {
    name: string;
    href: string;
    children?: Page[];
}

export const Pages: Page[] = [
    { 
        name: "About the Art",
        href: "/",
        children: [
            {
                name: "Mona Kadah",
                href: "/#mona-kadah"
            },
            {
                name: "Weshoyot Alvitre",
                href: "/#weshoyot-alvitre"
            },
            {
                name: "Refaat Alareer",
                href: "/#refaat-alareer"
            }
        ]
    },
    {
        name: "Art Mosaics",
        href: "/mosaics", 
        children: [
            {
                name: "How to use Indigenous Truthtelling for Education Pieces?",
                href: "/mosaics#how-to"
            }
        ]
    },
    {
        name: "Indigenous Genocide",
        href: "/"
    },
    {
        name: "About Us",
        href: "/about"

    },
    {
        name: "Get Involved",
        href: "/howToHelp"

    },
    {
        name: "Resources",
        href: "/"

    },
    {
        name: "Contact Us",
        href: "/contact-us"

    },
];
export default Pages;