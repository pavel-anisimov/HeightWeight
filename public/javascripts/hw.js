/**
 * Created by pavel on 8/6/14.
 */



var Standard = {
    "Male":   {"17": 20, "21": 22, "28": 24, "40":26},
    "Female": {"17": 30, "21": 32, "28": 34, "40":36}
};

var HW = {
    "Male": {
        "60": {"min": 97,  "17": 132, "21": 136, "28": 139, "40": 141},
        "61": {"min": 100, "17": 136, "21": 140, "28": 144, "40": 146},
        "62": {"min": 104, "17": 141, "21": 144, "28": 148, "40": 150},
        "63": {"min": 107, "17": 145, "21": 149, "28": 153, "40": 155},
        "64": {"min": 110, "17": 150, "21": 154, "28": 158, "40": 160},
        "65": {"min": 114, "17": 155, "21": 159, "28": 163, "40": 165},
        "66": {"min": 117, "17": 160, "21": 163, "28": 168, "40": 170},
        "67": {"min": 121, "17": 165, "21": 169, "28": 174, "40": 176},
        "68": {"min": 125, "17": 170, "21": 174, "28": 179, "40": 181},
        "69": {"min": 128, "17": 175, "21": 179, "28": 184, "40": 186},
        "70": {"min": 132, "17": 180, "21": 185, "28": 189, "40": 192},
        "71": {"min": 136, "17": 185, "21": 189, "28": 194, "40": 197},
        "72": {"min": 140, "17": 190, "21": 195, "28": 200, "40": 203},
        "73": {"min": 144, "17": 195, "21": 200, "28": 206, "40": 208},
        "74": {"min": 148, "17": 201, "21": 206, "28": 212, "40": 214},
        "75": {"min": 152, "17": 206, "21": 212, "28": 217, "40": 220},
        "76": {"min": 156, "17": 212, "21": 217, "28": 223, "40": 226},
        "77": {"min": 160, "17": 218, "21": 223, "28": 229, "40": 232},
        "78": {"min": 164, "17": 223, "21": 229, "28": 235, "40": 238},
        "79": {"min": 168, "17": 229, "21": 235, "28": 238, "40": 244},
        "80": {"min": 173, "17": 234, "21": 240, "28": 247, "40": 250}
    },
    "Female": {
        "58": {"min": 91,  "17": 119, "21": 121, "28": 122, "40": 124},
        "59": {"min": 94,  "17": 124, "21": 125, "28": 126, "40": 128},
        "60": {"min": 97,  "17": 128, "21": 129, "28": 131, "40": 133},
        "61": {"min": 100, "17": 132, "21": 134, "28": 135, "40": 137},
        "62": {"min": 104, "17": 136, "21": 138, "28": 140, "40": 142},
        "63": {"min": 107, "17": 141, "21": 143, "28": 144, "40": 146},
        "64": {"min": 110, "17": 145, "21": 147, "28": 149, "40": 151},
        "65": {"min": 114, "17": 150, "21": 152, "28": 154, "40": 156},
        "66": {"min": 117, "17": 155, "21": 156, "28": 158, "40": 161},
        "67": {"min": 121, "17": 159, "21": 161, "28": 163, "40": 166},
        "68": {"min": 125, "17": 164, "21": 166, "28": 168, "40": 171},
        "69": {"min": 128, "17": 169, "21": 171, "28": 173, "40": 176},
        "70": {"min": 132, "17": 174, "21": 176, "28": 178, "40": 181},
        "71": {"min": 136, "17": 179, "21": 181, "28": 183, "40": 186},
        "72": {"min": 140, "17": 184, "21": 186, "28": 188, "40": 191},
        "73": {"min": 144, "17": 189, "21": 191, "28": 194, "40": 197},
        "74": {"min": 148, "17": 194, "21": 197, "28": 199, "40": 202},
        "75": {"min": 152, "17": 200, "21": 202, "28": 204, "40": 208},
        "76": {"min": 156, "17": 205, "21": 207, "28": 210, "40": 213},
        "77": {"min": 160, "17": 210, "21": 213, "28": 215, "40": 219},
        "78": {"min": 164, "17": 216, "21": 218, "28": 221, "40": 225},
        "79": {"min": 168, "17": 221, "21": 224, "28": 227, "40": 230},
        "80": {"min": 173, "17": 227, "21": 230, "28": 233, "40": 236}
    }
};

