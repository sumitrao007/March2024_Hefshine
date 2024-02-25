// Json Object 
// key & value format 
var jsonObj = {
    id: 9,
    "fname": 'Sumit',
    lname: "Raokhande"
};
// 1 dot operator 
// 2 square operator 
// console.log(`
//     Id          :: ${jsonObj.id}
//     First name  :: ${jsonObj.fname}
//     Last name   :: ${jsonObj.lname}
// `);
// console.log(`
//     Id          :: ${jsonObj["id"]}
//     First name  :: ${jsonObj["fname"]}
//     Last name   :: ${jsonObj["lname"]}
// `);
// Array of Object 
var arrObj = [
    {
        id: 9,
        "fname": 'Sumit',
        lname: "Raokhande",
        country: {
            cid: 1,
            cname: 'India'
        },
        month: ["Jan", "May", "Dec"],
        result: [
            {
                subj: 'M1',
                marks: 40
            },
            {
                subj: 'M2',
                marks: 45
            },
            {
                subj: 'M3',
                marks: 55
            }
        ]
    },
    {
        id: 6,
        "fname": 'Kiran',
        lname: "Raokhande",
        country: {
            cid: 1,
            cname: 'US'
        },
        month: ["Jan", "May", "Dec"],
        result: [
            {
                subj: 'M1',
                marks: 55
            },
            {
                subj: 'M2',
                marks: 65
            },
            {
                subj: 'M3',
                marks: 35
            }
        ]
    },
    {
        id: 3,
        "fname": 'Spruha',
        lname: "Raokhande",
        country: {
            cid: 1,
            cname: 'Japan'
        },
        month: ["Jan", "May", "Dec"],
        result: [
            {
                subj: 'M1',
                marks: 56
            },
            {
                subj: 'M2',
                marks: 60
            },
            {
                subj: 'M3',
                marks: 80
            }
        ]
    }
];
for (var i = 0; i < arrObj.length; i++) {
    console.log("\n    Id          :: ".concat(arrObj[i].id, "\n    First name  :: ").concat(arrObj[i].fname, "\n    Last name   :: ").concat(arrObj[i].lname, "\n    Country     :: ").concat(arrObj[i].country.cname, "\n    Month       :: ").concat(arrObj[i].month.join(" "), "\n    ----------- Result---------------------\n\n    "));
    for (var j = 0; j < arrObj[i].result.length; j++) {
        console.log("\n                Subject :: ".concat(arrObj[i].result[j].subj, "\n                Marks   :: ").concat(arrObj[i].result[j].marks, "\n        "));
    }
}
