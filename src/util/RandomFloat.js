function RandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

module.exports = RandomFloat;