import twitterIcone from "../icones/Twitter.png";
import home from "../icones/Home-Fill.png";
import hashtag from "../icones/Explore.png";
import notification from "../icones/Notifications.png";
import message from "../icones/Messages.png";
import bookmark from "../icones/Bookmarks.png";
import list from "../icones/Lists.png";
import user from "../icones/Profile.png";
import more from "../icones/More.png";



const sidebars = [
    {
        name: false,
        icone:twitterIcone,
        link: "/"

    },
    {
        name:"Home",
        icone: home,
        link: "/"
    },
    {
        name:"Hashtag",
        icone: hashtag,
        link: "/explore"

    },
    {
        name:"Notification",
        icone: notification,
        link: "/notification"
    },
    {
        name:"Message",
        icone:message,
        link: "/message"
    },
    {
        name:"Bookmark",
        icone:bookmark,
        link: "/bookmark"
    },
    {
        name:"Liste",
        icone:list,
        link: "/liste"
    },
    {
        name:"Profil",
        icone:user,
        link: ""

    },
    {
        name:"More",
        icone:more,
        link: "/more"

    }
]
export default sidebars