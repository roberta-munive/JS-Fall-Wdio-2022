const moment = require('moment');

// Contains all functions related to moment

class Dates {

    getCurrentDate(){
        const now = moment();
        return now.format('D');

    }

    getCurrentMonthNameAbbr(){
        // Format is Jan, Feb, Mar, etc

        const now = moment();
        return now.format('MMM');
    }

    getCurrentYearIn4Digits(){
        const now = moment();
        return now.format('YYYY');
        
    }




}
module.exports = Dates;