var BF = {
    "Male": {
        "13.5": {"60": 9,  "60.5": 9},
        "14":   {"60": 11, "60.5": 11, "61": 10, "61.5": 10, "62": 10, "62.5": 10, "63": 9,  "63.5":  9},
        "14.5": {"60": 12, "60.5": 12, "61": 12, "61.5": 11, "62": 11, "62.5": 11, "63": 11, "63.5": 10, "64": 10, "64.5": 10, "65": 10, "65.5":  9, "66":  9},
        "15":   {"60": 13, "60.5": 13, "61": 13, "61.5": 13, "62": 12, "62.5": 12, "63": 12, "63.5": 12, "64": 11, "64.5": 11, "65": 11, "65.5": 11, "66": 10, "66.5": 10, "67": 10, "67.5": 10, "68": 10, "68.5":  9, "69":  9},
        "15.5": {"60": 15, "60.5": 15, "61": 15, "61.5": 15, "62": 15, "62.5": 13, "63": 13, "63.5": 13, "64": 13, "64.5": 12, "65": 12, "65.5": 12, "66": 12, "66.5": 11, "67": 11, "67.5": 11, "68": 11, "68.5": 11, "69": 10, "69.5": 10, "70": 10, "70.5": 10, "71":  9, "71.5":  9, "72":  9},
        "16":   {"60": 16, "60.5": 16, "61": 15, "61.5": 15, "62": 15, "62.5": 15, "63": 14, "63.5": 14, "64": 14, "64.5": 14, "65": 13, "65.5": 13, "66": 13, "66.5": 13, "67": 12, "67.5": 12, "68": 12, "68.5": 12, "69": 12, "69.5": 11, "70": 11, "70.5": 11, "71": 11, "71.5": 10, "72": 10, "72.5": 10, "73": 10, "73.5": 10, "74":  9, "74.5":  9},
        "16.5": {"60": 17, "60.5": 17, "61": 16, "61.5": 16, "62": 16, "62.5": 16, "63": 15, "63.5": 15, "64": 15, "64.5": 15, "65": 14, "65.5": 14, "66": 14, "66.5": 14, "67": 14, "67.5": 13, "68": 13, "68.5": 13, "69": 13, "69.5": 12, "70": 12, "70.5": 12, "71": 12, "71.5": 12, "72": 11, "72.5": 11, "73": 11, "73.5": 11, "74": 11, "74.5": 10, "75": 10, "75.5": 10, "76": 10, "76.5": 10, "77":  9, "77.5":  9},
        "17":   {"60": 18, "60.5": 18, "61": 18, "61.5": 17, "62": 17, "62.5": 17, "63": 17, "63.5": 16, "64": 16, "64.5": 16, "65": 16, "65.5": 15, "66": 15, "66.5": 15, "67": 15, "67.5": 14, "68": 14, "68.5": 14, "69": 14, "69.5": 14, "70": 13, "70.5": 13, "71": 13, "71.5": 13, "72": 13, "72.5": 12, "73": 12, "73.5": 12, "74": 12, "74.5": 11, "75": 11, "75.5": 11, "76": 11, "76.5": 11, "77": 10, "77.5": 10, "78": 10, "78.5": 10, "79": 10, "79.5": 9 },
        "17.5": {"60": 19, "60.5": 19, "61": 19, "61.5": 18, "62": 18, "62.5": 18, "63": 18, "63.5": 17, "64": 17, "64.5": 17, "65": 17, "65.5": 16, "66": 16, "66.5": 16, "67": 16, "67.5": 16, "68": 15, "68.5": 15, "69": 15, "69.5": 15, "70": 14, "70.5": 14, "71": 14, "71.5": 14, "72": 14, "72.5": 13, "73": 13, "73.5": 13, "74": 13, "74.5": 13, "75": 12, "75.5": 12, "76": 12, "76.5": 12, "77": 12, "77.5": 11, "78": 11, "78.5": 11, "79": 11, "79.5": 11},
        "18":   {"60": 20, "60.5": 20, "61": 20, "61.5": 19, "62": 19, "62.5": 19, "63": 19, "63.5": 18, "64": 18, "64.5": 18, "65": 18, "65.5": 18, "66": 17, "66.5": 17, "67": 17, "67.5": 17, "68": 16, "68.5": 16, "69": 16, "69.5": 16, "70": 15, "70.5": 15, "71": 15, "71.5": 15, "72": 15, "72.5": 14, "73": 14, "73.5": 14, "74": 14, "74.5": 14, "75": 13, "75.5": 13, "76": 13, "76.5": 13, "77": 13, "77.5": 12, "78": 12, "78.5": 12, "79": 12, "79.5": 12},
        "18.5": {"60": 21, "60.5": 21, "61": 21, "61.5": 20, "62": 20, "62.5": 20, "63": 20, "63.5": 19, "64": 19, "64.5": 19, "65": 19, "65.5": 19, "66": 18, "66.5": 18, "67": 18, "67.5": 18, "68": 17, "68.5": 17, "69": 17, "69.5": 17, "70": 17, "70.5": 16, "71": 16, "71.5": 16, "72": 16, "72.5": 15, "73": 15, "73.5": 15, "74": 15, "74.5": 15, "75": 14, "75.5": 14, "76": 14, "76.5": 14, "77": 14, "77.5": 13, "78": 13, "78.5": 13, "79": 13, "79.5": 13},
        "19":   {"60": 22, "60.5": 22, "61": 22, "61.5": 21, "62": 21, "62.5": 21, "63": 21, "63.5": 20, "64": 20, "64.5": 20, "65": 20, "65.5": 20, "66": 19, "66.5": 19, "67": 19, "67.5": 19, "68": 18, "68.5": 18, "69": 18, "69.5": 18, "70": 18, "70.5": 17, "71": 17, "71.5": 17, "72": 17, "72.5": 16, "73": 16, "73.5": 16, "74": 16, "74.5": 16, "75": 15, "75.5": 15, "76": 15, "76.5": 15, "77": 15, "77.5": 14, "78": 14, "78.5": 14, "79": 14, "79.5": 14},
        "19.5": {"60": 23, "60.5": 23, "61": 23, "61.5": 22, "62": 22, "62.5": 22, "63": 22, "63.5": 21, "64": 21, "64.5": 21, "65": 21, "65.5": 21, "66": 20, "66.5": 20, "67": 20, "67.5": 20, "68": 19, "68.5": 19, "69": 19, "69.5": 19, "70": 18, "70.5": 18, "71": 18, "71.5": 18, "72": 18, "72.5": 17, "73": 17, "73.5": 17, "74": 17, "74.5": 17, "75": 16, "75.5": 16, "76": 16, "76.5": 16, "77": 16, "77.5": 15, "78": 15, "78.5": 15, "79": 15, "79.5": 15},
        "20":   {"60": 24, "60.5": 24, "61": 24, "61.5": 23, "62": 23, "62.5": 23, "63": 23, "63.5": 22, "64": 22, "64.5": 22, "65": 22, "65.5": 21, "66": 21, "66.5": 21, "67": 21, "67.5": 21, "68": 20, "68.5": 20, "69": 20, "69.5": 20, "70": 19, "70.5": 19, "71": 19, "71.5": 19, "72": 19, "72.5": 18, "73": 18, "73.5": 18, "74": 18, "74.5": 18, "75": 17, "75.5": 17, "76": 17, "76.5": 17, "77": 17, "77.5": 16, "78": 16, "78.5": 16, "79": 16, "79.5": 16},
        "20.5": {"60": 25, "60.5": 25, "61": 25, "61.5": 24, "62": 24, "62.5": 24, "63": 24, "63.5": 23, "64": 23, "64.5": 23, "65": 23, "65.5": 22, "66": 22, "66.5": 22, "67": 22, "67.5": 21, "68": 21, "68.5": 21, "69": 21, "69.5": 21, "70": 20, "70.5": 20, "71": 20, "71.5": 20, "72": 19, "72.5": 19, "73": 19, "73.5": 19, "74": 19, "74.5": 18, "75": 18, "75.5": 18, "76": 18, "76.5": 18, "77": 17, "77.5": 17, "78": 17, "78.5": 17, "79": 17, "79.5": 16},
        "21":   {"60": 26, "60.5": 26, "61": 26, "61.5": 25, "62": 25, "62.5": 25, "63": 25, "63.5": 24, "64": 24, "64.5": 24, "65": 24, "65.5": 23, "66": 23, "66.5": 23, "67": 23, "67.5": 22, "68": 22, "68.5": 22, "69": 22, "69.5": 21, "70": 21, "70.5": 21, "71": 21, "71.5": 21, "72": 20, "72.5": 20, "73": 20, "73.5": 20, "74": 20, "74.5": 19, "75": 19, "75.5": 19, "76": 19, "76.5": 19, "77": 18, "77.5": 18, "78": 18, "78.5": 18, "79": 18, "79.5": 17},
        "21.5": {"60": 27, "60.5": 27, "61": 27, "61.5": 26, "62": 26, "62.5": 26, "63": 26, "63.5": 25, "64": 25, "64.5": 25, "65": 24, "65.5": 24, "66": 24, "66.5": 24, "67": 23, "67.5": 23, "68": 23, "68.5": 23, "69": 23, "69.5": 22, "70": 22, "70.5": 22, "71": 22, "71.5": 21, "72": 21, "72.5": 21, "73": 21, "73.5": 21, "74": 20, "74.5": 20, "75": 20, "75.5": 20, "76": 20, "76.5": 19, "77": 19, "77.5": 19, "78": 19, "78.5": 19, "79": 18, "79.5": 18},
        "22":   {"60": 28, "60.5": 27, "61": 27, "61.5": 27, "62": 27, "62.5": 26, "63": 26, "63.5": 26, "64": 26, "64.5": 25, "65": 25, "65.5": 25, "66": 25, "66.5": 25, "67": 24, "67.5": 24, "68": 24, "68.5": 24, "69": 23, "69.5": 23, "70": 23, "70.5": 23, "71": 23, "71.5": 22, "72": 22, "72.5": 22, "73": 22, "73.5": 22, "74": 21, "74.5": 21, "75": 21, "75.5": 21, "76": 20, "76.5": 20, "77": 20, "77.5": 20, "78": 20, "78.5": 20, "79": 19, "79.5": 19},
        "22.5": {"60": 29, "60.5": 28, "61": 28, "61.5": 28, "62": 28, "62.5": 27, "63": 27, "63.5": 27, "64": 27, "64.5": 26, "65": 26, "65.5": 26, "66": 26, "66.5": 25, "67": 25, "67.5": 25, "68": 25, "68.5": 24, "69": 24, "69.5": 24, "70": 24, "70.5": 24, "71": 23, "71.5": 23, "72": 23, "72.5": 23, "73": 23, "73.5": 22, "74": 22, "74.5": 22, "75": 21, "75.5": 21, "76": 20, "76.5": 20, "77": 20, "77.5": 20, "78": 20, "78.5": 20, "79": 19, "79.5": 19},
        "23":   {"60": 29, "60.5": 29, "61": 29, "61.5": 29, "62": 28, "62.5": 28, "63": 28, "63.5": 28, "64": 27, "64.5": 27, "65": 27, "65.5": 27, "66": 26, "66.5": 26, "67": 26, "67.5": 26, "68": 26, "68.5": 25, "69": 25, "69.5": 25, "70": 25, "70.5": 24, "71": 24, "71.5": 24, "72": 24, "72.5": 24, "73": 23, "73.5": 23, "74": 23, "74.5": 23, "75": 23, "75.5": 22, "76": 22, "76.5": 22, "77": 22, "77.5": 22, "78": 21, "78.5": 21, "79": 21, "79.5": 21},
        "23.5": {"60": 30, "60.5": 30, "61": 30, "61.5": 29, "62": 29, "62.5": 29, "63": 29, "63.5": 28, "64": 28, "64.5": 28, "65": 28, "65.5": 27, "66": 27, "66.5": 27, "67": 27, "67.5": 27, "68": 26, "68.5": 26, "69": 26, "69.5": 26, "70": 25, "70.5": 25, "71": 25, "71.5": 25, "72": 25, "72.5": 24, "73": 24, "73.5": 24, "74": 24, "74.5": 24, "75": 23, "75.5": 23, "76": 23, "76.5": 23, "77": 23, "77.5": 22, "78": 22, "78.5": 22, "79": 22, "79.5": 22},
        "24":   {"60": 31, "60.5": 31, "61": 30, "61.5": 30, "62": 30, "62.5": 30, "63": 29, "63.5": 29, "64": 29, "64.5": 29, "65": 28, "65.5": 28, "66": 28, "66.5": 28, "67": 28, "67.5": 27, "68": 27, "68.5": 27, "69": 27, "69.5": 26, "70": 26, "70.5": 26, "71": 26, "71.5": 26, "72": 25, "72.5": 25, "73": 25, "73.5": 25, "74": 25, "74.5": 24, "75": 24, "75.5": 24, "76": 24, "76.5": 24, "77": 23, "77.5": 23, "78": 23, "78.5": 23, "79": 23, "79.5": 22},
        "24.5": {"60": 32, "60.5": 31, "61": 31, "61.5": 31, "62": 30, "62.5": 30, "63": 30, "63.5": 30, "64": 30, "64.5": 29, "65": 29, "65.5": 29, "66": 29, "66.5": 29, "67": 28, "67.5": 28, "68": 28, "68.5": 28, "69": 27, "69.5": 27, "70": 27, "70.5": 27, "71": 27, "71.5": 26, "72": 26, "72.5": 26, "73": 26, "73.5": 26, "74": 25, "74.5": 25, "75": 25, "75.5": 25, "76": 25, "76.5": 24, "77": 24, "77.5": 24, "78": 24, "78.5": 24, "79": 23, "79.5": 23},
        "25":   {"60": 32, "60.5": 32, "61": 32, "61.5": 32, "62": 31, "62.5": 31, "63": 31, "63.5": 31, "64": 30, "64.5": 30, "65": 30, "65.5": 30, "66": 30, "66.5": 29, "67": 29, "67.5": 29, "68": 29, "68.5": 28, "69": 28, "69.5": 28, "70": 28, "70.5": 28, "71": 27, "71.5": 27, "72": 27, "72.5": 27, "73": 26, "73.5": 26, "74": 26, "74.5": 26, "75": 26, "75.5": 25, "76": 25, "76.5": 25, "77": 25, "77.5": 25, "78": 24, "78.5": 24, "79": 24, "79.5": 24},
        "25.5": {"60": 33, "60.5": 33, "61": 33, "61.5": 32, "62": 32, "62.5": 32, "63": 32, "63.5": 31, "64": 31, "64.5": 31, "65": 31, "65.5": 31, "66": 30, "66.5": 30, "67": 30, "67.5": 30, "68": 29, "68.5": 29, "69": 29, "69.5": 29, "70": 29, "70.5": 28, "71": 28, "71.5": 28, "72": 28, "72.5": 27, "73": 27, "73.5": 27, "74": 27, "74.5": 27, "75": 26, "75.5": 26, "76": 26, "76.5": 26, "77": 26, "77.5": 25, "78": 25, "78.5": 25, "79": 25, "79.5": 25},
        "26":   {"60": 34, "60.5": 34, "61": 33, "61.5": 33, "62": 33, "62.5": 33, "63": 32, "63.5": 32, "64": 32, "64.5": 32, "65": 31, "65.5": 31, "66": 31, "66.5": 31, "67": 31, "67.5": 30, "68": 30, "68.5": 30, "69": 30, "69.5": 29, "70": 29, "70.5": 29, "71": 29, "71.5": 29, "72": 28, "72.5": 28, "73": 28, "73.5": 28, "74": 28, "74.5": 27, "75": 27, "75.5": 27, "76": 27, "76.5": 27, "77": 26, "77.5": 26, "78": 26, "78.5": 26, "79": 26, "79.5": 25},
        "26.5": {"60": 35, "60.5": 34, "61": 34, "61.5": 34, "62": 34, "62.5": 33, "63": 33, "63.5": 33, "64": 33, "64.5": 32, "65": 32, "65.5": 32, "66": 32, "66.5": 32, "67": 31, "67.5": 31, "68": 31, "68.5": 31, "69": 30, "69.5": 30, "70": 30, "70.5": 30, "71": 30, "71.5": 29, "72": 29, "72.5": 29, "73": 29, "73.5": 28, "74": 28, "74.5": 28, "75": 28, "75.5": 28, "76": 27, "76.5": 27, "77": 27, "77.5": 27, "78": 27, "78.5": 26, "79": 26, "79.5": 26},
        "27":   {"60": 35, "60.5": 35, "61": 35, "61.5": 35, "62": 34, "62.5": 34, "63": 34, "63.5": 34, "64": 33, "64.5": 33, "65": 33, "65.5": 33, "66": 32, "66.5": 32, "67": 32, "67.5": 32, "68": 32, "68.5": 31, "69": 31, "69.5": 31, "70": 31, "70.5": 30, "71": 30, "71.5": 30, "72": 30, "72.5": 30, "73": 29, "73.5": 29, "74": 29, "74.5": 29, "75": 29, "75.5": 28, "76": 28, "76.5": 28, "77": 28, "77.5": 28, "78": 27, "78.5": 27, "79": 27, "79.5": 27},
        "27.5": {"60": 36, "60.5": 36, "61": 36, "61.5": 35, "62": 35, "62.5": 35, "63": 35, "63.5": 34, "64": 34, "64.5": 34, "65": 34, "65.5": 33, "66": 33, "66.5": 33, "67": 33, "67.5": 32, "68": 32, "68.5": 32, "69": 32, "69.5": 32, "70": 31, "70.5": 31, "71": 31, "71.5": 31, "72": 30, "72.5": 30, "73": 30, "73.5": 30, "74": 30, "74.5": 29, "75": 29, "75.5": 29, "76": 29, "76.5": 29, "77": 28, "77.5": 28, "78": 28, "78.5": 28, "79": 28, "79.5": 27},
        "28":   {"60": 37, "60.5": 36, "61": 36, "61.5": 36, "62": 36, "62.5": 35, "63": 35, "63.5": 35, "64": 35, "64.5": 34, "65": 34, "65.5": 34, "66": 34, "66.5": 34, "67": 33, "67.5": 33, "68": 33, "68.5": 33, "69": 32, "69.5": 32, "70": 32, "70.5": 32, "71": 32, "71.5": 31, "72": 31, "72.5": 31, "73": 31, "73.5": 31, "74": 30, "74.5": 30, "75": 30, "75.5": 30, "76": 29, "76.5": 29, "77": 29, "77.5": 29, "78": 29, "78.5": 29, "79": 28, "79.5": 28},

        "28.5": {                      "61": 36, "61.5": 36, "62": 36, "62.5": 35, "63": 35, "63.5": 35, "64": 35, "64.5": 34, "65": 34, "65.5": 34, "66": 34, "66.5": 34, "67": 33, "67.5": 33, "68": 33, "68.5": 33, "69": 32, "69.5": 32, "70": 32, "70.5": 32, "71": 32, "71.5": 31, "72": 31, "72.5": 31, "73": 31, "73.5": 31, "74": 30, "74.5": 30, "75": 30, "75.5": 30, "76": 29, "76.5": 29, "77": 29, "77.5": 29, "78": 29, "78.5": 29, "79": 28, "79.5": 28},
        "29":   {                                            "62": 36, "62.5": 35, "63": 35, "63.5": 35, "64": 35, "64.5": 34, "65": 34, "65.5": 34, "66": 34, "66.5": 34, "67": 33, "67.5": 33, "68": 33, "68.5": 33, "69": 32, "69.5": 32, "70": 32, "70.5": 32, "71": 32, "71.5": 31, "72": 31, "72.5": 31, "73": 31, "73.5": 31, "74": 30, "74.5": 30, "75": 30, "75.5": 30, "76": 29, "76.5": 29, "77": 29, "77.5": 29, "78": 29, "78.5": 29, "79": 28, "79.5": 28},
        "29.5": {                                                                            "63.5": 35, "64": 35, "64.5": 34, "65": 34, "65.5": 34, "66": 34, "66.5": 34, "67": 33, "67.5": 33, "68": 33, "68.5": 33, "69": 32, "69.5": 32, "70": 32, "70.5": 32, "71": 32, "71.5": 31, "72": 31, "72.5": 31, "73": 31, "73.5": 31, "74": 30, "74.5": 30, "75": 30, "75.5": 30, "76": 29, "76.5": 29, "77": 29, "77.5": 29, "78": 29, "78.5": 29, "79": 28, "79.5": 28},
        "30":   {                                                                                                              "65": 34, "65.5": 34, "66": 34, "66.5": 34, "67": 33, "67.5": 33, "68": 33, "68.5": 33, "69": 32, "69.5": 32, "70": 32, "70.5": 32, "71": 32, "71.5": 31, "72": 31, "72.5": 31, "73": 31, "73.5": 31, "74": 30, "74.5": 30, "75": 30, "75.5": 30, "76": 29, "76.5": 29, "77": 29, "77.5": 29, "78": 29, "78.5": 29, "79": 28, "79.5": 28},
        "30.5": {                                                                                                                                    "66": 34, "66.5": 34, "67": 33, "67.5": 33, "68": 33, "68.5": 33, "69": 32, "69.5": 32, "70": 32, "70.5": 32, "71": 32, "71.5": 31, "72": 31, "72.5": 31, "73": 31, "73.5": 31, "74": 30, "74.5": 30, "75": 30, "75.5": 30, "76": 29, "76.5": 29, "77": 29, "77.5": 29, "78": 29, "78.5": 29, "79": 28, "79.5": 28},
        "31":   {                                                                                                                                                                    "67.5": 33, "68": 33, "68.5": 33, "69": 32, "69.5": 32, "70": 32, "70.5": 32, "71": 32, "71.5": 31, "72": 31, "72.5": 31, "73": 31, "73.5": 31, "74": 30, "74.5": 30, "75": 30, "75.5": 30, "76": 29, "76.5": 29, "77": 29, "77.5": 29, "78": 29, "78.5": 29, "79": 28, "79.5": 28},

        "31.5": {                                                                                                                                                                                                      "69": 37, "69.5": 37, "70": 36, "70.5": 36, "71": 36, "71.5": 36, "72": 36, "72.5": 35, "73": 35, "73.5": 35, "74": 35, "74.5": 35, "75": 34, "75.5": 34, "76": 34, "76.5": 34, "77": 33, "77.5": 33, "78": 33, "78.5": 33, "79": 33, "79.5": 33},
        "32":   {                                                                                                                                                                                                                            "70": 37, "70.5": 37, "71": 37, "71.5": 36, "72": 36, "72.5": 36, "73": 36, "73.5": 36, "74": 35, "74.5": 35, "75": 35, "75.5": 35, "76": 34, "76.5": 34, "77": 34, "77.5": 34, "78": 34, "78.5": 33, "79": 33, "79.5": 33},
        "32.5": {                                                                                                                                                                                                                                                            "71.5": 37, "72": 37, "72.5": 36, "73": 36, "73.5": 36, "74": 36, "74.5": 36, "75": 35, "75.5": 35, "76": 35, "76.5": 35, "77": 35, "77.5": 34, "78": 34, "78.5": 34, "79": 34, "79.5": 34},
        "33":   {                                                                                                                                                                                                                                                                                              "73": 37, "73.5": 37, "74": 36, "74.5": 36, "75": 36, "75.5": 36, "76": 36, "76.5": 35, "77": 35, "77.5": 35, "78": 35, "78.5": 35, "79": 34, "79.5": 34},
        "33.5": {                                                                                                                                                                                                                                                                                                                              "74.5": 37, "75": 37, "75.5": 36, "76": 36, "76.5": 36, "77": 36, "77.5": 36, "78": 35, "78.5": 35, "79": 35, "79.5": 35},
        "34":   {                                                                                                                                                                                                                                                                                                                                                    "75.5": 37, "76": 37, "76.5": 37, "77": 36, "77.5": 36, "78": 36, "78.5": 36, "79": 36, "79.5": 35},
        "34.5": {                                                                                                                                                                                                                                                                                                                                                                                      "77": 37, "77.5": 37, "78": 37, "78.5": 36, "79": 36, "79.5": 36},
        "35":   {                                                                                                                                                                                                                                                                                                                                                                                                                      "78.5": 37, "79": 37, "79.5": 36}
    },
    "Female": {}

};




