export const getMonthFromDate = (date) => {
    return date.toString().slice(5, 7)
}
//NOTE - An alternative was using new Date(date).getMonth+1

export const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-CA')
}

export const getMonthName = (month) => {
    console.log(month);

    let monthName = ''

    switch (month) {
        case '1':
            return monthName = 'January'
        case '2':
            return monthName = 'February'
        case '3':
            return monthName = 'March'
        case '4':
            return monthName = 'April'
        case '5':
            return monthName = 'May'
        case '6':
            return monthName = 'June'
        case '7':
            return monthName = 'July'
        case '8':
            return monthName = 'August'
        case '9':
            return monthName = 'September'
        case '10':
            return monthName = 'October'
        case '11':
            return monthName = 'November'
        case '12':
            return monthName = 'December'
        default:
            return monthName;

    }
}
//NOTE - An alternative was using new Date(year,month).toLocaleString("default",{month:"long"})
