const moment = require('moment');

// Contains all functions related to moment

class Dates {

    static getCurrentDate(){
        const now = moment();
        return now.format('D');

    }

    static getCurrentMonthNameAbbr(){
        // Format is Jan, Feb, Mar, etc

        const now = moment();
        return now.format('MMM');
    }

    static getCurrentYearIn4Digits(){
        const now = moment();
        return now.format('YYYY');
        
    }




}
module.exports = Dates;