$(function() {
    "use strict";

    var message = '', hwDataFlag = false,
        colorMsg    = 'passGreen',
        $firstName  = $('#firstName'),
        $mi         = $('#middleInitial'),
        $lastName   = $('#lastName'),
        $names      = $('.names'),
        $measures   = $('.measures'),
        $rank       = $('#rank'),
        $height     = $('#height'),
        $weight     = $('#weight'),
        $hipsBlock  = $('#hipsBlock'),
        $age        = $('#age'),
        $gender     = $('#gender'),
        $bfPassFail = $('#bfPassFail'),
        $hwPassFail = $('#hwPassFail'),
        $tape       = $('#taperesult'),
        $bfBlock    = $('.bfBlock'),
        $neck1      = $(".neck[data-measure='1']"),
        $neck2      = $(".neck[data-measure='2']"),
        $neck3      = $(".neck[data-measure='3']"),
        $waist1     = $(".waist[data-measure='1']"),
        $waist2     = $(".waist[data-measure='2']"),
        $waist3     = $(".waist[data-measure='3']"),
        $hips1      = $(".hips[data-measure='1']"),
        $hips2      = $(".hips[data-measure='2']"),
        $hips3      = $(".hips[data-measure='3']"),
        height, weight, age, gender, rank, name, neckAGV, waistAVG, hipsAVG, circumference, bodyFat;

    /**
     * Check if name is a name
     * @param str
     * @returns {boolean}
     */
    function nameOk(str) {
        return /^[a-zA-Z0-9]*[a-zA-Z]+[a-zA-Z0-9]*$/.test(str);
    }

    function updateMessage(color, obj, msg) {
        $('#'+obj).removeClass('passGreen failRed').addClass(color).text(msg);
    }

    /**
     * Capitalizing first letter of the String
     * @param val
     * @returns {string}
     */
    function capitaliseFirstLetter(val)
    {
        return val.charAt(0).toUpperCase() + val.slice(1);
    }

    /**
     * Toggle the error flag on the input box
     * @param $obj
     * @param params
     */
    function errorToggle($obj, params) {

        if(params.condition){
            $obj.addClass('err');
        } else {
            $obj.removeClass('err').val(
                capitaliseFirstLetter(('' + params.val).trim())
            );
        }
        console.log(params, 'test');
    }

    /**
     * Transform age for better lookup through the json string
     * @param age
     * @returns {string}
     * @constructor
     */
    function AgeTransfer(age) {
        age = parseInt(age, 10);

        if (age < 17)
            return "error";
        else if (age >=17 && age < 21)
            return "17";
        else if (age >= 21 && age < 28)
            return "21";
        else if (age >=28 && age < 40)
            return "28";
        else if (age > 40)
            return "40";
        else
            return "error";
    }

    /**
     * Round down to the nearest point
     * @param val
     * @returns {Number}
     * @constructor
     */
    function RoundDown(val){
        return parseFloat( (Math.floor(parseFloat(val) * 2) / 2).toFixed(1) );
    }

    $names.on('change', function(){
        var $this = $(this),
            val   = $this.val();
        errorToggle($this, {
            condition:!nameOk(val),
            val:val
        });
    });

    //only numeric data can be entered for numeric blocks
    $measures.on('keypress', function(evt){
        if(evt.charCode < 48 || evt.charCode > 57) {
            evt.preventDefault();
        }
    });

    $measures.on('change', function(){
        var $this = $(this),
            val   = parseInt($this.val(), 10);

        errorToggle($this, {
            condition: (isNaN(val) || val < 1) ,
            val: val
        });
    });

    $("#submit").on('click', function(){

        name   = $lastName.val() + ', ' + $firstName.val() + ' ' + $mi.val() + '.';
        rank   = $rank.val();
        height = $height.val();
        age    = $age.val(); console.log(age);
        gender = $gender.val();
        weight = $weight.val();

        (function(){
            console.log('test the chain function: ', 1);
        })();



        if (HW[gender][height][AgeTransfer(age)] < parseInt(weight, 10) ) {
            colorMsg = 'failRed';
            message = rank + " " + name + " does not meet the standard and needs to be taped";
            $bfBlock.fadeIn('slow', function(){
                if(gender === 'Male') {
                    $hipsBlock.hide();
                } else {
                    $hipsBlock.show();
                }

                $('html, body').animate({
                    scrollTop: ($hwPassFail.offset().top)
                },500);
            });
        } else {
            colorMsg = 'passGreen';
            message = rank + ' ' + name + ' meets height and weight standards and does not require to be taped.';
            $bfBlock.fadeOut('slow');
        }

        updateMessage(colorMsg, 'hwPassFail', message);
    });



    $("#tape").on('click', function(){
        var bfStandard = Standard[gender][AgeTransfer(age)],
            bfMessage  = '';

        neckAGV  = (RoundDown($neck1.val())  + RoundDown($neck2.val())  + RoundDown($neck3.val()) ) / 3; // console.log("neckAGV: ", neckAGV);
        waistAVG = (RoundDown($waist1.val()) + RoundDown($waist2.val()) + RoundDown($waist3.val())) / 3; // console.log("waistAVG: ", waistAVG);
        hipsAVG  = (RoundDown($hips1.val())  + RoundDown($hips2.val())  + RoundDown($hips3.val()) ) / 3;

        circumference = (RoundDown(waistAVG) - RoundDown(neckAGV)) + '';

        //console.log(height, BF[gender][circumference]);
        //console.log(gender, BF[gender][circumference][height]);
        bodyFat = BF[gender][circumference][height];

        console.log('Body Fat: ', bodyFat);
        console.log('Current Standard: ', bfStandard);

        if(bodyFat <= bfStandard) {
            message = rank + ' ' + name + ' meets the army body fat standards.';
            colorMsg = 'passGreen';
        }
        else {
            message = rank + ' ' + name + ' does not meets the army body fat standards. '
            + (gender === 'Male' ? 'His' : 'Her') + ' body fat level is above the standard by '
            + (bodyFat - bfStandard) + '%.' ;
            colorMsg = 'failRed';
        }

        updateMessage(colorMsg, 'bfPassFail', message);

    });

});