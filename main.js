


// You must create an object with three keys, each representing one of the sections. Store that object in local storage.
// Then when you write your application, read from local storage and use the data to build the three sections in your HTML. 
// document.createElement()
// localStorage.getItem()
// You must use Flexbox to layout your page structure.
// You must push to Github and notify your lead instructor when you are done.

const myRawData = {
"general":
        {
    type: "advocate",
    specifically: "anomonous advocate",
    or: "I want to help the commander but not BE the commander, and I want to stick up for the people ",
    description: "must take care of myself. 16personalities.com says that if I allow my zeal to get out of had that I will find myself exhausted, unhealthy and stressed.  You think?! Yes, especially when up against conflict and / or critisism.   When I told a co-worker that I had started taking medicine for high blood pressure her immediate response was: 'Just now?!  I thought you had BEEN having high blood pressure!  It is that obvious for those that worked with me in the past.  I am working to leave that part of me IN the past and have a less stressful future."   
},

"people":[
    {
    who:"most of the room is filled with variations of advocates.",
    },
    {
    who:"Nick Black Maybe?  In mhy former life I was alot like him. "
    },    
    {
    who: "Gretchen"
    },   
    {
    who:"Daniel Figuero"
    }
    ],
commo: 
    {
    commoWithLittleSIB:"If only I HAD a little sib.  I will say that I tend to come off alittle too harshly when coaching people sometimes, like when I am new to them and they don't realize I can't help my voice.  I try to communicate effectively, but sometimes it's just a little too effective"
    ,
    
    commWithInstructors: "This is ironic because you better be nice to me.  Don't beat around the bush about it - get right to the point please, because I don't like my inteligence insulted either... And don't blow me off or insuate that if I were any kind of (insert adjetive-noun here), I wouldn't have to ask you whatever I just asked you in the first place.  I just won't want to ever talk to you again if you do that.  Have A LITTLE sympathy for the plight of the ignorant (uninformed)"
    ,
    
    teamMates: "I don't care how my team mates talk to me. I realize people each have their style.  I do hope that I can tell if they are being respectful (in their mind) or not.  Most people do make an effort.  Also, I sincerly hope that they don't take me the wrong way and that if they are questioning my attitude at any point, that they would tell me about it (preferably in an open, non-confrontational way), so that I could put thier mind at ease before they let themselves get all worked up over nothing.  I usually feel better when I remember that the world doesn't revolve around me.  Sometimes other people need to be reminded of that too."
    }
}
////

const saveMyData =function(databaseObject, localStorageKey) 
{


const stringifiedMe = JSON.stringify(databaseObject)

localStorage.setItem(localStorageKey, stringifiedMe)}

const loadMe = function (localStorageKey){
    
    const myString = (localStorage.getItem(localStorageKey))

    return(JSON.parse(myString))
}

saveMyData(myRawData, "myRawData")

const myJsonData = loadMe("myRawData")

let myStringOfData = myJsonData
/////

let theStringOfMe = document.getElementById("generalprofile")[0]

console.log(myRawData)

let generalMe = document.getElementsByClassName("generalprofile")

// for(let i = 0; i < myRawData.general.length; i++){
    console.log(myRawData.general.length);
    // let p =document.createElement(p);