const decodeTheRing = function (s, p) {

    // write your code here

    const m = s.length;
    const n = p.length;

    
    const dp = Array(m + 1).fill(false).map(() => Array(n + 1).fill(false));

    // An empty pattern matches an empty message
    dp[0][0] = true;

    // Handle cases where pattern starts with '*' (it can match an empty sequence)
    for (let j = 1; j <= n; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 1];
        }
    }

    // Fill the DP table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (p[j - 1] === '*') {
                // '*' can match zero or more characters
                dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
            } else if (p[j - 1] === '?' || s[i - 1] === p[j - 1]) {
                // '?' matches any single character or exact character match
                dp[i][j] = dp[i - 1][j - 1];
            }
        }
    }

    return dp[m][n];

  };
  
  module.exports = decodeTheRing;