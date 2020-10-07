const box = {
    locked: true,
    unlock() {
        this.locked = false;
    },
    lock() {
        this.locked = true;
    },
    _content: [],
    get content() {
        if (this.locked) throw new Error("Зanepтol");
        return this._content;
    }
};

const withBoxUnlocked = func => {
    box.unlock();
    try {
        func();
        console.log(`After start box locked: ${box.locked}`)
        console.log(`After change box is: \n${box.content.join('\n')}`)
    } catch (e) {
        console.log(e)
        console.log(`After error box locked: ${box.locked}`)
    } finally {
        box.lock()
        console.log(`After lock box locked: ${box.locked}`)
    }
}

const pushDate = () => {
    let date = new Date;
    box.content.push(`Was open at ${String(date)
        .match(/[^ ]+ [^ ]+ [^ ]+ [^ ]+ [^ ]+ /)}`)
}

withBoxUnlocked(pushDate)
setTimeout(()=>withBoxUnlocked(pushDate),2000)
setTimeout(()=>withBoxUnlocked(pushDate),4000)
setTimeout(()=>withBoxUnlocked(pushDate),6000)





