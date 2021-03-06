/**
 * @copyright
 * The MIT License (MIT)
 *
 * Copyright (c) 2014 Cosmic Dynamo LLC
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * @module $<class>$
 */
define([
    "blocks/parser/hasChar",
    "blocks/parser/required",
    "blocks/parser/range",
    "blocks/parser/hex"
], function (hasChar, required, range, hex) {
    /**
     * [171] PERCENT      ::=    '%' HEX HEX
     * @see http://www.w3.org/TR/sparql11-query/#rPERCENT
     * @property {jazzHands.parser.Data} data
     * @return {String | Null}
     */
    function percent(input) {
        //[170s]	PERCENT	::=	'%' HEX HEX
        if (hasChar(input, "%")) {
            return "%" + required(range(input, 2, 2, hex), "% requires 2 Hex digits").join("");
        }
        return null;
    }

    return percent;
});