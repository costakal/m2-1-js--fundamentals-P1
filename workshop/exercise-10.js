// Q10
// Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######


for (let pyramid = 0; pyramid < 7; pyramid++) {
    let line = "#"
    for (let i = 1; i <= pyramid; i++) {
        line += '#'
    }
    console.log(line)
}
