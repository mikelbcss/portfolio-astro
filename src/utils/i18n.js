import es from '../i18n/es.json'
import en from '../i18n/en.json'
/**
 * Clase que contiene los métodos para las tradcciones
 *
 * @export
 * @class i18n
 */
export default class i18n
{
    static t(key, locale, properties){
        const translator = {
            es,
            en,
            default: {}
        }
        let translation = translator[locale][key]
        if(properties){
            properties.forEach((property, index) => {
                translation = translation.replace(`{${index}}`, property)
            })
        }
        return translation
    }
}