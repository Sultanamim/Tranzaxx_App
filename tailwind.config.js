/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
    ],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins-Regular"],
                BebasNeue: ["BebasNeue"],
            },
            colors: {
                primary: "#00AEF0",
                primaryBlk: "#010101",
                lightColor: "#737373",
            },
            boxShadow: {
                custom: "0px 0px 40px 0px rgba(0, 0, 0, 0.05)",
                loginShadow: "0 0 30px rgba(0, 0, 0, 0.10)",
                "custom-blue": "0px 4px 10px 0px #1AB4F0",
            },
        },
    },
    plugins: [],
}
