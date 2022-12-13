const alphabetPosition = text => {
    const a = "abcdefghijklmnopqrstuvwxyz";
    return text.toLowerCase().replace(/[^a-z]/gi,'').split('').map(c => a.search(c) + 1).join(' ');
}