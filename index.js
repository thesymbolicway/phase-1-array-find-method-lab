// The function should receive 1 argument, an Array of JavaScript Objects
function superbowlWin(record)
// Each object has two properties: year and result
// It should use find() to test each Object to see if the result is "W" — a win!
{let result = record.find(record => record.result === "W")
// It should return the year when the win occurred (if it occurred at all!)
if(result){return result.year;}
// If no win is found, it should return, sadly, undefined
else {return undefined }
}