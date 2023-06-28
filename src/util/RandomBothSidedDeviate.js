function RandomBothSidedDeviate(value, deviation) {
    return value + (Math.random() * deviation * 2) - deviation
}

module.exports = RandomBothSidedDeviate;
