
class Room {
    constructor(roomData) {
       this.number = roomData.number
       this.roomType = roomData.roomType
       this.hasBidet = roomData.bidet 
       this.bedSize = roomData.bedSize
       this.numOfBeds = roomData.numBeds
       this.nightlyCharge = roomData.costPerNight
    }
    
    filterBidets(AllRoomData) {
        const roomsWithBidets = AllRoomData.filter((room) => room.bidet === true)
        return roomsWithBidets;
    }

    filterByRoom(roomType, AllRoomData) {
        const pickRoomType = AllRoomData.filter((room) => room.roomType === roomType)
        return pickRoomType
    }

    filterByBeds(amountOfBeds, AllRoomData) {
        const pickRoomByBedCount = AllRoomData.filter((room)=> room.numBeds === amountOfBeds)
        return pickRoomByBedCount
    }

}









export default Room;