import reduceRight from 'lodash/reduceRight';
import isEmpty from 'lodash/isEmpty';
import has from 'lodash/has';

/**
 * Word count Utility
 * @param {string} html
 * @returns {integer} word count
 * @description Takes an HTML string and returns the number of words after sanitizing the html
 * This code is taken from https://github.com/sparksuite/simplemde-markdown-editor/blob/6abda7ab68cc20f4aca870eb243747951b90ab04/src/js/simplemde.js#L1054-L1067
 * with extra diacritics character matching.
 **/
export function wordCount(html) {
    html = html.replace(/<(.|\n)*?>/g, ' '); // strip tags

    const pattern = /[a-zA-ZÀ-ÿ0-9_\u0392-\u03c9\u0410-\u04F9]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af]+/g;
    const match = html.match(pattern);
    let count = 0;
    if (match === null) {
        return count;
    }
    for (var i = 0; i < match.length; i += 1) {
        if (match[i].charCodeAt(0) >= 0x4E00) {
            count += match[i].length;
        } else {
            count += 1;
        }
    }
    return count;
}

/**
 * Image count Utility
 * @param {string} html
 * @returns {integer} image count
 * @description Takes an HTML string and returns the number of images
 **/
export function imageCount(html) {
    return (html.match(/<img(.|\n)*?>/g) || []).length;
}

export function findKey(key /* ...objects... */) {
    let objects = Array.prototype.slice.call(arguments, 1);

    return reduceRight(objects, function (result, object) {
        if (object && has(object, key) && !isEmpty(object[key])) {
            result = object[key];
        }

        return result;
    }, null);
}
