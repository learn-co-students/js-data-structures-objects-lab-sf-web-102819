// Write your solution in this file!
let driver = new Object()

function updateDriverWithKeyAndValue(driverObject, key, value) {
    return Object.assign({[key]: value}, driverObject)
}

function destructivelyUpdateDriverWithKeyAndValue(driverObject, key, value) {
     driverObject[key] = value
     return driverObject
}

function deleteFromDriverByKey(driverObject, key) {
    let bob = Object.assign({}, driverObject)
    delete bob[key]
    return bob
}

function destructivelyDeleteFromDriverByKey(driverObject, key) {
    delete driverObject[key]
    return driverObject
}

