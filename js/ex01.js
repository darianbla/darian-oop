"use strict"

class Robot {
    static nextId = 101
    constructor(type, battery, vendor) {
        this.type = type
        this.battery = battery
        this.vendor = vendor
    }
    introduceSelf() {
        console.log('this.type', this.type)
    }
    meetAnother(otherRobot) { }
    charge() {
        const intervalId = setInterval(() => {
            if (this.battery >= 100) return clearInterval(intervalId)
            this.battery++
            this.printSelf()
        }, 1000)
    }
    printSelf() {
        console.log('this.battery', this.battery)
    }
    discharge() {
        const intervalId = setInterval(() => {
            if (this.battery < 1) return clearInterval(intervalId)
            this.battery--
            this.printSelf()
        }, 1000)
    }
    fightAnother(otherRobot) {
        const winner = (this.battery > otherRobot.battery) ? this : otherRobot
        return winner
    }
    get batteryStatus() {
        return this.battery
    }
    set batteryStatus(level) {
        this.battery = level
    }
    static getMeSomeRobots() { }
}

class TalkingRobot extends Robot {
    constructor(type, battery, vendor, lang) {
        super(type, battery, vendor)
        this.lang = lang
    }
    printSelf() {
        super.printSelf()
        console.log('this.lang', this.lang)
    } 
}

const robot1 = new Robot('metal', 100, 'Apple')
const robot2 = new Robot('plastic', 74, 'Ppo')
robot2.batteryStatus = 100
console.log('robot1.fightAnother()', robot2.batteryStatus)

const robot3 = new TalkingRobot('glass', 115, 'Nvidia', 'Spanish')
console.log('robot3', robot3.printSelf())