// From Sept 3, 2026 at 1:35am
/* =========================================================
   ESSAzLife
   FULL SCRIPT.JS
========================================================= */


/* =========================================================
   GLOBAL STORAGE
========================================================= */

const ACCOUNTS_KEY = "essazLifeAccounts";
const SESSION_KEY = "essazLifeCurrentUser";

let pendingWelcomeCredentials = null;


/* =========================================================
   APP DATA
========================================================= */

const breedOptions = {

    Dog: [
        "Labrador Retriever",
        "Golden Retriever",
        "German Shepherd",
        "Border Collie",
        "Siberian Husky",
        "Beagle",
        "Springer Spaniel",
        "German Shorthaired Pointer",
        "Poodle",
        "Australian Shepherd",
        "Corgi",
        "Chihuahua",
        "Pit Bull",
        "Mixed Breed"
    ],

    Cat: [
        "Domestic Shorthair",
        "Domestic Longhair",
        "Maine Coon",
        "Siamese",
        "Persian",
        "Ragdoll",
        "Bengal",
        "Sphynx",
        "British Shorthair",
        "Mixed Breed"
    ],

    Bunny: [
        "Holland Lop",
        "Mini Lop",
        "Netherland Dwarf",
        "Lionhead",
        "Dutch",
        "Flemish Giant",
        "Rex",
        "Mixed Breed"
    ],

    Bear: [
        "Brown Bear",
        "Black Bear",
        "Polar Bear",
        "Panda",
        "Teddy Bear"
    ],

    Cow: [
        "Holstein",
        "Jersey",
        "Angus",
        "Highland",
        "Hereford",
        "Longhorn"
    ],

    Fox: [
        "Red Fox",
        "Arctic Fox",
        "Fennec Fox",
        "Gray Fox",
        "Kit Fox",
        "Swift Fox",
        "Silver Fox"
    ],

    Wolf: [
        "Gray Wolf",
        "Arctic Wolf",
        "Red Wolf",
        "Mexican Gray Wolf",
        "Eurasian Wolf"
    ],

    Coyote: [
        "Eastern Coyote",
        "Western Coyote",
        "Plains Coyote",
        "Mountain Coyote",
        "Desert Coyote"
    ],

    Frog: [
        "Tree Frog",
        "Bullfrog",
        "Poison Dart Frog"
    ],

    Elephant: [
        "African Elephant",
        "Asian Elephant"
    ],

    Monkey: [
        "Capuchin",
        "Macaque",
        "Spider Monkey",
        "Squirrel Monkey"
    ],

    Deer: [
        "White-Tailed Deer",
        "Mule Deer",
        "Red Deer",
        "Fallow Deer"
    ],

    Bird: [
        "Parakeet",
        "Cockatiel",
        "Parrot",
        "Canary",
        "Finch",
        "Owl",
        "Crow"
    ],

    Penguin: [
        "Macaroni",
        "Emperor",
        "Chinstrap",
        "Humboldt",
        "Gentoo",
        "Adelie"
    ],

    Pig: [
        "Berkshire",
        "Duroc",
        "Hampshire",
        "Landrace",
        "Pietrain",
        "Bentheim Black Pied",
        "Pot-Bellied Pig",
        "Kunekune",
        "Juliana Pig"
    ],

    Leopard: [
        "African Leopard",
        "Amur Leopard",
        "Arabian Leopard",
        "Indian Leopard",
        "Javan Leopard",
        "Persian Leopard",
        "Sri Lankan Leopard",
        "Snow Leopard"
    ],

    Tiger: [
        "Bengal Tiger",
        "Siberian Tiger",
        "Sumatran Tiger",
        "Malayan Tiger",
        "Indochinese Tiger",
        "South China Tiger"
    ],

    Lion: [
        "African Lion",
        "Asiatic Lion"
    ],

    Horse: [
        "Arabian",
        "Quarter Horse",
        "Thoroughbred",
        "Appaloosa",
        "Paint Horse",
        "Mustang",
        "Morgan",
        "Friesian",
        "Clydesdale",
        "Percheron",
        "Shetland Pony",
        "Welsh Pony",
        "Miniature Horse",
        "Mixed Breed"
    ],

    Opossum: [
        "Virginia Opossum",
        "Common Opossum",
        "Short-Tailed Opossum",
        "Woolly Opossum"
    ],

    "Red Panda": [
        "Himalayan Red Panda",
        "Chinese Red Panda"
    ],

    "Rodent / Small Animal": [
        "Ferret",
        "Mouse",
        "Rat",
        "Guinea Pig",
        "Hamster",
        "Gerbil",
        "Chinchilla",
        "Squirrel",
        "Chipmunk",
        "Prairie Dog",
        "Capybara"
    ],

    Bug: [
        "Butterfly",
        "Moth",
        "Ladybug",
        "Beetle",
        "Bee",
        "Bumblebee",
        "Dragonfly",
        "Grasshopper",
        "Cricket",
        "Praying Mantis",
        "Caterpillar",
        "Firefly",
        "Ant",
        "Spider",
        "Other Bug"
    ]
};


const speciesIcons = {
    Dog: "🐶",
    Cat: "🐱",
    Bunny: "🐰",
    Bear: "🐻",
    Cow: "🐮",
    Fox: "🦊",
    Wolf: "🐺",
    Coyote: "🐺",
    Frog: "🐸",
    Elephant: "🐘",
    Monkey: "🐵",
    Deer: "🦌",
    Bird: "🐦",
    Penguin: "🐧",
    Pig: "🐷",
    Leopard: "🐆",
    Tiger: "🐯",
    Lion: "🦁",
    Horse: "🐴",
    Opossum: "🐾",
    "Red Panda": "🐾",
    "Rodent / Small Animal": "🐹",
    Bug: "🐞",
    Custom: "🐾"
};


const standardSpecies = [
    "Dog",
    "Cat",
    "Bunny",
    "Bear",
    "Cow",
    "Fox",
    "Wolf",
    "Coyote",
    "Frog",
    "Elephant",
    "Monkey",
    "Deer",
    "Bird",
    "Penguin",
    "Pig",
    "Leopard",
    "Tiger",
    "Lion",
    "Horse",
    "Opossum",
    "Red Panda",
    "Rodent / Small Animal",
    "Bug"
];


const presetColors = [
    "#ff3b30",
    "#ff9500",
    "#ffcc00",
    "#34c759",
    "#007aff",
    "#5856d6",
    "#ff69b4",
    "#87ceeb",
    "#4fb5ae",
    "#8b4513",
    "#000000",
    "#ffffff",
    "#808080",
    "#ffd700",
    "#c0c0c0"
];


const careTypes = [
    { name: "Food", icon: "🍖" },
    { name: "Water", icon: "💧" },
    { name: "Treat", icon: "🦴" },
    { name: "Walk", icon: "🐕" },
    { name: "Outing", icon: "🚗" },
    { name: "Potty", icon: "🚽" },
    { name: "Training", icon: "⭐" },
    { name: "Medication", icon: "💊" },
    { name: "Bath", icon: "🛁" },
    { name: "Brushing", icon: "🪮" }
];


const presetTricks = [
    "Sit",
    "Stay",
    "Come",
    "Down",
    "Heel",
    "Wait",
    "Leave It",
    "Drop It",
    "Touch",
    "Look at Me",
    "Place",
    "Stand",
    "Spin",
    "Shake",
    "High Five",
    "Wave",
    "Roll Over",
    "Play Dead",
    "Bow",
    "Speak",
    "Quiet",
    "Fetch",
    "Find It",
    "Back Up",
    "Jump",
    "Hug",
    "Kiss",
    "Paw"
];


const diaryMoodOptions = [
    { value: "Amazing", emoji: "🤩" },
    { value: "Happy", emoji: "😊" },
    { value: "Calm", emoji: "😌" },
    { value: "Excited", emoji: "🥳" },
    { value: "Loved", emoji: "🥰" },
    { value: "Okay", emoji: "🙂" },
    { value: "Tired", emoji: "😴" },
    { value: "Bored", emoji: "😐" },
    { value: "Confused", emoji: "😕" },
    { value: "Anxious", emoji: "😟" },
    { value: "Sad", emoji: "😢" },
    { value: "Angry", emoji: "😠" },
    { value: "Overwhelmed", emoji: "😵‍💫" },
    { value: "Scared", emoji: "😨" },
    { value: "Custom", emoji: "💭" }
];


/* =========================================================
   PLAYABLE ESSAs
========================================================= */

const playableEssas = [

    {
        id: "moocow",
        name: "MooCow",
        image: "play-essas/moocow.png",
        fallbackIcon: "🐮",
        unlockLevel: 1
    },

    {
        id: "daisybelle",
        name: "DaisyBelle",
        image: "play-essas/daisybelle.png",
        fallbackIcon: "🐮",
        unlockLevel: 10
    },

    {
        id: "oreo",
        name: "Oreo",
        image: "play-essas/oreo.png",
        fallbackIcon: "🐶",
        unlockLevel: 20
    },

    {
        id: "stormy",
        name: "Stormy",
        image: "play-essas/stormy.png",
        fallbackIcon: "🐶",
        unlockLevel: 30
    },

    {
        id: "mudpie",
        name: "Mudpie",
        image: "play-essas/mudpie.png",
        fallbackIcon: "🐶",
        unlockLevel: 40
    },

    {
        id: "mocha",
        name: "Mocha",
        image: "play-essas/mocha.png",
        fallbackIcon: "🐶",
        unlockLevel: 50
    },

    {
        id: "moose",
        name: "Moose",
        image: "play-essas/moose.png",
        fallbackIcon: "🐶",
        unlockLevel: 60
    },

    {
        id: "lily",
        name: "Lily",
        image: "play-essas/lily.png",
        fallbackIcon: "🐶",
        unlockLevel: 70
    }

];
/* =========================================================
   PLAY HOUSE ROOMS
========================================================= */

const playRooms = [

    {
        id: "playroom",
        name: "Playroom",
        icon: "🛋️",
        background: "play-room/playroom.png"
    },

    {
        id: "kitchen",
        name: "Kitchen",
        icon: "🍳",
        background: "play-room/kitchen.png"
    },

    {
        id: "bathroom",
        name: "Bathroom",
        icon: "🛁",
        background: "play-room/bathroom.png"
    },

    {
        id: "bedroom",
        name: "Bedroom",
        icon: "🛏️",
        background: "play-room/bedroom.png"
    },

    {
        id: "backyard",
        name: "Backyard",
        icon: "🌳",
        background: "play-room/backyard.png"
    },

    {
        id: "arcade",
        name: "Arcade",
        icon: "🕹️",
        background: "play-room/arcade.png"
    }

];


/* =========================================================
   PLAY MODE ITEMS
========================================================= */

const playFoods = [

    {
        id: "apple",
        name: "Apple",
        icon: "🍎",
        food: 18,
        happiness: 2,
        xp: 4
    },

    {
        id: "carrot",
        name: "Carrot",
        icon: "🥕",
        food: 16,
        happiness: 1,
        xp: 4
    },

    {
        id: "sandwich",
        name: "Sandwich",
        icon: "🥪",
        food: 24,
        happiness: 3,
        xp: 5
    },

    {
        id: "pizza",
        name: "Pizza",
        icon: "🍕",
        food: 28,
        happiness: 5,
        xp: 6
    },

    {
        id: "cookie",
        name: "Cookie",
        icon: "🍪",
        food: 12,
        happiness: 8,
        xp: 5
    },

    {
        id: "strawberry",
        name: "Strawberry",
        icon: "🍓",
        food: 15,
        happiness: 4,
        xp: 4
    }
];


const playDrinks = [

    {
        id: "water",
        name: "Water",
        icon: "💧",
        water: 25,
        happiness: 1,
        xp: 4
    },

    {
        id: "milk",
        name: "Milk",
        icon: "🥛",
        water: 20,
        happiness: 3,
        xp: 5
    },

    {
        id: "juice",
        name: "Fruit Juice",
        icon: "🧃",
        water: 22,
        happiness: 5,
        xp: 5
    },

    {
        id: "lemonade",
        name: "Lemonade",
        icon: "🍋",
        water: 22,
        happiness: 6,
        xp: 5
    },

    {
        id: "hot-cocoa",
        name: "Hot Cocoa",
        icon: "☕",
        water: 16,
        happiness: 8,
        xp: 6
    },

    {
        id: "smoothie",
        name: "Smoothie",
        icon: "🥤",
        water: 20,
        happiness: 7,
        xp: 6
    }
];


const playSoaps = [

    {
        id: "teal",
        name: "Teal Soap",
        color: "#4fb5ae",
        cleanliness: 30,
        xp: 6
    },

    {
        id: "pink",
        name: "Pink Soap",
        color: "#f59ab2",
        cleanliness: 30,
        xp: 6
    },

    {
        id: "purple",
        name: "Purple Soap",
        color: "#a98be8",
        cleanliness: 30,
        xp: 6
    },

    {
        id: "blue",
        name: "Blue Soap",
        color: "#79b8f3",
        cleanliness: 30,
        xp: 6
    },

    {
        id: "green",
        name: "Green Soap",
        color: "#8acb88",
        cleanliness: 30,
        xp: 6
    },

    {
        id: "yellow",
        name: "Yellow Soap",
        color: "#f4d76b",
        cleanliness: 30,
        xp: 6
    }
];


/* =========================================================
   BASIC HELPERS
========================================================= */

function escapeHTML(value) {

    return String(
        value ?? ""
    )
        .replaceAll(
            "&",
            "&amp;"
        )
        .replaceAll(
            "<",
            "&lt;"
        )
        .replaceAll(
            ">",
            "&gt;"
        )
        .replaceAll(
            '"',
            "&quot;"
        )
        .replaceAll(
            "'",
            "&#039;"
        );
}


function safeJSON(
    key,
    fallback
) {

    try {

        const result =
            JSON.parse(
                localStorage.getItem(
                    key
                )
            );

        return result === null
            ? fallback
            : result;

    } catch (error) {

        return fallback;
    }
}


/* =========================================================
   ACCOUNT STORAGE
========================================================= */

function getAccounts() {

    return safeJSON(
        ACCOUNTS_KEY,
        []
    );
}


function saveAccounts(
    accounts
) {

    localStorage.setItem(
        ACCOUNTS_KEY,
        JSON.stringify(
            accounts
        )
    );
}


function getCurrentUserId() {

    return localStorage.getItem(
        SESSION_KEY
    );
}


function setCurrentUserId(
    userId
) {

    if (userId) {

        localStorage.setItem(
            SESSION_KEY,
            String(
                userId
            )
        );

    } else {

        localStorage.removeItem(
            SESSION_KEY
        );
    }
}


function getCurrentUser() {

    const id =
        getCurrentUserId();

    if (!id) {
        return null;
    }

    return (
        getAccounts().find(
            function(account) {

                return (
                    String(
                        account.id
                    ) ===
                    String(
                        id
                    )
                );
            }
        ) || null
    );
}


/* =========================================================
   USER STORAGE
========================================================= */

function userStorageKey(
    type
) {

    const user =
        getCurrentUser();

    if (!user) {
        return null;
    }

    return (
        "essazLife_" +
        user.id +
        "_" +
        type
    );
}
/* =========================================================
   USER DATA STORAGE
========================================================= */

function getSavedEssas() {

    const key =
        userStorageKey(
            "essas"
        );

    if (!key) {
        return [];
    }

    return safeJSON(
        key,
        []
    );
}


function saveEssas(
    essas
) {

    const key =
        userStorageKey(
            "essas"
        );

    if (!key) {
        return;
    }

    localStorage.setItem(
        key,
        JSON.stringify(
            essas
        )
    );
}


function getSavedCare() {

    const key =
        userStorageKey(
            "care"
        );

    if (!key) {
        return [];
    }

    return safeJSON(
        key,
        []
    );
}


function saveCare(
    care
) {

    const key =
        userStorageKey(
            "care"
        );

    if (!key) {
        return;
    }

    localStorage.setItem(
        key,
        JSON.stringify(
            care
        )
    );
}


function getSavedTricks() {

    const key =
        userStorageKey(
            "tricks"
        );

    if (!key) {
        return [];
    }

    return safeJSON(
        key,
        []
    );
}


function saveTricks(
    tricks
) {

    const key =
        userStorageKey(
            "tricks"
        );

    if (!key) {
        return;
    }

    localStorage.setItem(
        key,
        JSON.stringify(
            tricks
        )
    );
}


function getSavedScores() {

    const key =
        userStorageKey(
            "scores"
        );

    if (!key) {
        return [];
    }

    return safeJSON(
        key,
        []
    );
}


function saveScores(
    scores
) {

    const key =
        userStorageKey(
            "scores"
        );

    if (!key) {
        return;
    }

    localStorage.setItem(
        key,
        JSON.stringify(
            scores
        )
    );
}


function getSavedDrawings() {

    const key =
        userStorageKey(
            "drawings"
        );

    if (!key) {
        return [];
    }

    return safeJSON(
        key,
        []
    );
}


function saveDrawings(
    drawings
) {

    const key =
        userStorageKey(
            "drawings"
        );

    if (!key) {
        return;
    }

    localStorage.setItem(
        key,
        JSON.stringify(
            drawings
        )
    );
}


function getSavedDiary() {

    const key =
        userStorageKey(
            "diary"
        );

    if (!key) {
        return [];
    }

    return safeJSON(
        key,
        []
    );
}


function saveDiary(
    diary
) {

    const key =
        userStorageKey(
            "diary"
        );

    if (!key) {
        return;
    }

    localStorage.setItem(
        key,
        JSON.stringify(
            diary
        )
    );
}


/* =========================================================
   PLAY DATA STORAGE
========================================================= */

function getDefaultPlayData() {

    return {

        trainerXP: 0,

        trainerLevel: 1,

        unlockedEssaIds: [
            "moocow"
        ],

        selectedEssaId:
            "moocow",

        hasSeenPlayIntro:
            false,

        essaStats: {

            moocow: {

                food: 80,

                water: 80,

                cleanliness: 80,

                happiness: 90,

                lastFoodId: null,

                lastDrinkId: null,

                lastSoapId: null

            }

        }

    };
}


function normalizePlayStatValue(
    value
) {

    const number =
        Number(
            value
        );

    if (
        !Number.isFinite(
            number
        )
    ) {

        return 0;
    }

    return Math.max(
        0,
        Math.min(
            100,
            number
        )
    );
}


function makeDefaultPlayEssaStats() {

    return {

        food: 80,

        water: 80,

        cleanliness: 80,

        happiness: 90,

        lastFoodId: null,

        lastDrinkId: null,

        lastSoapId: null

    };
}


function getPlayEssaStats(
    playData,
    essaId
) {

    if (
        !playData.essaStats ||
        typeof playData.essaStats !==
            "object"
    ) {

        playData.essaStats = {};
    }


    if (
        !playData.essaStats[
            essaId
        ]
    ) {

        playData.essaStats[
            essaId
        ] =
            makeDefaultPlayEssaStats();
    }


    const stats =
        playData.essaStats[
            essaId
        ];


    stats.food =
        normalizePlayStatValue(
            stats.food
        );


    stats.water =
        normalizePlayStatValue(
            stats.water
        );


    stats.cleanliness =
        normalizePlayStatValue(
            stats.cleanliness
        );


    stats.happiness =
        normalizePlayStatValue(
            stats.happiness
        );


    return stats;
}


function getSavedPlayData() {

    const key =
        userStorageKey(
            "play"
        );


    const defaults =
        getDefaultPlayData();


    if (!key) {

        return defaults;
    }


    const saved =
        safeJSON(
            key,
            defaults
        );


    const playData = {

        trainerXP:
            Number(
                saved.trainerXP
            ) || 0,

        trainerLevel:
            Number(
                saved.trainerLevel
            ) || 1,

        unlockedEssaIds:
            Array.isArray(
                saved.unlockedEssaIds
            )

                ? saved.unlockedEssaIds

                : [
                    "moocow"
                ],

        selectedEssaId:
            saved.selectedEssaId ||
            "moocow",

        hasSeenPlayIntro:
            Boolean(
                saved.hasSeenPlayIntro
            ),

        essaStats:
            (
                saved.essaStats &&
                typeof saved.essaStats ===
                    "object"
            )

                ? saved.essaStats

                : {}

    };


    if (
        !playData.unlockedEssaIds.includes(
            "moocow"
        )
    ) {

        playData.unlockedEssaIds.unshift(
            "moocow"
        );
    }


    playableEssas.forEach(
        function(essa) {

            if (
                playData.trainerLevel >=
                    essa.unlockLevel &&
                !playData.unlockedEssaIds.includes(
                    essa.id
                )
            ) {

                playData.unlockedEssaIds.push(
                    essa.id
                );
            }

        }
    );


    playData.unlockedEssaIds.forEach(
        function(essaId) {

            getPlayEssaStats(
                playData,
                essaId
            );

        }
    );


    savePlayData(
        playData
    );


    return playData;
}


function savePlayData(
    playData
) {

    const key =
        userStorageKey(
            "play"
        );


    if (!key) {

        return;
    }


    localStorage.setItem(
        key,
        JSON.stringify(
            playData
        )
    );
}


/* =========================================================
   PASSWORD HELPERS
========================================================= */

function bytesToHex(
    bytes
) {

    return Array.from(
        bytes
    )
        .map(
            function(byte) {

                return byte
                    .toString(
                        16
                    )
                    .padStart(
                        2,
                        "0"
                    );
            }
        )
        .join("");
}


function hexToBytes(
    hex
) {

    const bytes =
        new Uint8Array(
            hex.length /
            2
        );


    for (
        let i = 0;
        i < bytes.length;
        i++
    ) {

        bytes[i] =
            parseInt(
                hex.substr(
                    i * 2,
                    2
                ),
                16
            );
    }


    return bytes;
}


async function hashPassword(
    password,
    existingSalt = null
) {

    const encoder =
        new TextEncoder();


    let salt;


    if (existingSalt) {

        salt =
            hexToBytes(
                existingSalt
            );

    } else {

        salt =
            crypto.getRandomValues(
                new Uint8Array(
                    16
                )
            );
    }


    const passwordKey =
        await crypto.subtle.importKey(

            "raw",

            encoder.encode(
                password
            ),

            {
                name:
                    "PBKDF2"
            },

            false,

            [
                "deriveBits"
            ]

        );


    const derivedBits =
        await crypto.subtle.deriveBits(

            {

                name:
                    "PBKDF2",

                salt:
                    salt,

                iterations:
                    100000,

                hash:
                    "SHA-256"

            },

            passwordKey,

            256

        );


    return {

        salt:
            bytesToHex(
                salt
            ),

        hash:
            bytesToHex(
                new Uint8Array(
                    derivedBits
                )
            )

    };
}


async function verifyPassword(
    password,
    account
) {

    if (
        !account ||
        !account.passwordSalt ||
        !account.passwordHash
    ) {

        return false;
    }


    const result =
        await hashPassword(
            password,
            account.passwordSalt
        );


    return (
        result.hash ===
        account.passwordHash
    );
}


/* =========================================================
   HEADER HELPERS
========================================================= */

function getHeaderButtons() {

    return document.querySelector(
        ".header-buttons"
    );
}


function showHeaderButtons(
    shouldShow
) {

    const buttons =
        getHeaderButtons();


    if (!buttons) {

        return;
    }


    buttons.style.display =
        shouldShow
            ? "flex"
            : "none";
}


function setupHeaderButtons() {

    const buttons =
        getHeaderButtons();


    if (!buttons) {

        return;
    }


    const buttonList =
        buttons.querySelectorAll(
            "button"
        );


    if (
        buttonList.length >=
        1
    ) {

        buttonList[0].onclick =
            function() {

                showHelp();
            };
    }


    if (
        buttonList.length >=
        2
    ) {

        buttonList[1].onclick =
            function() {

                renderProfile();
            };
    }


    if (
        buttonList.length >=
        3
    ) {

        buttonList[2].onclick =
            function() {

                logoutUser();
            };
    }
}


/* =========================================================
   THEME HELPERS
========================================================= */

function resetPageTheme() {

    document.body.style.background =
        "";

    document.body.style.color =
        "";


    const main =
        document.querySelector(
            "main"
        );


    if (main) {

        main.style.background =
            "";

        main.style.color =
            "";
    }
}

function applyEssaProfileTint(
    favoriteColor
) {

    resetPageTheme();


    const color =
        (
            typeof favoriteColor === "string" &&
            /^#[0-9a-f]{6}$/i.test(
                favoriteColor
            )
        )
            ? favoriteColor
            : "#4fb5ae";


    document.body.style.background =
        hexToRGBA(
            color,
            0.12
        );


    const main =
        document.querySelector(
            "main"
        );


    if (main) {

        main.style.background =
            hexToRGBA(
                color,
                0.06
            );
    }
}



function hexToRGBA(
    hex,
    alpha
) {

    if (
        !hex ||
        !/^#[0-9a-f]{6}$/i.test(
            hex
        )
    ) {

        return (
            "rgba(79,181,174," +
            alpha +
            ")"
        );
    }


    const red =
        parseInt(
            hex.slice(
                1,
                3
            ),
            16
        );


    const green =
        parseInt(
            hex.slice(
                3,
                5
            ),
            16
        );


    const blue =
        parseInt(
            hex.slice(
                5,
                7
            ),
            16
        );


    return (
        "rgba(" +
        red +
        "," +
        green +
        "," +
        blue +
        "," +
        alpha +
        ")"
    );
}


/* =========================================================
   DATE HELPERS
========================================================= */

function formatDate(
    dateValue
) {

    if (!dateValue) {

        return "";
    }


    const date =
        new Date(
            dateValue
        );


    if (
        Number.isNaN(
            date.getTime()
        )
    ) {

        return String(
            dateValue
        );
    }


    return date.toLocaleDateString(
        undefined,
        {
            year:
                "numeric",

            month:
                "long",

            day:
                "numeric"
        }
    );
}


function formatDateTime(
    dateValue
) {

    if (!dateValue) {

        return "";
    }


    const date =
        new Date(
            dateValue
        );


    if (
        Number.isNaN(
            date.getTime()
        )
    ) {

        return String(
            dateValue
        );
    }


    return date.toLocaleString();
}


function getRelativeTime(
    dateValue
) {

    if (!dateValue) {

        return "Never";
    }


    const date =
        new Date(
            dateValue
        );


    const now =
        new Date();


    const difference =
        now.getTime() -
        date.getTime();


    if (
        Number.isNaN(
            difference
        )
    ) {

        return "Unknown";
    }


    const minutes =
        Math.floor(
            difference /
            60000
        );


    if (
        minutes <
        1
    ) {

        return "Just now";
    }


    if (
        minutes <
        60
    ) {

        return (
            minutes +
            (
                minutes === 1
                    ? " minute ago"
                    : " minutes ago"
            )
        );
    }


    const hours =
        Math.floor(
            minutes /
            60
        );


    if (
        hours <
        24
    ) {

        return (
            hours +
            (
                hours === 1
                    ? " hour ago"
                    : " hours ago"
            )
        );
    }


    const days =
        Math.floor(
            hours /
            24
        );


    if (
        days <
        30
    ) {

        return (
            days +
            (
                days === 1
                    ? " day ago"
                    : " days ago"
            )
        );
    }


    return formatDate(
        date
    );
}


/* =========================================================
   ID HELPER
========================================================= */

function makeId(
    prefix = "item"
) {

    return (
        prefix +
        "-" +
        Date.now() +
        "-" +
        Math.random()
            .toString(
                36
            )
            .slice(
                2,
                9
            )
    );
}


/* =========================================================
   BASIC HELP / ABOUT
========================================================= */

function showHelp() {

    alert(
        "ESSAzLife Help\n\n" +

        "Use Home to manage your ESSAs.\n" +

        "Use Training to add tricks and record training scores.\n" +

        "Use Scores to view progress.\n" +

        "Use Play to interact with the ESSAzLife virtual ESSAs.\n" +

        "Use Anxiety Support for calming activities and ESSA content.\n" +

        "Use Diary to save private journal entries in this browser."
    );
}


/* =========================================================
   AUTH HOME
========================================================= */

function renderAuthHome() {

    resetPageTheme();

    showHeaderButtons(
        false
    );


    document.querySelector(
        "main"
    ).innerHTML = `

        <div
            style="
                max-width:650px;
                margin:70px auto;
                text-align:center;
                padding:30px;
                background:white;
                border-radius:24px;
                box-shadow:0 8px 30px rgba(0,0,0,.08);
            "
        >

            <img
                src="MooCow.Icon.jpg"
                alt="ESSAzLife cow icon"

                style="
                    width:100px;
                    height:100px;
                    object-fit:cover;
                    border-radius:24px;
                    margin-bottom:15px;
                "
            >

            <h1>
                Welcome to ESSAzLife!
            </h1>

            <p
                style="
                    color:#68777b;
                    line-height:1.6;
                "
            >
                A fun place to care for,
                train, track, and bond with
                your ESSAs.
            </p>

            <div
                style="
                    display:flex;
                    gap:12px;
                    justify-content:center;
                    flex-wrap:wrap;
                    margin-top:25px;
                "
            >

                <button
                    onclick="
                        showCreateAccountForm()
                    "

                    style="
                        padding:12px 22px;
                        border:none;
                        border-radius:12px;
                        background:#4fb5ae;
                        color:white;
                        cursor:pointer;
                        font-weight:bold;
                    "
                >
                    Create Account
                </button>

                <button
                    onclick="
                        showLoginForm()
                    "

                    style="
                        padding:12px 22px;
                        border:1px solid #4fb5ae;
                        border-radius:12px;
                        background:white;
                        color:#3b9f99;
                        cursor:pointer;
                        font-weight:bold;
                    "
                >
                    Log In
                </button>

            </div>

        </div>

    `;
}
/* =========================================================
   CREATE ACCOUNT
========================================================= */

function showCreateAccountForm() {

    resetPageTheme();

    showHeaderButtons(
        false
    );


    document.querySelector(
        "main"
    ).innerHTML = `

        <div
            style="
                max-width:650px;
                margin:50px auto;
                padding:30px;
                background:white;
                border-radius:24px;
                box-shadow:0 8px 30px rgba(0,0,0,.08);
            "
        >

            <button
                onclick="
                    renderAuthHome()
                "

                style="
                    margin-bottom:20px;
                    border:none;
                    background:none;
                    color:#3b9f99;
                    cursor:pointer;
                    font-weight:bold;
                "
            >
                ← Back
            </button>


            <h1>
                Create Your ESSAzLife Account
            </h1>


            <p
                style="
                    color:#68777b;
                    line-height:1.5;
                "
            >
                Create an email, username, and password
                for your local ESSAzLife account.
            </p>


            <label>
                Email
            </label>

            <input
                id="create-email"
                type="email"
                autocomplete="email"

                style="
                    width:100%;
                    box-sizing:border-box;
                    padding:12px;
                    margin:7px 0 18px 0;
                    border:1px solid #ccd7da;
                    border-radius:10px;
                "
            >


            <label>
                Username
            </label>

            <input
                id="create-username"
                type="text"
                autocomplete="username"

                style="
                    width:100%;
                    box-sizing:border-box;
                    padding:12px;
                    margin:7px 0 18px 0;
                    border:1px solid #ccd7da;
                    border-radius:10px;
                "
            >


            <label>
                Password
            </label>

            <input
                id="create-password"
                type="password"
                autocomplete="new-password"

                style="
                    width:100%;
                    box-sizing:border-box;
                    padding:12px;
                    margin:7px 0 18px 0;
                    border:1px solid #ccd7da;
                    border-radius:10px;
                "
            >


            <label>
                Confirm Password
            </label>

            <input
                id="create-confirm-password"
                type="password"
                autocomplete="new-password"

                style="
                    width:100%;
                    box-sizing:border-box;
                    padding:12px;
                    margin:7px 0 20px 0;
                    border:1px solid #ccd7da;
                    border-radius:10px;
                "
            >


            <button
                onclick="
                    createAccount()
                "

                style="
                    width:100%;
                    padding:13px;
                    border:none;
                    border-radius:12px;
                    background:#4fb5ae;
                    color:white;
                    font-weight:bold;
                    cursor:pointer;
                "
            >
                Create Account
            </button>

        </div>

    `;
}


async function createAccount() {

    const email =
        document
            .getElementById(
                "create-email"
            )
            ?.value
            .trim()
            .toLowerCase();


    const username =
        document
            .getElementById(
                "create-username"
            )
            ?.value
            .trim();


    const password =
        document
            .getElementById(
                "create-password"
            )
            ?.value;


    const confirmPassword =
        document
            .getElementById(
                "create-confirm-password"
            )
            ?.value;


    if (
        !email ||
        !username ||
        !password ||
        !confirmPassword
    ) {

        alert(
            "Please fill out every field."
        );

        return;
    }


    if (
        !email.includes(
            "@"
        )
    ) {

        alert(
            "Please enter a valid email address."
        );

        return;
    }


    if (
        username.length <
        3
    ) {

        alert(
            "Your username must be at least 3 characters long."
        );

        return;
    }


    if (
        password.length <
        6
    ) {

        alert(
            "Your password must be at least 6 characters long."
        );

        return;
    }


    if (
        password !==
        confirmPassword
    ) {

        alert(
            "Your passwords do not match."
        );

        return;
    }


    const accounts =
        getAccounts();


    const emailExists =
        accounts.some(
            function(account) {

                return (
                    String(
                        account.email
                    )
                        .toLowerCase() ===
                    email
                );
            }
        );


    if (emailExists) {

        alert(
            "An account already uses that email."
        );

        return;
    }


    const usernameExists =
        accounts.some(
            function(account) {

                return (
                    String(
                        account.username
                    )
                        .toLowerCase() ===
                    username.toLowerCase()
                );
            }
        );


    if (usernameExists) {

        alert(
            "That username is already being used."
        );

        return;
    }


    try {

        const passwordData =
            await hashPassword(
                password
            );


        const account = {

            id:
                makeId(
                    "user"
                ),

            email:
                email,

            username:
                username,

            nickname:
                username,

            genderIdentity:
                "",

            ageGroup:
                "",

            themeColor:
                "#4fb5ae",

            passwordSalt:
                passwordData.salt,

            passwordHash:
                passwordData.hash,

            createdAt:
                new Date()
                    .toISOString()

        };


        accounts.push(
            account
        );


        saveAccounts(
            accounts
        );


        setCurrentUserId(
            account.id
        );


        pendingWelcomeCredentials = {

            email:
                email,

            username:
                username,

            password:
                password

        };


        showHeaderButtons(
            true
        );


        renderOneTimeWelcome();

    } catch (error) {

        console.error(
            error
        );


        alert(
            "ESSAzLife could not create the account. Please try again."
        );
    }
}


/* =========================================================
   ONE-TIME WELCOME
========================================================= */

function renderOneTimeWelcome() {

    const credentials =
        pendingWelcomeCredentials;


    if (!credentials) {

        renderHome();

        return;
    }


    resetPageTheme();


    document.querySelector(
        "main"
    ).innerHTML = `

        <div
            style="
                max-width:750px;
                margin:40px auto;
                padding:30px;
                background:white;
                border-radius:24px;
                box-shadow:0 8px 30px rgba(0,0,0,.08);
                line-height:1.6;
            "
        >

            <h1>
                Welcome to ESSAzLife! 🐮💚
            </h1>


            <p>
                Thank you for creating an account with ESSAzLife!
            </p>


            <p>
                The app is designed to be a fun and safe way for users
                to additionally bond with their ESSAs!
            </p>


            <p>
                New features are added frequently! Make sure to write
                your information in a safe place, and don’t share your
                personal information with anyone except a trusted adult!
            </p>


            <div
                style="
                    margin:24px 0;
                    padding:20px;
                    background:#eef9f7;
                    border:1px solid #cfe9e5;
                    border-radius:16px;
                "
            >

                <p>
                    <strong>Email:</strong><br>
                    ${escapeHTML(
                        credentials.email
                    )}
                </p>


                <p>
                    <strong>Username:</strong><br>
                    ${escapeHTML(
                        credentials.username
                    )}
                </p>


                <p>
                    <strong>Password:</strong><br>
                    ${escapeHTML(
                        credentials.password
                    )}
                </p>

            </div>


            <p>
                In the event that you should forget your password,
                a reset link can only be sent to this email.
            </p>


            <p>
                I can’t thank you all enough for your continued feedback!
            </p>


            <p>
                Thank you, and remember that if you need help
                you can always reach out!
            </p>


            <p>
                <strong>Bia Contino</strong><br>

                Snapchat:
                moocowsmama
                <br>

                Youtube:
                <a
                    href="https://www.youtube.com/@raisingfloofz"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    www.youtube.com/@raisingfloofz
                </a>
                <br>

                Gmail:
                <a
                    href="mailto:raisingrebornz@gmail.com"
                >
                    raisingrebornz@gmail.com
                </a>
                <br>

                (Raising Floofz)
            </p>


            <button
                onclick="
                    finishOneTimeWelcome()
                "

                style="
                    width:100%;
                    margin-top:15px;
                    padding:13px;
                    border:none;
                    border-radius:12px;
                    background:#4fb5ae;
                    color:white;
                    cursor:pointer;
                    font-weight:bold;
                "
            >
                Continue to ESSAzLife
            </button>

        </div>

    `;
}


function finishOneTimeWelcome() {

    pendingWelcomeCredentials =
        null;


    renderHome();
}


/* =========================================================
   LOGIN
========================================================= */

function showLoginForm() {

    resetPageTheme();

    showHeaderButtons(
        false
    );


    document.querySelector(
        "main"
    ).innerHTML = `

        <div
            style="
                max-width:650px;
                margin:50px auto;
                padding:30px;
                background:white;
                border-radius:24px;
                box-shadow:0 8px 30px rgba(0,0,0,.08);
            "
        >

            <button
                onclick="
                    renderAuthHome()
                "

                style="
                    margin-bottom:20px;
                    border:none;
                    background:none;
                    color:#3b9f99;
                    cursor:pointer;
                    font-weight:bold;
                "
            >
                ← Back
            </button>


            <h1>
                Log In
            </h1>


            <label>
                Email or Username
            </label>

            <input
                id="login-identity"
                type="text"
                autocomplete="username"

                style="
                    width:100%;
                    box-sizing:border-box;
                    padding:12px;
                    margin:7px 0 18px 0;
                    border:1px solid #ccd7da;
                    border-radius:10px;
                "
            >


            <label>
                Password
            </label>

            <input
                id="login-password"
                type="password"
                autocomplete="current-password"

                style="
                    width:100%;
                    box-sizing:border-box;
                    padding:12px;
                    margin:7px 0 18px 0;
                    border:1px solid #ccd7da;
                    border-radius:10px;
                "
            >


            <button
                onclick="
                    loginUser()
                "

                style="
                    width:100%;
                    padding:13px;
                    border:none;
                    border-radius:12px;
                    background:#4fb5ae;
                    color:white;
                    font-weight:bold;
                    cursor:pointer;
                "
            >
                Log In
            </button>


            <button
                onclick="
                    showForgotPasswordForm()
                "

                style="
                    width:100%;
                    margin-top:12px;
                    padding:10px;
                    border:none;
                    background:none;
                    color:#3b9f99;
                    cursor:pointer;
                    font-weight:bold;
                "
            >
                Forgot Password?
            </button>

        </div>

    `;
}


async function loginUser() {

    const identity =
        document
            .getElementById(
                "login-identity"
            )
            ?.value
            .trim()
            .toLowerCase();


    const password =
        document
            .getElementById(
                "login-password"
            )
            ?.value;


    if (
        !identity ||
        !password
    ) {

        alert(
            "Please enter your email or username and password."
        );

        return;
    }


    const account =
        getAccounts().find(
            function(item) {

                const email =
                    String(
                        item.email ||
                        ""
                    )
                        .toLowerCase();


                const username =
                    String(
                        item.username ||
                        ""
                    )
                        .toLowerCase();


                return (
                    email === identity ||
                    username === identity
                );
            }
        );


    if (!account) {

        alert(
            "No ESSAzLife account was found with that email or username."
        );

        return;
    }


    try {

        const correctPassword =
            await verifyPassword(
                password,
                account
            );


        if (!correctPassword) {

            alert(
                "Incorrect password."
            );

            return;
        }


        setCurrentUserId(
            account.id
        );


        showHeaderButtons(
            true
        );


        renderHome();

    } catch (error) {

        console.error(
            error
        );


        alert(
            "ESSAzLife could not log you in. Please try again."
        );
    }
}


/* =========================================================
   FORGOT PASSWORD
========================================================= */

function showForgotPasswordForm() {

    resetPageTheme();

    showHeaderButtons(
        false
    );


    document.querySelector(
        "main"
    ).innerHTML = `

        <div
            style="
                max-width:650px;
                margin:50px auto;
                padding:30px;
                background:white;
                border-radius:24px;
                box-shadow:0 8px 30px rgba(0,0,0,.08);
            "
        >

            <button
                onclick="
                    showLoginForm()
                "

                style="
                    margin-bottom:20px;
                    border:none;
                    background:none;
                    color:#3b9f99;
                    cursor:pointer;
                    font-weight:bold;
                "
            >
                ← Back to Login
            </button>


            <h1>
                Forgot Password
            </h1>


            <p
                style="
                    color:#68777b;
                    line-height:1.5;
                "
            >
                Enter the email saved to your ESSAzLife account.
            </p>


            <label>
                Email
            </label>

            <input
                id="forgot-email"
                type="email"
                autocomplete="email"

                style="
                    width:100%;
                    box-sizing:border-box;
                    padding:12px;
                    margin:7px 0 18px 0;
                    border:1px solid #ccd7da;
                    border-radius:10px;
                "
            >


            <button
                onclick="
                    findPasswordResetAccount()
                "

                style="
                    width:100%;
                    padding:13px;
                    border:none;
                    border-radius:12px;
                    background:#4fb5ae;
                    color:white;
                    cursor:pointer;
                    font-weight:bold;
                "
            >
                Continue
            </button>


            <p
                style="
                    margin-top:18px;
                    font-size:13px;
                    color:#879397;
                    line-height:1.5;
                "
            >
                This local prototype cannot send a real email yet.
                For now, password resetting happens on this device.
            </p>

        </div>

    `;
}


function findPasswordResetAccount() {

    const email =
        document
            .getElementById(
                "forgot-email"
            )
            ?.value
            .trim()
            .toLowerCase();


    if (!email) {

        alert(
            "Please enter your email."
        );

        return;
    }


    const account =
        getAccounts().find(
            function(item) {

                return (
                    String(
                        item.email ||
                        ""
                    )
                        .toLowerCase() ===
                    email
                );
            }
        );


    if (!account) {

        alert(
            "No ESSAzLife account was found with that email."
        );

        return;
    }


    showLocalPasswordReset(
        account.id
    );
}


function showLocalPasswordReset(
    accountId
) {

    const account =
        getAccounts().find(
            function(item) {

                return (
                    String(
                        item.id
                    ) ===
                    String(
                        accountId
                    )
                );
            }
        );


    if (!account) {

        showForgotPasswordForm();

        return;
    }


    document.querySelector(
        "main"
    ).innerHTML = `

        <div
            style="
                max-width:650px;
                margin:50px auto;
                padding:30px;
                background:white;
                border-radius:24px;
                box-shadow:0 8px 30px rgba(0,0,0,.08);
            "
        >

            <h1>
                Reset Password
            </h1>


            <p
                style="
                    color:#68777b;
                "
            >
                Account:
                <strong>
                    ${escapeHTML(
                        account.email
                    )}
                </strong>
            </p>


            <label>
                New Password
            </label>

            <input
                id="reset-password"
                type="password"
                autocomplete="new-password"

                style="
                    width:100%;
                    box-sizing:border-box;
                    padding:12px;
                    margin:7px 0 18px 0;
                    border:1px solid #ccd7da;
                    border-radius:10px;
                "
            >


            <label>
                Confirm New Password
            </label>

            <input
                id="reset-confirm-password"
                type="password"
                autocomplete="new-password"

                style="
                    width:100%;
                    box-sizing:border-box;
                    padding:12px;
                    margin:7px 0 18px 0;
                    border:1px solid #ccd7da;
                    border-radius:10px;
                "
            >


            <button
                onclick="
                    saveResetPassword('${account.id}')
                "

                style="
                    width:100%;
                    padding:13px;
                    border:none;
                    border-radius:12px;
                    background:#4fb5ae;
                    color:white;
                    cursor:pointer;
                    font-weight:bold;
                "
            >
                Save New Password
            </button>

        </div>

    `;
}


async function saveResetPassword(
    accountId
) {

    const password =
        document
            .getElementById(
                "reset-password"
            )
            ?.value;


    const confirmPassword =
        document
            .getElementById(
                "reset-confirm-password"
            )
            ?.value;


    if (
        !password ||
        !confirmPassword
    ) {

        alert(
            "Please enter and confirm your new password."
        );

        return;
    }


    if (
        password.length <
        6
    ) {

        alert(
            "Your password must be at least 6 characters long."
        );

        return;
    }


    if (
        password !==
        confirmPassword
    ) {

        alert(
            "Your passwords do not match."
        );

        return;
    }


    const accounts =
        getAccounts();


    const accountIndex =
        accounts.findIndex(
            function(account) {

                return (
                    String(
                        account.id
                    ) ===
                    String(
                        accountId
                    )
                );
            }
        );


    if (
        accountIndex ===
        -1
    ) {

        alert(
            "That account could not be found."
        );

        return;
    }


    try {

        const passwordData =
            await hashPassword(
                password
            );


        accounts[
            accountIndex
        ].passwordSalt =
            passwordData.salt;


        accounts[
            accountIndex
        ].passwordHash =
            passwordData.hash;


        saveAccounts(
            accounts
        );


        alert(
            "Your password has been changed!"
        );


        showLoginForm();

    } catch (error) {

        console.error(
            error
        );


        alert(
            "ESSAzLife could not reset the password. Please try again."
        );
    }
}


/* =========================================================
   LOG OUT
========================================================= */

function logoutUser() {

    pendingWelcomeCredentials =
        null;


    setCurrentUserId(
        null
    );


    showHeaderButtons(
        false
    );


    renderAuthHome();
}


/* =========================================================
   APP TABS
========================================================= */

function makeAppTabs(
    active
) {

    const tabs = [

        {
            name:
                "Home",

            icon:
                "🏠",

            action:
                "renderHome()"
        },

        {
            name:
                "Training",

            icon:
                "⭐",

            action:
                "renderTrainingTab()"
        },

        {
            name:
                "Scores",

            icon:
                "📊",

            action:
                "renderScoresTab()"
        },

        {
            name:
                "Play",

            icon:
                "🐾",

            action:
                "renderPlayTab()"
        },

        {
            name:
                "Anxiety Support",

            icon:
                "💚",

            action:
                "renderAnxietySupport()"
        },

        {
            name:
                "Diary",

            icon:
                "📖",

            action:
                "renderDiary()"
        }

    ];


    return `

        <div
            style="
                display:flex;
                gap:8px;
                flex-wrap:wrap;
                margin-bottom:25px;
            "
        >

            ${tabs
                .map(
                    function(tab) {

                        const isActive =
                            tab.name ===
                            active;


                        return `

                            <button
                                onclick="
                                    ${tab.action}
                                "

                                style="
                                    padding:10px 14px;
                                    border-radius:12px;
                                    cursor:pointer;
                                    font-weight:bold;

                                    border:
                                        ${
                                            isActive
                                                ? "1px solid #4fb5ae"
                                                : "1px solid #dbe5e7"
                                        };

                                    background:
                                        ${
                                            isActive
                                                ? "#4fb5ae"
                                                : "white"
                                        };

                                    color:
                                        ${
                                            isActive
                                                ? "white"
                                                : "#26343b"
                                        };
                                "
                            >

                                ${tab.icon}

                                ${escapeHTML(
                                    tab.name
                                )}

                            </button>

                        `;

                    }
                )
                .join("")}

        </div>

    `;
}


/* =========================================================
   FIND ESSA
========================================================= */

function getEssaById(
    essaId
) {

    return (
        getSavedEssas().find(
            function(essa) {

                return (
                    String(
                        essa.id
                    ) ===
                    String(
                        essaId
                    )
                );
            }
        ) ||
        null
    );
}
/* =========================================================
   HOME
========================================================= */

function renderHome(
    sortBy = "alphabetical"
) {

    resetPageTheme();


    const user =
        getCurrentUser();


    if (!user) {

        renderAuthHome();

        return;
    }


    showHeaderButtons(
        true
    );


    let essas =
        getSavedEssas()
            .slice();


    /* -------------------------
       SORT: ALPHABETICAL
    ------------------------- */

    if (
        sortBy ===
        "alphabetical"
    ) {

        essas.sort(
            function(a, b) {

                return String(
                    a.name || ""
                ).localeCompare(
                    String(
                        b.name || ""
                    )
                );
            }
        );
    }


    /* -------------------------
       SORT: NEWEST ADOPTION
    ------------------------- */

    if (
        sortBy ===
        "adoptionNewest"
    ) {

        essas.sort(
            function(a, b) {

                return String(
                    b.adoptionDate || ""
                ).localeCompare(
                    String(
                        a.adoptionDate || ""
                    )
                );
            }
        );
    }


    /* -------------------------
       SORT: OLDEST ADOPTION
    ------------------------- */

    if (
        sortBy ===
        "adoptionOldest"
    ) {

        essas.sort(
            function(a, b) {

                return String(
                    a.adoptionDate || ""
                ).localeCompare(
                    String(
                        b.adoptionDate || ""
                    )
                );
            }
        );
    }


    /* -------------------------
       SORT: TRAINING EXPERIENCE
    ------------------------- */

    if (
        sortBy ===
        "training"
    ) {

        const scores =
            getSavedScores();


        essas.sort(
            function(a, b) {

                const aCount =
                    scores.filter(
                        function(score) {

                            return (
                                String(
                                    score.essaId
                                ) ===
                                String(
                                    a.id
                                )
                            );
                        }
                    ).length;


                const bCount =
                    scores.filter(
                        function(score) {

                            return (
                                String(
                                    score.essaId
                                ) ===
                                String(
                                    b.id
                                )
                            );
                        }
                    ).length;


                return (
                    bCount -
                    aCount
                );
            }
        );
    }


    let cards =
        "";


    essas.forEach(
        function(essa) {

            const visual =
                essa.photo

                    ? `

                        <img
                            src="${essa.photo}"
                            alt="${escapeHTML(
                                essa.name
                            )}"

                            style="
                                width:100%;
                                height:100%;
                                object-fit:cover;
                            "
                        >

                    `

                    : `

                        <div
                            style="
                                width:100%;
                                height:100%;

                                display:flex;
                                align-items:center;
                                justify-content:center;

                                font-size:80px;

                                background:#f6fbfa;
                            "
                        >

                            ${essa.icon || "🐾"}

                        </div>

                    `;


            cards += `

                <button
                    onclick="
                        showEssaProfile('${essa.id}')
                    "

                    style="
                        padding:0;

                        overflow:hidden;

                        border:1px solid #dbe5e7;

                        border-radius:20px;

                        background:white;

                        cursor:pointer;

                        text-align:left;

                        box-shadow:
                            0 4px 14px
                            rgba(0,0,0,.05);
                    "
                >


                    <div
                        style="
                            width:100%;

                            aspect-ratio:1/1;

                            overflow:hidden;
                        "
                    >

                        ${visual}

                    </div>


                    <div
                        style="
                            padding:16px;
                        "
                    >


                        <h2
                            style="
                                margin:0 0 6px 0;

                                color:#26343b;
                            "
                        >

                            ${escapeHTML(
                                essa.name
                            )}

                        </h2>


                        <p
                            style="
                                margin:0;

                                color:#68777b;
                            "
                        >

                            ${escapeHTML(
                                essa.species ||
                                ""
                            )}

                        </p>


                    </div>


                </button>

            `;

        }
    );


    if (!cards) {

        cards = `

            <div
                style="
                    grid-column:1/-1;

                    padding:35px;

                    background:white;

                    border:
                        1px dashed
                        #b9d6d3;

                    border-radius:20px;
                "
            >

                <h2>
                    Your ESSA family is waiting! 🐾
                </h2>


                <p>
                    Add your first ESSA to get started.
                </p>

            </div>

        `;
    }


    const displayName =
        user.nickname ||
        user.username ||
        "Friend";


    document.querySelector(
        "main"
    ).innerHTML = `

        ${makeAppTabs(
            "Home"
        )}


        <div
            style="
                max-width:1400px;

                margin:0 auto;
            "
        >


            <h1>

                Welcome Back,
                ${escapeHTML(
                    displayName
                )}!

            </h1>


            <button
                class="add-essa-button"

                onclick="
                    showEssaForm()
                "
            >

                + Add an ESSA

            </button>


            <div
                style="
                    max-width:300px;

                    margin:25px auto;
                "
            >


                <label
                    for="home-sort"

                    style="
                        display:block;

                        margin-bottom:7px;

                        font-weight:bold;
                    "
                >

                    Sort ESSAs

                </label>


                <select
                    id="home-sort"

                    onchange="
                        renderHome(
                            this.value
                        )
                    "

                    style="
                        width:100%;

                        padding:10px;

                        border:
                            1px solid
                            #cbd9dc;

                        border-radius:10px;
                    "
                >


                    <option
                        value="alphabetical"
                    >
                        Alphabetical
                    </option>


                    <option
                        value="adoptionNewest"
                    >
                        Newest Adoption
                    </option>


                    <option
                        value="adoptionOldest"
                    >
                        Oldest Adoption
                    </option>


                    <option
                        value="training"
                    >
                        Most Training Experience
                    </option>


                </select>


            </div>


            <div
                style="
                    display:grid;

                    grid-template-columns:
                        repeat(
                            4,
                            minmax(
                                0,
                                1fr
                            )
                        );

                    gap:22px;

                    margin-top:30px;
                "
            >

                ${cards}

            </div>


        </div>

    `;


    const sortSelect =
        document.getElementById(
            "home-sort"
        );


    if (sortSelect) {

        sortSelect.value =
            sortBy;
    }
}


/* =========================================================
   PROFILE
========================================================= */

function renderProfile() {

    resetPageTheme();


    const user =
        getCurrentUser();


    if (!user) {

        renderAuthHome();

        return;
    }


    document.querySelector(
        "main"
    ).innerHTML = `

        ${makeAppTabs("")}


        <div
            class="essa-form"
        >


            <h1>
                👤 Profile
            </h1>


            <label>
                Username
            </label>


            <input
                id="profile-username"

                type="text"

                value="${escapeHTML(
                    user.username ||
                    ""
                )}"
            >


            <label>
                Email
            </label>


            <input
                id="profile-email"

                type="email"

                value="${escapeHTML(
                    user.email ||
                    ""
                )}"
            >


            <label>
                Nickname
            </label>


            <input
                id="profile-nickname"

                type="text"

                value="${escapeHTML(
                    user.nickname ||
                    ""
                )}"
            >


            <label>
                Gender Identity
            </label>


            <input
                id="profile-gender"

                type="text"

                value="${escapeHTML(
                    user.genderIdentity ||
                    ""
                )}"
            >


            <label>
                Age Group
            </label>


            <select
                id="profile-age-group"
            >


                <option
                    value=""
                >
                    Prefer not to say
                </option>


                <option
                    value="3-7"
                >
                    Ages 3–7
                </option>


                <option
                    value="8-13"
                >
                    Ages 8–13
                </option>


                <option
                    value="14+"
                >
                    Ages 14+
                </option>


            </select>


            <label>
                App Background Color
            </label>


            <input
                id="profile-theme"

                type="color"

                value="${user.themeColor || "#ffffff"}"

                style="
                    height:50px;
                "
            >


            <p>

                <strong>
                    Joined:
                </strong>

                ${
                    user.createdAt

                        ? new Date(
                            user.createdAt
                        )
                            .toLocaleDateString()

                        : "Unknown"
                }

            </p>


            <div
                style="
                    display:flex;

                    gap:10px;

                    flex-wrap:wrap;

                    margin-top:20px;
                "
            >


                <button
                    onclick="
                        renderHome()
                    "
                >

                    Cancel

                </button>


                <button
                    onclick="
                        saveProfile()
                    "
                >

                    Save Profile

                </button>


            </div>


            <hr
                style="
                    margin:30px 0;

                    border:none;

                    border-top:
                        1px solid
                        #dbe5e7;
                "
            >


            <button
                onclick="
                    logoutUser()
                "
            >

                Log Out

            </button>


            <button
                onclick="
                    deleteAccount()
                "

                style="
                    color:#b42318;
                "
            >

                Delete Account

            </button>


        </div>

    `;


    const ageGroup =
        document.getElementById(
            "profile-age-group"
        );


    if (ageGroup) {

        ageGroup.value =
            user.ageGroup ||
            "";
    }
}


/* =========================================================
   SAVE PROFILE
========================================================= */

function saveProfile() {

    const current =
        getCurrentUser();


    if (!current) {

        return;
    }


    const username =
        document
            .getElementById(
                "profile-username"
            )
            .value
            .trim();


    const email =
        document
            .getElementById(
                "profile-email"
            )
            .value
            .trim()
            .toLowerCase();


    if (
        username.length <
        3
    ) {

        alert(
            "Username must be at least 3 characters."
        );

        return;
    }


    if (
        !email ||
        !email.includes(
            "@"
        )
    ) {

        alert(
            "Please enter a valid email."
        );

        return;
    }


    const accounts =
        getAccounts();


    const duplicate =
        accounts.some(
            function(account) {

                if (
                    String(
                        account.id
                    ) ===
                    String(
                        current.id
                    )
                ) {

                    return false;
                }


                return (

                    String(
                        account.username ||
                        ""
                    )
                        .toLowerCase() ===
                    username
                        .toLowerCase()

                    ||

                    String(
                        account.email ||
                        ""
                    )
                        .toLowerCase() ===
                    email

                );

            }
        );


    if (duplicate) {

        alert(
            "That username or email is already being used by another account."
        );

        return;
    }


    const index =
        accounts.findIndex(
            function(account) {

                return (
                    String(
                        account.id
                    ) ===
                    String(
                        current.id
                    )
                );

            }
        );


    if (
        index ===
        -1
    ) {

        return;
    }


    accounts[
        index
    ].username =
        username;


    accounts[
        index
    ].email =
        email;


    accounts[
        index
    ].nickname =
        document
            .getElementById(
                "profile-nickname"
            )
            .value
            .trim();


    accounts[
        index
    ].genderIdentity =
        document
            .getElementById(
                "profile-gender"
            )
            .value
            .trim();


    accounts[
        index
    ].ageGroup =
        document
            .getElementById(
                "profile-age-group"
            )
            .value;


    accounts[
        index
    ].themeColor =
        document
            .getElementById(
                "profile-theme"
            )
            .value;


    saveAccounts(
        accounts
    );


    renderHome();
}


/* =========================================================
   DELETE ACCOUNT
========================================================= */

function deleteAccount() {

    const user =
        getCurrentUser();


    if (!user) {

        return;
    }


    const confirmed =
        confirm(
            "Delete your ESSAzLife account and all data saved to this browser? This cannot be undone."
        );


    if (!confirmed) {

        return;
    }


    const secondCheck =
        confirm(
            "Are you absolutely sure you want to delete your account?"
        );


    if (!secondCheck) {

        return;
    }


    const storageTypes = [

        "essas",

        "care",

        "tricks",

        "scores",

        "drawings",

        "diary",

        "play",

        "playHouse"

    ];


    storageTypes.forEach(
        function(type) {

            localStorage.removeItem(

                "essazLife_" +
                user.id +
                "_" +
                type

            );

        }
    );


    const remainingAccounts =
        getAccounts().filter(
            function(account) {

                return (
                    String(
                        account.id
                    ) !==
                    String(
                        user.id
                    )
                );

            }
        );


    saveAccounts(
        remainingAccounts
    );


    setCurrentUserId(
        null
    );


    pendingWelcomeCredentials =
        null;


    resetPageTheme();


    showHeaderButtons(
        false
    );


    renderAuthHome();
}


/* =========================================================
   ADD / EDIT ESSA
========================================================= */

function showEssaForm(
    essaId = null
) {

    resetPageTheme();


    const existing =
        essaId !== null

            ? getEssaById(
                essaId
            )

            : null;


    const editing =
        Boolean(
            existing
        );


    const speciesOptions =
        standardSpecies
            .map(
                function(species) {

                    return `

                        <option
                            value="${escapeHTML(
                                species
                            )}"
                        >

                            ${escapeHTML(
                                species
                            )}

                        </option>

                    `;

                }
            )
            .join("");


    document.querySelector(
        "main"
    ).innerHTML = `

        ${makeAppTabs(
            "Home"
        )}


        <div
            class="essa-form"
        >


            <h1>

                ${
                    editing

                        ? "Edit ESSA"

                        : "Add an ESSA"
                }

            </h1>


            ${
                existing &&
                existing.photo

                    ? `

                        <div
                            style="
                                text-align:center;

                                margin-bottom:20px;
                            "
                        >

                            <img
                                src="${existing.photo}"

                                alt="${escapeHTML(
                                    existing.name
                                )}"

                                style="
                                    width:150px;

                                    height:150px;

                                    object-fit:cover;

                                    border-radius:20px;

                                    border:
                                        1px solid
                                        #dbe5e7;
                                "
                            >

                        </div>

                    `

                    : ""
            }


            <label>
                Photo
            </label>


            <input
                id="essa-photo"

                type="file"

                accept="image/*"
            >


            <p
                style="
                    margin-top:5px;

                    color:#7c898d;

                    font-size:13px;
                "
            >

                Optional. If you don't add a photo,
                ESSAzLife will use an icon based on
                your ESSA's species.

            </p>


            <label>
                ESSA Name
            </label>


            <input
                id="essa-name"

                type="text"

                value="${escapeHTML(
                    existing?.name ||
                    ""
                )}"
            >


            <label>
                Species
            </label>


            <select
                id="essa-species"

                onchange="
                    updateSpeciesFields()
                "
            >


                <option value="">
                    Select species
                </option>


                ${speciesOptions}


                <option value="Custom">
                    Custom
                </option>


            </select>


            <div
                id="custom-species-area"

                style="
                    display:none;
                "
            >


                <label>
                    Custom Species
                </label>


                <input
                    id="essa-custom-species"

                    type="text"
                >


            </div>


            <div
                id="breed-area"

                style="
                    display:none;
                "
            >


                <label>
                    Breed / Type
                </label>


                <select
                    id="essa-breed"

                    onchange="
                        updateCustomBreedField()
                    "
                ></select>


            </div>


            <div
                id="custom-breed-area"

                style="
                    display:none;
                "
            >


                <label>
                    Custom Breed / Type
                </label>


                <input
                    id="essa-custom-breed"

                    type="text"
                >


            </div>


            <label>
                Plush Color
            </label>


            <input
                id="essa-plush-color"

                type="text"

                placeholder="Example: Brown and white"

                value="${escapeHTML(
                    existing?.plushColor ||
                    ""
                )}"
            >


            <label>
                Adoption Date
            </label>


            <input
                id="essa-adoption-date"

                type="date"

                value="${escapeHTML(
                    existing?.adoptionDate ||
                    ""
                )}"
            >


            <label>
                Favorite Color
            </label>


            ${makeColorPicker(
                "favorite-color",
                existing?.favoriteColor ||
                "#4fb5ae"
            )}


            <label>
                Collar
            </label>


            <select
                id="collar-choice"

                onchange="
                    updateCollarChoice()
                "
            >


                <option value="color">
                    Choose Collar Color
                </option>


                <option value="none">
                    No Collar
                </option>


            </select>


            <div
                id="collar-color-area"
            >


                <label>
                    Collar Color
                </label>


                ${makeColorPicker(
                    "collar-color",
                    (
                        existing?.collarColor &&
                        existing.collarColor !==
                            "none"

                            ? existing.collarColor

                            : "#4fb5ae"
                    )
                )}


            </div>


            <label>
                Favorite Food
            </label>


            <input
                id="essa-favorite-food"

                type="text"

                value="${escapeHTML(
                    existing?.favoriteFood ||
                    ""
                )}"
            >


            <label>
                Favorite Weather
            </label>


            <input
                id="essa-favorite-weather"

                type="text"

                value="${escapeHTML(
                    existing?.favoriteWeather ||
                    ""
                )}"
            >


            <label>
                Favorite Toy
            </label>


            <input
                id="essa-favorite-toy"

                type="text"

                value="${escapeHTML(
                    existing?.favoriteToy ||
                    ""
                )}"
            >


            <label>
                Likes
            </label>


            <textarea
                id="essa-likes"
            >${escapeHTML(
                existing?.likes ||
                ""
            )}</textarea>


            <label>
                Dislikes
            </label>


            <textarea
                id="essa-dislikes"
            >${escapeHTML(
                existing?.dislikes ||
                ""
            )}</textarea>


            <h2>
                🩺 Medical Notes
            </h2>


            <label>
                Allergies
            </label>


            <textarea
                id="essa-allergies"
            >${escapeHTML(
                existing?.allergies ||
                ""
            )}</textarea>


            <label>
                Medications
            </label>


            <textarea
                id="essa-medications"
            >${escapeHTML(
                existing?.medications ||
                ""
            )}</textarea>


            <label>
                Conditions
            </label>


            <textarea
                id="essa-conditions"
            >${escapeHTML(
                existing?.conditions ||
                ""
            )}</textarea>


            <div
                style="
                    display:flex;

                    gap:10px;

                    flex-wrap:wrap;

                    margin-top:25px;
                "
            >


                <button
                    onclick="
                        renderHome()
                    "
                >

                    Cancel

                </button>


                <button
                    onclick="
                        saveEssa(
                            ${
                                editing

                                    ? `'${existing.id}'`

                                    : "null"
                            }
                        )
                    "
                >

                    ${
                        editing

                            ? "Save Changes"

                            : "Add ESSA"
                    }

                </button>


            </div>


        </div>

    `;


    /* =====================================================
       SET EXISTING SPECIES / BREED
    ===================================================== */

    if (existing) {

        const speciesSelect =
            document.getElementById(
                "essa-species"
            );


        if (
            standardSpecies.includes(
                existing.species
            )
        ) {

            speciesSelect.value =
                existing.species;

        } else {

            speciesSelect.value =
                "Custom";


            document.getElementById(
                "essa-custom-species"
            ).value =
                existing.species ||
                "";
        }


        updateSpeciesFields();


        const breedSelect =
            document.getElementById(
                "essa-breed"
            );


        if (
            existing.breed &&
            breedSelect
        ) {

            const availableBreeds =
                Array.from(
                    breedSelect.options
                )
                    .map(
                        function(option) {

                            return option.value;
                        }
                    );


            if (
                availableBreeds.includes(
                    existing.breed
                )
            ) {

                breedSelect.value =
                    existing.breed;

            } else {

                breedSelect.value =
                    "Custom";


                updateCustomBreedField();


                const customBreed =
                    document.getElementById(
                        "essa-custom-breed"
                    );


                if (customBreed) {

                    customBreed.value =
                        existing.breed;
                }
            }
        }


        const collarChoice =
            document.getElementById(
                "collar-choice"
            );


        if (
            existing.collarColor ===
            "none"
        ) {

            collarChoice.value =
                "none";

        } else {

            collarChoice.value =
                "color";
        }


        updateCollarChoice();

    } else {

        updateSpeciesFields();

        updateCollarChoice();
    }
}


/* =========================================================
   COLOR PICKER
========================================================= */

function makeColorPicker(
    id,
    startingColor = "#4fb5ae"
) {

    return `

        <input
            id="${id}"

            type="color"

            value="${startingColor}"

            style="
                width:100%;

                height:48px;

                cursor:pointer;
            "
        >

    `;
}


/* =========================================================
   UPDATE SPECIES FIELDS
========================================================= */

function updateSpeciesFields() {

    const speciesSelect =
        document.getElementById(
            "essa-species"
        );


    const customArea =
        document.getElementById(
            "custom-species-area"
        );


    const breedArea =
        document.getElementById(
            "breed-area"
        );


    const breedSelect =
        document.getElementById(
            "essa-breed"
        );


    if (
        !speciesSelect ||
        !customArea ||
        !breedArea ||
        !breedSelect
    ) {

        return;
    }


    const species =
        speciesSelect.value;


    customArea.style.display =
        species ===
        "Custom"

            ? "block"

            : "none";


    if (
        species &&
        species !==
            "Custom" &&
        breedOptions[
            species
        ]
    ) {

        breedArea.style.display =
            "block";


        breedSelect.innerHTML = `

            <option value="">
                Select breed / type
            </option>


            ${
                breedOptions[
                    species
                ]
                    .map(
                        function(breed) {

                            return `

                                <option
                                    value="${escapeHTML(
                                        breed
                                    )}"
                                >

                                    ${escapeHTML(
                                        breed
                                    )}

                                </option>

                            `;

                        }
                    )
                    .join("")
            }


            <option value="Custom">
                Custom
            </option>

        `;

    } else {

        breedArea.style.display =
            "none";


        breedSelect.innerHTML =
            "";
    }


    updateCustomBreedField();
}


/* =========================================================
   CUSTOM BREED FIELD
========================================================= */

function updateCustomBreedField() {

    const select =
        document.getElementById(
            "essa-breed"
        );


    const area =
        document.getElementById(
            "custom-breed-area"
        );


    if (
        !select ||
        !area
    ) {

        return;
    }


    area.style.display =
        select.value ===
        "Custom"

            ? "block"

            : "none";
}


/* =========================================================
   COLLAR FIELD
========================================================= */

function updateCollarChoice() {

    const choice =
        document.getElementById(
            "collar-choice"
        );


    const area =
        document.getElementById(
            "collar-color-area"
        );


    if (
        !choice ||
        !area
    ) {

        return;
    }


    area.style.display =
        choice.value ===
        "none"

            ? "none"

            : "block";
}


/* =========================================================
   READ IMAGE FILE
========================================================= */

function readImageFile(
    file
) {

    return new Promise(
        function(
            resolve,
            reject
        ) {

            if (!file) {

                resolve(
                    null
                );

                return;
            }


            const reader =
                new FileReader();


            reader.onload =
                function(event) {

                    resolve(
                        event.target.result
                    );
                };


            reader.onerror =
                function(error) {

                    reject(
                        error
                    );
                };


            reader.readAsDataURL(
                file
            );

        }
    );
}
async function saveEssa(
    editEssaId = null
) {

    const name =
        document
            .getElementById(
                "essa-name"
            )
            .value
            .trim();


    const speciesChoice =
        document
            .getElementById(
                "essa-species"
            )
            .value;


    if (
        !name ||
        !speciesChoice
    ) {

        alert(
            "Please enter an ESSA name and species."
        );

        return;
    }


    const species =
        speciesChoice ===
        "Custom"

            ? document
                .getElementById(
                    "essa-custom-species"
                )
                .value
                .trim()

            : speciesChoice;


    if (!species) {

        alert(
            "Please enter the custom species."
        );

        return;
    }


    let breed =
        "";


    const breedSelect =
        document.getElementById(
            "essa-breed"
        );


    if (
        speciesChoice !==
            "Custom" &&
        breedSelect
    ) {

        breed =
            breedSelect.value;


        if (
            breed ===
            "Custom"
        ) {

            breed =
                document
                    .getElementById(
                        "essa-custom-breed"
                    )
                    .value
                    .trim();
        }
    }


    const fileInput =
        document.getElementById(
            "essa-photo"
        );


    const file =
        fileInput?.files?.[0] ||
        null;


    let photo =
        null;


    try {

        photo =
            await readImageFile(
                file
            );

    } catch (error) {

        console.error(
            error
        );


        alert(
            "ESSAzLife could not read that image."
        );

        return;
    }


    const collarChoice =
        document.getElementById(
            "collar-choice"
        ).value;


    const collarColor =
        collarChoice ===
        "none"

            ? "none"

            : document
                .getElementById(
                    "collar-color"
                )
                .value;


    const essas =
        getSavedEssas();


    if (
        editEssaId !==
        null
    ) {

        const index =
            essas.findIndex(
                function(essa) {

                    return (
                        String(
                            essa.id
                        ) ===
                        String(
                            editEssaId
                        )
                    );
                }
            );


        if (
            index ===
            -1
        ) {

            alert(
                "That ESSA could not be found."
            );

            return;
        }


        const existing =
            essas[
                index
            ];


        essas[
            index
        ] = {

            ...existing,

            name:
                name,

            species:
                species,

            breed:
                breed,

            plushColor:
                document
                    .getElementById(
                        "essa-plush-color"
                    )
                    .value
                    .trim(),

            adoptionDate:
                document
                    .getElementById(
                        "essa-adoption-date"
                    )
                    .value,

            favoriteColor:
                document
                    .getElementById(
                        "favorite-color"
                    )
                    .value,

            collarColor:
                collarColor,

            favoriteFood:
                document
                    .getElementById(
                        "essa-favorite-food"
                    )
                    .value
                    .trim(),

            favoriteWeather:
                document
                    .getElementById(
                        "essa-favorite-weather"
                    )
                    .value
                    .trim(),

            favoriteToy:
                document
                    .getElementById(
                        "essa-favorite-toy"
                    )
                    .value
                    .trim(),

            likes:
                document
                    .getElementById(
                        "essa-likes"
                    )
                    .value
                    .trim(),

            dislikes:
                document
                    .getElementById(
                        "essa-dislikes"
                    )
                    .value
                    .trim(),

            allergies:
                document
                    .getElementById(
                        "essa-allergies"
                    )
                    .value
                    .trim(),

            medications:
                document
                    .getElementById(
                        "essa-medications"
                    )
                    .value
                    .trim(),

            conditions:
                document
                    .getElementById(
                        "essa-conditions"
                    )
                    .value
                    .trim(),

            icon:
                speciesIcons[
                    speciesChoice
                ] ||
                speciesIcons.Custom,

            photo:
                photo ||
                existing.photo ||
                null,

            updatedAt:
                new Date()
                    .toISOString()

        };


    } else {

        essas.push(
            {

                id:
                    makeId(
                        "essa"
                    ),

                name:
                    name,

                species:
                    species,

                breed:
                    breed,

                plushColor:
                    document
                        .getElementById(
                            "essa-plush-color"
                        )
                        .value
                        .trim(),

                adoptionDate:
                    document
                        .getElementById(
                            "essa-adoption-date"
                        )
                        .value,

                favoriteColor:
                    document
                        .getElementById(
                            "favorite-color"
                        )
                        .value,

                collarColor:
                    collarColor,

                favoriteFood:
                    document
                        .getElementById(
                            "essa-favorite-food"
                        )
                        .value
                        .trim(),

                favoriteWeather:
                    document
                        .getElementById(
                            "essa-favorite-weather"
                        )
                        .value
                        .trim(),

                favoriteToy:
                    document
                        .getElementById(
                            "essa-favorite-toy"
                        )
                        .value
                        .trim(),

                likes:
                    document
                        .getElementById(
                            "essa-likes"
                        )
                        .value
                        .trim(),

                dislikes:
                    document
                        .getElementById(
                            "essa-dislikes"
                        )
                        .value
                        .trim(),

                allergies:
                    document
                        .getElementById(
                            "essa-allergies"
                        )
                        .value
                        .trim(),

                medications:
                    document
                        .getElementById(
                            "essa-medications"
                        )
                        .value
                        .trim(),

                conditions:
                    document
                        .getElementById(
                            "essa-conditions"
                        )
                        .value
                        .trim(),

                icon:
                    speciesIcons[
                        speciesChoice
                    ] ||
                    speciesIcons.Custom,

                photo:
                    photo,

                createdAt:
                    new Date()
                        .toISOString(),

                updatedAt:
                    new Date()
                        .toISOString()

            }
        );
    }


    try {

        saveEssas(
            essas
        );

    } catch (error) {

        console.error(
            error
        );


        alert(
            "ESSAzLife could not save this ESSA. The image may be too large for browser storage."
        );

        return;
    }


    renderHome();
}


/* =========================================================
   ESSA PROFILE
========================================================= */

function showEssaProfile(
    essaId
) {

    const essa =
        getEssaById(
            essaId
        );


    if (!essa) {

        renderHome();

        return;
    }


    applyEssaProfileTint(
        essa.favoriteColor
    );


    const careEvents =
        getSavedCare()
            .filter(
                function(event) {

                    return (
                        String(
                            event.essaId
                        ) ===
                        String(
                            essa.id
                        )
                    );
                }
            )
            .sort(
                function(a, b) {

                    return (
                        new Date(
                            b.date
                        ) -
                        new Date(
                            a.date
                        )
                    );
                }
            );


    const recentCare =
        careEvents
            .slice(
                0,
                5
            );


    const visual =
        essa.photo

            ? `

                <img
                    src="${essa.photo}"

                    alt="${escapeHTML(
                        essa.name
                    )}"

                    style="
                        width:220px;
                        height:220px;
                        object-fit:cover;
                        border-radius:24px;
                        border:1px solid #dbe5e7;
                    "
                >

            `

            : `

                <div
                    style="
                        width:220px;
                        height:220px;

                        display:flex;
                        align-items:center;
                        justify-content:center;

                        margin:auto;

                        border-radius:24px;

                        background:white;

                        border:
                            1px solid
                            #dbe5e7;

                        font-size:110px;
                    "
                >

                    ${essa.icon || "🐾"}

                </div>

            `;


    const careHTML =
        recentCare.length

            ? recentCare
                .map(
                    function(event) {

                        return `

                            <div
                                style="
                                    padding:12px;

                                    border-bottom:
                                        1px solid
                                        #e5ecee;
                                "
                            >

                                <strong>
                                    ${escapeHTML(
                                        event.type
                                    )}
                                </strong>

                                <br>

                                <span
                                    style="
                                        color:#68777b;
                                    "
                                >

                                    ${formatDateTime(
                                        event.date
                                    )}

                                </span>


                                ${
                                    event.notes

                                        ? `

                                            <div
                                                style="
                                                    margin-top:5px;
                                                "
                                            >

                                                ${escapeHTML(
                                                    event.notes
                                                )}

                                            </div>

                                        `

                                        : ""
                                }

                            </div>

                        `;
                    }
                )
                .join("")

            : `

                <p>
                    No care has been logged yet.
                </p>

            `;


    document.querySelector(
        "main"
    ).innerHTML = `

        ${makeAppTabs(
            "Home"
        )}


        <div
            style="
                max-width:1000px;
                margin:0 auto;
            "
        >


            <button
                onclick="
                    renderHome()
                "

                style="
                    margin-bottom:20px;
                "
            >

                ← Back to ESSAs

            </button>


            <div
                style="
                    display:grid;

                    grid-template-columns:
                        minmax(
                            250px,
                            .7fr
                        )
                        minmax(
                            0,
                            1.3fr
                        );

                    gap:25px;
                "
            >


                <div
                    style="
                        padding:25px;

                        background:
                            rgba(
                                255,
                                255,
                                255,
                                .92
                            );

                        border-radius:24px;

                        text-align:center;

                        border:
                            1px solid
                            #dbe5e7;
                    "
                >

                    ${visual}


                    <h1
                        style="
                            margin-bottom:5px;
                        "
                    >

                        ${escapeHTML(
                            essa.name
                        )}

                    </h1>


                    <p
                        style="
                            margin-top:0;

                            color:#68777b;
                        "
                    >

                        ${escapeHTML(
                            essa.species ||
                            ""
                        )}

                        ${
                            essa.breed

                                ? " • " +
                                escapeHTML(
                                    essa.breed
                                )

                                : ""
                        }

                    </p>


                    <button
                        onclick="
                            showEssaForm(
                                '${essa.id}'
                            )
                        "
                    >

                        ✏️ Edit ESSA

                    </button>


                    <button
                        onclick="
                            deleteEssa(
                                '${essa.id}'
                            )
                        "

                        style="
                            color:#b42318;
                        "
                    >

                        🗑️ Delete ESSA

                    </button>


                </div>


                <div
                    style="
                        display:flex;
                        flex-direction:column;
                        gap:20px;
                    "
                >


                    <div
                        style="
                            padding:22px;

                            background:
                                rgba(
                                    255,
                                    255,
                                    255,
                                    .92
                                );

                            border-radius:22px;

                            border:
                                1px solid
                                #dbe5e7;
                        "
                    >

                        <h2>
                            💚 About
                        </h2>


                        <p>

                            <strong>
                                Plush Color:
                            </strong>

                            ${escapeHTML(
                                essa.plushColor ||
                                "Not added"
                            )}

                        </p>


                        <p>

                            <strong>
                                Adoption Date:
                            </strong>

                            ${
                                essa.adoptionDate

                                    ? formatDate(
                                        essa.adoptionDate
                                    )

                                    : "Not added"
                            }

                        </p>


                        <p>

                            <strong>
                                Favorite Food:
                            </strong>

                            ${escapeHTML(
                                essa.favoriteFood ||
                                "Not added"
                            )}

                        </p>


                        <p>

                            <strong>
                                Favorite Weather:
                            </strong>

                            ${escapeHTML(
                                essa.favoriteWeather ||
                                "Not added"
                            )}

                        </p>


                        <p>

                            <strong>
                                Favorite Toy:
                            </strong>

                            ${escapeHTML(
                                essa.favoriteToy ||
                                "Not added"
                            )}

                        </p>


                        <p>

                            <strong>
                                Likes:
                            </strong>

                            ${escapeHTML(
                                essa.likes ||
                                "Not added"
                            )}

                        </p>


                        <p>

                            <strong>
                                Dislikes:
                            </strong>

                            ${escapeHTML(
                                essa.dislikes ||
                                "Not added"
                            )}

                        </p>


                    </div>


                    <div
                        style="
                            padding:22px;

                            background:
                                rgba(
                                    255,
                                    255,
                                    255,
                                    .92
                                );

                            border-radius:22px;

                            border:
                                1px solid
                                #dbe5e7;
                        "
                    >

                        <h2>
                            🩺 Medical Notes
                        </h2>


                        <p>

                            <strong>
                                Allergies:
                            </strong>

                            ${escapeHTML(
                                essa.allergies ||
                                "None listed"
                            )}

                        </p>


                        <p>

                            <strong>
                                Medications:
                            </strong>

                            ${escapeHTML(
                                essa.medications ||
                                "None listed"
                            )}

                        </p>


                        <p>

                            <strong>
                                Conditions:
                            </strong>

                            ${escapeHTML(
                                essa.conditions ||
                                "None listed"
                            )}

                        </p>


                    </div>


                    <div
                        style="
                            padding:22px;

                            background:
                                rgba(
                                    255,
                                    255,
                                    255,
                                    .92
                                );

                            border-radius:22px;

                            border:
                                1px solid
                                #dbe5e7;
                        "
                    >

                        <div
                            style="
                                display:flex;

                                align-items:center;

                                justify-content:
                                    space-between;

                                gap:10px;

                                flex-wrap:wrap;
                            "
                        >

                            <h2
                                style="
                                    margin:0;
                                "
                            >

                                🐾 Care

                            </h2>


                            <button
                                onclick="
                                    showCareLogForm(
                                        '${essa.id}'
                                    )
                                "
                            >

                                + Log Care

                            </button>


                        </div>


                        <div
                            style="
                                margin-top:15px;
                            "
                        >

                            ${careHTML}

                        </div>


                        <button
                            onclick="
                                showCareHistory(
                                    '${essa.id}'
                                )
                            "

                            style="
                                margin-top:15px;
                            "
                        >

                            View Full Care History

                        </button>


                    </div>


                </div>


            </div>


        </div>

    `;
}


/* =========================================================
   DELETE ESSA
========================================================= */

function deleteEssa(
    essaId
) {

    const essa =
        getEssaById(
            essaId
        );


    if (!essa) {

        return;
    }


    const confirmed =
        confirm(
            `Delete ${essa.name}? This cannot be undone.`
        );


    if (!confirmed) {

        return;
    }


    const essas =
        getSavedEssas()
            .filter(
                function(item) {

                    return (
                        String(
                            item.id
                        ) !==
                        String(
                            essaId
                        )
                    );
                }
            );


    saveEssas(
        essas
    );


    const care =
        getSavedCare()
            .filter(
                function(event) {

                    return (
                        String(
                            event.essaId
                        ) !==
                        String(
                            essaId
                        )
                    );
                }
            );


    saveCare(
        care
    );


    const scores =
        getSavedScores()
            .filter(
                function(score) {

                    return (
                        String(
                            score.essaId
                        ) !==
                        String(
                            essaId
                        )
                    );
                }
            );


    saveScores(
        scores
    );


    renderHome();
}


/* =========================================================
   REAL-WORLD CARE LOGGING
========================================================= */

function showCareLogForm(
    essaId,
    editEventId = null
) {

    const essa =
        getEssaById(
            essaId
        );


    if (!essa) {

        renderHome();

        return;
    }


    const events =
        getSavedCare();


    const existing =
        editEventId

            ? events.find(
                function(event) {

                    return (
                        String(
                            event.id
                        ) ===
                        String(
                            editEventId
                        )
                    );
                }
            )

            : null;


    const careOptions =
        careTypes
            .map(
                function(type) {

                    return `

                        <option
                            value="${escapeHTML(
                                type.name
                            )}"
                        >

                            ${type.icon}

                            ${escapeHTML(
                                type.name
                            )}

                        </option>

                    `;
                }
            )
            .join("");


    const dateValue =
        existing?.date

            ? new Date(
                existing.date
            )
                .toISOString()
                .slice(
                    0,
                    16
                )

            : new Date()
                .toISOString()
                .slice(
                    0,
                    16
                );


    document.querySelector(
        "main"
    ).innerHTML = `

        ${makeAppTabs(
            "Home"
        )}


        <div
            class="essa-form"
        >


            <button
                onclick="
                    showEssaProfile(
                        '${essa.id}'
                    )
                "
            >

                ← Back to
                ${escapeHTML(
                    essa.name
                )}

            </button>


            <h1>

                ${
                    existing

                        ? "Edit Care Entry"

                        : "Log Care"
                }

            </h1>


            <p>

                For:

                <strong>
                    ${escapeHTML(
                        essa.name
                    )}
                </strong>

            </p>


            <label>
                Care Type
            </label>


            <select
                id="care-type"
            >

                ${careOptions}

            </select>


            <label>
                Date & Time
            </label>


            <input
                id="care-date"

                type="datetime-local"

                value="${dateValue}"
            >


            <label>
                Notes
            </label>


            <textarea
                id="care-notes"

                placeholder="Optional notes"
            >${escapeHTML(
                existing?.notes ||
                ""
            )}</textarea>


            <div
                style="
                    display:flex;

                    gap:10px;

                    flex-wrap:wrap;

                    margin-top:20px;
                "
            >


                <button
                    onclick="
                        showEssaProfile(
                            '${essa.id}'
                        )
                    "
                >

                    Cancel

                </button>


                <button
                    onclick="
                        saveCareEntry(
                            '${essa.id}',
                            ${
                                existing
                                    ? `'${existing.id}'`
                                    : "null"
                            }
                        )
                    "
                >

                    ${
                        existing
                            ? "Save Changes"
                            : "Log Care"
                    }

                </button>


            </div>


        </div>

    `;


    if (existing) {

        const careType =
            document.getElementById(
                "care-type"
            );


        if (careType) {

            careType.value =
                existing.type;
        }
    }
}


/* =========================================================
   SAVE CARE ENTRY
========================================================= */

function saveCareEntry(
    essaId,
    editEventId = null
) {

    const type =
        document
            .getElementById(
                "care-type"
            )
            .value;


    const date =
        document
            .getElementById(
                "care-date"
            )
            .value;


    const notes =
        document
            .getElementById(
                "care-notes"
            )
            .value
            .trim();


    if (
        !type ||
        !date
    ) {

        alert(
            "Please choose a care type and time."
        );

        return;
    }


    const events =
        getSavedCare();


    if (editEventId) {

        const index =
            events.findIndex(
                function(event) {

                    return (
                        String(
                            event.id
                        ) ===
                        String(
                            editEventId
                        )
                    );
                }
            );


        if (
            index !==
            -1
        ) {

            events[
                index
            ] = {

                ...events[
                    index
                ],

                type:
                    type,

                date:
                    new Date(
                        date
                    )
                        .toISOString(),

                notes:
                    notes,

                updatedAt:
                    new Date()
                        .toISOString()

            };
        }

    } else {

        events.push(
            {

                id:
                    makeId(
                        "care"
                    ),

                essaId:
                    essaId,

                type:
                    type,

                date:
                    new Date(
                        date
                    )
                        .toISOString(),

                notes:
                    notes,

                createdAt:
                    new Date()
                        .toISOString()

            }
        );
    }


    saveCare(
        events
    );


    showEssaProfile(
        essaId
    );
}


/* =========================================================
   CARE HISTORY
========================================================= */

function showCareHistory(
    essaId,
    selectedType = "All"
) {

    const essa =
        getEssaById(
            essaId
        );


    if (!essa) {

        renderHome();

        return;
    }


    let events =
        getSavedCare()
            .filter(
                function(event) {

                    return (
                        String(
                            event.essaId
                        ) ===
                        String(
                            essa.id
                        )
                    );
                }
            );


    if (
        selectedType !==
        "All"
    ) {

        events =
            events.filter(
                function(event) {

                    return (
                        event.type ===
                        selectedType
                    );
                }
            );
    }


    events.sort(
        function(a, b) {

            return (
                new Date(
                    b.date
                ) -
                new Date(
                    a.date
                )
            );
        }
    );


    const filterOptions =
        [
            "All",
            ...careTypes.map(
                function(type) {

                    return type.name;
                }
            )
        ]
            .map(
                function(type) {

                    return `

                        <option
                            value="${escapeHTML(
                                type
                            )}"
                        >

                            ${escapeHTML(
                                type
                            )}

                        </option>

                    `;
                }
            )
            .join("");


    const eventHTML =
        events.length

            ? events
                .map(
                    function(event) {

                        const careType =
                            careTypes.find(
                                function(type) {

                                    return (
                                        type.name ===
                                        event.type
                                    );
                                }
                            );


                        return `

                            <div
                                style="
                                    padding:16px;

                                    margin-bottom:12px;

                                    background:white;

                                    border:
                                        1px solid
                                        #dbe5e7;

                                    border-radius:16px;
                                "
                            >


                                <div
                                    style="
                                        display:flex;

                                        justify-content:
                                            space-between;

                                        align-items:flex-start;

                                        gap:15px;

                                        flex-wrap:wrap;
                                    "
                                >


                                    <div>


                                        <strong
                                            style="
                                                font-size:17px;
                                            "
                                        >

                                            ${careType?.icon || "🐾"}

                                            ${escapeHTML(
                                                event.type
                                            )}

                                        </strong>


                                        <div
                                            style="
                                                margin-top:4px;

                                                color:#68777b;
                                            "
                                        >

                                            ${formatDateTime(
                                                event.date
                                            )}

                                        </div>


                                        ${
                                            event.notes

                                                ? `

                                                    <p
                                                        style="
                                                            margin-bottom:0;
                                                        "
                                                    >

                                                        ${escapeHTML(
                                                            event.notes
                                                        )}

                                                    </p>

                                                `

                                                : ""
                                        }


                                    </div>


                                    <div
                                        style="
                                            display:flex;

                                            gap:8px;

                                            flex-wrap:wrap;
                                        "
                                    >


                                        <button
                                            onclick="
                                                showCareLogForm(
                                                    '${essa.id}',
                                                    '${event.id}'
                                                )
                                            "
                                        >

                                            Edit

                                        </button>


                                        <button
                                            onclick="
                                                deleteCareEntry(
                                                    '${essa.id}',
                                                    '${event.id}',
                                                    '${selectedType}'
                                                )
                                            "

                                            style="
                                                color:#b42318;
                                            "
                                        >

                                            Delete

                                        </button>


                                    </div>


                                </div>


                            </div>

                        `;

                    }
                )
                .join("")

            : `

                <div
                    style="
                        padding:25px;

                        background:white;

                        border-radius:18px;

                        border:
                            1px solid
                            #dbe5e7;
                    "
                >

                    No care entries found.

                </div>

            `;


    document.querySelector(
        "main"
    ).innerHTML = `

        ${makeAppTabs(
            "Home"
        )}


        <div
            style="
                max-width:950px;

                margin:0 auto;
            "
        >


            <button
                onclick="
                    showEssaProfile(
                        '${essa.id}'
                    )
                "
            >

                ← Back to
                ${escapeHTML(
                    essa.name
                )}

            </button>


            <h1>
                🐾 Care History
            </h1>


            <p>

                ${escapeHTML(
                    essa.name
                )}

            </p>


            <div
                style="
                    max-width:300px;

                    margin-bottom:20px;
                "
            >


                <label>
                    Filter
                </label>


                <select
                    id="care-history-filter"

                    onchange="
                        showCareHistory(
                            '${essa.id}',
                            this.value
                        )
                    "
                >

                    ${filterOptions}

                </select>


            </div>


            <button
                onclick="
                    showCareLogForm(
                        '${essa.id}'
                    )
                "

                style="
                    margin-bottom:20px;
                "
            >

                + Log Care

            </button>


            ${eventHTML}


        </div>

    `;


    const filter =
        document.getElementById(
            "care-history-filter"
        );


    if (filter) {

        filter.value =
            selectedType;
    }
}


/* =========================================================
   DELETE CARE ENTRY
========================================================= */

function deleteCareEntry(
    essaId,
    eventId,
    selectedType = "All"
) {

    const confirmed =
        confirm(
            "Delete this care entry?"
        );


    if (!confirmed) {

        return;
    }


    const events =
        getSavedCare()
            .filter(
                function(event) {

                    return (
                        String(
                            event.id
                        ) !==
                        String(
                            eventId
                        )
                    );
                }
            );


    saveCare(
        events
    );


    showCareHistory(
        essaId,
        selectedType
    );
}
/* =========================================================
   TRAINING TAB
========================================================= */

function renderTrainingTab() {

    resetPageTheme();


    const tricks =
        getSavedTricks();


    let cards =
        "";


    tricks.forEach(
        function(trick) {

            cards += `

                <div
                    style="
                        background:white;

                        border:
                            1px solid
                            #dbe5e7;

                        border-radius:16px;

                        padding:18px;

                        box-shadow:
                            0 4px 12px
                            rgba(0,0,0,.05);
                    "
                >


                    <button
                        onclick="
                            showTrickLogger(
                                '${trick.id}'
                            )
                        "

                        style="
                            width:100%;

                            padding:14px;

                            border:none;

                            border-radius:10px;

                            background:#4fb5ae;

                            color:white;

                            font-size:17px;

                            cursor:pointer;
                        "
                    >

                        ⭐ ${escapeHTML(
                            trick.name
                        )}

                    </button>


                    <button
                        onclick="
                            deleteTrick(
                                '${trick.id}'
                            )
                        "

                        style="
                            margin-top:10px;

                            border:none;

                            background:none;

                            color:#b42318;

                            cursor:pointer;
                        "
                    >

                        Delete

                    </button>


                </div>

            `;
        }
    );


    if (
        tricks.length ===
        0
    ) {

        cards = `

            <div
                style="
                    padding:25px;

                    background:white;

                    border:
                        1px dashed
                        #b9d6d3;

                    border-radius:18px;
                "
            >

                <p
                    style="
                        margin:0;
                    "
                >

                    You haven't added any tricks yet.

                </p>

            </div>

        `;
    }


    document.querySelector(
        "main"
    ).innerHTML = `

        ${makeAppTabs(
            "Training"
        )}


        <div
            style="
                max-width:1000px;

                margin:0 auto;
            "
        >


            <h1>
                ⭐ Training
            </h1>


            <p
                style="
                    color:#68777b;

                    line-height:1.5;
                "
            >

                Build your trick library,
                then tap a trick whenever
                you want to log a score.

            </p>


            <button
                class="add-essa-button"

                onclick="
                    showAddTrickForm()
                "
            >

                + Add a Trick

            </button>


            <div
                style="
                    margin-top:30px;

                    display:grid;

                    grid-template-columns:
                        repeat(
                            auto-fit,
                            minmax(
                                200px,
                                1fr
                            )
                        );

                    gap:15px;
                "
            >

                ${cards}

            </div>


        </div>

    `;
}


/* =========================================================
   ADD TRICK
========================================================= */

function showAddTrickForm() {

    const options =
        presetTricks
            .map(
                function(trick) {

                    return `

                        <option
                            value="${escapeHTML(
                                trick
                            )}"
                        >

                            ${escapeHTML(
                                trick
                            )}

                        </option>

                    `;

                }
            )
            .join("");


    document.querySelector(
        "main"
    ).innerHTML = `

        ${makeAppTabs(
            "Training"
        )}


        <div
            class="essa-form"
        >


            <h1>
                Add a Trick
            </h1>


            <label>
                Trick
            </label>


            <select
                id="trick-choice"

                onchange="
                    updateCustomTrickField()
                "
            >


                <option value="">
                    Choose a trick
                </option>


                ${options}


                <option value="Custom">
                    Custom Trick
                </option>


            </select>


            <div
                id="custom-trick-area"

                style="
                    display:none;
                "
            >


                <label>
                    Custom Trick Name
                </label>


                <input
                    id="custom-trick-name"

                    type="text"
                >


            </div>


            <div
                style="
                    display:flex;

                    gap:10px;

                    flex-wrap:wrap;

                    margin-top:20px;
                "
            >


                <button
                    onclick="
                        renderTrainingTab()
                    "
                >

                    Cancel

                </button>


                <button
                    onclick="
                        saveNewTrick()
                    "
                >

                    Add Trick

                </button>


            </div>


        </div>

    `;
}


/* =========================================================
   CUSTOM TRICK FIELD
========================================================= */

function updateCustomTrickField() {

    const choice =
        document
            .getElementById(
                "trick-choice"
            )
            .value;


    const customArea =
        document.getElementById(
            "custom-trick-area"
        );


    if (!customArea) {

        return;
    }


    customArea.style.display =
        choice ===
        "Custom"

            ? "block"

            : "none";
}


/* =========================================================
   SAVE NEW TRICK
========================================================= */

function saveNewTrick() {

    const choice =
        document
            .getElementById(
                "trick-choice"
            )
            .value;


    let name =
        choice;


    if (
        choice ===
        "Custom"
    ) {

        name =
            document
                .getElementById(
                    "custom-trick-name"
                )
                .value
                .trim();
    }


    if (!name) {

        alert(
            "Please choose or enter a trick."
        );

        return;
    }


    const tricks =
        getSavedTricks();


    const duplicate =
        tricks.some(
            function(trick) {

                return (
                    String(
                        trick.name ||
                        ""
                    )
                        .toLowerCase() ===
                    name
                        .toLowerCase()
                );
            }
        );


    if (duplicate) {

        alert(
            "That trick is already in your library."
        );

        return;
    }


    tricks.push(
        {

            id:
                makeId(
                    "trick"
                ),

            name:
                name,

            createdAt:
                new Date()
                    .toISOString()

        }
    );


    saveTricks(
        tricks
    );


    renderTrainingTab();
}


/* =========================================================
   DELETE TRICK
========================================================= */

function deleteTrick(
    trickId
) {

    const tricks =
        getSavedTricks();


    const trick =
        tricks.find(
            function(item) {

                return (
                    String(
                        item.id
                    ) ===
                    String(
                        trickId
                    )
                );
            }
        );


    if (!trick) {

        return;
    }


    const confirmed =
        confirm(
            `Delete ${trick.name} from your trick library?`
        );


    if (!confirmed) {

        return;
    }


    const remainingTricks =
        tricks.filter(
            function(item) {

                return (
                    String(
                        item.id
                    ) !==
                    String(
                        trickId
                    )
                );
            }
        );


    saveTricks(
        remainingTricks
    );


    renderTrainingTab();
}


/* =========================================================
   TRAINING SCORE LOGGER
========================================================= */

function showTrickLogger(
    trickId
) {

    const trick =
        getSavedTricks()
            .find(
                function(item) {

                    return (
                        String(
                            item.id
                        ) ===
                        String(
                            trickId
                        )
                    );
                }
            );


    if (!trick) {

        renderTrainingTab();

        return;
    }


    const essas =
        getSavedEssas();


    if (
        essas.length ===
        0
    ) {

        alert(
            "Add an ESSA before logging a training score."
        );

        return;
    }


    const essaOptions =
        essas
            .slice()
            .sort(
                function(a, b) {

                    return String(
                        a.name ||
                        ""
                    )
                        .localeCompare(
                            String(
                                b.name ||
                                ""
                            )
                        );
                }
            )
            .map(
                function(essa) {

                    return `

                        <option
                            value="${essa.id}"
                        >

                            ${escapeHTML(
                                essa.name
                            )}

                        </option>

                    `;

                }
            )
            .join("");


    const now =
        new Date();


    document.querySelector(
        "main"
    ).innerHTML = `

        ${makeAppTabs(
            "Training"
        )}


        <div
            class="essa-form"
        >


            <h1>

                ⭐ ${escapeHTML(
                    trick.name
                )}

            </h1>


            <label>
                ESSA
            </label>


            <select
                id="score-essa"
            >

                ${essaOptions}

            </select>


            <label>
                When?
            </label>


            <select
                id="score-when"

                onchange="
                    updateScoreWhenFields()
                "
            >


                <option value="now">
                    Now
                </option>


                <option value="custom">
                    Custom Date & Time
                </option>


            </select>


            <div
                id="score-custom-time"

                style="
                    display:none;
                "
            >


                <label>
                    Date
                </label>


                <input
                    id="score-date"

                    type="date"

                    value="${getLocalDateString(
                        now
                    )}"
                >


                <label>
                    Time
                </label>


                <input
                    id="score-time"

                    type="time"

                    value="${getLocalTimeString(
                        now
                    )}"
                >


            </div>


            <label>
                Score
            </label>


            <select
                id="score-stars"
            >


                <option value="1">
                    ⭐ 1 Star
                </option>


                <option value="2">
                    ⭐⭐ 2 Stars
                </option>


                <option value="3">
                    ⭐⭐⭐ 3 Stars
                </option>


                <option value="4">
                    ⭐⭐⭐⭐ 4 Stars
                </option>


                <option value="5">
                    ⭐⭐⭐⭐⭐ 5 Stars
                </option>


            </select>


            <div
                style="
                    display:flex;

                    gap:10px;

                    flex-wrap:wrap;

                    margin-top:20px;
                "
            >


                <button
                    onclick="
                        renderTrainingTab()
                    "
                >

                    Cancel

                </button>


                <button
                    onclick="
                        saveTrainingScore(
                            '${trick.id}'
                        )
                    "
                >

                    Save Score

                </button>


            </div>


        </div>

    `;
}


/* =========================================================
   TRAINING TIME FIELDS
========================================================= */

function updateScoreWhenFields() {

    const when =
        document
            .getElementById(
                "score-when"
            )
            .value;


    const customTime =
        document.getElementById(
            "score-custom-time"
        );


    if (!customTime) {

        return;
    }


    customTime.style.display =
        when ===
        "custom"

            ? "block"

            : "none";
}


/* =========================================================
   LOCAL DATE STRING
========================================================= */

function getLocalDateString(
    date
) {

    const year =
        date.getFullYear();


    const month =
        String(
            date.getMonth() +
            1
        )
            .padStart(
                2,
                "0"
            );


    const day =
        String(
            date.getDate()
        )
            .padStart(
                2,
                "0"
            );


    return (
        year +
        "-" +
        month +
        "-" +
        day
    );
}


/* =========================================================
   LOCAL TIME STRING
========================================================= */

function getLocalTimeString(
    date
) {

    const hours =
        String(
            date.getHours()
        )
            .padStart(
                2,
                "0"
            );


    const minutes =
        String(
            date.getMinutes()
        )
            .padStart(
                2,
                "0"
            );


    return (
        hours +
        ":" +
        minutes
    );
}


/* =========================================================
   SAVE TRAINING SCORE
========================================================= */

function saveTrainingScore(
    trickId
) {

    const trick =
        getSavedTricks()
            .find(
                function(item) {

                    return (
                        String(
                            item.id
                        ) ===
                        String(
                            trickId
                        )
                    );
                }
            );


    if (!trick) {

        return;
    }


    const essaId =
        document
            .getElementById(
                "score-essa"
            )
            .value;


    const when =
        document
            .getElementById(
                "score-when"
            )
            .value;


    let date;

    let time;


    if (
        when ===
        "now"
    ) {

        const now =
            new Date();


        date =
            getLocalDateString(
                now
            );


        time =
            getLocalTimeString(
                now
            );

    } else {

        date =
            document
                .getElementById(
                    "score-date"
                )
                .value;


        time =
            document
                .getElementById(
                    "score-time"
                )
                .value;
    }


    if (
        !date ||
        !time
    ) {

        alert(
            "Please choose a date and time."
        );

        return;
    }


    const stars =
        Number(
            document
                .getElementById(
                    "score-stars"
                )
                .value
        );


    const scores =
        getSavedScores();


    scores.push(
        {

            id:
                makeId(
                    "score"
                ),

            essaId:
                essaId,

            trickId:
                trick.id,

            trickName:
                trick.name,

            stars:
                stars,

            date:
                date,

            time:
                time,

            createdAt:
                new Date()
                    .toISOString()

        }
    );


    saveScores(
        scores
    );


    renderScoresTab();
}
/* =========================================================
   SCORE DATE / TIME HELPER
========================================================= */

function makeLocalDateTime(
    date,
    time
) {

    if (!date) {

        return null;
    }


    const safeTime =
        time ||
        "00:00";


    const result =
        new Date(
            date +
            "T" +
            safeTime
        );


    if (
        Number.isNaN(
            result.getTime()
        )
    ) {

        return null;
    }


    return result;
}


/* =========================================================
   SCORE HELPERS
========================================================= */

function getScoreTimestamp(
    score
) {

    if (!score) {

        return 0;
    }


    const date =
        makeLocalDateTime(
            score.date,
            score.time
        );


    return date

        ? date.getTime()

        : 0;
}


function getScoreGroups() {

    const scores =
        getSavedScores();


    const groups =
        {};


    scores.forEach(
        function(score) {

            const key =
                String(
                    score.essaId
                ) +
                "_" +
                String(
                    score.trickId
                );


            if (
                !groups[
                    key
                ]
            ) {

                groups[
                    key
                ] = {

                    essaId:
                        score.essaId,

                    trickId:
                        score.trickId,

                    trickName:
                        score.trickName,

                    scores:
                        []

                };
            }


            groups[
                key
            ].scores.push(
                score
            );

        }
    );


    return Object.values(
        groups
    );
}


/* =========================================================
   AVERAGE SCORE
========================================================= */

function calculateAverageScore(
    scores
) {

    if (
        !scores ||
        scores.length ===
        0
    ) {

        return 0;
    }


    const total =
        scores.reduce(
            function(
                sum,
                score
            ) {

                return (
                    sum +
                    Number(
                        score.stars
                    )
                );

            },
            0
        );


    return (
        total /
        scores.length
    );
}


/* =========================================================
   LATEST SCORE
========================================================= */

function getLatestScore(
    scores
) {

    if (
        !scores ||
        scores.length ===
        0
    ) {

        return null;
    }


    return scores
        .slice()
        .sort(
            function(a, b) {

                return (
                    getScoreTimestamp(
                        b
                    ) -
                    getScoreTimestamp(
                        a
                    )
                );

            }
        )[0];
}


/* =========================================================
   STAR DISPLAY
========================================================= */

function makeStarDisplay(
    stars
) {

    const amount =
        Math.max(
            0,
            Math.min(
                5,
                Number(
                    stars
                ) || 0
            )
        );


    return (
        "⭐".repeat(
            amount
        ) +
        "☆".repeat(
            5 -
            amount
        )
    );
}


/* =========================================================
   SCORES TAB
========================================================= */

function renderScoresTab(
    essaFilter = "all",
    sortBy = "essa"
) {

    resetPageTheme();


    const essas =
        getSavedEssas();


    let groups =
        getScoreGroups();


    /* -------------------------
       FILTER BY ESSA
    ------------------------- */

    if (
        essaFilter !==
        "all"
    ) {

        groups =
            groups.filter(
                function(group) {

                    return (
                        String(
                            group.essaId
                        ) ===
                        String(
                            essaFilter
                        )
                    );

                }
            );
    }


    /* -------------------------
       SORT BY ESSA NAME
    ------------------------- */

    if (
        sortBy ===
        "essa"
    ) {

        groups.sort(
            function(a, b) {

                const essaA =
                    getEssaById(
                        a.essaId
                    );


                const essaB =
                    getEssaById(
                        b.essaId
                    );


                return String(
                    essaA?.name ||
                    ""
                )
                    .localeCompare(
                        String(
                            essaB?.name ||
                            ""
                        )
                    );

            }
        );
    }


    /* -------------------------
       SORT BY TRICK
    ------------------------- */

    if (
        sortBy ===
        "trick"
    ) {

        groups.sort(
            function(a, b) {

                return String(
                    a.trickName ||
                    ""
                )
                    .localeCompare(
                        String(
                            b.trickName ||
                            ""
                        )
                    );

            }
        );
    }


    /* -------------------------
       HIGHEST AVERAGE
    ------------------------- */

    if (
        sortBy ===
        "highestAverage"
    ) {

        groups.sort(
            function(a, b) {

                return (
                    calculateAverageScore(
                        b.scores
                    ) -
                    calculateAverageScore(
                        a.scores
                    )
                );

            }
        );
    }


    /* -------------------------
       LOWEST AVERAGE
    ------------------------- */

    if (
        sortBy ===
        "lowestAverage"
    ) {

        groups.sort(
            function(a, b) {

                return (
                    calculateAverageScore(
                        a.scores
                    ) -
                    calculateAverageScore(
                        b.scores
                    )
                );

            }
        );
    }


    /* -------------------------
       MOST ATTEMPTS
    ------------------------- */

    if (
        sortBy ===
        "mostAttempts"
    ) {

        groups.sort(
            function(a, b) {

                return (
                    b.scores.length -
                    a.scores.length
                );

            }
        );
    }


    /* -------------------------
       MOST RECENT
    ------------------------- */

    if (
        sortBy ===
        "mostRecent"
    ) {

        groups.sort(
            function(a, b) {

                return (
                    getScoreTimestamp(
                        getLatestScore(
                            b.scores
                        )
                    ) -
                    getScoreTimestamp(
                        getLatestScore(
                            a.scores
                        )
                    )
                );

            }
        );
    }


    /* -------------------------
       ESSA FILTER OPTIONS
    ------------------------- */

    const filterOptions =
        essas
            .slice()
            .sort(
                function(a, b) {

                    return String(
                        a.name ||
                        ""
                    )
                        .localeCompare(
                            String(
                                b.name ||
                                ""
                            )
                        );

                }
            )
            .map(
                function(essa) {

                    return `

                        <option
                            value="${essa.id}"
                        >

                            ${escapeHTML(
                                essa.name
                            )}

                        </option>

                    `;

                }
            )
            .join("");


    /* -------------------------
       SCORE CARDS
    ------------------------- */

    let cards =
        "";


    groups.forEach(
        function(group) {

            const essa =
                getEssaById(
                    group.essaId
                );


            if (!essa) {

                return;
            }


            const average =
                calculateAverageScore(
                    group.scores
                );


            const latest =
                getLatestScore(
                    group.scores
                );


            cards += `

                <div
                    style="
                        padding:20px;

                        background:white;

                        border:
                            1px solid
                            #dbe5e7;

                        border-radius:18px;

                        box-shadow:
                            0 4px 14px
                            rgba(0,0,0,.05);
                    "
                >


                    <p
                        style="
                            margin:0;

                            color:#68777b;
                        "
                    >

                        ${escapeHTML(
                            essa.name
                        )}

                    </p>


                    <button
                        onclick="
                            showTrickProgress(
                                '${group.essaId}',
                                '${group.trickId}'
                            )
                        "

                        style="
                            margin:
                                8px 0
                                15px 0;

                            padding:0;

                            border:none;

                            background:none;

                            color:#3b9f99;

                            font-size:21px;

                            font-weight:bold;

                            cursor:pointer;

                            text-align:left;
                        "
                    >

                        ${escapeHTML(
                            group.trickName
                        )}

                    </button>


                    <div
                        style="
                            display:grid;

                            grid-template-columns:
                                repeat(
                                    3,
                                    1fr
                                );

                            gap:10px;
                        "
                    >


                        <div>

                            <strong>
                                Average
                            </strong>

                            <div>

                                ${average.toFixed(
                                    1
                                )} ⭐

                            </div>

                        </div>


                        <div>

                            <strong>
                                Latest
                            </strong>

                            <div>

                                ${
                                    latest

                                        ? latest.stars +
                                        " ⭐"

                                        : "—"
                                }

                            </div>

                        </div>


                        <div>

                            <strong>
                                Attempts
                            </strong>

                            <div>

                                ${group.scores.length}

                            </div>

                        </div>


                    </div>


                </div>

            `;

        }
    );


    if (!cards) {

        cards = `

            <div
                style="
                    padding:25px;

                    background:white;

                    border:
                        1px dashed
                        #b9d6d3;

                    border-radius:18px;
                "
            >

                <p
                    style="
                        margin:0;
                    "
                >

                    No training scores yet.

                </p>

            </div>

        `;
    }


    document.querySelector(
        "main"
    ).innerHTML = `

        ${makeAppTabs(
            "Scores"
        )}


        <div
            style="
                max-width:1100px;

                margin:0 auto;
            "
        >


            <h1>
                🏆 Scores
            </h1>


            <p
                style="
                    color:#68777b;

                    line-height:1.5;
                "
            >

                Track how your ESSAs are
                improving with each trick.

            </p>


            <div
                style="
                    display:flex;

                    gap:12px;

                    justify-content:center;

                    flex-wrap:wrap;

                    margin:
                        20px 0
                        30px 0;
                "
            >


                <div
                    style="
                        min-width:220px;
                    "
                >


                    <label>
                        ESSA
                    </label>


                    <select
                        id="scores-essa-filter"

                        onchange="
                            renderScoresTab(
                                this.value,
                                document
                                    .getElementById(
                                        'scores-sort'
                                    )
                                    .value
                            )
                        "
                    >


                        <option
                            value="all"
                        >

                            All ESSAs

                        </option>


                        ${filterOptions}


                    </select>


                </div>


                <div
                    style="
                        min-width:220px;
                    "
                >


                    <label>
                        Sort
                    </label>


                    <select
                        id="scores-sort"

                        onchange="
                            renderScoresTab(
                                document
                                    .getElementById(
                                        'scores-essa-filter'
                                    )
                                    .value,
                                this.value
                            )
                        "
                    >


                        <option
                            value="essa"
                        >

                            ESSA Name

                        </option>


                        <option
                            value="trick"
                        >

                            Trick Name

                        </option>


                        <option
                            value="highestAverage"
                        >

                            Highest Average

                        </option>


                        <option
                            value="lowestAverage"
                        >

                            Lowest Average

                        </option>


                        <option
                            value="mostAttempts"
                        >

                            Most Attempts

                        </option>


                        <option
                            value="mostRecent"
                        >

                            Most Recent Training

                        </option>


                    </select>


                </div>


            </div>


            <div
                style="
                    display:grid;

                    grid-template-columns:
                        repeat(
                            auto-fit,
                            minmax(
                                260px,
                                1fr
                            )
                        );

                    gap:18px;
                "
            >

                ${cards}

            </div>


        </div>

    `;


    const essaSelect =
        document.getElementById(
            "scores-essa-filter"
        );


    const sortSelect =
        document.getElementById(
            "scores-sort"
        );


    if (essaSelect) {

        essaSelect.value =
            String(
                essaFilter
            );
    }


    if (sortSelect) {

        sortSelect.value =
            sortBy;
    }
}


/* =========================================================
   TRICK PROGRESS
========================================================= */

function showTrickProgress(
    essaId,
    trickId
) {

    const essa =
        getEssaById(
            essaId
        );


    if (!essa) {

        renderScoresTab();

        return;
    }


    const scores =
        getSavedScores()
            .filter(
                function(score) {

                    return (

                        String(
                            score.essaId
                        ) ===
                        String(
                            essaId
                        )

                        &&

                        String(
                            score.trickId
                        ) ===
                        String(
                            trickId
                        )

                    );

                }
            )
            .sort(
                function(a, b) {

                    return (
                        getScoreTimestamp(
                            b
                        ) -
                        getScoreTimestamp(
                            a
                        )
                    );

                }
            );


    if (
        scores.length ===
        0
    ) {

        renderScoresTab();

        return;
    }


    const trickName =
        scores[0].trickName ||
        "Trick";


    const average =
        calculateAverageScore(
            scores
        );


    const bestScore =
        Math.max(
            ...scores.map(
                function(score) {

                    return Number(
                        score.stars
                    );
                }
            )
        );


    const latest =
        getLatestScore(
            scores
        );


    const historyHTML =
        scores
            .map(
                function(score) {

                    return `

                        <div
                            style="
                                padding:16px;

                                margin-bottom:12px;

                                background:white;

                                border:
                                    1px solid
                                    #dbe5e7;

                                border-radius:16px;
                            "
                        >


                            <div
                                style="
                                    display:flex;

                                    justify-content:
                                        space-between;

                                    gap:15px;

                                    align-items:
                                        flex-start;

                                    flex-wrap:wrap;
                                "
                            >


                                <div>


                                    <div
                                        style="
                                            font-size:21px;

                                            margin-bottom:5px;
                                        "
                                    >

                                        ${makeStarDisplay(
                                            score.stars
                                        )}

                                    </div>


                                    <div
                                        style="
                                            color:#68777b;
                                        "
                                    >

                                        ${formatScoreDateTime(
                                            score
                                        )}

                                    </div>


                                </div>


                                <div
                                    style="
                                        display:flex;

                                        gap:8px;

                                        flex-wrap:wrap;
                                    "
                                >


                                    <button
                                        onclick="
                                            showEditScoreForm(
                                                '${score.id}'
                                            )
                                        "
                                    >

                                        Edit

                                    </button>


                                    <button
                                        onclick="
                                            deleteTrainingScore(
                                                '${score.id}',
                                                '${essaId}',
                                                '${trickId}'
                                            )
                                        "

                                        style="
                                            color:#b42318;
                                        "
                                    >

                                        Delete

                                    </button>


                                </div>


                            </div>


                        </div>

                    `;

                }
            )
            .join("");


    document.querySelector(
        "main"
    ).innerHTML = `

        ${makeAppTabs(
            "Scores"
        )}


        <div
            style="
                max-width:900px;

                margin:0 auto;
            "
        >


            <button
                onclick="
                    renderScoresTab()
                "
            >

                ← Back to Scores

            </button>


            <h1>

                ⭐ ${escapeHTML(
                    trickName
                )}

            </h1>


            <h2
                style="
                    margin-top:0;

                    color:#68777b;
                "
            >

                ${escapeHTML(
                    essa.name
                )}

            </h2>


            <div
                style="
                    display:grid;

                    grid-template-columns:
                        repeat(
                            3,
                            minmax(
                                0,
                                1fr
                            )
                        );

                    gap:14px;

                    margin:
                        25px 0;
                "
            >


                <div
                    style="
                        padding:18px;

                        background:white;

                        border-radius:16px;

                        border:
                            1px solid
                            #dbe5e7;

                        text-align:center;
                    "
                >

                    <strong>
                        Average
                    </strong>


                    <div
                        style="
                            margin-top:8px;

                            font-size:24px;
                        "
                    >

                        ${average.toFixed(
                            1
                        )} ⭐

                    </div>


                </div>


                <div
                    style="
                        padding:18px;

                        background:white;

                        border-radius:16px;

                        border:
                            1px solid
                            #dbe5e7;

                        text-align:center;
                    "
                >

                    <strong>
                        Best
                    </strong>


                    <div
                        style="
                            margin-top:8px;

                            font-size:24px;
                        "
                    >

                        ${bestScore} ⭐

                    </div>


                </div>


                <div
                    style="
                        padding:18px;

                        background:white;

                        border-radius:16px;

                        border:
                            1px solid
                            #dbe5e7;

                        text-align:center;
                    "
                >

                    <strong>
                        Attempts
                    </strong>


                    <div
                        style="
                            margin-top:8px;

                            font-size:24px;
                        "
                    >

                        ${scores.length}

                    </div>


                </div>


            </div>


            <div
                style="
                    padding:20px;

                    background:
                        rgba(
                            255,
                            255,
                            255,
                            .8
                        );

                    border-radius:18px;

                    border:
                        1px solid
                        #dbe5e7;

                    margin-bottom:25px;
                "
            >


                <strong>
                    Latest Score
                </strong>


                <div
                    style="
                        font-size:24px;

                        margin-top:8px;
                    "
                >

                    ${
                        latest

                            ? makeStarDisplay(
                                latest.stars
                            )

                            : "—"
                    }

                </div>


            </div>


            <h2>
                Training History
            </h2>


            ${historyHTML}


        </div>

    `;
}


/* =========================================================
   FORMAT SCORE DATE / TIME
========================================================= */

function formatScoreDateTime(
    score
) {

    const date =
        makeLocalDateTime(
            score.date,
            score.time
        );


    if (!date) {

        return "Unknown date";
    }


    return date.toLocaleString(
        undefined,
        {

            year:
                "numeric",

            month:
                "short",

            day:
                "numeric",

            hour:
                "numeric",

            minute:
                "2-digit"

        }
    );
}


/* =========================================================
   EDIT SCORE FORM
========================================================= */

function showEditScoreForm(
    scoreId
) {

    const score =
        getSavedScores()
            .find(
                function(item) {

                    return (
                        String(
                            item.id
                        ) ===
                        String(
                            scoreId
                        )
                    );

                }
            );


    if (!score) {

        renderScoresTab();

        return;
    }


    const essa =
        getEssaById(
            score.essaId
        );


    document.querySelector(
        "main"
    ).innerHTML = `

        ${makeAppTabs(
            "Scores"
        )}


        <div
            class="essa-form"
        >


            <h1>
                Edit Training Score
            </h1>


            <p>

                <strong>
                    ${escapeHTML(
                        essa?.name ||
                        "ESSA"
                    )}
                </strong>

                —

                ${escapeHTML(
                    score.trickName ||
                    "Trick"
                )}

            </p>


            <label>
                Date
            </label>


            <input
                id="edit-score-date"

                type="date"

                value="${escapeHTML(
                    score.date ||
                    ""
                )}"
            >


            <label>
                Time
            </label>


            <input
                id="edit-score-time"

                type="time"

                value="${escapeHTML(
                    score.time ||
                    ""
                )}"
            >


            <label>
                Score
            </label>


            <select
                id="edit-score-stars"
            >


                <option value="1">
                    ⭐ 1 Star
                </option>


                <option value="2">
                    ⭐⭐ 2 Stars
                </option>


                <option value="3">
                    ⭐⭐⭐ 3 Stars
                </option>


                <option value="4">
                    ⭐⭐⭐⭐ 4 Stars
                </option>


                <option value="5">
                    ⭐⭐⭐⭐⭐ 5 Stars
                </option>


            </select>


            <div
                style="
                    display:flex;

                    gap:10px;

                    flex-wrap:wrap;

                    margin-top:20px;
                "
            >


                <button
                    onclick="
                        showTrickProgress(
                            '${score.essaId}',
                            '${score.trickId}'
                        )
                    "
                >

                    Cancel

                </button>


                <button
                    onclick="
                        saveEditedTrainingScore(
                            '${score.id}'
                        )
                    "
                >

                    Save Changes

                </button>


            </div>


        </div>

    `;


    const starSelect =
        document.getElementById(
            "edit-score-stars"
        );


    if (starSelect) {

        starSelect.value =
            String(
                score.stars
            );
    }
}


/* =========================================================
   SAVE EDITED SCORE
========================================================= */

function saveEditedTrainingScore(
    scoreId
) {

    const scores =
        getSavedScores();


    const index =
        scores.findIndex(
            function(score) {

                return (
                    String(
                        score.id
                    ) ===
                    String(
                        scoreId
                    )
                );

            }
        );


    if (
        index ===
        -1
    ) {

        return;
    }


    const date =
        document
            .getElementById(
                "edit-score-date"
            )
            .value;


    const time =
        document
            .getElementById(
                "edit-score-time"
            )
            .value;


    const stars =
        Number(
            document
                .getElementById(
                    "edit-score-stars"
                )
                .value
        );


    if (
        !date ||
        !time
    ) {

        alert(
            "Please choose a date and time."
        );

        return;
    }


    scores[
        index
    ] = {

        ...scores[
            index
        ],

        date:
            date,

        time:
            time,

        stars:
            stars,

        updatedAt:
            new Date()
                .toISOString()

    };


    const essaId =
        scores[
            index
        ].essaId;


    const trickId =
        scores[
            index
        ].trickId;


    saveScores(
        scores
    );


    showTrickProgress(
        essaId,
        trickId
    );
}


/* =========================================================
   DELETE TRAINING SCORE
========================================================= */

function deleteTrainingScore(
    scoreId,
    essaId,
    trickId
) {

    const confirmed =
        confirm(
            "Delete this training score?"
        );


    if (!confirmed) {

        return;
    }


    const remainingScores =
        getSavedScores()
            .filter(
                function(score) {

                    return (
                        String(
                            score.id
                        ) !==
                        String(
                            scoreId
                        )
                    );

                }
            );


    saveScores(
        remainingScores
    );


    const stillExists =
        remainingScores.some(
            function(score) {

                return (

                    String(
                        score.essaId
                    ) ===
                    String(
                        essaId
                    )

                    &&

                    String(
                        score.trickId
                    ) ===
                    String(
                        trickId
                    )

                );

            }
        );


    if (stillExists) {

        showTrickProgress(
            essaId,
            trickId
        );

    } else {

        renderScoresTab();
    }
}
/* =========================================================
   PLAY MODE — HELPERS
========================================================= */

function getPlayableEssaById(
    essaId
) {

    return (
        playableEssas.find(
            function(essa) {

                return (
                    String(
                        essa.id
                    ) ===
                    String(
                        essaId
                    )
                );

            }
        ) ||
        null
    );
}


/* =========================================================
   TRAINER PROGRESS
========================================================= */

function getTrainerProgress(
    playData
) {

    const xpNeeded =
        100;


    const currentXP =
        Math.max(
            0,
            Number(
                playData.trainerXP
            ) || 0
        );


    const percentage =
        Math.min(
            100,
            (
                currentXP /
                xpNeeded
            ) *
            100
        );


    return {

        xpNeeded:
            xpNeeded,

        currentXP:
            currentXP,

        percentage:
            percentage

    };
}


/* =========================================================
   ADD TRAINER XP
========================================================= */

function addTrainerXP(
    playData,
    amount
) {

    let xp =
        Math.max(
            0,
            Number(
                playData.trainerXP
            ) || 0
        );


    let level =
        Math.max(
            1,
            Number(
                playData.trainerLevel
            ) || 1
        );


    xp +=
        Math.max(
            0,
            Number(
                amount
            ) || 0
        );


    let leveledUp =
        false;


    while (
        xp >=
        100
    ) {

        xp -=
            100;


        level +=
            1;


        leveledUp =
            true;
    }


    playData.trainerXP =
        xp;


    playData.trainerLevel =
        level;


    if (
        !Array.isArray(
            playData.unlockedEssaIds
        )
    ) {

        playData.unlockedEssaIds =
            [
                "moocow"
            ];
    }


    const newlyUnlocked =
        [];


    playableEssas.forEach(
        function(essa) {

            if (
                level >=
                    essa.unlockLevel

                &&

                !playData
                    .unlockedEssaIds
                    .includes(
                        essa.id
                    )
            ) {

                playData
                    .unlockedEssaIds
                    .push(
                        essa.id
                    );


                getPlayEssaStats(
                    playData,
                    essa.id
                );


                newlyUnlocked.push(
                    essa
                );
            }

        }
    );


    return {

        leveledUp:
            leveledUp,

        newlyUnlocked:
            newlyUnlocked

    };
}


/* =========================================================
   TRAINER LEVEL BAR
========================================================= */

function makeTrainerLevelBar(
    playData
) {

    const progress =
        getTrainerProgress(
            playData
        );


    return `

        <div
            style="
                width:min(
                    92%,
                    700px
                );

                margin:0 auto;

                padding:
                    12px
                    15px;

                background:
                    rgba(
                        255,
                        255,
                        255,
                        .92
                    );

                border:
                    1px solid
                    rgba(
                        255,
                        255,
                        255,
                        .8
                    );

                border-radius:18px;

                box-shadow:
                    0 4px 16px
                    rgba(
                        0,
                        0,
                        0,
                        .12
                    );

                box-sizing:
                    border-box;
            "
        >


            <div
                style="
                    display:flex;

                    justify-content:
                        space-between;

                    gap:15px;

                    margin-bottom:8px;

                    font-size:14px;

                    font-weight:bold;

                    color:#26343b;
                "
            >


                <span>

                    ⭐ Trainer Level

                    ${playData.trainerLevel}

                </span>


                <span>

                    ${progress.currentXP}

                    /

                    ${progress.xpNeeded}

                    XP

                </span>


            </div>


            <div
                style="
                    width:100%;

                    height:14px;

                    background:#e8eeee;

                    border-radius:999px;

                    overflow:hidden;
                "
            >


                <div
                    style="
                        width:
                            ${progress.percentage}%;

                        height:100%;

                        background:#4fb5ae;

                        border-radius:999px;

                        transition:
                            width
                            .3s
                            ease;
                    "
                ></div>


            </div>


        </div>

    `;
}


/* =========================================================
   PLAYABLE ESSA VISUAL
========================================================= */

function makePlayableEssaVisual(
    essa,
    locked = false,
    size = "normal"
) {

    if (!essa) {

        return "";
    }


    const maxWidth =
        size ===
        "focus"

            ? "430px"

            : "220px";


    const fontSize =
        size ===
        "focus"

            ? "150px"

            : "85px";


    return `

        <div
            style="
                width:100%;

                max-width:
                    ${maxWidth};

                aspect-ratio:
                    1 / 1;

                margin:auto;

                display:flex;

                align-items:center;

                justify-content:center;

                overflow:hidden;

                position:relative;
            "
        >


            <img
                src="${essa.image}"

                alt="${escapeHTML(
                    essa.name
                )}"

                onerror="
                    this.style.display='none';

                    this.nextElementSibling.style.display='flex';
                "

                style="
                    width:100%;

                    height:100%;

                    object-fit:contain;

                    ${
                        locked

                            ? `
                                filter:
                                    grayscale(
                                        1
                                    );

                                opacity:.45;
                            `

                            : ""
                    }
                "
            >


            <div
                style="
                    display:none;

                    width:100%;

                    height:100%;

                    align-items:center;

                    justify-content:center;

                    font-size:
                        ${fontSize};

                    ${
                        locked

                            ? `
                                filter:
                                    grayscale(
                                        1
                                    );

                                opacity:.45;
                            `

                            : ""
                    }
                "
            >

                ${essa.fallbackIcon}

            </div>


            ${
                locked

                    ? `

                        <div
                            style="
                                position:absolute;

                                inset:0;

                                display:flex;

                                align-items:center;

                                justify-content:center;

                                font-size:45px;
                            "
                        >

                            🔒

                        </div>

                    `

                    : ""
            }


        </div>

    `;
}


/* =========================================================
   PLAY MODE ENTRY
========================================================= */

function renderPlayTab() {

    resetPageTheme();


    const playData =
        getSavedPlayData();


    if (
        playData.hasSeenPlayIntro
    ) {

        renderPlayRoom();

        return;
    }


    renderPlayIntro();
}


/* =========================================================
   PLAY INTRO
========================================================= */

function renderPlayIntro() {

    resetPageTheme();


    const playData =
        getSavedPlayData();


    const moocow =
        getPlayableEssaById(
            "moocow"
        );


    document.querySelector(
        "main"
    ).innerHTML = `

        ${makeAppTabs(
            "Play"
        )}


        <div
            style="
                max-width:850px;

                margin:0 auto;

                text-align:center;
            "
        >


            <h1>
                🎮 Welcome to Play!
            </h1>


            <p
                style="
                    font-size:18px;

                    line-height:1.6;

                    color:#68777b;
                "
            >

                Meet the ESSAs who live
                inside the ESSAzLife house!

                Care for them,
                spend time with them,
                explore the rooms,
                and earn Trainer XP.

            </p>


            <div
                style="
                    max-width:500px;

                    margin:
                        30px
                        auto;

                    padding:25px;

                    background:white;

                    border:
                        1px solid
                        #dbe5e7;

                    border-radius:24px;

                    box-shadow:
                        0 5px 18px
                        rgba(
                            0,
                            0,
                            0,
                            .07
                        );
                "
            >


                ${makePlayableEssaVisual(
                    moocow,
                    false,
                    "focus"
                )}


                <h2>
                    Meet MooCow! 🐮
                </h2>


                <p>
                    MooCow is your starter ESSA.
                </p>


                <p>
                    Reach Trainer Level 10
                    to unlock DaisyBelle!
                </p>


            </div>


            ${makeTrainerLevelBar(
                playData
            )}


            <button
                onclick="
                    enterPlayRoomForFirstTime()
                "

                style="
                    margin-top:28px;

                    padding:
                        16px
                        30px;

                    border:none;

                    border-radius:14px;

                    background:#4fb5ae;

                    color:white;

                    font-size:19px;

                    font-weight:bold;

                    cursor:pointer;
                "
            >

                Enter the House 🐾

            </button>


        </div>

    `;
}


/* =========================================================
   ENTER PLAY FOR FIRST TIME
========================================================= */

function enterPlayRoomForFirstTime() {

    const playData =
        getSavedPlayData();


    playData.hasSeenPlayIntro =
        true;


    playData.selectedEssaId =
        "moocow";


    savePlayData(
        playData
    );


    renderPlayRoom();
}


/* =========================================================
   PLAYABLE ESSA COLLECTION
========================================================= */

function renderPlayableEssaCollection() {

    resetPageTheme();


    const playData =
        getSavedPlayData();


    const cards =
        playableEssas
            .map(
                function(essa) {

                    const unlocked =
                        playData
                            .unlockedEssaIds
                            .includes(
                                essa.id
                            );


                    return `

                        <div
                            style="
                                padding:18px;

                                background:white;

                                border:
                                    1px solid
                                    #dbe5e7;

                                border-radius:20px;

                                text-align:center;

                                box-shadow:
                                    0 4px 14px
                                    rgba(
                                        0,
                                        0,
                                        0,
                                        .06
                                    );
                            "
                        >


                            ${makePlayableEssaVisual(
                                essa,
                                !unlocked
                            )}


                            <h2
                                style="
                                    margin-bottom:5px;
                                "
                            >

                                ${escapeHTML(
                                    essa.name
                                )}

                            </h2>


                            ${
                                unlocked

                                    ? `

                                        <p
                                            style="
                                                color:#3b9f99;

                                                font-weight:bold;
                                            "
                                        >

                                            ✅ Unlocked

                                        </p>


                                        <button
                                            onclick="
                                                focusPlayableEssa(
                                                    '${essa.id}'
                                                )
                                            "
                                        >

                                            Play with
                                            ${escapeHTML(
                                                essa.name
                                            )}

                                        </button>

                                    `

                                    : `

                                        <p
                                            style="
                                                color:#68777b;
                                            "
                                        >

                                            🔒 Unlocks at
                                            Trainer Level

                                            ${essa.unlockLevel}

                                        </p>

                                    `
                            }


                        </div>

                    `;

                }
            )
            .join("");


    document.querySelector(
        "main"
    ).innerHTML = `

        ${makeAppTabs(
            "Play"
        )}


        <div
            style="
                max-width:1100px;

                margin:0 auto;
            "
        >


            <button
                onclick="
                    renderPlayRoom()
                "
            >

                ← Back to House

            </button>


            <h1>
                🐾 ESSA Collection
            </h1>


            <p
                style="
                    color:#68777b;

                    line-height:1.5;
                "
            >

                Raise your Trainer Level
                to unlock more ESSAs.

            </p>


            <div
                style="
                    margin:
                        20px
                        0
                        25px
                        0;
                "
            >

                ${makeTrainerLevelBar(
                    playData
                )}

            </div>


            <div
                style="
                    display:grid;

                    grid-template-columns:
                        repeat(
                            auto-fit,
                            minmax(
                                210px,
                                1fr
                            )
                        );

                    gap:18px;
                "
            >

                ${cards}

            </div>


            <div
                style="
                    margin-top:30px;

                    padding:20px;

                    background:
                        rgba(
                            255,
                            255,
                            255,
                            .88
                        );

                    border:
                        1px solid
                        #dbe5e7;

                    border-radius:18px;

                    text-align:center;
                "
            >

                <strong>
                    Current unlock path:
                </strong>


                <p
                    style="
                        margin-bottom:0;

                        line-height:1.8;
                    "
                >

                    🐮 MooCow — Level 1
                    <br>

                    🐮 DaisyBelle — Level 10
                    <br>

                    🐶 Oreo — Level 20
                    <br>

                    🐶 Stormy — Level 30
                    <br>

                    🐶 Mudpie — Level 40
                    <br>

                    🐶 Mocha — Level 50
                    <br>

                    🐶 Moose — Level 60
                    <br>

                    🐶 Lily — Level 70

                </p>


            </div>


        </div>

    `;
}


/* =========================================================
   PLAY MODE — FOCUS ESSA
========================================================= */

function focusPlayableEssa(
    essaId
) {

    const playData =
        getSavedPlayData();


    const essa =
        getPlayableEssaById(
            essaId
        );


    if (!essa) {

        return;
    }


    if (
        !playData
            .unlockedEssaIds
            .includes(
                essa.id
            )
    ) {

        alert(
            `${essa.name} unlocks at Trainer Level ${essa.unlockLevel}.`
        );

        return;
    }


    playData.selectedEssaId =
        essa.id;


    getPlayEssaStats(
        playData,
        essa.id
    );


    savePlayData(
        playData
    );


    renderPlayableEssaFocus(
        essa.id
    );
}


/* =========================================================
   PLAY STAT BAR
========================================================= */

function makePlayStatBar(
    label,
    icon,
    value
) {

    const amount =
        normalizePlayStatValue(
            value
        );


    return `

        <div
            style="
                margin-bottom:12px;
            "
        >


            <div
                style="
                    display:flex;

                    justify-content:
                        space-between;

                    gap:10px;

                    margin-bottom:5px;

                    font-size:13px;

                    font-weight:bold;

                    color:#26343b;
                "
            >


                <span>

                    ${icon}

                    ${escapeHTML(
                        label
                    )}

                </span>


                <span>

                    ${Math.round(
                        amount
                    )}%

                </span>


            </div>


            <div
                style="
                    width:100%;

                    height:12px;

                    background:
                        rgba(
                            225,
                            233,
                            234,
                            .95
                        );

                    border-radius:999px;

                    overflow:hidden;
                "
            >


                <div
                    style="
                        width:
                            ${amount}%;

                        height:100%;

                        background:#4fb5ae;

                        border-radius:999px;

                        transition:
                            width
                            .3s
                            ease;
                    "
                ></div>


            </div>


        </div>

    `;
}


/* =========================================================
   PLAY NEED STATUS
========================================================= */

function getPlayNeedStatus(
    stats
) {

    const needs = [

        {
            name:
                "Food",

            icon:
                "🍎",

            value:
                stats.food
        },

        {
            name:
                "Water",

            icon:
                "💧",

            value:
                stats.water
        },

        {
            name:
                "Cleanliness",

            icon:
                "🛁",

            value:
                stats.cleanliness
        },

        {
            name:
                "Happiness",

            icon:
                "💚",

            value:
                stats.happiness
        }

    ];


    needs.sort(
        function(a, b) {

            return (
                a.value -
                b.value
            );
        }
    );


    return needs[0];
}


/* =========================================================
   PLAY ESSA STATUS MESSAGE
========================================================= */

function getPlayStatusMessage(
    essa,
    stats
) {

    const lowest =
        getPlayNeedStatus(
            stats
        );


    if (
        lowest.value <=
        20
    ) {

        return (
            `${essa.name} really needs ` +
            `${lowest.name.toLowerCase()}!`
        );
    }


    if (
        lowest.value <=
        40
    ) {

        return (
            `${essa.name} could use some ` +
            `${lowest.name.toLowerCase()}.`
        );
    }


    if (
        lowest.value <=
        65
    ) {

        return (
            `${essa.name} is starting to want ` +
            `${lowest.name.toLowerCase()}.`
        );
    }


    return (
        `${essa.name} is doing pretty good!`
    );
}


/* =========================================================
   PLAY LEVEL-UP MESSAGE
========================================================= */

function showPlayRewardMessage(
    xpAmount,
    rewardResult
) {

    let message =
        `+${xpAmount} Trainer XP!`;


    if (
        rewardResult?.leveledUp
    ) {

        message +=
            "\n\n🎉 Trainer Level Up!";
    }


    if (
        rewardResult?.newlyUnlocked?.length
    ) {

        rewardResult
            .newlyUnlocked
            .forEach(
                function(essa) {

                    message +=
                        `\n\n🔓 ${essa.name} has been unlocked!`;

                }
            );
    }


    alert(
        message
    );
}
/* =========================================================
   PLAY MODE — FOCUS
========================================================= */

function renderPlayableEssaFocus(
    essaId
) {

    resetPageTheme();

    const playData =
        getSavedPlayData();

    const essa =
        getPlayableEssaById(
            essaId
        );

    if (
        !essa ||
        !playData
            .unlockedEssaIds
            .includes(
                essa.id
            )
    ) {

        renderPlayRoom();

        return;
    }

    const stats =
        getPlayEssaStats(
            playData,
            essa.id
        );

    document.querySelector(
        "main"
    ).innerHTML = `

        ${makeAppTabs("Play")}

        <div
            style="
                max-width:1000px;
                margin:0 auto;
            "
        >

            <div
                style="
                    position:relative;
                    min-height:680px;
                    overflow:hidden;
                    border-radius:28px;
                    border:1px solid #dbe5e7;
                    box-shadow:0 8px 28px rgba(0,0,0,.12);
                    background-color:#eaf6f4;
                    background-image:
                        linear-gradient(
                            rgba(255,255,255,.10),
                            rgba(255,255,255,.10)
                        ),
                        url('play-room/playroom.png');
                    background-size:cover;
                    background-position:center;
                "
            >

                <div
                    style="
                        position:absolute;
                        top:18px;
                        left:18px;
                        z-index:20;
                    "
                >

                    <button
                        onclick="renderPlayRoom()"
                        style="
                            padding:10px 15px;
                            border:none;
                            border-radius:12px;
                            background:rgba(255,255,255,.94);
                            color:#26343b;
                            font-weight:bold;
                            cursor:pointer;
                            box-shadow:0 3px 12px rgba(0,0,0,.12);
                        "
                    >
                        ← The Room
                    </button>

                </div>

                <div
                    style="
                        position:absolute;
                        top:18px;
                        left:50%;
                        transform:translateX(-50%);
                        width:min(70%,650px);
                        z-index:15;
                    "
                >
                    ${makeTrainerLevelBar(
                        playData
                    )}
                </div>

                <div
                    style="
                        position:absolute;
                        top:105px;
                        left:50%;
                        transform:translateX(-50%);
                        width:min(54%,470px);
                        z-index:5;
                    "
                >

                    ${makePlayableEssaVisual(
                        essa,
                        false,
                        "focus"
                    )}

                    <div
                        style="
                            display:inline-block;
                            padding:7px 16px;
                            margin-top:-5px;
                            background:rgba(255,255,255,.92);
                            border-radius:999px;
                            font-size:22px;
                            font-weight:bold;
                            box-shadow:0 3px 12px rgba(0,0,0,.12);
                        "
                    >
                        ${escapeHTML(
                            essa.name
                        )}
                    </div>

                </div>

                <div
                    id="play-message"
                    style="
                        position:absolute;
                        left:50%;
                        bottom:205px;
                        transform:translateX(-50%);
                        min-width:220px;
                        max-width:70%;
                        padding:10px 16px;
                        background:rgba(255,255,255,.94);
                        border-radius:999px;
                        font-weight:bold;
                        color:#26343b;
                        opacity:0;
                        pointer-events:none;
                        transition:opacity .2s ease;
                        z-index:20;
                        box-shadow:0 3px 12px rgba(0,0,0,.12);
                    "
                ></div>

                <div
                    style="
                        position:absolute;
                        left:18px;
                        top:115px;
                        width:210px;
                        padding:14px;
                        background:rgba(255,255,255,.93);
                        border-radius:18px;
                        box-shadow:0 4px 16px rgba(0,0,0,.12);
                        z-index:15;
                        text-align:left;
                    "
                >

                    ${makePlayStatBar(
                        "🍖",
                        "Food",
                        stats.food
                    )}

                    ${makePlayStatBar(
                        "💧",
                        "Drink",
                        stats.water
                    )}

                    ${makePlayStatBar(
                        "🛁",
                        "Clean",
                        stats.cleanliness
                    )}

                    ${makePlayStatBar(
                        "💚",
                        "Happy",
                        stats.happiness
                    )}

                </div>

                <div
                    style="
                        position:absolute;
                        left:50%;
                        bottom:18px;
                        transform:translateX(-50%);
                        width:calc(100% - 36px);
                        display:grid;
                        grid-template-columns:repeat(4,1fr);
                        gap:12px;
                        z-index:20;
                    "
                >

                    <button
                        onclick="showPlayFoodMenu('${essa.id}')"
                        style="
                            padding:15px 8px;
                            border:none;
                            border-radius:18px;
                            background:rgba(255,255,255,.96);
                            cursor:pointer;
                            box-shadow:0 4px 15px rgba(0,0,0,.15);
                            font-size:16px;
                            font-weight:bold;
                        "
                    >
                        <div
                            style="
                                font-size:34px;
                            "
                        >
                            🍖
                        </div>

                        Food
                    </button>

                    <button
                        onclick="showPlayDrinkMenu('${essa.id}')"
                        style="
                            padding:15px 8px;
                            border:none;
                            border-radius:18px;
                            background:rgba(255,255,255,.96);
                            cursor:pointer;
                            box-shadow:0 4px 15px rgba(0,0,0,.15);
                            font-size:16px;
                            font-weight:bold;
                        "
                    >
                        <div
                            style="
                                font-size:34px;
                            "
                        >
                            🥤
                        </div>

                        Drinks
                    </button>

                    <button
                        onclick="showPlayBathMenu('${essa.id}')"
                        style="
                            padding:15px 8px;
                            border:none;
                            border-radius:18px;
                            background:rgba(255,255,255,.96);
                            cursor:pointer;
                            box-shadow:0 4px 15px rgba(0,0,0,.15);
                            font-size:16px;
                            font-weight:bold;
                        "
                    >
                        <div
                            style="
                                font-size:34px;
                            "
                        >
                            🛁
                        </div>

                        Bathe
                    </button>

                    <button
                        onclick="petPlayableEssa('${essa.id}')"
                        style="
                            padding:15px 8px;
                            border:none;
                            border-radius:18px;
                            background:rgba(255,255,255,.96);
                            cursor:pointer;
                            box-shadow:0 4px 15px rgba(0,0,0,.15);
                            font-size:16px;
                            font-weight:bold;
                        "
                    >
                        <div
                            style="
                                font-size:34px;
                            "
                        >
                            💚
                        </div>

                        Pet
                    </button>

                </div>

            </div>

        </div>
    `;
}


function makePlayStatBar(
    icon,
    label,
    value
) {

    const safeValue =
        normalizePlayStatValue(
            value
        );

    return `
        <div
            style="
                margin-bottom:12px;
            "
        >

            <div
                style="
                    display:flex;
                    justify-content:space-between;
                    gap:8px;
                    margin-bottom:5px;
                    font-size:13px;
                    font-weight:bold;
                "
            >

                <span>
                    ${icon}
                    ${label}
                </span>

                <span>
                    ${Math.round(
                        safeValue
                    )}%
                </span>

            </div>

            <div
                style="
                    height:10px;
                    background:#e8eeee;
                    border-radius:999px;
                    overflow:hidden;
                "
            >

                <div
                    style="
                        width:${safeValue}%;
                        height:100%;
                        background:#4fb5ae;
                        border-radius:999px;
                    "
                ></div>

            </div>

        </div>
    `;
}


/* =========================================================
   PLAY MODE — ITEM MENU SHELL
========================================================= */

function makePlayItemMenuShell(
    essa,
    title,
    subtitle,
    itemsHTML
) {

    return `

        ${makeAppTabs("Play")}

        <div
            style="
                max-width:1000px;
                margin:0 auto;
            "
        >

            <div
                style="
                    min-height:680px;
                    position:relative;
                    overflow:hidden;
                    border-radius:28px;
                    border:1px solid #dbe5e7;
                    box-shadow:0 8px 28px rgba(0,0,0,.12);
                    background-color:#eaf6f4;
                    background-image:
                        linear-gradient(
                            rgba(255,255,255,.12),
                            rgba(255,255,255,.12)
                        ),
                        url('play-room/playroom.png');
                    background-size:cover;
                    background-position:center;
                "
            >

                <button
                    onclick="renderPlayableEssaFocus('${essa.id}')"
                    style="
                        position:absolute;
                        top:18px;
                        left:18px;
                        z-index:20;
                        padding:10px 15px;
                        border:none;
                        border-radius:12px;
                        background:rgba(255,255,255,.94);
                        color:#26343b;
                        font-weight:bold;
                        cursor:pointer;
                    "
                >
                    ← Back
                </button>

                <div
                    style="
                        position:absolute;
                        top:55px;
                        left:50%;
                        transform:translateX(-50%);
                        width:min(42%,330px);
                    "
                >
                    ${makePlayableEssaVisual(
                        essa,
                        false,
                        "focus"
                    )}
                </div>

                <div
                    style="
                        position:absolute;
                        left:20px;
                        right:20px;
                        bottom:20px;
                        padding:22px;
                        background:rgba(255,255,255,.97);
                        border-radius:24px;
                        box-shadow:0 5px 22px rgba(0,0,0,.16);
                        z-index:20;
                    "
                >

                    <h2
                        style="
                            margin-top:0;
                        "
                    >
                        ${title}
                    </h2>

                    <p
                        style="
                            color:#68777b;
                        "
                    >
                        ${subtitle}
                    </p>

                    <div
                        style="
                            display:grid;
                            grid-template-columns:repeat(auto-fit,minmax(115px,1fr));
                            gap:12px;
                            margin-top:18px;
                        "
                    >
                        ${itemsHTML}
                    </div>

                </div>

            </div>

        </div>
    `;
}


/* =========================================================
   PLAY MODE — FOOD
========================================================= */

function showPlayFoodMenu(
    essaId
) {

    const essa =
        getPlayableEssaById(
            essaId
        );

    if (!essa) {
        return;
    }

    const itemsHTML =
        playFoods
            .map(
                function(food) {

                    return `
                        <button
                            onclick="givePlayFood('${essa.id}', '${food.id}')"
                            style="
                                padding:15px 8px;
                                border:1px solid #dbe5e7;
                                border-radius:16px;
                                background:white;
                                cursor:pointer;
                            "
                        >

                            <div
                                style="
                                    font-size:40px;
                                "
                            >
                                ${food.icon}
                            </div>

                            <strong>
                                ${escapeHTML(
                                    food.name
                                )}
                            </strong>

                        </button>
                    `;
                }
            )
            .join("");

    document.querySelector(
        "main"
    ).innerHTML =
        makePlayItemMenuShell(
            essa,
            "🍖 Choose Food",
            `What would you like to feed ${escapeHTML(
                essa.name
            )}?`,
            itemsHTML
        );
}


function givePlayFood(
    essaId,
    foodId
) {

    const playData =
        getSavedPlayData();

    const essa =
        getPlayableEssaById(
            essaId
        );

    const food =
        playFoods.find(
            function(item) {

                return (
                    item.id ===
                    foodId
                );
            }
        );

    if (
        !essa ||
        !food
    ) {
        return;
    }

    const stats =
        getPlayEssaStats(
            playData,
            essa.id
        );

    stats.food =
        normalizePlayStatValue(
            stats.food +
            food.food
        );

    stats.happiness =
        normalizePlayStatValue(
            stats.happiness +
            food.happiness
        );

    stats.lastFoodId =
        food.id;

    const result =
        addTrainerXP(
            playData,
            food.xp
        );

    savePlayData(
        playData
    );

    renderPlayableEssaFocus(
        essa.id
    );

    showPlayMessage(
        `${food.icon} ${essa.name} enjoyed the ${food.name}! +${food.xp} XP`
    );

    showPlayUnlockMessages(
        result
    );
}


/* =========================================================
   PLAY MODE — DRINKS
========================================================= */

function showPlayDrinkMenu(
    essaId
) {

    const essa =
        getPlayableEssaById(
            essaId
        );

    if (!essa) {
        return;
    }

    const itemsHTML =
        playDrinks
            .map(
                function(drink) {

                    return `
                        <button
                            onclick="givePlayDrink('${essa.id}', '${drink.id}')"
                            style="
                                padding:15px 8px;
                                border:1px solid #dbe5e7;
                                border-radius:16px;
                                background:white;
                                cursor:pointer;
                            "
                        >

                            <div
                                style="
                                    font-size:40px;
                                "
                            >
                                ${drink.icon}
                            </div>

                            <strong>
                                ${escapeHTML(
                                    drink.name
                                )}
                            </strong>

                        </button>
                    `;
                }
            )
            .join("");

    document.querySelector(
        "main"
    ).innerHTML =
        makePlayItemMenuShell(
            essa,
            "🥤 Choose a Drink",
            `What would ${escapeHTML(
                essa.name
            )} like to drink?`,
            itemsHTML
        );
}


function givePlayDrink(
    essaId,
    drinkId
) {

    const playData =
        getSavedPlayData();

    const essa =
        getPlayableEssaById(
            essaId
        );

    const drink =
        playDrinks.find(
            function(item) {

                return (
                    item.id ===
                    drinkId
                );
            }
        );

    if (
        !essa ||
        !drink
    ) {
        return;
    }

    const stats =
        getPlayEssaStats(
            playData,
            essa.id
        );

    stats.water =
        normalizePlayStatValue(
            stats.water +
            drink.water
        );

    stats.happiness =
        normalizePlayStatValue(
            stats.happiness +
            drink.happiness
        );

    stats.lastDrinkId =
        drink.id;

    const result =
        addTrainerXP(
            playData,
            drink.xp
        );

    savePlayData(
        playData
    );

    renderPlayableEssaFocus(
        essa.id
    );

    showPlayMessage(
        `${drink.icon} ${essa.name} had some ${drink.name}! +${drink.xp} XP`
    );

    showPlayUnlockMessages(
        result
    );
}


/* =========================================================
   PLAY MODE — BATH / SOAP
========================================================= */

function showPlayBathMenu(
    essaId
) {

    const essa =
        getPlayableEssaById(
            essaId
        );

    if (!essa) {
        return;
    }

    const itemsHTML =
        playSoaps
            .map(
                function(soap) {

                    return `
                        <button
                            onclick="bathePlayableEssa('${essa.id}', '${soap.id}')"
                            style="
                                padding:15px 8px;
                                border:1px solid #dbe5e7;
                                border-radius:16px;
                                background:white;
                                cursor:pointer;
                            "
                        >

                            <div
                                style="
                                    width:48px;
                                    height:48px;
                                    margin:0 auto 8px auto;
                                    border-radius:14px;
                                    background:${soap.color};
                                    border:3px solid white;
                                    box-shadow:0 0 0 1px #cbd9dc;
                                "
                            ></div>

                            <strong>
                                ${escapeHTML(
                                    soap.name
                                )}
                            </strong>

                        </button>
                    `;
                }
            )
            .join("");

    document.querySelector(
        "main"
    ).innerHTML =
        makePlayItemMenuShell(
            essa,
            "🛁 Choose Soap",
            `Pick a soap color for ${escapeHTML(
                essa.name
            )}'s bath.`,
            itemsHTML
        );
}


/* =========================================================
   PLAY MODE — BATHE
========================================================= */

function bathePlayableEssa(
    essaId,
    soapId
) {

    const playData =
        getSavedPlayData();

    const essa =
        getPlayableEssaById(
            essaId
        );

    const soap =
        playSoaps.find(
            function(item) {

                return (
                    item.id ===
                    soapId
                );
            }
        );

    if (
        !essa ||
        !soap
    ) {
        return;
    }

    const stats =
        getPlayEssaStats(
            playData,
            essa.id
        );

    stats.cleanliness =
        normalizePlayStatValue(
            stats.cleanliness +
            soap.cleanliness
        );

    stats.happiness =
        normalizePlayStatValue(
            stats.happiness +
            4
        );

    stats.lastSoapId =
        soap.id;

    const result =
        addTrainerXP(
            playData,
            soap.xp
        );

    savePlayData(
        playData
    );

    renderPlayableEssaFocus(
        essa.id
    );

    showPlayMessage(
        `🫧 ${essa.name} is squeaky clean with ${soap.name}! +${soap.xp} XP`
    );

    showPlayUnlockMessages(
        result
    );
}


/* =========================================================
   PLAY MODE — PET
========================================================= */

function petPlayableEssa(
    essaId
) {

    const playData =
        getSavedPlayData();

    const essa =
        getPlayableEssaById(
            essaId
        );

    if (!essa) {
        return;
    }

    const stats =
        getPlayEssaStats(
            playData,
            essa.id
        );

    stats.happiness =
        normalizePlayStatValue(
            stats.happiness +
            12
        );

    const result =
        addTrainerXP(
            playData,
            4
        );

    savePlayData(
        playData
    );

    renderPlayableEssaFocus(
        essa.id
    );

    showPlayMessage(
        `💚 ${essa.name} loved the pets! +4 XP`
    );

    showPlayUnlockMessages(
        result
    );
}


/* =========================================================
   PLAY MODE — MESSAGES
========================================================= */

let playMessageTimer =
    null;


function showPlayMessage(
    message
) {

    const box =
        document.getElementById(
            "play-message"
        );

    if (!box) {
        return;
    }

    box.textContent =
        message;

    box.style.opacity =
        "1";

    if (
        playMessageTimer
    ) {

        clearTimeout(
            playMessageTimer
        );
    }

    playMessageTimer =
        setTimeout(
            function() {

                const currentBox =
                    document.getElementById(
                        "play-message"
                    );

                if (
                    currentBox
                ) {

                    currentBox.style.opacity =
                        "0";
                }

            },
            2600
        );
}


function showPlayUnlockMessages(
    result
) {

    if (!result) {
        return;
    }

    if (
        Array.isArray(
            result.newlyUnlocked
        ) &&
        result.newlyUnlocked.length >
            0
    ) {

        setTimeout(
            function() {

                const names =
                    result.newlyUnlocked
                        .map(
                            function(essa) {

                                return essa.name;
                            }
                        )
                        .join(
                            ", "
                        );

                alert(
                    `🎉 New ESSA unlocked: ${names}!`
                );

            },
            300
        );

        return;
    }

    if (
        result.leveledUp
    ) {

        const playData =
            getSavedPlayData();

        setTimeout(
            function() {

                alert(
                    `⭐ Trainer Level ${playData.trainerLevel}!`
                );

            },
            300
        );
    }
}
/* =========================================================
   ANXIETY SUPPORT — STORAGE
========================================================= */

function getSavedAnxietyDrawings() {

    const key =
        userStorageKey(
            "anxietyDrawings"
        );


    if (!key) {

        return [];
    }


    try {

        const saved =
            JSON.parse(
                localStorage.getItem(
                    key
                ) ||
                "[]"
            );


        return Array.isArray(
            saved
        )
            ? saved
            : [];

    } catch (error) {

        console.error(
            "Could not load anxiety drawings:",
            error
        );


        return [];
    }
}


function saveAnxietyDrawings(
    drawings
) {

    const key =
        userStorageKey(
            "anxietyDrawings"
        );


    if (!key) {

        return;
    }


    localStorage.setItem(
        key,
        JSON.stringify(
            drawings
        )
    );
}


/* =========================================================
   ANXIETY SUPPORT — MAIN PAGE
========================================================= */

function renderAnxietySupport() {

    resetPageTheme();


    document.querySelector(
        "main"
    ).innerHTML = `

        ${makeAppTabs(
            "Support"
        )}


        <div
            style="
                max-width:1050px;
                margin:0 auto;
            "
        >


            <div
                style="
                    text-align:center;
                    margin-bottom:28px;
                "
            >

                <h1>
                    💚 Anxiety Support
                </h1>


                <p
                    style="
                        max-width:700px;
                        margin:0 auto;
                        color:#68777b;
                        line-height:1.6;
                    "
                >

                    A quiet place for grounding,
                    distraction, creativity,
                    and slowing down when
                    everything feels like a lot.

                </p>

            </div>


            <div
                style="
                    display:grid;
                    grid-template-columns:
                        repeat(
                            auto-fit,
                            minmax(
                                220px,
                                1fr
                            )
                        );
                    gap:18px;
                "
            >


                                ${makeAnxietySupportCard(
                    "👀",
                    "5-4-3-2-1 Grounding",
                    "Reconnect with what is around you.",
                    "showGroundingExercise()"
                )}


                ${makeAnxietySupportCard(
                    "🎨",
                    "Draw",
                    "Doodle, scribble, or draw whatever you want.",
                    "showAnxietyDrawingPad()"
                )}


                ${makeAnxietySupportCard(
                    "🖼️",
                    "My Drawings",
                    "Look back at drawings you saved.",
                    "showAnxietyDrawingGallery()"
                )}


                ${makeAnxietySupportCard(
                    "🧸",
                    "Watch ESSA Content",
                    "Relax and watch videos about emotional support stuffed animals.",
                    "window.open('https://www.youtube.com/results?search_query=emotional+support+stuffed+animal', '_blank')"
                )}


                ${makeAnxietySupportCard(
                    "🎥",
                    "Watch ESSA Training Videos",
                    "Watch ESSA training videos and spend some time learning with your ESSA.",
                    "window.open('https://www.youtube.com/playlist?list=PLemizXmM3UrU', '_blank')"
                )}


                ${makeAnxietySupportCard(
                    "💚",
                    "Watch ESSA Care Tips",
                    "Watch videos about caring for and bonding with your ESSA.",
                    "window.open('https://www.youtube.com/playlist?list=PLXU0FiWnm3rM', '_blank')"
                )}


                ${makeAnxietySupportCard(
                    "🌳",
                    "Watch ESSA Outing Videos",
                    "Watch ESSAs head out on adventures and outings.",
                    "window.open('https://www.youtube.com/playlist?list=PLd_LkzymW8Pc', '_blank')"
                )} 
                

            </div>


            <div
                style="
                    margin-top:30px;
                    padding:20px;
                    background:
                        rgba(
                            255,
                            255,
                            255,
                            .9
                        );
                    border:
                        1px solid
                        #dbe5e7;
                    border-radius:20px;
                    text-align:center;
                "
            >

                <h2
                    style="
                        margin-top:0;
                    "
                >
                    Need More Support?
                </h2>


                <p
                    style="
                        color:#68777b;
                        line-height:1.6;
                    "
                >

                    If you feel unsafe,
                    overwhelmed,
                    or need immediate help,
                    you can open the crisis
                    support information.

                </p>


                <button
                    onclick="
                        showCrisisSupportModal()
                    "
                >

                    View Crisis Support

                </button>

            </div>


        </div>

    `;
}


/* =========================================================
   ANXIETY SUPPORT CARD
========================================================= */

function makeAnxietySupportCard(
    icon,
    title,
    description,
    action
) {

    return `

        <button
            onclick="${action}"

            style="
                width:100%;
                min-height:190px;
                padding:22px;
                border:
                    1px solid
                    #dbe5e7;
                border-radius:22px;
                background:white;
                color:#26343b;
                cursor:pointer;
                text-align:center;
                box-shadow:
                    0 4px 14px
                    rgba(
                        0,
                        0,
                        0,
                        .05
                    );
            "
        >

            <div
                style="
                    font-size:45px;
                    margin-bottom:10px;
                "
            >
                ${icon}
            </div>


            <div
                style="
                    font-size:19px;
                    font-weight:bold;
                    margin-bottom:8px;
                "
            >
                ${escapeHTML(
                    title
                )}
            </div>


            <div
                style="
                    color:#68777b;
                    line-height:1.5;
                "
            >
                ${escapeHTML(
                    description
                )}
            </div>

        </button>

    `;
}


/* =========================================================
   BREATHING EXERCISE
========================================================= */

var breathingTimer =
    null;

var breathingStepIndex =
    0;


function showBreathingExercise() {

    stopBreathingExercise();


    document.querySelector(
        "main"
    ).innerHTML = `

        ${makeAppTabs(
            "Support"
        )}


        <div
            style="
                max-width:750px;
                margin:0 auto;
                text-align:center;
            "
        >


            <button
                onclick="
                    stopBreathingExercise();
                    renderAnxietySupport();
                "
            >
                ← Back
            </button>


            <h1>
                🌬️ Slow Breathing
            </h1>


            <p
                style="
                    color:#68777b;
                    line-height:1.6;
                "
            >

                Follow the circle.
                There is no need to breathe
                perfectly — just go at a pace
                that feels comfortable.

            </p>


            <div
                id="breathing-circle"

                style="
                    width:210px;
                    height:210px;
                    margin:
                        45px
                        auto
                        25px
                        auto;
                    border-radius:50%;
                    background:
                        rgba(
                            79,
                            181,
                            174,
                            .25
                        );
                    border:
                        4px solid
                        #4fb5ae;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    transition:
                        transform
                        4s ease,
                        background
                        .4s ease;
                    transform:scale(.72);
                "
            >

                <strong
                    id="breathing-instruction"

                    style="
                        font-size:25px;
                    "
                >
                    Ready?
                </strong>

            </div>


            <button
                id="breathing-start-button"

                onclick="
                    startBreathingExercise()
                "
            >
                Start
            </button>


            <button
                onclick="
                    stopBreathingExercise()
                "
            >
                Stop
            </button>


        </div>

    `;
}


/* =========================================================
   START BREATHING
========================================================= */

function startBreathingExercise() {

    stopBreathingExercise();


    breathingStepIndex =
        0;


    runNextBreathingStep();
}


/* =========================================================
   BREATHING STEPS
========================================================= */

function runNextBreathingStep() {

    const circle =
        document.getElementById(
            "breathing-circle"
        );


    const text =
        document.getElementById(
            "breathing-instruction"
        );


    if (
        !circle ||
        !text
    ) {

        stopBreathingExercise();

        return;
    }


    const steps = [

        {
            text:
                "Breathe in…",

            duration:
                4000,

            scale:
                1
        },

        {
            text:
                "Hold…",

            duration:
                2000,

            scale:
                1
        },

        {
            text:
                "Breathe out…",

            duration:
                6000,

            scale:
                .72
        },

        {
            text:
                "Rest…",

            duration:
                2000,

            scale:
                .72
        }

    ];


    const step =
        steps[
            breathingStepIndex
        ];


    text.textContent =
        step.text;


    circle.style.transform =
        `scale(${step.scale})`;


    breathingStepIndex =
        (
            breathingStepIndex +
            1
        ) %
        steps.length;


    breathingTimer =
        setTimeout(
            runNextBreathingStep,
            step.duration
        );
}


/* =========================================================
   STOP BREATHING
========================================================= */

function stopBreathingExercise() {

    if (
        breathingTimer
    ) {

        clearTimeout(
            breathingTimer
        );


        breathingTimer =
            null;
    }


    const text =
        document.getElementById(
            "breathing-instruction"
        );


    const circle =
        document.getElementById(
            "breathing-circle"
        );


    if (text) {

        text.textContent =
            "Ready?";
    }


    if (circle) {

        circle.style.transform =
            "scale(.72)";
    }
}


/* =========================================================
   5-4-3-2-1 GROUNDING
========================================================= */

function showGroundingExercise() {

    document.querySelector(
        "main"
    ).innerHTML = `

        ${makeAppTabs(
            "Support"
        )}


        <div
            style="
                max-width:800px;
                margin:0 auto;
            "
        >


            <button
                onclick="
                    renderAnxietySupport()
                "
            >
                ← Back
            </button>


            <h1>
                👀 5-4-3-2-1 Grounding
            </h1>


            <p
                style="
                    color:#68777b;
                    line-height:1.6;
                "
            >

                Take your time.
                You can type your answers,
                say them out loud,
                or simply notice them.

            </p>


            ${makeGroundingPrompt(
                "5",
                "things you can see",
                "👀"
            )}


            ${makeGroundingPrompt(
                "4",
                "things you can touch or feel",
                "✋"
            )}


            ${makeGroundingPrompt(
                "3",
                "things you can hear",
                "👂"
            )}


            ${makeGroundingPrompt(
                "2",
                "things you can smell",
                "👃"
            )}


            ${makeGroundingPrompt(
                "1",
                "thing you can taste or would like to taste",
                "👅"
            )}


            <button
                onclick="
                    renderAnxietySupport()
                "

                style="
                    margin-top:20px;
                "
            >
                Done 💚
            </button>


        </div>

    `;
}


/* =========================================================
   GROUNDING PROMPT
========================================================= */

function makeGroundingPrompt(
    number,
    text,
    icon
) {

    return `

        <div
            style="
                padding:18px;
                margin-bottom:14px;
                background:white;
                border:
                    1px solid
                    #dbe5e7;
                border-radius:18px;
            "
        >

            <strong
                style="
                    font-size:18px;
                "
            >

                ${icon}
                ${number}
                ${escapeHTML(
                    text
                )}

            </strong>


            <textarea
                style="
                    width:100%;
                    min-height:75px;
                    margin-top:12px;
                    box-sizing:border-box;
                "

                placeholder="You can type here if you want..."
            ></textarea>

        </div>

    `;
}


/* =========================================================
   COMFORT IDEAS
========================================================= */

function showComfortIdeas() {

    const ideas = [

        "Wrap up in a favorite blanket.",

        "Hold or sit with an ESSA or plush.",

        "Take a few sips of water.",

        "Put on a familiar show or video.",

        "Listen to a song that feels safe or familiar.",

        "Dim the lights for a few minutes.",

        "Sit somewhere quieter.",

        "Stretch your shoulders and unclench your jaw.",

        "Step outside or look out a window.",

        "Name five things in the room that are your favorite color.",

        "Play a simple game for a few minutes.",

        "Write down what your brain keeps repeating.",

        "Wash your face with cool or comfortably warm water.",

        "Do something repetitive with your hands.",

        "Give yourself permission to do absolutely nothing for five minutes."

    ];


    const randomIdea =
        ideas[
            Math.floor(
                Math.random() *
                ideas.length
            )
        ];


    document.querySelector(
        "main"
    ).innerHTML = `

        ${makeAppTabs(
            "Support"
        )}


        <div
            style="
                max-width:750px;
                margin:0 auto;
                text-align:center;
            "
        >


            <button
                onclick="
                    renderAnxietySupport()
                "

                style="
                    float:left;
                "
            >
                ← Back
            </button>


            <div
                style="
                    clear:both;
                "
            ></div>


            <h1>
                🧸 Comfort Idea
            </h1>


            <div
                id="comfort-idea"

                style="
                    margin:
                        35px
                        auto;
                    padding:35px;
                    background:white;
                    border:
                        1px solid
                        #dbe5e7;
                    border-radius:24px;
                    font-size:22px;
                    line-height:1.6;
                    box-shadow:
                        0 5px 18px
                        rgba(
                            0,
                            0,
                            0,
                            .06
                        );
                "
            >

                ${escapeHTML(
                    randomIdea
                )}

            </div>


            <button
                onclick="
                    showAnotherComfortIdea()
                "
            >
                Give Me Another
            </button>


        </div>

    `;
}


/* =========================================================
   ANOTHER COMFORT IDEA
========================================================= */

function showAnotherComfortIdea() {

    const ideas = [

        "Wrap up in a favorite blanket.",

        "Hold or sit with an ESSA or plush.",

        "Take a few sips of water.",

        "Put on a familiar show or video.",

        "Listen to something familiar.",

        "Dim the lights for a little while.",

        "Move somewhere quieter.",

        "Relax your shoulders and hands.",

        "Look outside and find something moving.",

        "Find five objects that are the same color.",

        "Play a calm game.",

        "Doodle without trying to make anything specific.",

        "Wash your hands or face.",

        "Organize something tiny, like five objects.",

        "Rest for five minutes without needing to accomplish anything."

    ];


    const box =
        document.getElementById(
            "comfort-idea"
        );


    if (!box) {

        return;
    }


    const idea =
        ideas[
            Math.floor(
                Math.random() *
                ideas.length
            )
        ];


    box.textContent =
        idea;
}


/* =========================================================
   THOUGHT RESET
========================================================= */

function showThoughtReset() {

    document.querySelector(
        "main"
    ).innerHTML = `

        ${makeAppTabs(
            "Support"
        )}


        <div
            style="
                max-width:800px;
                margin:0 auto;
            "
        >


            <button
                onclick="
                    renderAnxietySupport()
                "
            >
                ← Back
            </button>


            <h1>
                🧠 Thought Reset
            </h1>


            <p
                style="
                    color:#68777b;
                    line-height:1.6;
                "
            >

                You do not have to convince yourself
                everything is perfect.
                This is just a place to slow the thought
                down and look at it one piece at a time.

            </p>


            <label>
                What thought is bothering you?
            </label>


            <textarea
                id="thought-reset-thought"

                style="
                    min-height:110px;
                "
            ></textarea>


            <label>
                What do you know for certain right now?
            </label>


            <textarea
                id="thought-reset-facts"

                style="
                    min-height:100px;
                "
            ></textarea>


            <label>
                Is there another possible explanation?
            </label>


            <textarea
                id="thought-reset-alternative"

                style="
                    min-height:100px;
                "
            ></textarea>


            <label>
                What would help you feel a little safer or calmer right now?
            </label>


            <textarea
                id="thought-reset-help"

                style="
                    min-height:100px;
                "
            ></textarea>


            <button
                onclick="
                    clearThoughtReset()
                "

                style="
                    margin-top:20px;
                "
            >
                Clear
            </button>


        </div>

    `;
}


/* =========================================================
   CLEAR THOUGHT RESET
========================================================= */

function clearThoughtReset() {

    [
        "thought-reset-thought",
        "thought-reset-facts",
        "thought-reset-alternative",
        "thought-reset-help"
    ]
        .forEach(
            function(id) {

                const field =
                    document.getElementById(
                        id
                    );


                if (field) {

                    field.value =
                        "";
                }

            }
        );
}


/* =========================================================
   ANXIETY DRAWING PAD
========================================================= */

var anxietyDrawingCanvas =
    null;

var anxietyDrawingContext =
    null;

var anxietyDrawingActive =
    false;

var anxietyDrawingLastX =
    0;

var anxietyDrawingLastY =
    0;

var anxietyDrawingColor =
    "#26343b";

var anxietyDrawingWidth =
    5;


/* =========================================================
   SHOW DRAWING PAD
========================================================= */

function showAnxietyDrawingPad() {

    document.querySelector(
        "main"
    ).innerHTML = `

        ${makeAppTabs(
            "Support"
        )}


        <div
            style="
                max-width:950px;
                margin:0 auto;
            "
        >


            <button
                onclick="
                    renderAnxietySupport()
                "
            >
                ← Back
            </button>


            <h1>
                🎨 Drawing Pad
            </h1>


            <p
                style="
                    color:#68777b;
                "
            >

                Scribble, doodle,
                color, write,
                or make complete nonsense.
                It all counts.

            </p>


            <div
                style="
                    display:flex;
                    gap:10px;
                    flex-wrap:wrap;
                    align-items:center;
                    margin-bottom:15px;
                "
            >


                <label
                    style="
                        margin:0;
                    "
                >
                    Color
                </label>


                <input
                    id="anxiety-drawing-color"

                    type="color"

                    value="#26343b"

                    onchange="
                        setAnxietyDrawingColor(
                            this.value
                        )
                    "

                    style="
                        width:55px;
                        height:42px;
                        padding:2px;
                    "
                >


                <label
                    style="
                        margin:0 0 0 10px;
                    "
                >
                    Brush
                </label>


                <input
                    id="anxiety-drawing-width"

                    type="range"

                    min="1"

                    max="30"

                    value="5"

                    oninput="
                        setAnxietyDrawingWidth(
                            this.value
                        )
                    "
                >


                <button
                    onclick="
                        clearAnxietyDrawing()
                    "
                >
                    Clear
                </button>


                <button
                    onclick="
                        saveCurrentAnxietyDrawing()
                    "
                >
                    Save Drawing
                </button>


            </div>


            <div
                style="
                    width:100%;
                    overflow:hidden;
                    background:white;
                    border:
                        1px solid
                        #dbe5e7;
                    border-radius:20px;
                    touch-action:none;
                "
            >

                <canvas
                    id="anxiety-drawing-canvas"

                    width="900"

                    height="550"

                    style="
                        display:block;
                        width:100%;
                        height:auto;
                        cursor:crosshair;
                        touch-action:none;
                    "
                ></canvas>

            </div>


        </div>

    `;


    setupAnxietyDrawingCanvas();
}


/* =========================================================
   SETUP DRAWING CANVAS
========================================================= */

function setupAnxietyDrawingCanvas() {

    anxietyDrawingCanvas =
        document.getElementById(
            "anxiety-drawing-canvas"
        );


    if (
        !anxietyDrawingCanvas
    ) {

        return;
    }


    anxietyDrawingContext =
        anxietyDrawingCanvas
            .getContext(
                "2d"
            );


    anxietyDrawingContext.fillStyle =
        "#ffffff";


    anxietyDrawingContext.fillRect(
        0,
        0,
        anxietyDrawingCanvas.width,
        anxietyDrawingCanvas.height
    );


    anxietyDrawingContext.lineCap =
        "round";


    anxietyDrawingContext.lineJoin =
        "round";


    anxietyDrawingCanvas
        .addEventListener(
            "pointerdown",
            startAnxietyDrawing
        );


    anxietyDrawingCanvas
        .addEventListener(
            "pointermove",
            moveAnxietyDrawing
        );


    anxietyDrawingCanvas
        .addEventListener(
            "pointerup",
            stopAnxietyDrawing
        );


    anxietyDrawingCanvas
        .addEventListener(
            "pointerleave",
            stopAnxietyDrawing
        );


    anxietyDrawingCanvas
        .addEventListener(
            "pointercancel",
            stopAnxietyDrawing
        );
}


/* =========================================================
   DRAWING COORDINATES
========================================================= */

function getAnxietyCanvasPoint(
    event
) {

    const rect =
        anxietyDrawingCanvas
            .getBoundingClientRect();


    const scaleX =
        anxietyDrawingCanvas.width /
        rect.width;


    const scaleY =
        anxietyDrawingCanvas.height /
        rect.height;


    return {

        x:
            (
                event.clientX -
                rect.left
            ) *
            scaleX,

        y:
            (
                event.clientY -
                rect.top
            ) *
            scaleY

    };
}


/* =========================================================
   START DRAWING
========================================================= */

function startAnxietyDrawing(
    event
) {

    if (
        !anxietyDrawingCanvas ||
        !anxietyDrawingContext
    ) {

        return;
    }


    event.preventDefault();


    const point =
        getAnxietyCanvasPoint(
            event
        );


    anxietyDrawingActive =
        true;


    anxietyDrawingLastX =
        point.x;


    anxietyDrawingLastY =
        point.y;


    try {

        anxietyDrawingCanvas
            .setPointerCapture(
                event.pointerId
            );

    } catch (error) {

        /* Not all browsers require this. */
    }
}


/* =========================================================
   MOVE DRAWING
========================================================= */

function moveAnxietyDrawing(
    event
) {

    if (
        !anxietyDrawingActive ||
        !anxietyDrawingContext
    ) {

        return;
    }


    event.preventDefault();


    const point =
        getAnxietyCanvasPoint(
            event
        );


    anxietyDrawingContext.strokeStyle =
        anxietyDrawingColor;


    anxietyDrawingContext.lineWidth =
        anxietyDrawingWidth;


    anxietyDrawingContext.beginPath();


    anxietyDrawingContext.moveTo(
        anxietyDrawingLastX,
        anxietyDrawingLastY
    );


    anxietyDrawingContext.lineTo(
        point.x,
        point.y
    );


    anxietyDrawingContext.stroke();


    anxietyDrawingLastX =
        point.x;


    anxietyDrawingLastY =
        point.y;
}


/* =========================================================
   STOP DRAWING
========================================================= */

function stopAnxietyDrawing() {

    anxietyDrawingActive =
        false;
}


/* =========================================================
   DRAWING COLOR
========================================================= */

function setAnxietyDrawingColor(
    color
) {

    anxietyDrawingColor =
        color ||
        "#26343b";
}


/* =========================================================
   DRAWING WIDTH
========================================================= */

function setAnxietyDrawingWidth(
    width
) {

    anxietyDrawingWidth =
        Math.max(
            1,
            Number(
                width
            ) || 5
        );
}


/* =========================================================
   CLEAR DRAWING
========================================================= */

function clearAnxietyDrawing() {

    if (
        !anxietyDrawingCanvas ||
        !anxietyDrawingContext
    ) {

        return;
    }


    const confirmed =
        confirm(
            "Clear this drawing?"
        );


    if (!confirmed) {

        return;
    }


    anxietyDrawingContext.fillStyle =
        "#ffffff";


    anxietyDrawingContext.fillRect(
        0,
        0,
        anxietyDrawingCanvas.width,
        anxietyDrawingCanvas.height
    );
}


/* =========================================================
   SAVE DRAWING
========================================================= */

function saveCurrentAnxietyDrawing() {

    if (
        !anxietyDrawingCanvas
    ) {

        return;
    }


    const drawings =
        getSavedAnxietyDrawings();


    const image =
        anxietyDrawingCanvas
            .toDataURL(
                "image/jpeg",
                .72
            );


    drawings.unshift(
        {

            id:
                makeId(
                    "drawing"
                ),

            image:
                image,

            createdAt:
                new Date()
                    .toISOString()

        }
    );


    try {

        saveAnxietyDrawings(
            drawings
        );


        alert(
            "Drawing saved! 🎨"
        );

    } catch (error) {

        console.error(
            error
        );


        alert(
            "That drawing could not be saved. Browser storage may be full."
        );
    }
}


/* =========================================================
   DRAWING GALLERY
========================================================= */

function showAnxietyDrawingGallery() {

    const drawings =
        getSavedAnxietyDrawings();


    let cards =
        "";


    drawings.forEach(
        function(drawing) {

            cards += `

                <div
                    style="
                        background:white;
                        border:
                            1px solid
                            #dbe5e7;
                        border-radius:18px;
                        padding:12px;
                    "
                >


                    <img
                        src="${drawing.image}"

                        alt="Saved drawing"

                        style="
                            width:100%;
                            aspect-ratio:
                                16 / 10;
                            object-fit:contain;
                            background:white;
                            border-radius:12px;
                        "
                    >


                    <p
                        style="
                            color:#68777b;
                            font-size:13px;
                        "
                    >

                        ${formatDateTime(
                            drawing.createdAt
                        )}

                    </p>


                    <button
                        onclick="
                            deleteAnxietyDrawing(
                                '${drawing.id}'
                            )
                        "

                        style="
                            color:#b42318;
                        "
                    >
                        Delete
                    </button>


                </div>

            `;

        }
    );


    if (!cards) {

        cards = `

            <div
                style="
                    padding:25px;
                    background:white;
                    border:
                        1px dashed
                        #b9d6d3;
                    border-radius:18px;
                "
            >
                No saved drawings yet.
            </div>

        `;
    }


    document.querySelector(
        "main"
    ).innerHTML = `

        ${makeAppTabs(
            "Support"
        )}


        <div
            style="
                max-width:1000px;
                margin:0 auto;
            "
        >


            <button
                onclick="
                    renderAnxietySupport()
                "
            >
                ← Back
            </button>


            <h1>
                🖼️ My Drawings
            </h1>


            <button
                onclick="
                    showAnxietyDrawingPad()
                "
            >
                + New Drawing
            </button>


            <div
                style="
                    display:grid;
                    grid-template-columns:
                        repeat(
                            auto-fit,
                            minmax(
                                250px,
                                1fr
                            )
                        );
                    gap:18px;
                    margin-top:22px;
                "
            >

                ${cards}

            </div>


        </div>

    `;
}


/* =========================================================
   DELETE DRAWING
========================================================= */

function deleteAnxietyDrawing(
    drawingId
) {

    const confirmed =
        confirm(
            "Delete this drawing?"
        );


    if (!confirmed) {

        return;
    }


    const drawings =
        getSavedAnxietyDrawings()
            .filter(
                function(drawing) {

                    return (
                        String(
                            drawing.id
                        ) !==
                        String(
                            drawingId
                        )
                    );

                }
            );


    saveAnxietyDrawings(
        drawings
    );


    showAnxietyDrawingGallery();
}


/* =========================================================
   CRISIS SUPPORT MODAL
========================================================= */

function showCrisisSupportModal() {

    const oldModal =
        document.getElementById(
            "crisis-support-modal"
        );


    if (oldModal) {

        oldModal.remove();
    }


    const modal =
        document.createElement(
            "div"
        );


    modal.id =
        "crisis-support-modal";


    modal.innerHTML = `

        <div
            style="
                position:fixed;
                inset:0;
                z-index:9999;
                background:
                    rgba(
                        0,
                        0,
                        0,
                        .55
                    );
                display:flex;
                align-items:center;
                justify-content:center;
                padding:20px;
                box-sizing:border-box;
            "

            onclick="
                if (
                    event.target ===
                    this
                ) {
                    closeCrisisSupportModal();
                }
            "
        >


            <div
                style="
                    width:min(
                        100%,
                        620px
                    );
                    max-height:90vh;
                    overflow:auto;
                    padding:25px;
                    background:white;
                    border-radius:24px;
                    box-shadow:
                        0 10px 35px
                        rgba(
                            0,
                            0,
                            0,
                            .3
                        );
                "
            >


                <h2
                    style="
                        margin-top:0;
                    "
                >
                                    <h2>
                    💚 Crisis Support
                </h2>


                <p
                    style="
                        line-height:1.6;
                    "
                >

                   I am sorry you are feeling
                   this way. But I have to say
                   I am mighty proud of you for 
                   admitting that things are 
                   getting to be too much. I want
                   to remind you that there are 
                   people who love and care about
                   you, including me. ~Raising Floofz
                    If you or someone else
                    is in immediate danger,
                    contact local emergency
                    services.

                </p>


                <p
                    style="
                        line-height:1.6;
                    "
                >

                    In the United States,
                    you can call or text
                    <strong>988</strong>
                    to reach the
                    Suicide & Crisis Lifeline.

                </p>


                <p
                    style="
                        line-height:1.6;
                    "
                >

                    You can also use
                    <strong>Crisis Text Line</strong>
                    by texting
                    <strong>HOME</strong>
                    to
                    <strong>741741</strong>.

                </p>


                <a
                    href="https://www.crisistextline.org/"
                    target="_blank"
                    rel="noopener noreferrer"

                    style="
                        display:inline-block;
                        margin:8px 10px 8px 0;
                        padding:10px 16px;
                        border-radius:10px;
                        background:#4fb5ae;
                        color:white;
                        text-decoration:none;
                        font-weight:bold;
                    "
                >
                    Open Crisis Text Line
                </a>


                <button
                    onclick="
                        closeCrisisSupportModal()
                    "
                >
                    Close
                </button>


            </div>


        </div>

    `;


    document.body.appendChild(
        modal
    );
}


/* =========================================================
   CLOSE CRISIS MODAL
========================================================= */

function closeCrisisSupportModal() {

    const modal =
        document.getElementById(
            "crisis-support-modal"
        );


    if (modal) {

        modal.remove();
    }
}


/* =========================================================
   DIARY — STORAGE
========================================================= */

function getSavedDiaryEntries() {

    const key =
        userStorageKey(
            "diary"
        );


    if (!key) {

        return [];
    }


    try {

        const saved =
            JSON.parse(
                localStorage.getItem(
                    key
                ) ||
                "[]"
            );


        return Array.isArray(
            saved
        )
            ? saved
            : [];

    } catch (error) {

        console.error(
            "Could not load diary:",
            error
        );


        return [];
    }
}


function saveDiaryEntries(
    entries
) {

    const key =
        userStorageKey(
            "diary"
        );


    if (!key) {

        return;
    }


    localStorage.setItem(
        key,
        JSON.stringify(
            entries
        )
    );
}


/* =========================================================
   DIARY — MAIN PAGE
========================================================= */

function renderDiary() {

    resetPageTheme();


    const entries =
        getSavedDiaryEntries()
            .slice()
            .sort(
                function(a, b) {

                    return (
                        new Date(
                            b.createdAt
                        ) -
                        new Date(
                            a.createdAt
                        )
                    );

                }
            );


    let cards =
        "";


    entries.forEach(
        function(entry) {

            cards += `

                <button
                    onclick="
                        showDiaryEntry(
                            '${entry.id}'
                        )
                    "

                    style="
                        width:100%;
                        padding:18px;
                        background:white;
                        border:
                            1px solid
                            #dbe5e7;
                        border-radius:18px;
                        text-align:left;
                        cursor:pointer;
                        color:#26343b;
                    "
                >


                    <div
                        style="
                            display:flex;
                            justify-content:
                                space-between;
                            gap:15px;
                            align-items:flex-start;
                        "
                    >


                        <div>

                            <div
                                style="
                                    font-size:20px;
                                    font-weight:bold;
                                "
                            >

                                ${entry.mood || "📝"}

                                ${escapeHTML(
                                    entry.title ||
                                    "Untitled Entry"
                                )}

                            </div>


                            <div
                                style="
                                    margin-top:6px;
                                    color:#68777b;
                                    font-size:13px;
                                "
                            >

                                ${formatDateTime(
                                    entry.createdAt
                                )}

                            </div>

                        </div>


                        ${
                            Array.isArray(
                                entry.images
                            ) &&
                            entry.images.length >
                                0

                                ? `
                                    <span>
                                        📷
                                        ${entry.images.length}
                                    </span>
                                `

                                : ""
                        }


                    </div>


                    <p
                        style="
                            margin-bottom:0;
                            color:#56656a;
                            line-height:1.5;
                        "
                    >

                        ${escapeHTML(
                            makeDiaryPreview(
                                entry.text ||
                                ""
                            )
                        )}

                    </p>


                </button>

            `;

        }
    );


    if (!cards) {

        cards = `

            <div
                style="
                    padding:30px;
                    background:white;
                    border:
                        1px dashed
                        #b9d6d3;
                    border-radius:20px;
                    text-align:center;
                "
            >

                <div
                    style="
                        font-size:45px;
                    "
                >
                    📖
                </div>


                <h2>
                    Your diary is empty.
                </h2>


                <p
                    style="
                        color:#68777b;
                    "
                >
                    Write your first entry whenever you're ready.
                </p>

            </div>

        `;
    }


    document.querySelector(
        "main"
    ).innerHTML = `

        ${makeAppTabs(
            "Diary"
        )}


        <div
            style="
                max-width:900px;
                margin:0 auto;
            "
        >


            <div
                style="
                    display:flex;
                    justify-content:
                        space-between;
                    align-items:center;
                    gap:15px;
                    flex-wrap:wrap;
                    margin-bottom:25px;
                "
            >


                <div>

                    <h1
                        style="
                            margin-bottom:5px;
                        "
                    >
                        📖 Diary
                    </h1>


                    <p
                        style="
                            margin:0;
                            color:#68777b;
                        "
                    >
                        A private space for your thoughts.
                    </p>

                </div>


                <button
                    onclick="
                        showDiaryEntryForm()
                    "
                >
                    + New Entry
                </button>


            </div>


            <div
                style="
                    display:flex;
                    flex-direction:column;
                    gap:14px;
                "
            >
                ${cards}
            </div>


        </div>

    `;
}


/* =========================================================
   DIARY PREVIEW
========================================================= */

function makeDiaryPreview(
    text
) {

    const clean =
        String(
            text ||
            ""
        )
            .replace(
                /\s+/g,
                " "
            )
            .trim();


    if (
        clean.length <=
        140
    ) {

        return clean;
    }


    return (
        clean.slice(
            0,
            140
        ) +
        "…"
    );
}


/* =========================================================
   DIARY ENTRY FORM
========================================================= */

function showDiaryEntryForm(
    entryId = null
) {

    const entries =
        getSavedDiaryEntries();


    const existing =
        entryId

            ? entries.find(
                function(entry) {

                    return (
                        String(
                            entry.id
                        ) ===
                        String(
                            entryId
                        )
                    );

                }
            )

            : null;


    document.querySelector(
        "main"
    ).innerHTML = `

        ${makeAppTabs(
            "Diary"
        )}


        <div
            class="essa-form"

            style="
                max-width:850px;
                margin:0 auto;
            "
        >


            <button
                onclick="
                    ${
                        existing

                            ? `showDiaryEntry(
                                '${existing.id}'
                            )`

                            : "renderDiary()"
                    }
                "
            >
                ← Back
            </button>


            <h1>

                ${
                    existing
                        ? "Edit Diary Entry"
                        : "New Diary Entry"
                }

            </h1>


            <label>
                Mood
            </label>


            <select
                id="diary-mood"
            >

                <option value="😊">
                    😊 Happy
                </option>

                <option value="😌">
                    😌 Calm
                </option>

                <option value="🥰">
                    🥰 Loved
                </option>

                <option value="🤩">
                    🤩 Excited
                </option>

                <option value="😐">
                    😐 Neutral
                </option>

                <option value="😴">
                    😴 Tired
                </option>

                <option value="😢">
                    😢 Sad
                </option>

                <option value="😰">
                    😰 Anxious
                </option>

                <option value="😡">
                    😡 Angry
                </option>

                <option value="🥺">
                    🥺 Sensitive
                </option>

                <option value="🤒">
                    🤒 Not Feeling Well
                </option>

            </select>


            <label>
                Title
            </label>


            <input
                id="diary-title"

                type="text"

                maxlength="100"

                value="${escapeHTML(
                    existing?.title ||
                    ""
                )}"

                placeholder="Give this entry a title..."
            >


            <label>
                Entry
            </label>


            <textarea
                id="diary-text"

                style="
                    min-height:280px;
                    resize:vertical;
                "

                placeholder="Write whatever is on your mind..."
            >${escapeHTML(
                existing?.text ||
                ""
            )}</textarea>


            <label>
                Add Images
            </label>


            <input
                id="diary-images"

                type="file"

                accept="image/*"

                multiple
            >


            ${
                existing &&
                Array.isArray(
                    existing.images
                ) &&
                existing.images.length >
                    0

                    ? `

                        <p
                            style="
                                color:#68777b;
                                font-size:13px;
                            "
                        >

                            This entry currently has
                            ${existing.images.length}
                            saved image(s).

                            New selected images will
                            be added to them.

                        </p>

                    `

                    : ""
            }


            <div
                style="
                    display:flex;
                    gap:10px;
                    flex-wrap:wrap;
                    margin-top:22px;
                "
            >


                <button
                    onclick="
                        ${
                            existing

                                ? `showDiaryEntry(
                                    '${existing.id}'
                                )`

                                : "renderDiary()"
                        }
                    "
                >
                    Cancel
                </button>


                <button
                    onclick="
                        saveDiaryEntry(
                            ${
                                existing
                                    ? `'${existing.id}'`
                                    : "null"
                            }
                        )
                    "
                >

                    ${
                        existing
                            ? "Save Changes"
                            : "Save Entry"
                    }

                </button>


            </div>


        </div>

    `;


    if (
        existing
    ) {

        const mood =
            document.getElementById(
                "diary-mood"
            );


        if (mood) {

            mood.value =
                existing.mood ||
                "😐";
        }
    }
}


/* =========================================================
   READ MULTIPLE DIARY IMAGES
========================================================= */

async function readDiaryImages(
    files
) {

    const results =
        [];


    if (
        !files ||
        files.length ===
        0
    ) {

        return results;
    }


    for (
        const file
        of files
    ) {

        const data =
            await readImageFile(
                file
            );


        if (data) {

            results.push(
                data
            );
        }
    }


    return results;
}


/* =========================================================
   SAVE DIARY ENTRY
========================================================= */

async function saveDiaryEntry(
    entryId = null
) {

    const mood =
        document
            .getElementById(
                "diary-mood"
            )
            .value;


    const title =
        document
            .getElementById(
                "diary-title"
            )
            .value
            .trim();


    const text =
        document
            .getElementById(
                "diary-text"
            )
            .value
            .trim();


    if (
        !title &&
        !text
    ) {

        alert(
            "Write a title or some text before saving."
        );

        return;
    }


    const imageInput =
        document.getElementById(
            "diary-images"
        );


    let newImages =
        [];


    try {

        newImages =
            await readDiaryImages(
                imageInput?.files
            );

    } catch (error) {

        console.error(
            error
        );


        alert(
            "One of those images could not be read."
        );

        return;
    }


    const entries =
        getSavedDiaryEntries();


    if (
        entryId
    ) {

        const index =
            entries.findIndex(
                function(entry) {

                    return (
                        String(
                            entry.id
                        ) ===
                        String(
                            entryId
                        )
                    );

                }
            );


        if (
            index ===
            -1
        ) {

            renderDiary();

            return;
        }


        const existing =
            entries[
                index
            ];


        entries[
            index
        ] = {

            ...existing,

            mood:
                mood,

            title:
                title,

            text:
                text,

            images:
                [
                    ...(
                        Array.isArray(
                            existing.images
                        )
                            ? existing.images
                            : []
                    ),

                    ...newImages
                ],

            updatedAt:
                new Date()
                    .toISOString()

        };

    } else {

        entries.unshift(
            {

                id:
                    makeId(
                        "diary"
                    ),

                mood:
                    mood,

                title:
                    title,

                text:
                    text,

                images:
                    newImages,

                createdAt:
                    new Date()
                        .toISOString(),

                updatedAt:
                    new Date()
                        .toISOString()

            }
        );
    }


    try {

        saveDiaryEntries(
            entries
        );

    } catch (error) {

        console.error(
            error
        );


        alert(
            "This diary entry could not be saved. Large images may have filled browser storage."
        );

        return;
    }


    if (
        entryId
    ) {

        showDiaryEntry(
            entryId
        );

    } else {

        renderDiary();
    }
}


/* =========================================================
   VIEW DIARY ENTRY
========================================================= */

function showDiaryEntry(
    entryId
) {

    const entry =
        getSavedDiaryEntries()
            .find(
                function(item) {

                    return (
                        String(
                            item.id
                        ) ===
                        String(
                            entryId
                        )
                    );

                }
            );


    if (!entry) {

        renderDiary();

        return;
    }


    let imagesHTML =
        "";


    if (
        Array.isArray(
            entry.images
        ) &&
        entry.images.length >
            0
    ) {

        imagesHTML =
            entry.images
                .map(
                    function(
                        image,
                        index
                    ) {

                        return `

                            <div
                                style="
                                    position:relative;
                                "
                            >

                                <img
                                    src="${image}"

                                    alt="Diary image"

                                    style="
                                        width:100%;
                                        aspect-ratio:
                                            1 / 1;
                                        object-fit:cover;
                                        border-radius:16px;
                                    "
                                >


                                <button
                                    onclick="
                                        removeDiaryImage(
                                            '${entry.id}',
                                            ${index}
                                        )
                                    "

                                    title="Remove image"

                                    style="
                                        position:absolute;
                                        top:8px;
                                        right:8px;
                                        width:34px;
                                        height:34px;
                                        padding:0;
                                        border-radius:50%;
                                        background:
                                            rgba(
                                                255,
                                                255,
                                                255,
                                                .92
                                            );
                                        color:#b42318;
                                    "
                                >
                                    ×
                                </button>

                            </div>

                        `;

                    }
                )
                .join("");
    }


    document.querySelector(
        "main"
    ).innerHTML = `

        ${makeAppTabs(
            "Diary"
        )}


        <div
            style="
                max-width:850px;
                margin:0 auto;
            "
        >


            <button
                onclick="
                    renderDiary()
                "
            >
                ← Diary
            </button>


            <article
                style="
                    margin-top:20px;
                    padding:28px;
                    background:white;
                    border:
                        1px solid
                        #dbe5e7;
                    border-radius:24px;
                "
            >


                <div
                    style="
                        display:flex;
                        justify-content:
                            space-between;
                        align-items:flex-start;
                        gap:15px;
                        flex-wrap:wrap;
                    "
                >


                    <div>

                        <h1
                            style="
                                margin:
                                    0
                                    0
                                    8px
                                    0;
                            "
                        >

                            ${entry.mood || "📝"}

                            ${escapeHTML(
                                entry.title ||
                                "Untitled Entry"
                            )}

                        </h1>


                        <div
                            style="
                                color:#68777b;
                                font-size:14px;
                            "
                        >

                            ${formatDateTime(
                                entry.createdAt
                            )}

                        </div>

                    </div>


                    <div
                        style="
                            display:flex;
                            gap:8px;
                            flex-wrap:wrap;
                        "
                    >


                        <button
                            onclick="
                                showDiaryEntryForm(
                                    '${entry.id}'
                                )
                            "
                        >
                            Edit
                        </button>


                        <button
                            onclick="
                                deleteDiaryEntry(
                                    '${entry.id}'
                                )
                            "

                            style="
                                color:#b42318;
                            "
                        >
                            Delete
                        </button>


                    </div>


                </div>


                <div
                    style="
                        white-space:pre-wrap;
                        line-height:1.75;
                        margin-top:25px;
                        font-size:16px;
                    "
                >${escapeHTML(
                    entry.text ||
                    ""
                )}</div>


                ${
                    imagesHTML

                        ? `

                            <div
                                style="
                                    display:grid;
                                    grid-template-columns:
                                        repeat(
                                            auto-fit,
                                            minmax(
                                                180px,
                                                1fr
                                            )
                                        );
                                    gap:12px;
                                    margin-top:28px;
                                "
                            >

                                ${imagesHTML}

                            </div>

                        `

                        : ""
                }


            </article>


        </div>

    `;
}


/* =========================================================
   REMOVE DIARY IMAGE
========================================================= */

function removeDiaryImage(
    entryId,
    imageIndex
) {

    const entries =
        getSavedDiaryEntries();


    const index =
        entries.findIndex(
            function(entry) {

                return (
                    String(
                        entry.id
                    ) ===
                    String(
                        entryId
                    )
                );

            }
        );


    if (
        index ===
        -1
    ) {

        return;
    }


    if (
        !Array.isArray(
            entries[
                index
            ].images
        )
    ) {

        return;
    }


    const confirmed =
        confirm(
            "Remove this image from the diary entry?"
        );


    if (!confirmed) {

        return;
    }


    entries[
        index
    ].images.splice(
        Number(
            imageIndex
        ),
        1
    );


    entries[
        index
    ].updatedAt =
        new Date()
            .toISOString();


    saveDiaryEntries(
        entries
    );


    showDiaryEntry(
        entryId
    );
}


/* =========================================================
   DELETE DIARY ENTRY
========================================================= */

function deleteDiaryEntry(
    entryId
) {

    const confirmed =
        confirm(
            "Delete this diary entry? This cannot be undone."
        );


    if (!confirmed) {

        return;
    }


    const entries =
        getSavedDiaryEntries()
            .filter(
                function(entry) {

                    return (
                        String(
                            entry.id
                        ) !==
                        String(
                            entryId
                        )
                    );

                }
            );


    saveDiaryEntries(
        entries
    );


    renderDiary();
}
/* =========================================================
   PLAY HOUSE SYSTEM
   ---------------------------------------------------------
   Rooms:
   Playroom
   Kitchen
   Bathroom
   Bedroom
   Backyard
   Arcade
========================================================= */


/* =========================================================
   HOUSE SETTINGS
========================================================= */

const PLAY_NEED_INTERVAL_MINUTES =
    10;


const PLAY_MAX_OFFLINE_DECAY_HOURS =
    4;


const PLAY_NEED_DECAY = {

    food:
        3.0,

    water:
        3.5,

    cleanliness:
        1.5,

    happiness:
        2.5

};


/* =========================================================
   HOUSE STORAGE KEY
========================================================= */

function getPlayHouseStorageKey() {

    return userStorageKey(
        "playHouse"
    );
}


/* =========================================================
   DEFAULT HOUSE DATA
========================================================= */

function makeDefaultPlayHouseData() {

    const rooms =
        {};


    playableEssas.forEach(
        function(essa) {

            rooms[
                essa.id
            ] =
                "playroom";

        }
    );


    return {

        currentRoomId:
            "playroom",

        essaRooms:
            rooms,

        essaPositions:
            {},

        lastNeedUpdate:
            Date.now()

    };
}


/* =========================================================
   SAVE HOUSE DATA
========================================================= */

function savePlayHouseData(
    houseData
) {

    const key =
        getPlayHouseStorageKey();


    if (!key) {

        return;
    }


    try {

        localStorage.setItem(
            key,
            JSON.stringify(
                houseData
            )
        );

    } catch (error) {

        console.error(
            "Could not save Play house data:",
            error
        );
    }
}


/* =========================================================
   LOAD HOUSE DATA
========================================================= */

function getSavedPlayHouseData() {

    const key =
        getPlayHouseStorageKey();


    const defaults =
        makeDefaultPlayHouseData();


    if (!key) {

        return defaults;
    }


    try {

        const saved =
            JSON.parse(
                localStorage.getItem(
                    key
                ) ||
                "null"
            );


        if (
            !saved ||
            typeof saved !==
                "object"
        ) {

            return defaults;
        }


        const result = {

            ...defaults,
            ...saved,

            essaRooms: {

                ...defaults.essaRooms,
                ...(
                    saved.essaRooms ||
                    {}
                )

            },

            essaPositions: {

                ...defaults.essaPositions,
                ...(
                    saved.essaPositions ||
                    {}
                )

            }

        };


        if (
            !playRooms.some(
                function(room) {

                    return (
                        room.id ===
                        result.currentRoomId
                    );

                }
            )
        ) {

            result.currentRoomId =
                "playroom";
        }


        playableEssas.forEach(
            function(essa) {

                const roomId =
                    result
                        .essaRooms[
                            essa.id
                        ];


                const validRoom =
                    playRooms.some(
                        function(room) {

                            return (
                                room.id ===
                                roomId
                            );

                        }
                    );


                if (!validRoom) {

                    result
                        .essaRooms[
                            essa.id
                        ] =
                        "playroom";
                }

            }
        );


        if (
            !result.lastNeedUpdate
        ) {

            result.lastNeedUpdate =
                Date.now();
        }


        return result;

    } catch (error) {

        console.error(
            "Could not load Play house data:",
            error
        );


        return defaults;
    }
}


/* =========================================================
   FIND ROOM
========================================================= */

function getPlayRoomById(
    roomId
) {

    return (
        playRooms.find(
            function(room) {

                return (
                    room.id ===
                    roomId
                );

            }
        ) ||
        playRooms[0]
    );
}


/* =========================================================
   GET ESSA ROOM
========================================================= */

function getEssaRoom(
    houseData,
    essaId
) {

    const roomId =
        houseData
            ?.essaRooms
            ?.[
                essaId
            ];


    return getPlayRoomById(
        roomId ||
        "playroom"
    );
}


/* =========================================================
   GET CURRENT HOUSE ROOM
========================================================= */

function getCurrentPlayRoom() {

    const houseData =
        getSavedPlayHouseData();


    return getPlayRoomById(
        houseData.currentRoomId
    );
}


/* =========================================================
   CHANGE CURRENT ROOM
========================================================= */

function goToPlayRoom(
    roomId
) {

    const room =
        getPlayRoomById(
            roomId
        );


    if (!room) {

        return;
    }


    const houseData =
        getSavedPlayHouseData();


    houseData.currentRoomId =
        room.id;


    savePlayHouseData(
        houseData
    );


    renderPlayRoom();
}


/* =========================================================
   MOVE LEFT / RIGHT THROUGH ROOMS
========================================================= */

function changePlayRoom(
    direction
) {

    const houseData =
        getSavedPlayHouseData();


    let currentIndex =
        playRooms.findIndex(
            function(room) {

                return (
                    room.id ===
                    houseData.currentRoomId
                );

            }
        );


    if (
        currentIndex ===
        -1
    ) {

        currentIndex =
            0;
    }


    let nextIndex =
        currentIndex +
        Number(
            direction
        );


    if (
        nextIndex <
        0
    ) {

        nextIndex =
            playRooms.length -
            1;
    }


    if (
        nextIndex >=
        playRooms.length
    ) {

        nextIndex =
            0;
    }


    houseData.currentRoomId =
        playRooms[
            nextIndex
        ].id;


    savePlayHouseData(
        houseData
    );


    renderPlayRoom();
}


/* =========================================================
   ROOM PICKER
========================================================= */

function showPlayRoomPicker() {

    const oldPicker =
        document.getElementById(
            "play-room-picker"
        );


    if (oldPicker) {

        oldPicker.remove();
    }


    const houseData =
        getSavedPlayHouseData();


    const picker =
        document.createElement(
            "div"
        );


    picker.id =
        "play-room-picker";


    const buttons =
        playRooms
            .map(
                function(room) {

                    const active =
                        room.id ===
                        houseData.currentRoomId;


                    return `

                        <button
                            onclick="
                                goToPlayRoom(
                                    '${room.id}'
                                );

                                closePlayRoomPicker();
                            "

                            style="
                                padding:
                                    14px
                                    18px;

                                border:
                                    ${
                                        active
                                            ? "2px solid #4fb5ae"
                                            : "1px solid #dbe5e7"
                                    };

                                border-radius:
                                    16px;

                                background:
                                    ${
                                        active
                                            ? "#edf9f8"
                                            : "white"
                                    };

                                color:#26343b;

                                font-size:
                                    16px;

                                font-weight:
                                    bold;

                                cursor:
                                    pointer;
                            "
                        >

                            <div
                                style="
                                    font-size:
                                        30px;

                                    margin-bottom:
                                        5px;
                                "
                            >
                                ${room.icon}
                            </div>

                            ${escapeHTML(
                                room.name
                            )}

                        </button>

                    `;

                }
            )
            .join("");


    picker.innerHTML = `

        <div
            style="
                position:
                    fixed;

                inset:0;

                z-index:
                    9999;

                display:
                    flex;

                align-items:
                    center;

                justify-content:
                    center;

                padding:
                    20px;

                background:
                    rgba(
                        0,
                        0,
                        0,
                        .5
                    );

                box-sizing:
                    border-box;
            "

            onclick="
                if (
                    event.target ===
                    this
                ) {

                    closePlayRoomPicker();
                }
            "
        >

            <div
                style="
                    width:
                        min(
                            100%,
                            650px
                        );

                    max-height:
                        90vh;

                    overflow:
                        auto;

                    padding:
                        24px;

                    background:
                        white;

                    border-radius:
                        24px;

                    box-shadow:
                        0
                        12px
                        38px
                        rgba(
                            0,
                            0,
                            0,
                            .25
                        );
                "
            >

                <div
                    style="
                        display:
                            flex;

                        justify-content:
                            space-between;

                        align-items:
                            center;

                        gap:
                            15px;

                        margin-bottom:
                            20px;
                    "
                >

                    <h2
                        style="
                            margin:
                                0;
                        "
                    >
                        🏠 Choose a Room
                    </h2>


                    <button
                        onclick="
                            closePlayRoomPicker()
                        "

                        style="
                            width:
                                40px;

                            height:
                                40px;

                            padding:
                                0;

                            border-radius:
                                50%;
                        "
                    >
                        ×
                    </button>

                </div>


                <div
                    style="
                        display:
                            grid;

                        grid-template-columns:
                            repeat(
                                auto-fit,
                                minmax(
                                    150px,
                                    1fr
                                )
                            );

                        gap:
                            12px;
                    "
                >

                    ${buttons}

                </div>

            </div>

        </div>

    `;


    document.body.appendChild(
        picker
    );
}


/* =========================================================
   CLOSE ROOM PICKER
========================================================= */

function closePlayRoomPicker() {

    const picker =
        document.getElementById(
            "play-room-picker"
        );


    if (picker) {

        picker.remove();
    }
}


/* =========================================================
   NEED DECAY
========================================================= */

function applyPlayNeedsDecay() {

    const playData =
        getSavedPlayData();


    const houseData =
        getSavedPlayHouseData();


    const now =
        Date.now();


    let lastUpdate =
        Number(
            houseData.lastNeedUpdate
        ) ||
        now;


    if (
        lastUpdate >
        now
    ) {

        lastUpdate =
            now;
    }


    let elapsedMilliseconds =
        now -
        lastUpdate;


    const maxMilliseconds =
        PLAY_MAX_OFFLINE_DECAY_HOURS *
        60 *
        60 *
        1000;


    elapsedMilliseconds =
        Math.min(
            elapsedMilliseconds,
            maxMilliseconds
        );


    const intervalMilliseconds =
        PLAY_NEED_INTERVAL_MINUTES *
        60 *
        1000;


    const intervalsPassed =
        elapsedMilliseconds /
        intervalMilliseconds;


    if (
        intervalsPassed <=
        0
    ) {

        return;
    }


    let changed =
        false;


    playData
        .unlockedEssaIds
        .forEach(
            function(essaId) {

                const stats =
                    getPlayEssaStats(
                        playData,
                        essaId
                    );


                const oldFood =
                    stats.food;


                const oldWater =
                    stats.water;


                const oldCleanliness =
                    stats.cleanliness;


                const oldHappiness =
                    stats.happiness;


                stats.food =
                    normalizePlayStatValue(
                        stats.food -
                        (
                            PLAY_NEED_DECAY.food *
                            intervalsPassed
                        )
                    );


                stats.water =
                    normalizePlayStatValue(
                        stats.water -
                        (
                            PLAY_NEED_DECAY.water *
                            intervalsPassed
                        )
                    );


                stats.cleanliness =
                    normalizePlayStatValue(
                        stats.cleanliness -
                        (
                            PLAY_NEED_DECAY.cleanliness *
                            intervalsPassed
                        )
                    );


                stats.happiness =
                    normalizePlayStatValue(
                        stats.happiness -
                        (
                            PLAY_NEED_DECAY.happiness *
                            intervalsPassed
                        )
                    );


                if (
                    oldFood !==
                        stats.food

                    ||

                    oldWater !==
                        stats.water

                    ||

                    oldCleanliness !==
                        stats.cleanliness

                    ||

                    oldHappiness !==
                        stats.happiness
                ) {

                    changed =
                        true;
                }

            }
        );


    houseData.lastNeedUpdate =
        now;


    savePlayHouseData(
        houseData
    );


    if (changed) {

        savePlayData(
            playData
        );
    }
}


/* =========================================================
   BIGGEST ESSA NEED
========================================================= */

function getEssaBiggestNeed(
    stats
) {

    const needs = [

        {

            id:
                "food",

            value:
                normalizePlayStatValue(
                    stats.food
                ),

            roomId:
                "kitchen",

            icon:
                "🍎"

        },

        {

            id:
                "water",

            value:
                normalizePlayStatValue(
                    stats.water
                ),

            roomId:
                "kitchen",

            icon:
                "💧"

        },

        {

            id:
                "cleanliness",

            value:
                normalizePlayStatValue(
                    stats.cleanliness
                ),

            roomId:
                "bathroom",

            icon:
                "🛁"

        },

        {

            id:
                "happiness",

            value:
                normalizePlayStatValue(
                    stats.happiness
                ),

            roomId:
                "playroom",

            icon:
                "💚"

        }

    ];


    needs.sort(
        function(a, b) {

            return (
                a.value -
                b.value
            );

        }
    );


    return needs[0];
}


/* =========================================================
   NEED SPEECH
========================================================= */

function getEssaNeedMessage(
    essa,
    stats
) {

    const need =
        getEssaBiggestNeed(
            stats
        );


    if (
        need.value >
        80
    ) {

        return "";
    }


    if (
        need.id ===
        "food"
    ) {

        if (
            need.value <=
            35
        ) {

            return "I'm REALLY hungry! 🍎";
        }


        if (
            need.value <=
            60
        ) {

            return "Can I have something to eat? 🥕";
        }


        return "I'm getting a little hungry. 🍪";
    }


    if (
        need.id ===
        "water"
    ) {

        if (
            need.value <=
            35
        ) {

            return "I'm soooo thirsty! 💧";
        }


        if (
            need.value <=
            60
        ) {

            return "Can I have a drink? 🥤";
        }


        return "I could use a drink. 💧";
    }


    if (
        need.id ===
        "cleanliness"
    ) {

        if (
            need.value <=
            35
        ) {

            return "Ewww! I need a bath! 🛁";
        }


        if (
            need.value <=
            60
        ) {

            return "I think I'm getting dirty. 🫧";
        }


        return "Maybe bath time soon? 🧼";
    }


    if (
        need.id ===
        "happiness"
    ) {

        if (
            need.value <=
            35
        ) {

            return "Please play with me! 🥺";
        }


        if (
            need.value <=
            60
        ) {

            return "Can we do something fun? 💚";
        }


        return "I want some attention! 🐾";
    }


    return "";
}


/* =========================================================
   SPEECH BUBBLE
========================================================= */

function makeEssaNeedBubble(
    essa,
    stats
) {

    const message =
        getEssaNeedMessage(
            essa,
            stats
        );


    if (!message) {

        return "";
    }


    const need =
        getEssaBiggestNeed(
            stats
        );


    const urgent =
        need.value <=
        35;


    return `

        <div
            class="
                play-house-speech
                ${
                    urgent
                        ? "play-house-speech-urgent"
                        : ""
                }
            "

            style="
                position:
                    absolute;

                left:
                    50%;

                bottom:
                    calc(
                        100% +
                        5px
                    );

                transform:
                    translateX(
                        -50%
                    );

                min-width:
                    125px;

                max-width:
                    190px;

                padding:
                    8px
                    11px;

                background:
                    rgba(
                        255,
                        255,
                        255,
                        .96
                    );

                border:
                    ${
                        urgent
                            ? "2px solid #e97b7b"
                            : "1px solid #dbe5e7"
                    };

                border-radius:
                    15px;

                color:
                    #26343b;

                font-size:
                    12px;

                font-weight:
                    bold;

                text-align:
                    center;

                line-height:
                    1.35;

                box-shadow:
                    0
                    3px
                    12px
                    rgba(
                        0,
                        0,
                        0,
                        .14
                    );

                pointer-events:
                    none;

                z-index:
                    30;
            "
        >

            ${escapeHTML(
                message
            )}

            <div
                style="
                    position:
                        absolute;

                    left:
                        50%;

                    top:
                        100%;

                    transform:
                        translateX(
                            -50%
                        );

                    width:
                        0;

                    height:
                        0;

                    border-left:
                        7px solid
                        transparent;

                    border-right:
                        7px solid
                        transparent;

                    border-top:
                        8px solid
                        white;
                "
            ></div>

        </div>

    `;
}


/* =========================================================
   REFRESH SPEECH BUBBLES
========================================================= */

function refreshPlayHouseNeedBubbles() {

    const playData =
        getSavedPlayData();


    document
        .querySelectorAll(
            "[data-play-house-essa]"
        )
        .forEach(
            function(wrapper) {

                const essaId =
                    wrapper
                        .dataset
                        .playHouseEssa;


                const essa =
                    getPlayableEssaById(
                        essaId
                    );


                if (!essa) {

                    return;
                }


                const stats =
                    getPlayEssaStats(
                        playData,
                        essa.id
                    );


                const oldBubble =
                    wrapper.querySelector(
                        ".play-house-speech"
                    );


                if (oldBubble) {

                    oldBubble.remove();
                }


                const bubbleHTML =
                    makeEssaNeedBubble(
                        essa,
                        stats
                    );


                if (!bubbleHTML) {

                    return;
                }


                wrapper.insertAdjacentHTML(
                    "afterbegin",
                    bubbleHTML
                );

            }
        );
}


/* =========================================================
   CHOOSE ESSA DESTINATION ROOM
========================================================= */

function chooseEssaDestinationRoom(
    essaId
) {

    const playData =
        getSavedPlayData();


    const stats =
        getPlayEssaStats(
            playData,
            essaId
        );


    const need =
        getEssaBiggestNeed(
            stats
        );


    /*
        The needier they are,
        the more likely they are
        to walk toward the room
        that can help them.
    */

    if (
        need.value <=
            45

        &&

        Math.random() <
            0.88
    ) {

        return need.roomId;
    }


    if (
        need.value <=
            65

        &&

        Math.random() <
            0.72
    ) {

        return need.roomId;
    }


    if (
        need.value <=
            80

        &&

        Math.random() <
            0.55
    ) {

        return need.roomId;
    }


    /*
        Otherwise they can wander
        into another room just because
        they feel like it.
    */

    if (
        Math.random() <
        0.20
    ) {

        const randomRoom =
            playRooms[
                Math.floor(
                    Math.random() *
                    playRooms.length
                )
            ];


        return randomRoom.id;
    }


    return null;
}


/* =========================================================
   MOVE ESSAS BETWEEN ROOMS
========================================================= */

function moveEssasBetweenRooms() {

    const playData =
        getSavedPlayData();


    const houseData =
        getSavedPlayHouseData();


    let changed =
        false;


    playData
        .unlockedEssaIds
        .forEach(
            function(essaId) {

                /*
                    Not every ESSA considers
                    changing rooms every cycle.
                */

                if (
                    Math.random() >
                    0.38
                ) {

                    return;
                }


                const destination =
                    chooseEssaDestinationRoom(
                        essaId
                    );


                if (!destination) {

                    return;
                }


                const current =
                    houseData
                        .essaRooms[
                            essaId
                        ] ||
                    "playroom";


                if (
                    destination ===
                    current
                ) {

                    return;
                }


                houseData
                    .essaRooms[
                        essaId
                    ] =
                    destination;


                /*
                    Give them a fresh position
                    when entering a new room.
                */

                houseData
                    .essaPositions[
                        essaId
                    ] = {

                        x:
                            14 +
                            Math.random() *
                            72,

                        y:
                            48 +
                            Math.random() *
                            34

                    };


                changed =
                    true;

            }
        );


    if (!changed) {

        return;
    }


    savePlayHouseData(
        houseData
    );


    /*
        Only redraw if the user
        is currently looking at
        the house.
    */

    if (
        document.getElementById(
            "play-house-room"
        )
    ) {

        renderPlayRoom();
    }
}


/* =========================================================
   WANDER INSIDE ROOM
========================================================= */

function wanderPlayHouseEssas() {

    const houseData =
        getSavedPlayHouseData();


    let changed =
        false;


    document
        .querySelectorAll(
            "[data-play-house-essa]"
        )
        .forEach(
            function(wrapper) {

                /*
                    Most cycles cause a small
                    movement, so the room
                    feels alive.
                */

                if (
                    Math.random() >
                    0.78
                ) {

                    return;
                }


                const essaId =
                    wrapper
                        .dataset
                        .playHouseEssa;


                let position =
                    houseData
                        .essaPositions[
                            essaId
                        ];


                if (!position) {

                    position = {

                        x:
                            15 +
                            Math.random() *
                            70,

                        y:
                            50 +
                            Math.random() *
                            30

                    };
                }


                const movementAmount =
                    7;


                position.x +=
                    (
                        Math.random() *
                        movementAmount *
                        2
                    ) -
                    movementAmount;


                position.y +=
                    (
                        Math.random() *
                        4
                    ) -
                    2;


                position.x =
                    Math.max(
                        8,
                        Math.min(
                            88,
                            position.x
                        )
                    );


                position.y =
                    Math.max(
                        48,
                        Math.min(
                            82,
                            position.y
                        )
                    );


                houseData
                    .essaPositions[
                        essaId
                    ] =
                    position;


                wrapper.style.left =
                    position.x +
                    "%";


                wrapper.style.top =
                    position.y +
                    "%";


                /*
                    Face the direction
                    of movement sometimes.
                */

                const image =
                    wrapper.querySelector(
                        ".play-house-essa-image"
                    );


                if (image) {

                    if (
                        Math.random() >
                        .5
                    ) {

                        image.style.transform =
                            "scaleX(1)";

                    } else {

                        image.style.transform =
                            "scaleX(-1)";
                    }
                }


                changed =
                    true;

            }
        );


    if (changed) {

        savePlayHouseData(
            houseData
        );
    }
}


/* =========================================================
   HOUSE TIMERS
========================================================= */

let playHouseNeedTimer =
    null;


let playHouseWanderTimer =
    null;


let playHouseRoomMoveTimer =
    null;


/* =========================================================
   START HOUSE TIMERS
========================================================= */

function startPlayHouseTimers() {

    stopPlayHouseTimers();


    playHouseNeedTimer =
        setInterval(
            function() {

                applyPlayNeedsDecay();


                if (
                    document.getElementById(
                        "play-house-room"
                    )
                ) {

                    refreshPlayHouseNeedBubbles();
                }

            },
            60 *
            1000
        );


    playHouseWanderTimer =
        setInterval(
            function() {

                if (
                    document.getElementById(
                        "play-house-room"
                    )
                ) {

                    wanderPlayHouseEssas();
                }

            },
            5000
        );


    playHouseRoomMoveTimer =
        setInterval(
            function() {

                if (
                    document.getElementById(
                        "play-house-room"
                    )
                ) {

                    moveEssasBetweenRooms();
                }

            },
            25000
        );
}


/* =========================================================
   STOP HOUSE TIMERS
========================================================= */

function stopPlayHouseTimers() {

    if (
        playHouseNeedTimer
    ) {

        clearInterval(
            playHouseNeedTimer
        );


        playHouseNeedTimer =
            null;
    }


    if (
        playHouseWanderTimer
    ) {

        clearInterval(
            playHouseWanderTimer
        );


        playHouseWanderTimer =
            null;
    }


    if (
        playHouseRoomMoveTimer
    ) {

        clearInterval(
            playHouseRoomMoveTimer
        );


        playHouseRoomMoveTimer =
            null;
    }
}

  /* =========================================================
   FLOOR-BASED ESSA POSITIONING
========================================================= */

function getPlayHouseEssaPosition(
    houseData,
    essaId,
    index = 0
) {

    let position =
        houseData
            .essaPositions[
                essaId
            ];


    if (
        !position ||
        typeof position.x !== "number" ||
        typeof position.floor !== "number"
    ) {

        const startingX = [
            12,
            25,
            38,
            51,
            64,
            77,
            88
        ];


        position = {

            x:
                startingX[
                    index %
                    startingX.length
                ],

            /*
                Distance upward from
                the bottom of the room.

                Small number =
                closer to the floor.
            */
            floor:
                4 +
                (
                    index %
                    2
                ) *
                2

        };


        houseData
            .essaPositions[
                essaId
            ] =
            position;


        savePlayHouseData(
            houseData
        );
    }


    return position;
}


/* =========================================================
   CHECK IF A POSITION IS TOO CLOSE
========================================================= */

function isPlayHousePositionTooClose(
    houseData,
    essaId,
    x,
    floor
) {

    const currentRoom =
        houseData
            .essaRooms[
                essaId
            ] ||
        "playroom";


    const allEssas =
        getAllPlayableEssas();


    for (
        const otherEssa
        of allEssas
    ) {

        if (
            String(
                otherEssa.id
            ) ===
            String(
                essaId
            )
        ) {

            continue;
        }


        const otherRoom =
            houseData
                .essaRooms[
                    otherEssa.id
                ] ||
            "playroom";


        if (
            otherRoom !==
            currentRoom
        ) {

            continue;
        }


        const otherPosition =
            houseData
                .essaPositions[
                    otherEssa.id
                ];


        if (
            !otherPosition ||
            typeof otherPosition.x !==
                "number"
        ) {

            continue;
        }


        const otherFloor =
            typeof otherPosition.floor ===
                "number"

                ? otherPosition.floor

                : 5;


        const horizontalDistance =
            Math.abs(
                x -
                otherPosition.x
            );


        const floorDistance =
            Math.abs(
                floor -
                otherFloor
            );


        /*
            Bigger horizontal spacing
            prevents the giant cuddle pile.
        */
        if (
            horizontalDistance <
                13

            &&

            floorDistance <
                8
        ) {

            return true;
        }
    }


    return false;
}


/* =========================================================
   FIND SAFE ROAMING POSITION
========================================================= */

function findSafePlayHousePosition(
    houseData,
    essaId
) {

    let attempts =
        0;


    while (
        attempts <
        30
    ) {

        /*
            Spread across most of
            the room horizontally.
        */
        const x =
            8 +
            Math.random() *
            84;


        /*
            Keep feet near the floor.

            Slight depth variation gives
            the room some movement without
            making ESSAs float halfway up
            the wall.
        */
        const floor =
            2 +
            Math.random() *
            12;


        if (
            !isPlayHousePositionTooClose(
                houseData,
                essaId,
                x,
                floor
            )
        ) {

            return {

                x:
                    x,

                floor:
                    floor

            };
        }


        attempts++;
    }


    /*
        Emergency fallback if the room
        is crowded.
    */
    return {

        x:
            8 +
            Math.random() *
            84,

        floor:
            3 +
            Math.random() *
            8

    };
}


/* =========================================================
   MAKE ROAMING ESSA
========================================================= */

function makePlayHouseEssa(
    essa,
    stats,
    position
) {

    const bubble =
        makeEssaNeedBubble(
            essa,
            stats
        );


    return `

        <button
            data-play-house-essa="${essa.id}"

            onclick="
                focusPlayableEssa(
                    '${essa.id}'
                )
            "

            aria-label="
                Play with
                ${escapeHTML(
                    essa.name
                )}
            "

            style="
                position:absolute;

                left:
                    ${position.x}%;

                bottom:
                    ${position.floor}%;

                transform:
                translateX(-50%);

                width:
                6%;

                min-width:
                38px;

                max-width:
                68px;

                padding:
                0;

                margin:
                    0;

                border:
                    none;

                background:
                    transparent;

                box-shadow:
                    none;

                cursor:
                    pointer;

                transition:
                    left 3.2s ease,
                    bottom 3.2s ease;

                z-index:
                    ${Math.round(
                        100 -
                        position.floor
                    )};
            "
        >

            ${bubble}


            <img
                class="play-house-essa-image"

                src="${essa.image}"

                alt="${escapeHTML(
                    essa.name
                )}"

                onerror="
                    this.style.display='none';
                    this.nextElementSibling.style.display='flex';
                "

                style="
                    width:100%;
                    height:auto;
                    display:block;
                    object-fit:contain;

                    filter:
                        drop-shadow(
                            0 4px 3px
                            rgba(
                                0,
                                0,
                                0,
                                .20
                            )
                        );

                    transform-origin:
                        center bottom;

                    transition:
                        transform .25s ease;
                "
            >


            <div
                style="
                    display:none;
                    align-items:center;
                    justify-content:center;
                    width:100%;
                    aspect-ratio:1/1;
                    font-size:42px;
                "
            >
                ${essa.fallbackIcon}
            </div>


            <div
                style="
                    position:absolute;

                    left:50%;

                    top:
                        calc(
                            100% +
                            2px
                        );

                    transform:
                        translateX(-50%);

                    padding:
                        3px 7px;

                    white-space:
                        nowrap;

                    border-radius:
                        999px;

                    background:
                        rgba(
                            255,
                            255,
                            255,
                            .90
                        );

                    color:
                        #26343b;

                    font-size:
                        10px;

                    font-weight:
                        bold;

                    pointer-events:
                        none;
                "
            >

                ${escapeHTML(
                    essa.name
                )}

            </div>

        </button>

    `;
}


/* =========================================================
   BETTER ESSA WANDERING
========================================================= */

function wanderPlayHouseEssas() {

    const houseData =
        getSavedPlayHouseData();


    let changed =
        false;


    document
        .querySelectorAll(
            "[data-play-house-essa]"
        )
        .forEach(
            function(wrapper) {

                /*
                    Most ESSAs move during
                    each wandering cycle.
                */
                if (
                    Math.random() >
                    0.82
                ) {

                    return;
                }


                const essaId =
                    wrapper
                        .dataset
                        .playHouseEssa;


                const oldPosition =
                    houseData
                        .essaPositions[
                            essaId
                        ];


                const newPosition =
                    findSafePlayHousePosition(
                        houseData,
                        essaId
                    );


                houseData
                    .essaPositions[
                        essaId
                    ] =
                    newPosition;


                wrapper.style.left =
                    newPosition.x +
                    "%";


                wrapper.style.bottom =
                    newPosition.floor +
                    "%";


                wrapper.style.top =
                    "auto";


                const image =
                    wrapper.querySelector(
                        ".play-house-essa-image"
                    );


                if (
                    image &&
                    oldPosition
                ) {

                    if (
                        newPosition.x <
                        oldPosition.x
                    ) {

                        image.style.transform =
                            "scaleX(-1)";

                    } else {

                        image.style.transform =
                            "scaleX(1)";
                    }
                }


                changed =
                    true;

            }
        );


    if (changed) {

        savePlayHouseData(
            houseData
        );
    }
}


/* =========================================================
   MAKE ROAMING ESSA
========================================================= */




/* =========================================================
   EMPTY ROOM MESSAGE
========================================================= */

/* =========================================================
   ROOM-SPECIFIC CONTROLS
========================================================= */

function makePlayRoomSpecialControls(
    room
) {

    if (
        room.id ===
        "arcade"
    ) {

        return `

            <div
                style="
                    position:
                        absolute;

                    right:
                        16px;

                    bottom:
                        18px;

                    z-index:
                        100;
                "
            >

                <button
                    onclick="
                        openESSATwist()
                    "

                    style="
                        padding:
                            12px
                            16px;

                        border:
                            2px solid
                            rgba(
                                255,
                                255,
                                255,
                                .8
                            );

                        border-radius:
                            16px;

                        background:
                            rgba(
                                255,
                                255,
                                255,
                                .92
                            );

                        color:
                            #26343b;

                        font-weight:
                            bold;

                        font-size:
                            15px;

                        cursor:
                            pointer;

                        box-shadow:
                            0
                            4px
                            16px
                            rgba(
                                0,
                                0,
                                0,
                                .15
                            );
                    "
                >

                    💎 Play ESSATwist

                </button>

            </div>

        `;
    }


    if (
        room.id ===
        "backyard"
    ) {

        return `

            <div
                style="
                    position:
                        absolute;

                    right:
                        16px;

                    bottom:
                        18px;

                    z-index:
                        100;

                    display:
                        flex;

                    gap:
                        8px;

                    flex-wrap:
                        wrap;

                    justify-content:
                        flex-end;
                "
            >


                <button
                    onclick="
                        showPlayMessage(
                            '🥏 Frisbee is coming soon!'
                        )
                    "
                >
                    🥏 Frisbee
                </button>


                <button
                    onclick="
                        showPlayMessage(
                            '🎾 Fetch is coming soon!'
                        )
                    "
                >
                    🎾 Fetch
                </button>


                <button
                    onclick="
                        showPlayMessage(
                            '🦴 Find the Bone is coming soon!'
                        )
                    "
                >
                    🦴 Find the Bone
                </button>


            </div>

        `;
    }


    return "";
}


/* =========================================================
   PLAY HOUSE ROOM
========================================================= */

function renderPlayRoom() {

    resetPageTheme();


    applyPlayNeedsDecay();


    const playData =
        getSavedPlayData();


    const houseData =
        getSavedPlayHouseData();


    const room =
        getPlayRoomById(
            houseData.currentRoomId
        );


    /*
        Make sure every currently
        unlocked ESSA has stats
        and a room.
    */

    playData
        .unlockedEssaIds
        .forEach(
            function(essaId) {

                getPlayEssaStats(
                    playData,
                    essaId
                );


                if (
                    !houseData
                        .essaRooms[
                            essaId
                        ]
                ) {

                    houseData
                        .essaRooms[
                            essaId
                        ] =
                        "playroom";
                }

            }
        );


    savePlayData(
        playData
    );


    savePlayHouseData(
        houseData
    );


    const roomEssas =
        playableEssas
            .filter(
                function(essa) {

                    return (

                        playData
                            .unlockedEssaIds
                            .includes(
                                essa.id
                            )

                        &&

                        (
                            houseData
                                .essaRooms[
                                    essa.id
                                ] ||
                            "playroom"
                        ) ===
                        room.id

                    );

                }
            );


    let essasHTML =
        "";


    roomEssas.forEach(
        function(
            essa,
            index
        ) {

            const stats =
                getPlayEssaStats(
                    playData,
                    essa.id
                );


            const position =
                getPlayHouseEssaPosition(
                    houseData,
                    essa.id,
                    index
                );


            essasHTML +=
                makePlayHouseEssa(
                    essa,
                    stats,
                    position
                );

        }
    );

    const roomControls =
        makePlayRoomSpecialControls(
            room
        );


    document.querySelector(
        "main"
    ).innerHTML = `

        ${makeAppTabs(
            "Play"
        )}


        <div
            style="
                max-width:
                    1150px;

                margin:
                    0 auto;
            "
        >


            <div
                style="
                    display:
                        flex;

                    justify-content:
                        center;

                    margin-bottom:
                        12px;
                "
            >

                ${makeTrainerLevelBar(
                    playData
                )}

            </div>


            <div
                style="
                    display:
                        flex;

                    align-items:
                        center;

                    justify-content:
                        center;

                    gap:
                        10px;

                    margin-bottom:
                        12px;
                "
            >


                <button
                    onclick="
                        changePlayRoom(
                            -1
                        )
                    "

                    aria-label="
                        Previous room
                    "

                    style="
                        width:
                            44px;

                        height:
                            44px;

                        padding:
                            0;

                        border-radius:
                            50%;

                        font-size:
                            20px;
                    "
                >
                    ⬅️
                </button>


                <button
                    onclick="
                        showPlayRoomPicker()
                    "

                    style="
                        min-width:
                            180px;

                        padding:
                            11px
                            18px;

                        border-radius:
                            999px;

                        font-size:
                            16px;

                        font-weight:
                            bold;
                    "
                >

                    ${room.icon}

                    ${escapeHTML(
                        room.name
                    )}

                </button>


                <button
                    onclick="
                        changePlayRoom(
                            1
                        )
                    "

                    aria-label="
                        Next room
                    "

                    style="
                        width:
                            44px;

                        height:
                            44px;

                        padding:
                            0;

                        border-radius:
                            50%;

                        font-size:
                            20px;
                    "
                >
                    ➡️
                </button>


            </div>


            <div
                id="
                    play-house-room
                "

                data-room-id="
                    ${room.id}
                "

                style="
                    position:
                        relative;

                    width:
                        100%;

                    min-height:
                        660px;

                    overflow:
                        hidden;

                    border:
                        1px solid
                        #dbe5e7;

                    border-radius:
                        28px;

                    background-color:
                        #eaf6f4;

                    background-image:
                        url(
                            '${room.background}'
                        );

                    background-size:
                        cover;

                    background-position:
                        center;

                    box-shadow:
                        0
                        8px
                        28px
                        rgba(
                            0,
                            0,
                            0,
                            .13
                        );
                "
            >


                <div
                    style="
                        position:
                            absolute;

                        top:
                            16px;

                        right:
                            16px;

                        z-index:
                            120;

                        display:
                            flex;

                        gap:
                            8px;

                        flex-wrap:
                            wrap;

                        justify-content:
                            flex-end;
                    "
                >


                    <button
                        onclick="
                            renderPlayableEssaCollection()
                        "

                        style="
                            background:
                                rgba(
                                    255,
                                    255,
                                    255,
                                    .92
                                );

                            box-shadow:
                                0
                                3px
                                12px
                                rgba(
                                    0,
                                    0,
                                    0,
                                    .13
                                );
                        "
                    >

                        🐾 Collection

                    </button>


                    <button
                        onclick="
                            showPlayHouseStatus()
                        "

                        style="
                            background:
                                rgba(
                                    255,
                                    255,
                                    255,
                                    .92
                                );

                            box-shadow:
                                0
                                3px
                                12px
                                rgba(
                                    0,
                                    0,
                                    0,
                                    .13
                                );
                        "
                    >

                        💚 Needs

                    </button>


                </div>


                <div
                    id="
                        play-message
                    "

                    style="
                        position:
                            absolute;

                        top:
                            80px;

                        left:
                            50%;

                        transform:
                            translateX(
                                -50%
                            );

                        max-width:
                            min(
                                80%,
                                500px
                            );

                        padding:
                            9px
                            14px;

                        background:
                            rgba(
                                255,
                                255,
                                255,
                                .95
                            );

                        border-radius:
                            999px;

                        color:
                            #26343b;

                        font-weight:
                            bold;

                        text-align:
                            center;

                        opacity:
                            0;

                        pointer-events:
                            none;

                        transition:
                            opacity
                            .2s
                            ease;

                        z-index:
                            150;

                        box-shadow:
                            0
                            3px
                            12px
                            rgba(
                                0,
                                0,
                                0,
                                .14
                            );
                    "
                ></div>


                ${essasHTML}


                ${roomControls}


            </div>


            <p
                style="
                    margin-top:
                        10px;

                    text-align:
                        center;

                    color:
                        #68777b;

                    font-size:
                        13px;
                "
            >

                ESSAs can wander around
                the house on their own.

                Tap one to play with them.

            </p>


        </div>

    `;


    startPlayHouseTimers();
}


/* =========================================================
   FIRST-TIME HOUSE ENTRY OVERRIDE
========================================================= */

function enterPlayRoomForFirstTime() {

    const playData =
        getSavedPlayData();


    const houseData =
        getSavedPlayHouseData();


    playData.hasSeenPlayIntro =
        true;


    playData.selectedEssaId =
        "moocow";


    if (
        !playData
            .unlockedEssaIds
            .includes(
                "moocow"
            )
    ) {

        playData
            .unlockedEssaIds
            .push(
                "moocow"
            );
    }


    getPlayEssaStats(
        playData,
        "moocow"
    );


    houseData.currentRoomId =
        "playroom";


    houseData.essaRooms.moocow =
        "playroom";


    if (
        !houseData
            .essaPositions
            .moocow
    ) {

        houseData
            .essaPositions
            .moocow = {

                x:
                    50,

                y:
                    68

            };
    }


    savePlayData(
        playData
    );


    savePlayHouseData(
        houseData
    );


    renderPlayRoom();
}


/* =========================================================
   FOCUS ESSA OVERRIDE
========================================================= */

function focusPlayableEssa(
    essaId
) {

    applyPlayNeedsDecay();


    const playData =
        getSavedPlayData();


    const essa =
        getPlayableEssaById(
            essaId
        );


    if (!essa) {

        return;
    }


    if (
        !playData
            .unlockedEssaIds
            .includes(
                essa.id
            )
    ) {

        alert(
            `${essa.name} unlocks at Trainer Level ${essa.unlockLevel}.`
        );

        return;
    }


    playData.selectedEssaId =
        essa.id;


    getPlayEssaStats(
        playData,
        essa.id
    );


    savePlayData(
        playData
    );


    stopPlayHouseTimers();


    renderPlayableEssaFocus(
        essa.id
    );
}


/* =========================================================
   FOCUS SCREEN — CURRENT ROOM VERSION
========================================================= */

function renderPlayableEssaFocus(
    essaId
) {

    resetPageTheme();


    stopPlayHouseTimers();


    applyPlayNeedsDecay();


    const playData =
        getSavedPlayData();


    const houseData =
        getSavedPlayHouseData();


    const essa =
        getPlayableEssaById(
            essaId
        );


    if (
        !essa ||
        !playData
            .unlockedEssaIds
            .includes(
                essa.id
            )
    ) {

        renderPlayRoom();

        return;
    }


    const stats =
        getPlayEssaStats(
            playData,
            essa.id
        );


    const room =
        getEssaRoom(
            houseData,
            essa.id
        );


    const statusMessage =
        getEssaNeedMessage(
            essa,
            stats
        );


    document.querySelector(
        "main"
    ).innerHTML = `

        ${makeAppTabs(
            "Play"
        )}


        <div
            style="
                max-width:
                    1000px;

                margin:
                    0 auto;
            "
        >


            <div
                style="
                    position:
                        relative;

                    min-height:
                        680px;

                    overflow:
                        hidden;

                    border-radius:
                        28px;

                    border:
                        1px solid
                        #dbe5e7;

                    box-shadow:
                        0
                        8px
                        28px
                        rgba(
                            0,
                            0,
                            0,
                            .12
                        );

                    background-color:
                        #eaf6f4;

                    background-image:
                        linear-gradient(
                            rgba(
                                255,
                                255,
                                255,
                                .08
                            ),
                            rgba(
                                255,
                                255,
                                255,
                                .08
                            )
                        ),
                        url(
                            '${room.background}'
                        );

                    background-size:
                        cover;

                    background-position:
                        center;
                "
            >


                <div
                    style="
                        position:
                            absolute;

                        top:
                            18px;

                        left:
                            18px;

                        z-index:
                            30;
                    "
                >

                    <button
                        onclick="
                            renderPlayRoom()
                        "

                        style="
                            background:
                                rgba(
                                    255,
                                    255,
                                    255,
                                    .94
                                );
                        "
                    >

                        ← ${room.icon}
                        ${escapeHTML(
                            room.name
                        )}

                    </button>

                </div>


                <div
                    style="
                        position:
                            absolute;

                        top:
                            18px;

                        left:
                            50%;

                        transform:
                            translateX(
                                -50%
                            );

                        width:
                            min(
                                68%,
                                620px
                            );

                        z-index:
                            20;
                    "
                >

                    ${makeTrainerLevelBar(
                        playData
                    )}

                </div>


                <div
                    style="
                        position:
                            absolute;

                        left:
                            18px;

                        top:
                            115px;

                        width:
                            205px;

                        padding:
                            14px;

                        background:
                            rgba(
                                255,
                                255,
                                255,
                                .93
                            );

                        border-radius:
                            18px;

                        box-shadow:
                            0
                            4px
                            16px
                            rgba(
                                0,
                                0,
                                0,
                                .12
                            );

                        z-index:
                            25;
                    "
                >


                    ${makePlayStatBar(
                        "🍎",
                        "Food",
                        stats.food
                    )}


                    ${makePlayStatBar(
                        "💧",
                        "Drink",
                        stats.water
                    )}


                    ${makePlayStatBar(
                        "🛁",
                        "Clean",
                        stats.cleanliness
                    )}


                    ${makePlayStatBar(
                        "💚",
                        "Happy",
                        stats.happiness
                    )}


                </div>


                <div
                    style="
                        position:
                            absolute;

                        top:
                            105px;

                        left:
                            50%;

                        transform:
                            translateX(
                                -50%
                            );

                        width:
                            min(
                                52%,
                                430px
                            );

                        z-index:
                            10;

                        text-align:
                            center;
                    "
                >


                    ${
                        statusMessage

                            ? `

                                <div
                                    style="
                                        display:
                                            inline-block;

                                        margin-bottom:
                                            -6px;

                                        padding:
                                            10px
                                            15px;

                                        background:
                                            rgba(
                                                255,
                                                255,
                                                255,
                                                .96
                                            );

                                        border-radius:
                                            18px;

                                        font-size:
                                            14px;

                                        font-weight:
                                            bold;

                                        box-shadow:
                                            0
                                            3px
                                            12px
                                            rgba(
                                                0,
                                                0,
                                                0,
                                                .12
                                            );
                                    "
                                >

                                    ${escapeHTML(
                                        statusMessage
                                    )}

                                </div>

                            `

                            : ""
                    }


                    ${makePlayableEssaVisual(
                        essa,
                        false,
                        "focus"
                    )}


                    <div
                        style="
                            display:
                                inline-block;

                            padding:
                                7px
                                16px;

                            margin-top:
                                -5px;

                            background:
                                rgba(
                                    255,
                                    255,
                                    255,
                                    .92
                                );

                            border-radius:
                                999px;

                            font-size:
                                22px;

                            font-weight:
                                bold;

                            box-shadow:
                                0
                                3px
                                12px
                                rgba(
                                    0,
                                    0,
                                    0,
                                    .12
                                );
                        "
                    >

                        ${escapeHTML(
                            essa.name
                        )}

                    </div>


                </div>


                <div
                    id="
                        play-message
                    "

                    style="
                        position:
                            absolute;

                        left:
                            50%;

                        bottom:
                            205px;

                        transform:
                            translateX(
                                -50%
                            );

                        min-width:
                            220px;

                        max-width:
                            70%;

                        padding:
                            10px
                            16px;

                        background:
                            rgba(
                                255,
                                255,
                                255,
                                .94
                            );

                        border-radius:
                            999px;

                        font-weight:
                            bold;

                        color:
                            #26343b;

                        text-align:
                            center;

                        opacity:
                            0;

                        pointer-events:
                            none;

                        transition:
                            opacity
                            .2s
                            ease;

                        z-index:
                            40;

                        box-shadow:
                            0
                            3px
                            12px
                            rgba(
                                0,
                                0,
                                0,
                                .12
                            );
                    "
                ></div>


                <div
                    style="
                        position:
                            absolute;

                        left:
                            50%;

                        bottom:
                            18px;

                        transform:
                            translateX(
                                -50%
                            );

                        width:
                            calc(
                                100% -
                                36px
                            );

                        display:
                            grid;

                        grid-template-columns:
                            repeat(
                                4,
                                1fr
                            );

                        gap:
                            12px;

                        z-index:
                            30;
                    "
                >


                    <button
                        onclick="
                            showPlayFoodMenu(
                                '${essa.id}'
                            )
                        "
                    >

                        <div
                            style="
                                font-size:
                                    32px;
                            "
                        >
                            🍎
                        </div>

                        Food

                    </button>


                    <button
                        onclick="
                            showPlayDrinkMenu(
                                '${essa.id}'
                            )
                        "
                    >

                        <div
                            style="
                                font-size:
                                    32px;
                            "
                        >
                            🥤
                        </div>

                        Drinks

                    </button>


                    <button
                        onclick="
                            showPlayBathMenu(
                                '${essa.id}'
                            )
                        "
                    >

                        <div
                            style="
                                font-size:
                                    32px;
                            "
                        >
                            🛁
                        </div>

                        Bathe

                    </button>


                    <button
                        onclick="
                            petPlayableEssa(
                                '${essa.id}'
                            )
                        "
                    >

                        <div
                            style="
                                font-size:
                                    32px;
                            "
                        >
                            💚
                        </div>

                        Pet

                    </button>


                </div>


            </div>


        </div>

    `;
}


/* =========================================================
   HOUSE-AWARE ITEM MENU
========================================================= */

function makePlayItemMenuShell(
    essa,
    title,
    subtitle,
    itemsHTML
) {

    const houseData =
        getSavedPlayHouseData();


    const room =
        getEssaRoom(
            houseData,
            essa.id
        );


    return `

        ${makeAppTabs(
            "Play"
        )}


        <div
            style="
                max-width:
                    1000px;

                margin:
                    0 auto;
            "
        >


            <div
                style="
                    min-height:
                        680px;

                    position:
                        relative;

                    overflow:
                        hidden;

                    border-radius:
                        28px;

                    border:
                        1px solid
                        #dbe5e7;

                    box-shadow:
                        0
                        8px
                        28px
                        rgba(
                            0,
                            0,
                            0,
                            .12
                        );

                    background-color:
                        #eaf6f4;

                    background-image:
                        linear-gradient(
                            rgba(
                                255,
                                255,
                                255,
                                .10
                            ),
                            rgba(
                                255,
                                255,
                                255,
                                .10
                            )
                        ),
                        url(
                            '${room.background}'
                        );

                    background-size:
                        cover;

                    background-position:
                        center;
                "
            >


                <button
                    onclick="
                        renderPlayableEssaFocus(
                            '${essa.id}'
                        )
                    "

                    style="
                        position:
                            absolute;

                        top:
                            18px;

                        left:
                            18px;

                        z-index:
                            30;

                        background:
                            rgba(
                                255,
                                255,
                                255,
                                .94
                            );
                    "
                >

                    ← Back

                </button>


                <div
                    style="
                        position:
                            absolute;

                        top:
                            55px;

                        left:
                            50%;

                        transform:
                            translateX(
                                -50%
                            );

                        width:
                            min(
                                42%,
                                330px
                            );
                    "
                >

                    ${makePlayableEssaVisual(
                        essa,
                        false,
                        "focus"
                    )}

                </div>


                <div
                    style="
                        position:
                            absolute;

                        left:
                            20px;

                        right:
                            20px;

                        bottom:
                            20px;

                        padding:
                            22px;

                        background:
                            rgba(
                                255,
                                255,
                                255,
                                .97
                            );

                        border-radius:
                            24px;

                        box-shadow:
                            0
                            5px
                            22px
                            rgba(
                                0,
                                0,
                                0,
                                .16
                            );

                        z-index:
                            30;
                    "
                >


                    <h2
                        style="
                            margin-top:
                                0;
                        "
                    >
                        ${title}
                    </h2>


                    <p
                        style="
                            color:
                                #68777b;
                        "
                    >
                        ${subtitle}
                    </p>


                    <div
                        style="
                            display:
                                grid;

                            grid-template-columns:
                                repeat(
                                    auto-fit,
                                    minmax(
                                        115px,
                                        1fr
                                    )
                                );

                            gap:
                                12px;

                            margin-top:
                                18px;
                        "
                    >

                        ${itemsHTML}

                    </div>


                </div>


            </div>


        </div>

    `;
}


/* =========================================================
   SEND ESSA TO A ROOM
========================================================= */

function sendEssaToRoom(
    essaId,
    roomId
) {

    const essa =
        getPlayableEssaById(
            essaId
        );


    const room =
        getPlayRoomById(
            roomId
        );


    if (
        !essa ||
        !room
    ) {

        return;
    }


    const houseData =
        getSavedPlayHouseData();


    houseData
        .essaRooms[
            essa.id
        ] =
        room.id;


    houseData
        .essaPositions[
            essa.id
        ] = {

            x:
                35 +
                Math.random() *
                30,

            y:
                58 +
                Math.random() *
                18

        };


    savePlayHouseData(
        houseData
    );


    showPlayMessage(
        `${essa.name} went to the ${room.name}! ${room.icon}`
    );
}


/* =========================================================
   HOUSE NEED STATUS WINDOW
========================================================= */

function showPlayHouseStatus() {

    applyPlayNeedsDecay();


    const playData =
        getSavedPlayData();


    const houseData =
        getSavedPlayHouseData();


    const oldModal =
        document.getElementById(
            "play-house-status-modal"
        );


    if (oldModal) {

        oldModal.remove();
    }


    const cards =
        playableEssas
            .filter(
                function(essa) {

                    return playData
                        .unlockedEssaIds
                        .includes(
                            essa.id
                        );

                }
            )
            .map(
                function(essa) {

                    const stats =
                        getPlayEssaStats(
                            playData,
                            essa.id
                        );


                    const room =
                        getEssaRoom(
                            houseData,
                            essa.id
                        );


                    const need =
                        getEssaBiggestNeed(
                            stats
                        );


                    return `

                        <div
                            style="
                                padding:
                                    14px;

                                background:
                                    #f8fbfb;

                                border:
                                    1px solid
                                    #dbe5e7;

                                border-radius:
                                    16px;
                            "
                        >

                            <div
                                style="
                                    display:
                                        flex;

                                    justify-content:
                                        space-between;

                                    align-items:
                                        center;

                                    gap:
                                        10px;

                                    margin-bottom:
                                        10px;
                                "
                            >

                                <strong>
                                    ${escapeHTML(
                                        essa.name
                                    )}
                                </strong>


                                <span
                                    style="
                                        color:
                                            #68777b;

                                        font-size:
                                            13px;
                                    "
                                >

                                    ${room.icon}

                                    ${escapeHTML(
                                        room.name
                                    )}

                                </span>

                            </div>


                            <div
                                style="
                                    font-size:
                                        13px;

                                    line-height:
                                        1.7;
                                "
                            >

                                🍎 Food:
                                ${Math.round(
                                    stats.food
                                )}%

                                <br>

                                💧 Water:
                                ${Math.round(
                                    stats.water
                                )}%

                                <br>

                                🛁 Clean:
                                ${Math.round(
                                    stats.cleanliness
                                )}%

                                <br>

                                💚 Happy:
                                ${Math.round(
                                    stats.happiness
                                )}%

                            </div>


                            ${
                                need.value <=
                                80

                                    ? `

                                        <div
                                            style="
                                                margin-top:
                                                    8px;

                                                padding:
                                                    7px
                                                    9px;

                                                background:
                                                    white;

                                                border-radius:
                                                    10px;

                                                font-size:
                                                    12px;

                                                font-weight:
                                                    bold;
                                            "
                                        >

                                            ${escapeHTML(
                                                getEssaNeedMessage(
                                                    essa,
                                                    stats
                                                )
                                            )}

                                        </div>

                                    `

                                    : ""
                            }


                        </div>

                    `;

                }
            )
            .join("");


    const modal =
        document.createElement(
            "div"
        );


    modal.id =
        "play-house-status-modal";


    modal.innerHTML = `

        <div
            style="
                position:
                    fixed;

                inset:
                    0;

                z-index:
                    9999;

                display:
                    flex;

                align-items:
                    center;

                justify-content:
                    center;

                padding:
                    20px;

                box-sizing:
                    border-box;

                background:
                    rgba(
                        0,
                        0,
                        0,
                        .5
                    );
            "

            onclick="
                if (
                    event.target ===
                    this
                ) {

                    closePlayHouseStatus();
                }
            "
        >

            <div
                style="
                    width:
                        min(
                            100%,
                            650px
                        );

                    max-height:
                        88vh;

                    overflow:
                        auto;

                    padding:
                        24px;

                    background:
                        white;

                    border-radius:
                        24px;

                    box-shadow:
                        0
                        12px
                        38px
                        rgba(
                            0,
                            0,
                            0,
                            .25
                        );
                "
            >


                <div
                    style="
                        display:
                            flex;

                        justify-content:
                            space-between;

                        align-items:
                            center;

                        gap:
                            12px;

                        margin-bottom:
                            18px;
                    "
                >

                    <h2
                        style="
                            margin:
                                0;
                        "
                    >
                        💚 ESSA Needs
                    </h2>


                    <button
                        onclick="
                            closePlayHouseStatus()
                        "

                        style="
                            width:
                                40px;

                            height:
                                40px;

                            padding:
                                0;

                            border-radius:
                                50%;
                        "
                    >
                        ×
                    </button>

                </div>


                <div
                    style="
                        display:
                            grid;

                        grid-template-columns:
                            repeat(
                                auto-fit,
                                minmax(
                                    200px,
                                    1fr
                                )
                            );

                        gap:
                            12px;
                    "
                >

                    ${cards}

                </div>


            </div>

        </div>

    `;


    document.body.appendChild(
        modal
    );
}


/* =========================================================
   CLOSE HOUSE STATUS
========================================================= */

function closePlayHouseStatus() {

    const modal =
        document.getElementById(
            "play-house-status-modal"
        );


    if (modal) {

        modal.remove();
    }
}


/* =========================================================
   HOUSE MOBILE STYLES
========================================================= */

function installPlayHouseStyles() {

    if (
        document.getElementById(
            "play-house-dynamic-styles"
        )
    ) {

        return;
    }


    const style =
        document.createElement(
            "style"
        );


    style.id =
        "play-house-dynamic-styles";


    style.textContent = `

        [data-play-house-essa]:hover
        .play-house-essa-image {

            transform:
                scale(1.06);

        }


        .play-house-speech {

            animation:
                playHouseBubbleFloat
                2.2s
                ease-in-out
                infinite;

        }


        .play-house-speech-urgent {

            animation:
                playHouseUrgentBubble
                1.1s
                ease-in-out
                infinite;

        }


        @keyframes
        playHouseBubbleFloat {

            0%,
            100% {

                transform:
                    translateX(-50%)
                    translateY(0);

            }


            50% {

                transform:
                    translateX(-50%)
                    translateY(-4px);

            }

        }


        @keyframes
        playHouseUrgentBubble {

            0%,
            100% {

                transform:
                    translateX(-50%)
                    scale(1);

            }


            50% {

                transform:
                    translateX(-50%)
                    scale(1.04);

            }

        }


        @media
        (
            max-width:
                700px
        ) {

            #play-house-room {

                min-height:
                    530px
                    !important;

            }


            [data-play-house-essa] {

                width:
                    15%
                    !important;

                min-width:
                    48px
                    !important;

                max-width:
                    82px
                    !important;

            }


            .play-house-speech {

                min-width:
                    100px
                    !important;

                max-width:
                    145px
                    !important;

                font-size:
                    10px
                    !important;

            }

        }

    `;


    document.head.appendChild(
        style
    );
}


/* =========================================================
   INSTALL HOUSE STYLES NOW
========================================================= */

installPlayHouseStyles();

/* =========================================================
   PART 12
   CUSTOM PLAY ESSAS + LEVEL 80 UNLOCK
   ESSATWIST + FINAL PLAY HOOKUPS
========================================================= */


/* =========================================================
   CUSTOM PLAY ESSA SETTINGS
========================================================= */

const CUSTOM_PLAY_ESSA_UNLOCK_LEVEL =
    80;


const CUSTOM_PLAY_ESSA_MAX_IMAGE_SIZE =
    700;


/* =========================================================
   CUSTOM ESSA STORAGE
========================================================= */

function getCustomPlayEssaStorageKey() {

    return userStorageKey(
        "customPlayEssas"
    );
}


function getSavedCustomPlayEssas() {

    const key =
        getCustomPlayEssaStorageKey();


    if (!key) {

        return [];
    }


    try {

        const saved =
            JSON.parse(
                localStorage.getItem(
                    key
                ) ||
                "[]"
            );


        return Array.isArray(
            saved
        )
            ? saved
            : [];

    } catch (error) {

        console.error(
            "Could not load custom Play ESSAs:",
            error
        );


        return [];
    }
}


function saveCustomPlayEssas(
    essas
) {

    const key =
        getCustomPlayEssaStorageKey();


    if (!key) {

        return;
    }


    localStorage.setItem(
        key,
        JSON.stringify(
            essas
        )
    );
}


/* =========================================================
   CHECK LEVEL 80 CUSTOM ESSA UNLOCK
========================================================= */

function canUseCustomPlayEssas() {

    const playData =
        getSavedPlayData();


    return (
        Number(
            playData.trainerLevel
        ) >=
        CUSTOM_PLAY_ESSA_UNLOCK_LEVEL
    );
}


/* =========================================================
   GET ALL PLAY ESSAS
========================================================= */

function getAllPlayableEssas() {

    const custom =
        getSavedCustomPlayEssas();


    return [

        ...playableEssas,

        ...custom

    ];
}


/* =========================================================
   GET ANY PLAY ESSA BY ID
========================================================= */

function getAnyPlayableEssaById(
    essaId
) {

    return (
        getAllPlayableEssas()
            .find(
                function(essa) {

                    return (
                        String(
                            essa.id
                        ) ===
                        String(
                            essaId
                        )
                    );

                }
            ) ||
        null
    );
}


/* =========================================================
   IS CUSTOM PLAY ESSA
========================================================= */

function isCustomPlayEssa(
    essaId
) {

    return getSavedCustomPlayEssas()
        .some(
            function(essa) {

                return (
                    String(
                        essa.id
                    ) ===
                    String(
                        essaId
                    )
                );

            }
        );
}


/* =========================================================
   CUSTOM ESSA UNLOCK CARD
========================================================= */

function makeCustomPlayEssaUnlockCard() {

    const playData =
        getSavedPlayData();


    const unlocked =
        Number(
            playData.trainerLevel
        ) >=
        CUSTOM_PLAY_ESSA_UNLOCK_LEVEL;


    if (!unlocked) {

        return `

            <div
                style="
                    padding:22px;
                    background:white;
                    border:1px solid #dbe5e7;
                    border-radius:20px;
                    text-align:center;
                    box-shadow:0 4px 14px rgba(0,0,0,.06);
                "
            >

                <div
                    style="
                        font-size:65px;
                        opacity:.45;
                    "
                >
                    🖼️
                </div>


                <h2>
                    Your Own ESSA
                </h2>


                <p
                    style="
                        color:#68777b;
                    "
                >
                    🔒 Unlocks at Trainer Level 80
                </p>


                <p
                    style="
                        color:#68777b;
                        font-size:13px;
                        line-height:1.5;
                    "
                >
                    Reach Level 80 to upload
                    a transparent PNG of your own
                    ESSA and bring them into Play Mode.
                </p>

            </div>

        `;
    }


    return `

        <div
            style="
                padding:22px;
                background:white;
                border:2px solid #4fb5ae;
                border-radius:20px;
                text-align:center;
                box-shadow:0 4px 14px rgba(0,0,0,.06);
            "
        >

            <div
                style="
                    font-size:65px;
                "
            >
                ✨
            </div>


            <h2>
                Custom Play ESSA
            </h2>


            <p
                style="
                    color:#3b9f99;
                    font-weight:bold;
                "
            >
                ⭐ Level 80 Unlocked!
            </p>


            <p
                style="
                    color:#68777b;
                    font-size:13px;
                    line-height:1.5;
                "
            >
                Upload a transparent-background
                PNG of your own ESSA and let them
                live in the ESSAzLife house.
            </p>


            <button
                onclick="
                    showCustomPlayEssaForm()
                "
            >
                + Add My ESSA
            </button>

        </div>

    `;
}


/* =========================================================
   CUSTOM ESSA FORM
========================================================= */

function showCustomPlayEssaForm() {

    if (
        !canUseCustomPlayEssas()
    ) {

        alert(
            "Custom Play ESSAs unlock at Trainer Level 80!"
        );

        return;
    }


    stopPlayHouseTimers();


    resetPageTheme();


    document.querySelector(
        "main"
    ).innerHTML = `

        ${makeAppTabs(
            "Play"
        )}


        <div
            class="essa-form"

            style="
                max-width:750px;
                margin:0 auto;
            "
        >


            <button
                onclick="
                    renderPlayableEssaCollection()
                "
            >
                ← Back to Collection
            </button>


            <h1>
                ✨ Add Your Own Play ESSA
            </h1>


            <p
                style="
                    color:#68777b;
                    line-height:1.6;
                "
            >
                Upload a PNG of your ESSA.

                A transparent background will look
                best because your ESSA will be placed
                directly inside the rooms.
            </p>


            <label>
                ESSA Name
            </label>


            <input
                id="custom-play-essa-name"

                type="text"

                maxlength="40"

                placeholder="Example: Boba"
            >


            <label>
                Transparent PNG
            </label>


            <input
                id="custom-play-essa-image"

                type="file"

                accept="image/png"
            >


            <div
                id="custom-play-essa-preview"

                style="
                    display:none;
                    margin-top:18px;
                    padding:18px;
                    min-height:220px;
                    align-items:center;
                    justify-content:center;
                    background:
                        linear-gradient(
                            45deg,
                            #eeeeee 25%,
                            transparent 25%
                        ),
                        linear-gradient(
                            -45deg,
                            #eeeeee 25%,
                            transparent 25%
                        ),
                        linear-gradient(
                            45deg,
                            transparent 75%,
                            #eeeeee 75%
                        ),
                        linear-gradient(
                            -45deg,
                            transparent 75%,
                            #eeeeee 75%
                        );
                    background-size:24px 24px;
                    background-position:
                        0 0,
                        0 12px,
                        12px -12px,
                        -12px 0px;
                    border:1px solid #dbe5e7;
                    border-radius:20px;
                "
            >

                <img
                    id="custom-play-essa-preview-image"

                    alt="Custom ESSA preview"

                    style="
                        max-width:260px;
                        max-height:260px;
                        object-fit:contain;
                    "
                >

            </div>


            <p
                style="
                    color:#68777b;
                    font-size:13px;
                    line-height:1.5;
                "
            >
                Tip: Crop the image fairly close
                around your ESSA before uploading it.
                Large empty transparent areas can make
                the ESSA look tiny in the room.
            </p>


            <div
                style="
                    display:flex;
                    gap:10px;
                    flex-wrap:wrap;
                    margin-top:22px;
                "
            >

                <button
                    onclick="
                        renderPlayableEssaCollection()
                    "
                >
                    Cancel
                </button>


                <button
                    onclick="
                        saveCustomPlayEssa()
                    "
                >
                    Add to Play Mode 🐾
                </button>

            </div>


        </div>

    `;


    const input =
        document.getElementById(
            "custom-play-essa-image"
        );


    if (input) {

        input.addEventListener(
            "change",
            previewCustomPlayEssaImage
        );
    }
}


/* =========================================================
   PREVIEW CUSTOM ESSA IMAGE
========================================================= */

async function previewCustomPlayEssaImage(
    event
) {

    const file =
        event.target
            ?.files
            ?.[0];


    if (!file) {

        return;
    }


    if (
        file.type !==
        "image/png"
    ) {

        alert(
            "Please choose a PNG image."
        );


        event.target.value =
            "";


        return;
    }


    try {

        const imageData =
            await readImageFile(
                file
            );


        const preview =
            document.getElementById(
                "custom-play-essa-preview"
            );


        const image =
            document.getElementById(
                "custom-play-essa-preview-image"
            );


        if (
            preview &&
            image
        ) {

            image.src =
                imageData;


            preview.style.display =
                "flex";
        }

    } catch (error) {

        console.error(
            error
        );


        alert(
            "That image could not be opened."
        );
    }
}


/* =========================================================
   RESIZE CUSTOM ESSA IMAGE
========================================================= */

function resizeCustomPlayEssaImage(
    imageData
) {

    return new Promise(
        function(
            resolve,
            reject
        ) {

            const image =
                new Image();


            image.onload =
                function() {

                    let width =
                        image.width;


                    let height =
                        image.height;


                    if (
                        width <=
                            CUSTOM_PLAY_ESSA_MAX_IMAGE_SIZE

                        &&

                        height <=
                            CUSTOM_PLAY_ESSA_MAX_IMAGE_SIZE
                    ) {

                        resolve(
                            imageData
                        );

                        return;
                    }


                    const scale =
                        Math.min(
                            CUSTOM_PLAY_ESSA_MAX_IMAGE_SIZE /
                                width,

                            CUSTOM_PLAY_ESSA_MAX_IMAGE_SIZE /
                                height
                        );


                    width =
                        Math.round(
                            width *
                            scale
                        );


                    height =
                        Math.round(
                            height *
                            scale
                        );


                    const canvas =
                        document.createElement(
                            "canvas"
                        );


                    canvas.width =
                        width;


                    canvas.height =
                        height;


                    const context =
                        canvas.getContext(
                            "2d"
                        );


                    context.clearRect(
                        0,
                        0,
                        width,
                        height
                    );


                    context.drawImage(
                        image,
                        0,
                        0,
                        width,
                        height
                    );


                    const resized =
                        canvas.toDataURL(
                            "image/png"
                        );


                    resolve(
                        resized
                    );
                };


            image.onerror =
                function() {

                    reject(
                        new Error(
                            "Could not resize image."
                        )
                    );
                };


            image.src =
                imageData;

        }
    );
}


/* =========================================================
   SAVE CUSTOM PLAY ESSA
========================================================= */

async function saveCustomPlayEssa() {

    if (
        !canUseCustomPlayEssas()
    ) {

        alert(
            "Custom Play ESSAs unlock at Trainer Level 80!"
        );

        return;
    }


    const nameField =
        document.getElementById(
            "custom-play-essa-name"
        );


    const imageField =
        document.getElementById(
            "custom-play-essa-image"
        );


    const name =
        nameField
            ?.value
            ?.trim();


    const file =
        imageField
            ?.files
            ?.[0];


    if (!name) {

        alert(
            "Give your ESSA a name first."
        );

        return;
    }


    if (!file) {

        alert(
            "Choose a transparent PNG of your ESSA."
        );

        return;
    }


    if (
        file.type !==
        "image/png"
    ) {

        alert(
            "Custom Play ESSAs need a PNG image."
        );

        return;
    }


    let imageData;


    try {

        const original =
            await readImageFile(
                file
            );


        imageData =
            await resizeCustomPlayEssaImage(
                original
            );

    } catch (error) {

        console.error(
            error
        );


        alert(
            "That image could not be prepared."
        );

        return;
    }


    const customEssas =
        getSavedCustomPlayEssas();


    const id =
        makeId(
            "custom-play"
        );


    const newEssa = {

        id:
            id,

        name:
            name,

        image:
            imageData,

        fallbackIcon:
            "🐾",

        unlockLevel:
            80,

        custom:
            true,

        createdAt:
            new Date()
                .toISOString()

    };


    customEssas.push(
        newEssa
    );


    try {

        saveCustomPlayEssas(
            customEssas
        );

    } catch (error) {

        console.error(
            error
        );


        alert(
            "Your ESSA could not be saved. Browser storage may be full."
        );

        return;
    }


    const playData =
        getSavedPlayData();


    if (
        !playData
            .unlockedEssaIds
            .includes(
                id
            )
    ) {

        playData
            .unlockedEssaIds
            .push(
                id
            );
    }


    getPlayEssaStats(
        playData,
        id
    );


    savePlayData(
        playData
    );


    const houseData =
        getSavedPlayHouseData();


    houseData
        .essaRooms[
            id
        ] =
        "playroom";


    houseData
        .essaPositions[
            id
        ] = {

            x:
                30 +
                Math.random() *
                40,

            y:
                58 +
                Math.random() *
                18

        };


    savePlayHouseData(
        houseData
    );


    alert(
        `${name} has joined your Play house! 🐾✨`
    );


    renderPlayableEssaCollection();
}


/* =========================================================
   DELETE CUSTOM PLAY ESSA
========================================================= */

function deleteCustomPlayEssa(
    essaId
) {

    if (
        !isCustomPlayEssa(
            essaId
        )
    ) {

        return;
    }


    const essa =
        getAnyPlayableEssaById(
            essaId
        );


    if (!essa) {

        return;
    }


    const confirmed =
        confirm(
            `Remove ${essa.name} from Play Mode?`
        );


    if (!confirmed) {

        return;
    }


    const customEssas =
        getSavedCustomPlayEssas()
            .filter(
                function(item) {

                    return (
                        String(
                            item.id
                        ) !==
                        String(
                            essaId
                        )
                    );

                }
            );


    saveCustomPlayEssas(
        customEssas
    );


    const playData =
        getSavedPlayData();


    playData.unlockedEssaIds =
        playData
            .unlockedEssaIds
            .filter(
                function(id) {

                    return (
                        String(
                            id
                        ) !==
                        String(
                            essaId
                        )
                    );

                }
            );


    if (
        playData.essaStats
    ) {

        delete playData
            .essaStats[
                essaId
            ];
    }


    if (
        String(
            playData.selectedEssaId
        ) ===
        String(
            essaId
        )
    ) {

        playData.selectedEssaId =
            "moocow";
    }


    savePlayData(
        playData
    );


    const houseData =
        getSavedPlayHouseData();


    delete houseData
        .essaRooms[
            essaId
        ];


    delete houseData
        .essaPositions[
            essaId
        ];


    savePlayHouseData(
        houseData
    );


    renderPlayableEssaCollection();
}


/* =========================================================
   CUSTOM-AWARE COLLECTION
========================================================= */

function renderPlayableEssaCollection() {

    resetPageTheme();


    stopPlayHouseTimers();


    const playData =
        getSavedPlayData();


    const customEssas =
        getSavedCustomPlayEssas();


    let cards =
        playableEssas
            .map(
                function(essa) {

                    const unlocked =
                        playData
                            .unlockedEssaIds
                            .includes(
                                essa.id
                            );


                    return `

                        <div
                            style="
                                padding:18px;
                                background:white;
                                border:1px solid #dbe5e7;
                                border-radius:20px;
                                text-align:center;
                                box-shadow:0 4px 14px rgba(0,0,0,.06);
                            "
                        >

                            ${makePlayableEssaVisual(
                                essa,
                                !unlocked
                            )}


                            <h2
                                style="
                                    margin-bottom:5px;
                                "
                            >
                                ${escapeHTML(
                                    essa.name
                                )}
                            </h2>


                            ${
                                unlocked

                                    ? `

                                        <p
                                            style="
                                                color:#3b9f99;
                                                font-weight:bold;
                                            "
                                        >
                                            ✅ Unlocked
                                        </p>


                                        <button
                                            onclick="
                                                focusPlayableEssa(
                                                    '${essa.id}'
                                                )
                                            "
                                        >
                                            Play with
                                            ${escapeHTML(
                                                essa.name
                                            )}
                                        </button>

                                    `

                                    : `

                                        <p
                                            style="
                                                color:#68777b;
                                            "
                                        >
                                            🔒 Unlocks at
                                            Trainer Level
                                            ${essa.unlockLevel}
                                        </p>

                                    `
                            }

                        </div>

                    `;

                }
            )
            .join("");


    customEssas.forEach(
        function(essa) {

            cards += `

                <div
                    style="
                        padding:18px;
                        background:white;
                        border:2px solid #4fb5ae;
                        border-radius:20px;
                        text-align:center;
                        box-shadow:0 4px 14px rgba(0,0,0,.06);
                    "
                >

                    ${makePlayableEssaVisual(
                        essa,
                        false
                    )}


                    <h2
                        style="
                            margin-bottom:5px;
                        "
                    >
                        ${escapeHTML(
                            essa.name
                        )}
                    </h2>


                    <p
                        style="
                            color:#3b9f99;
                            font-weight:bold;
                        "
                    >
                        ✨ Your ESSA
                    </p>


                    <div
                        style="
                            display:flex;
                            gap:8px;
                            justify-content:center;
                            flex-wrap:wrap;
                        "
                    >

                        <button
                            onclick="
                                focusPlayableEssa(
                                    '${essa.id}'
                                )
                            "
                        >
                            Play
                        </button>


                        <button
                            onclick="
                                deleteCustomPlayEssa(
                                    '${essa.id}'
                                )
                            "

                            style="
                                color:#b42318;
                            "
                        >
                            Remove
                        </button>

                    </div>

                </div>

            `;

        }
    );


    cards +=
        makeCustomPlayEssaUnlockCard();


    document.querySelector(
        "main"
    ).innerHTML = `

        ${makeAppTabs(
            "Play"
        )}


        <div
            style="
                max-width:1100px;
                margin:0 auto;
            "
        >

            <button
                onclick="
                    renderPlayRoom()
                "
            >
                ← Back to House
            </button>


            <h1>
                🐾 ESSA Collection
            </h1>


            <p
                style="
                    color:#68777b;
                    line-height:1.5;
                "
            >
                Raise your Trainer Level
                to unlock the official ESSAs.

                At Level 80, you can add
                your own ESSAs to Play Mode.
            </p>


            <div
                style="
                    margin:20px 0 25px 0;
                "
            >
                ${makeTrainerLevelBar(
                    playData
                )}
            </div>


            <div
                style="
                    display:grid;
                    grid-template-columns:
                        repeat(
                            auto-fit,
                            minmax(
                                210px,
                                1fr
                            )
                        );
                    gap:18px;
                "
            >

                ${cards}

            </div>


        </div>

    `;
}


/* =========================================================
   CUSTOM-AWARE HOUSE ESSA LOOKUP
========================================================= */

function getHousePlayableEssaById(
    essaId
) {

    return getAnyPlayableEssaById(
        essaId
    );
}


/* =========================================================
   CUSTOM-AWARE HOUSE RENDER
========================================================= */

function renderPlayRoom() {

    resetPageTheme();


    applyPlayNeedsDecay();


    const playData =
        getSavedPlayData();


    const houseData =
        getSavedPlayHouseData();


    const room =
        getPlayRoomById(
            houseData.currentRoomId
        );


    const allEssas =
        getAllPlayableEssas();


    playData
        .unlockedEssaIds
        .forEach(
            function(essaId) {

                const essa =
                    getAnyPlayableEssaById(
                        essaId
                    );


                if (!essa) {

                    return;
                }


                getPlayEssaStats(
                    playData,
                    essaId
                );


                if (
                    !houseData
                        .essaRooms[
                            essaId
                        ]
                ) {

                    houseData
                        .essaRooms[
                            essaId
                        ] =
                        "playroom";
                }

            }
        );


    savePlayData(
        playData
    );


    savePlayHouseData(
        houseData
    );


    const roomEssas =
        allEssas
            .filter(
                function(essa) {

                    return (

                        playData
                            .unlockedEssaIds
                            .includes(
                                essa.id
                            )

                        &&

                        (
                            houseData
                                .essaRooms[
                                    essa.id
                                ] ||
                            "playroom"
                        ) ===
                        room.id

                    );

                }
            );


    let essasHTML =
        "";


    roomEssas.forEach(
        function(
            essa,
            index
        ) {

            const stats =
                getPlayEssaStats(
                    playData,
                    essa.id
                );


            const position =
                getPlayHouseEssaPosition(
                    houseData,
                    essa.id,
                    index
                );


            essasHTML +=
                makePlayHouseEssa(
                    essa,
                    stats,
                    position
                );

        }
    );

    document.querySelector(
        "main"
    ).innerHTML = `

        ${makeAppTabs(
            "Play"
        )}


        <div
            style="
                max-width:1150px;
                margin:0 auto;
            "
        >

            <div
                style="
                    display:flex;
                    justify-content:center;
                    margin-bottom:12px;
                "
            >
                ${makeTrainerLevelBar(
                    playData
                )}
            </div>


            <div
                style="
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    gap:10px;
                    margin-bottom:12px;
                "
            >

                <button
                    onclick="
                        changePlayRoom(-1)
                    "

                    style="
                        width:44px;
                        height:44px;
                        padding:0;
                        border-radius:50%;
                        font-size:20px;
                    "
                >
                    ⬅️
                </button>


                <button
                    onclick="
                        showPlayRoomPicker()
                    "

                    style="
                        min-width:180px;
                        padding:11px 18px;
                        border-radius:999px;
                        font-size:16px;
                        font-weight:bold;
                    "
                >
                    ${room.icon}
                    ${escapeHTML(
                        room.name
                    )}
                </button>


                <button
                    onclick="
                        changePlayRoom(1)
                    "

                    style="
                        width:44px;
                        height:44px;
                        padding:0;
                        border-radius:50%;
                        font-size:20px;
                    "
                >
                    ➡️
                </button>

            </div>


            <div
                id="play-house-room"

                data-room-id="${room.id}"

                style="
                    position:relative;
                    width:100%;
                    min-height:660px;
                    overflow:hidden;
                    border:1px solid #dbe5e7;
                    border-radius:28px;
                    background-color:#eaf6f4;
                    background-image:url('${room.background}');
                    background-size:cover;
                    background-position:center;
                    box-shadow:0 8px 28px rgba(0,0,0,.13);
                "
            >

                <div
                    style="
                        position:absolute;
                        top:16px;
                        right:16px;
                        z-index:120;
                        display:flex;
                        gap:8px;
                        flex-wrap:wrap;
                        justify-content:flex-end;
                    "
                >

                    <button
                        onclick="
                            renderPlayableEssaCollection()
                        "

                        style="
                            background:rgba(255,255,255,.92);
                        "
                    >
                        🐾 Collection
                    </button>


                    <button
                        onclick="
                            showPlayHouseStatus()
                        "

                        style="
                            background:rgba(255,255,255,.92);
                        "
                    >
                        💚 Needs
                    </button>

                </div>


                <div
                    id="play-message"

                    style="
                        position:absolute;
                        top:80px;
                        left:50%;
                        transform:translateX(-50%);
                        max-width:min(80%,500px);
                        padding:9px 14px;
                        background:rgba(255,255,255,.95);
                        border-radius:999px;
                        color:#26343b;
                        font-weight:bold;
                        text-align:center;
                        opacity:0;
                        pointer-events:none;
                        transition:opacity .2s ease;
                        z-index:150;
                    "
                ></div>


                ${essasHTML}


                ${makePlayRoomSpecialControls(
                    room
                )}

            </div>


            <p
                style="
                    margin-top:10px;
                    text-align:center;
                    color:#68777b;
                    font-size:13px;
                "
            >
                ESSAs can wander around
                the house on their own.

                Tap one to play with them.
            </p>

        </div>

    `;


    startPlayHouseTimers();
}


/* =========================================================
   CUSTOM-AWARE FOCUS
========================================================= */

function focusPlayableEssa(
    essaId
) {

    applyPlayNeedsDecay();


    const playData =
        getSavedPlayData();


    const essa =
        getAnyPlayableEssaById(
            essaId
        );


    if (!essa) {

        return;
    }


    if (
        !playData
            .unlockedEssaIds
            .includes(
                essa.id
            )
    ) {

        if (
            essa.custom
        ) {

            alert(
                "That custom ESSA is not available."
            );

        } else {

            alert(
                `${essa.name} unlocks at Trainer Level ${essa.unlockLevel}.`
            );
        }


        return;
    }


    playData.selectedEssaId =
        essa.id;


    getPlayEssaStats(
        playData,
        essa.id
    );


    savePlayData(
        playData
    );


    stopPlayHouseTimers();


    renderPlayableEssaFocus(
        essa.id
    );
}


/* =========================================================
   CUSTOM-AWARE FOCUS SCREEN
========================================================= */

function renderPlayableEssaFocus(
    essaId
) {

    resetPageTheme();


    stopPlayHouseTimers();


    applyPlayNeedsDecay();


    const playData =
        getSavedPlayData();


    const houseData =
        getSavedPlayHouseData();


    const essa =
        getAnyPlayableEssaById(
            essaId
        );


    if (
        !essa ||
        !playData
            .unlockedEssaIds
            .includes(
                essa.id
            )
    ) {

        renderPlayRoom();

        return;
    }


    const stats =
        getPlayEssaStats(
            playData,
            essa.id
        );


    const room =
        getEssaRoom(
            houseData,
            essa.id
        );


    const statusMessage =
        getEssaNeedMessage(
            essa,
            stats
        );


    document.querySelector(
        "main"
    ).innerHTML = `

        ${makeAppTabs(
            "Play"
        )}


        <div
            style="
                max-width:1000px;
                margin:0 auto;
            "
        >

            <div
                style="
                    position:relative;
                    min-height:680px;
                    overflow:hidden;
                    border-radius:28px;
                    border:1px solid #dbe5e7;
                    box-shadow:0 8px 28px rgba(0,0,0,.12);
                    background-color:#eaf6f4;
                    background-image:
                        linear-gradient(
                            rgba(255,255,255,.08),
                            rgba(255,255,255,.08)
                        ),
                        url('${room.background}');
                    background-size:cover;
                    background-position:center;
                "
            >

                <div
                    style="
                        position:absolute;
                        top:18px;
                        left:18px;
                        z-index:30;
                    "
                >

                    <button
                        onclick="
                            renderPlayRoom()
                        "

                        style="
                            background:rgba(255,255,255,.94);
                        "
                    >
                        ← ${room.icon}
                        ${escapeHTML(
                            room.name
                        )}
                    </button>

                </div>


                <div
                    style="
                        position:absolute;
                        top:18px;
                        left:50%;
                        transform:translateX(-50%);
                        width:min(68%,620px);
                        z-index:20;
                    "
                >
                    ${makeTrainerLevelBar(
                        playData
                    )}
                </div>


                <div
                    style="
                        position:absolute;
                        left:18px;
                        top:115px;
                        width:205px;
                        padding:14px;
                        background:rgba(255,255,255,.93);
                        border-radius:18px;
                        box-shadow:0 4px 16px rgba(0,0,0,.12);
                        z-index:25;
                    "
                >

                    ${makePlayStatBar(
                        "🍎",
                        "Food",
                        stats.food
                    )}

                    ${makePlayStatBar(
                        "💧",
                        "Drink",
                        stats.water
                    )}

                    ${makePlayStatBar(
                        "🛁",
                        "Clean",
                        stats.cleanliness
                    )}

                    ${makePlayStatBar(
                        "💚",
                        "Happy",
                        stats.happiness
                    )}

                </div>


                <div
                    style="
                        position:absolute;
                        top:105px;
                        left:50%;
                        transform:translateX(-50%);
                        width:min(52%,430px);
                        z-index:10;
                        text-align:center;
                    "
                >

                    ${
                        statusMessage

                            ? `

                                <div
                                    style="
                                        display:inline-block;
                                        margin-bottom:-6px;
                                        padding:10px 15px;
                                        background:rgba(255,255,255,.96);
                                        border-radius:18px;
                                        font-size:14px;
                                        font-weight:bold;
                                        box-shadow:0 3px 12px rgba(0,0,0,.12);
                                    "
                                >
                                    ${escapeHTML(
                                        statusMessage
                                    )}
                                </div>

                            `

                            : ""
                    }


                    ${makePlayableEssaVisual(
                        essa,
                        false,
                        "focus"
                    )}


                    <div
                        style="
                            display:inline-block;
                            padding:7px 16px;
                            margin-top:-5px;
                            background:rgba(255,255,255,.92);
                            border-radius:999px;
                            font-size:22px;
                            font-weight:bold;
                            box-shadow:0 3px 12px rgba(0,0,0,.12);
                        "
                    >
                        ${escapeHTML(
                            essa.name
                        )}
                    </div>

                </div>


                <div
                    id="play-message"

                    style="
                        position:absolute;
                        left:50%;
                        bottom:205px;
                        transform:translateX(-50%);
                        min-width:220px;
                        max-width:70%;
                        padding:10px 16px;
                        background:rgba(255,255,255,.94);
                        border-radius:999px;
                        font-weight:bold;
                        color:#26343b;
                        text-align:center;
                        opacity:0;
                        pointer-events:none;
                        transition:opacity .2s ease;
                        z-index:40;
                    "
                ></div>


                <div
                    style="
                        position:absolute;
                        left:50%;
                        bottom:18px;
                        transform:translateX(-50%);
                        width:calc(100% - 36px);
                        display:grid;
                        grid-template-columns:repeat(4,1fr);
                        gap:12px;
                        z-index:30;
                    "
                >

                    <button
                        onclick="
                            showPlayFoodMenu(
                                '${essa.id}'
                            )
                        "
                    >
                        <div
                            style="
                                font-size:32px;
                            "
                        >
                            🍎
                        </div>

                        Food
                    </button>


                    <button
                        onclick="
                            showPlayDrinkMenu(
                                '${essa.id}'
                            )
                        "
                    >
                        <div
                            style="
                                font-size:32px;
                            "
                        >
                            🥤
                        </div>

                        Drinks
                    </button>


                    <button
                        onclick="
                            showPlayBathMenu(
                                '${essa.id}'
                            )
                        "
                    >
                        <div
                            style="
                                font-size:32px;
                            "
                        >
                            🛁
                        </div>

                        Bathe
                    </button>


                    <button
                        onclick="
                            petPlayableEssa(
                                '${essa.id}'
                            )
                        "
                    >
                        <div
                            style="
                                font-size:32px;
                            "
                        >
                            💚
                        </div>

                        Pet
                    </button>

                </div>

            </div>

        </div>

    `;
}


/* =========================================================
   CUSTOM-AWARE FOOD MENU
========================================================= */

function showPlayFoodMenu(
    essaId
) {

    const essa =
        getAnyPlayableEssaById(
            essaId
        );


    if (!essa) {

        return;
    }


    const itemsHTML =
        playFoods
            .map(
                function(food) {

                    return `

                        <button
                            onclick="
                                givePlayFood(
                                    '${essa.id}',
                                    '${food.id}'
                                )
                            "

                            style="
                                padding:15px 8px;
                                border:1px solid #dbe5e7;
                                border-radius:16px;
                                background:white;
                                cursor:pointer;
                            "
                        >

                            <div
                                style="
                                    font-size:40px;
                                "
                            >
                                ${food.icon}
                            </div>


                            <strong>
                                ${escapeHTML(
                                    food.name
                                )}
                            </strong>

                        </button>

                    `;

                }
            )
            .join("");


    document.querySelector(
        "main"
    ).innerHTML =
        makePlayItemMenuShell(
            essa,
            "🍎 Choose Food",
            `What would you like to feed ${escapeHTML(
                essa.name
            )}?`,
            itemsHTML
        );
}


/* =========================================================
   CUSTOM-AWARE DRINK MENU
========================================================= */

function showPlayDrinkMenu(
    essaId
) {

    const essa =
        getAnyPlayableEssaById(
            essaId
        );


    if (!essa) {

        return;
    }


    const itemsHTML =
        playDrinks
            .map(
                function(drink) {

                    return `

                        <button
                            onclick="
                                givePlayDrink(
                                    '${essa.id}',
                                    '${drink.id}'
                                )
                            "

                            style="
                                padding:15px 8px;
                                border:1px solid #dbe5e7;
                                border-radius:16px;
                                background:white;
                                cursor:pointer;
                            "
                        >

                            <div
                                style="
                                    font-size:40px;
                                "
                            >
                                ${drink.icon}
                            </div>


                            <strong>
                                ${escapeHTML(
                                    drink.name
                                )}
                            </strong>

                        </button>

                    `;

                }
            )
            .join("");


    document.querySelector(
        "main"
    ).innerHTML =
        makePlayItemMenuShell(
            essa,
            "🥤 Choose a Drink",
            `What would ${escapeHTML(
                essa.name
            )} like to drink?`,
            itemsHTML
        );
}


/* =========================================================
   CUSTOM-AWARE BATH MENU
========================================================= */

function showPlayBathMenu(
    essaId
) {

    const essa =
        getAnyPlayableEssaById(
            essaId
        );


    if (!essa) {

        return;
    }


    const itemsHTML =
        playSoaps
            .map(
                function(soap) {

                    return `

                        <button
                            onclick="
                                bathePlayableEssa(
                                    '${essa.id}',
                                    '${soap.id}'
                                )
                            "

                            style="
                                padding:15px 8px;
                                border:1px solid #dbe5e7;
                                border-radius:16px;
                                background:white;
                                cursor:pointer;
                            "
                        >

                            <div
                                style="
                                    width:48px;
                                    height:48px;
                                    margin:0 auto 8px auto;
                                    border-radius:14px;
                                    background:${soap.color};
                                    border:3px solid white;
                                    box-shadow:0 0 0 1px #cbd9dc;
                                "
                            ></div>


                            <strong>
                                ${escapeHTML(
                                    soap.name
                                )}
                            </strong>

                        </button>

                    `;

                }
            )
            .join("");


    document.querySelector(
        "main"
    ).innerHTML =
        makePlayItemMenuShell(
            essa,
            "🛁 Choose Soap",
            `Pick a soap color for ${escapeHTML(
                essa.name
            )}'s bath.`,
            itemsHTML
        );
}


/* =========================================================
   CUSTOM-AWARE GIVE FOOD
========================================================= */

function givePlayFood(
    essaId,
    foodId
) {

    const playData =
        getSavedPlayData();


    const essa =
        getAnyPlayableEssaById(
            essaId
        );


    const food =
        playFoods.find(
            function(item) {

                return (
                    item.id ===
                    foodId
                );

            }
        );


    if (
        !essa ||
        !food
    ) {

        return;
    }


    const stats =
        getPlayEssaStats(
            playData,
            essa.id
        );


    stats.food =
        normalizePlayStatValue(
            stats.food +
            food.food
        );


    stats.happiness =
        normalizePlayStatValue(
            stats.happiness +
            food.happiness
        );


    stats.lastFoodId =
        food.id;


    const result =
        addTrainerXP(
            playData,
            food.xp
        );


    savePlayData(
        playData
    );


    renderPlayableEssaFocus(
        essa.id
    );


    showPlayMessage(
        `${food.icon} ${essa.name} enjoyed the ${food.name}! +${food.xp} XP`
    );


    showPlayUnlockMessages(
        result
    );
}


/* =========================================================
   CUSTOM-AWARE GIVE DRINK
========================================================= */

function givePlayDrink(
    essaId,
    drinkId
) {

    const playData =
        getSavedPlayData();


    const essa =
        getAnyPlayableEssaById(
            essaId
        );


    const drink =
        playDrinks.find(
            function(item) {

                return (
                    item.id ===
                    drinkId
                );

            }
        );


    if (
        !essa ||
        !drink
    ) {

        return;
    }


    const stats =
        getPlayEssaStats(
            playData,
            essa.id
        );


    stats.water =
        normalizePlayStatValue(
            stats.water +
            drink.water
        );


    stats.happiness =
        normalizePlayStatValue(
            stats.happiness +
            drink.happiness
        );


    stats.lastDrinkId =
        drink.id;


    const result =
        addTrainerXP(
            playData,
            drink.xp
        );


    savePlayData(
        playData
    );


    renderPlayableEssaFocus(
        essa.id
    );


    showPlayMessage(
        `${drink.icon} ${essa.name} had some ${drink.name}! +${drink.xp} XP`
    );


    showPlayUnlockMessages(
        result
    );
}


/* =========================================================
   CUSTOM-AWARE BATHE
========================================================= */

function bathePlayableEssa(
    essaId,
    soapId
) {

    const playData =
        getSavedPlayData();


    const essa =
        getAnyPlayableEssaById(
            essaId
        );


    const soap =
        playSoaps.find(
            function(item) {

                return (
                    item.id ===
                    soapId
                );

            }
        );


    if (
        !essa ||
        !soap
    ) {

        return;
    }


    const stats =
        getPlayEssaStats(
            playData,
            essa.id
        );


    stats.cleanliness =
        normalizePlayStatValue(
            stats.cleanliness +
            soap.cleanliness
        );


    stats.happiness =
        normalizePlayStatValue(
            stats.happiness +
            4
        );


    stats.lastSoapId =
        soap.id;


    const result =
        addTrainerXP(
            playData,
            soap.xp
        );


    savePlayData(
        playData
    );


    renderPlayableEssaFocus(
        essa.id
    );


    showPlayMessage(
        `🫧 ${essa.name} is squeaky clean with ${soap.name}! +${soap.xp} XP`
    );


    showPlayUnlockMessages(
        result
    );
}


/* =========================================================
   CUSTOM-AWARE PET
========================================================= */

function petPlayableEssa(
    essaId
) {

    const playData =
        getSavedPlayData();


    const essa =
        getAnyPlayableEssaById(
            essaId
        );


    if (!essa) {

        return;
    }


    const stats =
        getPlayEssaStats(
            playData,
            essa.id
        );


    stats.happiness =
        normalizePlayStatValue(
            stats.happiness +
            12
        );


    const result =
        addTrainerXP(
            playData,
            4
        );


    savePlayData(
        playData
    );


    renderPlayableEssaFocus(
        essa.id
    );


    showPlayMessage(
        `💚 ${essa.name} loved the pets! +4 XP`
    );


    showPlayUnlockMessages(
        result
    );
}


/* =========================================================
   CUSTOM-AWARE NEED BUBBLES
========================================================= */

function refreshPlayHouseNeedBubbles() {

    const playData =
        getSavedPlayData();


    document
        .querySelectorAll(
            "[data-play-house-essa]"
        )
        .forEach(
            function(wrapper) {

                const essaId =
                    wrapper
                        .dataset
                        .playHouseEssa;


                const essa =
                    getAnyPlayableEssaById(
                        essaId
                    );


                if (!essa) {

                    return;
                }


                const stats =
                    getPlayEssaStats(
                        playData,
                        essa.id
                    );


                const oldBubble =
                    wrapper.querySelector(
                        ".play-house-speech"
                    );


                if (oldBubble) {

                    oldBubble.remove();
                }


                const bubbleHTML =
                    makeEssaNeedBubble(
                        essa,
                        stats
                    );


                if (!bubbleHTML) {

                    return;
                }


                wrapper.insertAdjacentHTML(
                    "afterbegin",
                    bubbleHTML
                );

            }
        );
}


/* =========================================================
   CUSTOM-AWARE ROOM MOVEMENT
========================================================= */

function moveEssasBetweenRooms() {

    const playData =
        getSavedPlayData();


    const houseData =
        getSavedPlayHouseData();


    let changed =
        false;


    playData
        .unlockedEssaIds
        .forEach(
            function(essaId) {

                const essa =
                    getAnyPlayableEssaById(
                        essaId
                    );


                if (!essa) {

                    return;
                }


                if (
                    Math.random() >
                    0.38
                ) {

                    return;
                }


                const destination =
                    chooseEssaDestinationRoom(
                        essaId
                    );


                if (!destination) {

                    return;
                }


                const current =
                    houseData
                        .essaRooms[
                            essaId
                        ] ||
                    "playroom";


                if (
                    destination ===
                    current
                ) {

                    return;
                }


                houseData
                    .essaRooms[
                        essaId
                    ] =
                    destination;


                houseData
                    .essaPositions[
                        essaId
                    ] = {

                        x:
                            14 +
                            Math.random() *
                            72,

                        y:
                            48 +
                            Math.random() *
                            34

                    };


                changed =
                    true;

            }
        );


    if (!changed) {

        return;
    }


    savePlayHouseData(
        houseData
    );


    if (
        document.getElementById(
            "play-house-room"
        )
    ) {

        renderPlayRoom();
    }
}


/* =========================================================
   CUSTOM-AWARE NEED DECAY
========================================================= */

function applyPlayNeedsDecay() {

    const playData =
        getSavedPlayData();


    const houseData =
        getSavedPlayHouseData();


    const now =
        Date.now();


    let lastUpdate =
        Number(
            houseData.lastNeedUpdate
        ) ||
        now;


    if (
        lastUpdate >
        now
    ) {

        lastUpdate =
            now;
    }


    let elapsedMilliseconds =
        now -
        lastUpdate;


    const maxMilliseconds =
        PLAY_MAX_OFFLINE_DECAY_HOURS *
        60 *
        60 *
        1000;


    elapsedMilliseconds =
        Math.min(
            elapsedMilliseconds,
            maxMilliseconds
        );


    const intervalMilliseconds =
        PLAY_NEED_INTERVAL_MINUTES *
        60 *
        1000;


    const intervalsPassed =
        elapsedMilliseconds /
        intervalMilliseconds;


    if (
        intervalsPassed <=
        0
    ) {

        return;
    }


    let changed =
        false;


    playData
        .unlockedEssaIds
        .forEach(
            function(essaId) {

                const essa =
                    getAnyPlayableEssaById(
                        essaId
                    );


                if (!essa) {

                    return;
                }


                const stats =
                    getPlayEssaStats(
                        playData,
                        essaId
                    );


                stats.food =
                    normalizePlayStatValue(
                        stats.food -
                        (
                            PLAY_NEED_DECAY.food *
                            intervalsPassed
                        )
                    );


                stats.water =
                    normalizePlayStatValue(
                        stats.water -
                        (
                            PLAY_NEED_DECAY.water *
                            intervalsPassed
                        )
                    );


                stats.cleanliness =
                    normalizePlayStatValue(
                        stats.cleanliness -
                        (
                            PLAY_NEED_DECAY.cleanliness *
                            intervalsPassed
                        )
                    );


                stats.happiness =
                    normalizePlayStatValue(
                        stats.happiness -
                        (
                            PLAY_NEED_DECAY.happiness *
                            intervalsPassed
                        )
                    );


                changed =
                    true;

            }
        );


    houseData.lastNeedUpdate =
        now;


    savePlayHouseData(
        houseData
    );


    if (changed) {

        savePlayData(
            playData
        );
    }
}


/* =========================================================
   ESSATWIST
========================================================= */

const ESSATWIST_BOARD_SIZE =
    6;


const ESSATWIST_STARTING_MOVES =
    20;


let essaTwistState =
    null;


/* =========================================================
   ESSATWIST GEM PETS
========================================================= */

function getESSATwistPets() {

    /*
        The official eight are always
        available as ESSATwist gems.

        Once users create custom Play ESSAs,
        those can appear as bonus gems too.
    */

    return getAllPlayableEssas();
}


/* =========================================================
   RANDOM ESSATWIST GEM
========================================================= */

function makeRandomESSATwistGem() {

    const pets =
        getESSATwistPets();


    if (
        pets.length ===
        0
    ) {

        return null;
    }


    const pet =
        pets[
            Math.floor(
                Math.random() *
                pets.length
            )
        ];


    return {

        petId:
            pet.id

    };
}


/* =========================================================
   GET ESSATWIST PET
========================================================= */

function getESSATwistPetById(
    petId
) {

    return (
        getESSATwistPets()
            .find(
                function(pet) {

                    return (
                        String(
                            pet.id
                        ) ===
                        String(
                            petId
                        )
                    );

                }
            ) ||
        null
    );
}


/* =========================================================
   CREATE ESSATWIST BOARD
========================================================= */

function createESSATwistBoard() {

    const board =
        [];


    for (
        let row = 0;
        row <
        ESSATWIST_BOARD_SIZE;
        row++
    ) {

        const boardRow =
            [];


        for (
            let column = 0;
            column <
            ESSATWIST_BOARD_SIZE;
            column++
        ) {

            let gem =
                makeRandomESSATwistGem();


            let attempts =
                0;


            while (
                wouldCreateStartingMatch(
                    board,
                    boardRow,
                    row,
                    column,
                    gem
                )

                &&

                attempts <
                50
            ) {

                gem =
                    makeRandomESSATwistGem();


                attempts++;
            }


            boardRow.push(
                gem
            );
        }


        board.push(
            boardRow
        );
    }


    return board;
}


/* =========================================================
   PREVENT STARTING MATCHES
========================================================= */

function wouldCreateStartingMatch(
    board,
    currentRow,
    row,
    column,
    gem
) {

    if (!gem) {

        return false;
    }


    if (
        column >=
        2
    ) {

        const first =
            currentRow[
                column -
                1
            ];


        const second =
            currentRow[
                column -
                2
            ];


        if (
            first &&
            second &&
            first.petId ===
                gem.petId &&
            second.petId ===
                gem.petId
        ) {

            return true;
        }
    }


    if (
        row >=
        2
    ) {

        const first =
            board[
                row -
                1
            ]
            ?.[column];


        const second =
            board[
                row -
                2
            ]
            ?.[column];


        if (
            first &&
            second &&
            first.petId ===
                gem.petId &&
            second.petId ===
                gem.petId
        ) {

            return true;
        }
    }


    return false;
}


/* =========================================================
   OPEN ESSATWIST
========================================================= */

function openESSATwist() {

    stopPlayHouseTimers();


    essaTwistState = {

        board:
            createESSATwistBoard(),

        selected:
            null,

        moves:
            ESSATWIST_STARTING_MOVES,

        score:
            0,

        combo:
            1,

        busy:
            false

    };


    renderESSATwist();
}


/* =========================================================
   RENDER ESSATWIST
========================================================= */

function renderESSATwist() {

    if (
        !essaTwistState
    ) {

        openESSATwist();

        return;
    }


    const boardHTML =
        essaTwistState
            .board
            .map(
                function(
                    row,
                    rowIndex
                ) {

                    return row
                        .map(
                            function(
                                gem,
                                columnIndex
                            ) {

                                const pet =
                                    gem
                                        ? getESSATwistPetById(
                                            gem.petId
                                        )
                                        : null;


                                const selected =
                                    essaTwistState
                                        .selected &&
                                    essaTwistState
                                        .selected
                                        .row ===
                                        rowIndex &&
                                    essaTwistState
                                        .selected
                                        .column ===
                                        columnIndex;


                                if (!pet) {

                                    return `

                                        <div
                                            style="
                                                aspect-ratio:1/1;
                                            "
                                        ></div>

                                    `;
                                }


                                return `

                                    <button
                                        onclick="
                                            selectESSATwistGem(
                                                ${rowIndex},
                                                ${columnIndex}
                                            )
                                        "

                                        style="
                                            aspect-ratio:1/1;
                                            padding:4px;
                                            overflow:hidden;
                                            border:
                                                ${
                                                    selected
                                                        ? "3px solid #4fb5ae"
                                                        : "2px solid rgba(255,255,255,.8)"
                                                };
                                            border-radius:14px;
                                            background:
                                                rgba(
                                                    255,
                                                    255,
                                                    255,
                                                    .88
                                                );
                                            cursor:pointer;
                                            box-shadow:
                                                0
                                                2px
                                                8px
                                                rgba(
                                                    0,
                                                    0,
                                                    0,
                                                    .12
                                                );
                                        "
                                    >

                                        <img
                                            src="${pet.image}"

                                            alt="${escapeHTML(
                                                pet.name
                                            )}"

                                            onerror="
                                                this.style.display='none';
                                                this.nextElementSibling.style.display='flex';
                                            "

                                            style="
                                                width:100%;
                                                height:100%;
                                                object-fit:contain;
                                            "
                                        >


                                        <div
                                            style="
                                                display:none;
                                                width:100%;
                                                height:100%;
                                                align-items:center;
                                                justify-content:center;
                                                font-size:28px;
                                            "
                                        >
                                            ${pet.fallbackIcon}
                                        </div>

                                    </button>

                                `;

                            }
                        )
                        .join("");

                }
            )
            .join("");


    document.querySelector(
        "main"
    ).innerHTML = `

        ${makeAppTabs(
            "Play"
        )}


        <div
            style="
                max-width:760px;
                margin:0 auto;
                text-align:center;
            "
        >

            <button
                onclick="
                    goToPlayRoom(
                        'arcade'
                    )
                "

                style="
                    float:left;
                "
            >
                ← Arcade
            </button>


            <div
                style="
                    clear:both;
                "
            ></div>


            <h1>
                💎 ESSATwist
            </h1>


            <p
                style="
                    color:#68777b;
                "
            >
                Swap neighboring ESSAs
                and match 3 or more!
            </p>


            <div
                style="
                    display:flex;
                    justify-content:center;
                    gap:14px;
                    flex-wrap:wrap;
                    margin-bottom:18px;
                "
            >

                <div
                    style="
                        padding:9px 15px;
                        background:white;
                        border:1px solid #dbe5e7;
                        border-radius:999px;
                        font-weight:bold;
                    "
                >
                    🎯 Score:
                    ${essaTwistState.score}
                </div>


                <div
                    style="
                        padding:9px 15px;
                        background:white;
                        border:1px solid #dbe5e7;
                        border-radius:999px;
                        font-weight:bold;
                    "
                >
                    🔄 Moves:
                    ${essaTwistState.moves}
                </div>

            </div>


            <div
                style="
                    width:min(100%,620px);
                    margin:0 auto;
                    display:grid;
                    grid-template-columns:
                        repeat(
                            ${ESSATWIST_BOARD_SIZE},
                            1fr
                        );
                    gap:6px;
                    padding:12px;
                    box-sizing:border-box;
                    background:
                        rgba(
                            79,
                            181,
                            174,
                            .15
                        );
                    border:1px solid #b9d6d3;
                    border-radius:24px;
                "
            >
                ${boardHTML}
            </div>


            <button
                onclick="
                    restartESSATwist()
                "

                style="
                    margin-top:18px;
                "
            >
                Restart
            </button>

        </div>

    `;
}


/* =========================================================
   SELECT ESSATWIST GEM
========================================================= */

function selectESSATwistGem(
    row,
    column
) {

    if (
        !essaTwistState ||
        essaTwistState.busy
    ) {

        return;
    }


    if (
        !essaTwistState.selected
    ) {

        essaTwistState.selected = {

            row:
                row,

            column:
                column

        };


        renderESSATwist();

        return;
    }


    const first =
        essaTwistState.selected;


    const second = {

        row:
            row,

        column:
            column

    };


    if (
        first.row ===
            second.row &&
        first.column ===
            second.column
    ) {

        essaTwistState.selected =
            null;


        renderESSATwist();

        return;
    }


    if (
        !areESSATwistGemsAdjacent(
            first,
            second
        )
    ) {

        essaTwistState.selected =
            second;


        renderESSATwist();

        return;
    }


    essaTwistState.selected =
        null;


    tryESSATwistSwap(
        first,
        second
    );
}


/* =========================================================
   CHECK ADJACENCY
========================================================= */

function areESSATwistGemsAdjacent(
    first,
    second
) {

    const rowDifference =
        Math.abs(
            first.row -
            second.row
        );


    const columnDifference =
        Math.abs(
            first.column -
            second.column
        );


    return (
        rowDifference +
        columnDifference
    ) ===
    1;
}


/* =========================================================
   SWAP GEMS
========================================================= */

function swapESSATwistGems(
    first,
    second
) {

    const board =
        essaTwistState.board;


    const temporary =
        board[
            first.row
        ][
            first.column
        ];


    board[
        first.row
    ][
        first.column
    ] =
        board[
            second.row
        ][
            second.column
        ];


    board[
        second.row
    ][
        second.column
    ] =
        temporary;
}


/* =========================================================
   TRY SWAP
========================================================= */

async function tryESSATwistSwap(
    first,
    second
) {

    if (
        !essaTwistState ||
        essaTwistState.busy
    ) {

        return;
    }


    essaTwistState.busy =
        true;


    swapESSATwistGems(
        first,
        second
    );


    const matches =
        findESSATwistMatches();


    if (
        matches.length ===
        0
    ) {

        swapESSATwistGems(
            first,
            second
        );


        essaTwistState.busy =
            false;


        renderESSATwist();

        return;
    }


    essaTwistState.moves =
        Math.max(
            0,
            essaTwistState.moves -
            1
        );


    essaTwistState.combo =
        1;


    await resolveESSATwistMatches();


    essaTwistState.busy =
        false;


    if (
        essaTwistState.moves <=
        0
    ) {

        finishESSATwistGame();

        return;
    }


    renderESSATwist();
}


/* =========================================================
   FIND MATCHES
========================================================= */

function findESSATwistMatches() {

    if (
        !essaTwistState
    ) {

        return [];
    }


    const board =
        essaTwistState.board;


    const matches =
        new Set();


    for (
        let row = 0;
        row <
        ESSATWIST_BOARD_SIZE;
        row++
    ) {

        let runStart =
            0;


        for (
            let column = 1;
            column <=
            ESSATWIST_BOARD_SIZE;
            column++
        ) {

            const previous =
                board[
                    row
                ][
                    column -
                    1
                ];


            const current =
                column <
                ESSATWIST_BOARD_SIZE

                    ? board[
                        row
                    ][
                        column
                    ]

                    : null;


            if (
                previous &&
                current &&
                previous.petId ===
                    current.petId
            ) {

                continue;
            }


            const runLength =
                column -
                runStart;


            if (
                runLength >=
                3
            ) {

                for (
                    let index =
                        runStart;

                    index <
                        column;

                    index++
                ) {

                    matches.add(
                        `${row},${index}`
                    );
                }
            }


            runStart =
                column;
        }
    }


    for (
        let column = 0;
        column <
        ESSATWIST_BOARD_SIZE;
        column++
    ) {

        let runStart =
            0;


        for (
            let row = 1;
            row <=
            ESSATWIST_BOARD_SIZE;
            row++
        ) {

            const previous =
                board[
                    row -
                    1
                ][
                    column
                ];


            const current =
                row <
                ESSATWIST_BOARD_SIZE

                    ? board[
                        row
                    ][
                        column
                    ]

                    : null;


            if (
                previous &&
                current &&
                previous.petId ===
                    current.petId
            ) {

                continue;
            }


            const runLength =
                row -
                runStart;


            if (
                runLength >=
                3
            ) {

                for (
                    let index =
                        runStart;

                    index <
                        row;

                    index++
                ) {

                    matches.add(
                        `${index},${column}`
                    );
                }
            }


            runStart =
                row;
        }
    }


    return Array
        .from(
            matches
        )
        .map(
            function(value) {

                const parts =
                    value
                        .split(
                            ","
                        );


                return {

                    row:
                        Number(
                            parts[0]
                        ),

                    column:
                        Number(
                            parts[1]
                        )

                };

            }
        );
}


/* =========================================================
   RESOLVE MATCHES + CASCADES
========================================================= */

async function resolveESSATwistMatches() {

    while (true) {

        const matches =
            findESSATwistMatches();


        if (
            matches.length ===
            0
        ) {

            break;
        }


        const clearedCount =
            matches.length;


        const gainedScore =
            clearedCount *
            10 *
            essaTwistState.combo;


        essaTwistState.score +=
            gainedScore;


        awardESSATwistXP(
            clearedCount
        );


        matches.forEach(
            function(position) {

                essaTwistState
                    .board[
                        position.row
                    ][
                        position.column
                    ] =
                    null;

            }
        );


        collapseESSATwistBoard();


        essaTwistState.combo++;


        await new Promise(
            function(resolve) {

                setTimeout(
                    resolve,
                    150
                );

            }
        );
    }
}


/* =========================================================
   COLLAPSE BOARD
========================================================= */

function collapseESSATwistBoard() {

    const board =
        essaTwistState.board;


    for (
        let column = 0;
        column <
        ESSATWIST_BOARD_SIZE;
        column++
    ) {

        const remaining =
            [];


        for (
            let row =
                ESSATWIST_BOARD_SIZE -
                1;

            row >=
                0;

            row--
        ) {

            const gem =
                board[
                    row
                ][
                    column
                ];


            if (gem) {

                remaining.push(
                    gem
                );
            }
        }


        let index =
            0;


        for (
            let row =
                ESSATWIST_BOARD_SIZE -
                1;

            row >=
                0;

            row--
        ) {

            if (
                index <
                remaining.length
            ) {

                board[
                    row
                ][
                    column
                ] =
                    remaining[
                        index
                    ];


                index++;

            } else {

                board[
                    row
                ][
                    column
                ] =
                    makeRandomESSATwistGem();
            }
        }
    }
}


/* =========================================================
   ESSATWIST XP
========================================================= */

function awardESSATwistXP(
    clearedCount
) {

    const playData =
        getSavedPlayData();


    const xp =
        Math.max(
            1,
            Math.floor(
                clearedCount /
                3
            )
        );


    addTrainerXP(
        playData,
        xp
    );


    savePlayData(
        playData
    );
}


/* =========================================================
   FINISH ESSATWIST
========================================================= */

function finishESSATwistGame() {

    if (
        !essaTwistState
    ) {

        return;
    }


    const score =
        essaTwistState.score;


    document.querySelector(
        "main"
    ).innerHTML = `

        ${makeAppTabs(
            "Play"
        )}


        <div
            style="
                max-width:650px;
                margin:0 auto;
                text-align:center;
            "
        >

            <div
                style="
                    padding:35px;
                    background:white;
                    border:1px solid #dbe5e7;
                    border-radius:26px;
                    box-shadow:0 5px 20px rgba(0,0,0,.08);
                "
            >

                <div
                    style="
                        font-size:65px;
                    "
                >
                    💎
                </div>


                <h1>
                    ESSATwist Complete!
                </h1>


                <p
                    style="
                        font-size:25px;
                        font-weight:bold;
                    "
                >
                    Score:
                    ${score}
                </p>


                <p
                    style="
                        color:#68777b;
                    "
                >
                    Matching ESSAs earned
                    Trainer XP while you played.
                </p>


                <div
                    style="
                        display:flex;
                        gap:10px;
                        justify-content:center;
                        flex-wrap:wrap;
                        margin-top:22px;
                    "
                >

                    <button
                        onclick="
                            restartESSATwist()
                        "
                    >
                        Play Again
                    </button>


                    <button
                        onclick="
                            goToPlayRoom(
                                'arcade'
                            )
                        "
                    >
                        Back to Arcade
                    </button>

                </div>

            </div>

        </div>

    `;
}


/* =========================================================
   RESTART ESSATWIST
========================================================= */

function restartESSATwist() {

    openESSATwist();
}


/* =========================================================
   FINAL CUSTOM ESSA HOUSE INITIALIZATION
========================================================= */

function initializeCustomPlayEssas() {

    const playData =
        getSavedPlayData();


    const houseData =
        getSavedPlayHouseData();


    const customEssas =
        getSavedCustomPlayEssas();


    let changed =
        false;


    customEssas.forEach(
        function(essa) {

            if (
                Number(
                    playData.trainerLevel
                ) <
                CUSTOM_PLAY_ESSA_UNLOCK_LEVEL
            ) {

                return;
            }


            if (
                !playData
                    .unlockedEssaIds
                    .includes(
                        essa.id
                    )
            ) {

                playData
                    .unlockedEssaIds
                    .push(
                        essa.id
                    );


                changed =
                    true;
            }


            getPlayEssaStats(
                playData,
                essa.id
            );


            if (
                !houseData
                    .essaRooms[
                        essa.id
                    ]
            ) {

                houseData
                    .essaRooms[
                        essa.id
                    ] =
                    "playroom";


                changed =
                    true;
            }


            if (
                !houseData
                    .essaPositions[
                        essa.id
                    ]
            ) {

                houseData
                    .essaPositions[
                        essa.id
                    ] = {

                        x:
                            25 +
                            Math.random() *
                            50,

                        y:
                            58 +
                            Math.random() *
                            18

                    };


                changed =
                    true;
            }

        }
    );


    if (changed) {

        savePlayData(
            playData
        );


        savePlayHouseData(
            houseData
        );
    }
}


/* =========================================================
   FINAL PLAY INITIALIZATION
========================================================= */

function initializePlaySystems() {

    installPlayHouseStyles();


    initializeCustomPlayEssas();
}


/* =========================================================
   START APP
========================================================= */

function startESSAzLife() {

    setupHeaderButtons();


    const user =
        getCurrentUser();


    if (user) {

        showHeaderButtons(
            true
        );


        initializePlaySystems();


        renderHome();

    } else {

        showHeaderButtons(
            false
        );


        renderAuthHome();
    }
}


if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        startESSAzLife
    );

} else {

    startESSAzLife();
}
