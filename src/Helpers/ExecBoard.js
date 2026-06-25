/*import SurajHeadshot from "../Media/SurajShahHeadshot.png";
import SofieHeadshot from "../Media/SofieHeadshot.png";
import AditiHeadshot from "../Media/AditiHeadshot.png";
import ElizabethHeadshot from "../Media/ElizabethHeadshot.png";
import AdhilaHeadshot from "../Media/AdhilaHeadshot.png";
import ArathiHeadshot from "../Media/ArathiHeadshot.png";
import JHerbstHeadshot from "../Media/JHerbstHeadshot.png";
import TinaHeadshot from "../Media/TinaHeadshot.png";
import JEstesHeadshot from "../Media/JEstesHeadshot.png";
import PolaHeadshot from "../Media/PolaHeadshot.png";
import ParkerHeadshot from "../Media/ParkerHeadshot.png";*/

/*PHOTOS FOR CURRENT EXECUTIVE BOARD MEMBERS */
import SofieHeadshot from "../Media/SofieHeadshot.png"
import KatherineHeadshot from "../Media/26-27_Board/KatherineHeadshot.png"
import KassandraHeadshot from "../Media/26-27_Board/KassandraHeadshot.jpeg"
import AlexisHeadshot from "../Media/26-27_Board/AlexisHeadshot.png"
import ValeriaHeadshot from "../Media/ValeriaHeadshot.png"
import RaelaHeadshot from "../Media/RaelaHeadshot.png"
import AnavHeadshot from "../Media/26-27_Board/AnavHeadshot.png"
    /*RAELA HEADSHOT AND INFO MISSING */


/*PHOTOS FOR CURRENT INTERNAL BOARD MEMBERS */
    /*MAKAYLA AND ANSON HEADSHOT AND INFO MISSING*/  
import ParkerHeadshot from "../Media/ParkerHeadshot.png"
import PolaHeadshot from "../Media/PolaHeadshot.png"
import JasmineHeadshot from "../Media/26-27_Board/JuliaHeadshot.png"

/*PHOTOS FOR CURRENT EXTERNAL BOARD MEMBERS */
import DanielaHeadshot from "../Media/26-27_Board/DanielaHeadshot.png"
import JordanHeadshot from "../Media/JHerbstHeadshot.png"
import AnjalieHeadshot from "../Media/26-27_Board/AnjalieHeadshot.png"
import AashaHeadshot from "../Media/26-27_Board/AashaHeadshot.jpeg"
import SriHeadshot from "../Media/SriHeadshot.jpeg"
    /*SRI HEADSHOT AND INFO MISSING  */

/*PHOTOS FOR CURRENT FUNDRAISING BOARD MEMBERS */
import VanessaHeadshot from "../Media/26-27_Board/VanessaHeadshot.png"
import RuthHeadshot from "../Media/26-27_Board/RuthHeadshot.png"
import MichelleHeadshot from "../Media/26-27_Board/MichelleHeadshot.png"


export const ExecBoard = [
    /*EXECUTIVE BOARD MEMBERS */
    {
        id: "sofie",
        name: "Sofie",
        image: SofieHeadshot,
        description: "4th Year", /*Year?? */
        major: "Civil Engineering",
        position: "President",
        type: "executive"
    },

    {
        id: "katherine", 
        name: "Katherine",
        image: KatherineHeadshot,
        description: "2nd Year",
        major: "Biophysics",
        position: "Vice President",
        type: "executive"
    },

    {
        id: "alexis",
        name: "Alexis",
        image: AlexisHeadshot,
        description: "3rd Year",
        major: "Chemical and Biomolecular Engineering",
        position: "Director of External Affairs",
        type: "executive"
    },

    {
        id: "kassandra",
        name: "Kassandra",
        image: KassandraHeadshot,
        description: "3rd Year",
        major: "Civil Engineering",
        position: "Director of Financial Affairs",
        type: "executive"
    },

    /*
    {
        id: "valeria",
        name: "Valeria", 
        image: ValeriaHeadshot,
        description: "N/A", //need description
        major: "Civil Engineering",
        position: "Public Relations Director",
        type: "executive"
    },
    */

    {
        id: "raela", 
        name: "Raela",
        image: RaelaHeadshot, 
        description: "3rd Year", 
        major: "Civil Engineering", 
        position: "Director of Internal Affairs", 
        type: "executive"
    },

    {
        id: "anav",
        name: "Anav",
        image: AnavHeadshot,
        description: "1st Year",
        major: "Materials Engineering",
        position: "Project Relations Chair",
        type: "executive"
    }, 

//INTERNAL BOARD MEMBERS
    {
        id: "jasmine",
        name: "Jasmine",
        image: JasmineHeadshot,
        description: "4th Year",
        major: "Aerospace Engineering",
        position: "Historian",
        type: "internal"
    },

    {
        id: "pola",
        name: "Pola",
        image: PolaHeadshot,
        description: "3rd Year",
        major: "Physics",
        positon: "Socials Co-Chair",
        type: "internal"
    },
    
    {
        id: "makayla",
        name: "Makayla",
        image: "", //headshot? 
        description: "N/A", //year? 
        major: "Mechanical Engineering",
        position: "Socials Co-Chair", 
        type: "internal"
    },

    {
        id: "anson",
        name: "Anson",
        image: "", //headshot?
        description: "N/A", //year? 
        major: "Civil Engineering", 
        position: "Secretary",
        type: "internal"
    },



/*EXTERNAL BOARD MEMBERS */

/*
    {
        id: "daniela",
        name: "Daniela",
        image: DanielaHeadshot,
        description: "3rd Year",
        major: "Civil Engineering",
        position: "Marketing Lead",
        type: "external"
    },
    */

    {
        id: "sri",
        name: "Sri",
        image: SriHeadshot,
        description: "2nd Year",
        major: "Computer Science",
        position: "Web Development Chair",
        type: "external"
    },

    {
        id: "anjalie",
        name: "Anjalie",
        image: AnjalieHeadshot ,
        description: "1st Year",
        major: "Chemical Engineering",
        position: "Marketing Chair",
        type: "external"
    }, 

    {
        id: "parker",
        name: "Parker",
        image: ParkerHeadshot,
        description: "3rd Year",
        major: "Aerospace Engineering",
        position: "Professional Development Chair",
        type: "external"
    },
 

    

//FUNDRAISING BOARD
/*
    {
        id: "ruth",
        name: "Ruth",
        image: RuthHeadshot,
        description: "3rd Year",
        major: "Bioengineering",
        position: "Fundraising Co-Chair",
        type: "fundraising"
    },
    */

/*
    {

        id: "michelle",
        name: "Michelle",
        image: MichelleHeadshot,
        description: "3rd Year",
        major: "Civil Engineering",
        position: "Fundraising Co-Chair",
        type: "fundraising"
    },
    */

    {
        id: "vanessa",
        name: "Vanessa",
        image: VanessaHeadshot,
        description: "2nd Year",
        major: "Mechanical Engineering",
        position: "Fundraising Chair - Central",
        type: "fundraising"
    },
    
    {
        id: "aasha",
        name: "Aasha",
        image: AashaHeadshot,
        description: "2nd Year",
        major: "Applied Math and Civil Engineering",
        position: "Fundraising Chair - Internal",
        type: "fundraising"
    },

    {
        id: "belen",
        name: "Belen",
        image: "",
        description: "3rd Year",
        major: "Physics", 
        position: "Fundraising Chair - External", 
        type: "fundraising"

    },


]

