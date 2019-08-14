// 140 likes
// 喜欢的人  [] "no one likes this"
// ["Peter"] "Peter likes this"
// ["Jacob","Alex"] "Jacob and Alex like this"
// ["Max","John","Mark"]"Max,John and Mark like this"
// ["Alex","Jacob","Mark","Max"] "Alex Jacob and 2 others like this"
const likes = names => {
    const templates = [
        'no one likes this',
        '{name} likes this',
        '{name} and {name} like this',
        '{name}, {name} and {name} like this',
        '{name}, {name} and {n} others like this'
    ];
    let idx = Math.min(names.length, 4);
    return templates[idx].replace(/{name}|{n}/g, 
        function(val){
            // console.log(val);
            return val === '{name}' ? names.shift() : names.length;
    })
    // switch(names.length){
    //     case 0: return "no one likes this";
    //     case 1: return names[0] + "likes this";
    //     case 2: return names[0] + "and" + names[1] + "like this";
    //     case 3: return names[0] + "," + names[1] + "and" + names[1] + "like this";
    //     default:return names[0]+names[1]+"and 2 other like this";
    // }


    // 顺序思维  数学思维
    // 4 种可能  likes 的模式
    // phone number 1种模式里的匹配 names[i]

}
console.log(likes(["杨书文", "涂海霞", "韩雨汐", "谢妍", "王君"]));