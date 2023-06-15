class Memory {

  constructor(version, verses = []) {
    this.verses = verses;
    this.version = version;
  }

  addVerse(book, chapter, number, text) {
    this.verses.push({text: text, chapter: chapter, number: number, book: book});
  }

  getPassage(book, startVerse, endVerse) {
    let resonce = fetch("https://www.biblegateway.com/passage/?search=" + book + " " + startVerse + "-" + endVerse + "&version=" + this.version);
    // async
    // promises
    // node-html-parser
    // cheerio

  }

}