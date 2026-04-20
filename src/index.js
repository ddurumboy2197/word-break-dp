function wordBreak(s, wordDict) {
    let n = s.length;
    let dp = new Array(n + 1).fill(false);
    dp[0] = true;

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordDict.includes(s.substring(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[n];
}

let s = "leetcode";
let wordDict = ["leet", "code"];
console.log(wordBreak(s, wordDict)); // true

s = "applepenapple";
wordDict = ["apple", "pen"];
console.log(wordBreak(s, wordDict)); // true

s = "catsandog";
wordDict = ["cats", "dog", "sand", "and", "cat"];
console.log(wordBreak(s, wordDict)); // false
```

Kodda, biz quyidagi funksiyani yozdik: `wordBreak(s, wordDict)`. Uning maqsadi berilgan string `s` va so'zlar lug'ati `wordDict` yordamida stringni to'liq so'zlarga bo'lish mumkinligini tekshiradi.

Funksiya quyidagi usulda ishlaydi:

1. `dp` massivini yaratib, unda har bir element `false` ga teng bo'lishi kerak. `dp[i]` elementi `i` indexdagi stringni to'liq so'zlarga bo'lish mumkinligini ifodalaydi.
2. `dp[0]` elementini `true` ga teng qo'yish, chunki bo'sh stringni to'liq so'zlarga bo'lish mumkin deb hisoblashamiz.
3. `i` indexidan 1 dan boshlab, har bir index uchun `dp[i]` elementini quyidagicha hisoblashamiz:
 * `j` indexidan `i` indexigacha bo'lgan substringni olamiz.
 * Agar `dp[j]` elementi `true` ga teng bo'lsa (ya'ni, substringni to'liq so'zlarga bo'lish mumkin) va substring `wordDict` lug'atida mavjud bo'lsa, `dp[i]` elementini `true` ga teng qo'yamiz.
4. `dp[n]` elementini qaytarganda, biz stringni to'liq so'zlarga bo'lish mumkinligini tekshirganlikni tasdiqlaymiz.

Funksiya `true` qiymatini qaytaradi, agar stringni to'liq so'zlarga bo'lish mumkin bo'lsa, aks holda `false` qiymatini qaytaradi.
