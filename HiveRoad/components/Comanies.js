

const dict = {};
dict["tel aviv university"] = { code: 1234, Location: "Haim Lebanon 50" }
dict["wework tel aviv"] = { code: 7834, Location: "Yigal Alloמ" }


function findCode(code) {
    const point = dict[code]
    if (point) {
        return (point)
    }
}

export default findCode
