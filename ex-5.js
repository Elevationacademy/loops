// - DO NOT modify/delete *any* starter code (you can remove the comments though)

function Exercise5() {

    const emails = [
        { name: "Jessie", message: "Congrats on the promotion!" },
        { name: "Valerie", message: "Good luck with the space mission" },
        { name: "Marcus", message: "You've been credited for your performance" }
    ]

    const ex = function (emails) {
        //Write your logic here (between the curly braces of `ex`)
        while (emails.length > 0) {
            console.log(emails[0].message)
            console.log("Sent email to " + emails[0].name)
            emails.splice(0, 1)
        }
    }

    return { ex, emails }
}

//feel free to ignore this:
var x = Exercise5()
typeof module == 'undefined' ? x.ex(x.emails) : module.exports = x