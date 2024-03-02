/**
 * Clase que contiene utilidades sobre el objeto fecha comunes
 *
 * @export
 * @class DateUtils
 */
export default class DateUtils
{
    static getMonthsByLocale(month, locale, type = 'long'){
        const months = {
            long: {
                es: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
                en: ['January', 'February', 'March', 'April', 'May', 'June', 'Julio', 'August', 'September', 'October', 'November', 'December'],
            },
            short: {
                es: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Agos', 'Sept', 'Oct', 'Nov', 'Dic'],
                en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dec'],
            },
        }
        return months[type][locale][month]
    }

    static getCorrectDate(date, locale){
        const month = this.getMonthsByLocale(date.getMonth(), locale)
        return `${month} ${date.getFullYear()}`
    }
}