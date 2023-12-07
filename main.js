module.exports.templateTags = [{
    name: 'ULID',
    displayName: 'ULID Generator',
    description: 'Generate a ULID',
    args: [],
    run: function (context) {
        var ENCODING = "0123456789ABCDEFGHJKMNPQRSTVWXYZ"; // Crockford's Base32
        var ENCODING_LEN = ENCODING.length;
        var TIME_LEN = 10;
        var RANDOM_LEN = 16;

        function randomChar(prng) {
            var rand = Math.floor(prng() * ENCODING_LEN);
            if (rand === ENCODING_LEN) {
                rand = ENCODING_LEN - 1;
            }
            return ENCODING.charAt(rand);
        }

        function encodeTime(now, len) {
            if (isNaN(now)) {
                throw new Error(now + " must be a number");
            }
            var mod;
            var str = "";
            for (; len > 0; len--) {
                mod = now % ENCODING_LEN;
                str = ENCODING.charAt(mod) + str;
                now = (now - mod) / ENCODING_LEN;
            }
            return str;
        }

        function encodeRandom(len, prng) {
            var str = "";
            for (; len > 0; len--) {
                str = randomChar(prng) + str;
            }
            return str;
        }

        var currPrng = Math.random;
        var seedTime = Date.now();
        var encodedTime = encodeTime(seedTime, TIME_LEN);
        var encodedRandom = encodeRandom(RANDOM_LEN, currPrng);

        return encodedTime + encodedRandom;
    }
}];
